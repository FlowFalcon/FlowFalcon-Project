/*  
  Creator Script : XBotzLauncher,  
  Name Script : Instagram Downloader Support 8K, Not Supported Instagram Slide/Foto,  
  Sumber : https://whatsapp.com/channel/0029Vay9UUE7T8bUHDMZCo1I,  
*/  
  
const axios = require("axios");  
const crypto = require("crypto");  
  
const instaDownloader = {  
  api: {  
    base: "https://media.savetube.me/api",  
    cdn: "/random-cdn",  
    info: "/v2/info",  
    download: "/download"  
  },  
  headers: {  
    'accept': '*/*',  
    'content-type': 'application/json',  
    'origin': 'https://insta.savetube.me',  
    'referer': 'https://insta.savetube.me/',  
    'user-agent': 'Postify/1.0.0'  
  },  
    
  crypto: {  
    hexToBuffer: (hexString) => Buffer.from(hexString, 'hex'),  
      
    decrypt: async (enc) => {  
      try {  
        const secretKey = 'C5D58EF67A7584E4A29F6C35BBC4EB12';  
        const data = Buffer.from(enc, 'base64');  
        const iv = data.slice(0, 16);  
        const content = data.slice(16);  
        const key = instaDownloader.crypto.hexToBuffer(secretKey);  
          
        const decipher = crypto.createDecipheriv('aes-128-cbc', key, iv);  
        let decrypted = Buffer.concat([decipher.update(content), decipher.final()]);  
          
        return JSON.parse(decrypted.toString());  
      } catch (error) {  
        console.error("Decryption error:", error.message);  
        throw new Error("Gagal mendekripsi data.");  
      }  
    }  
  },  
  
  isInstagramUrl: (url) => {  
    return /(?:https?:\/\/)?(?:www\.)?instagram\.com\/(p|reel|tv)\/([a-zA-Z0-9_-]+)/.test(url);  
  },  
  
  extractId: (url) => {  
    const match = url.match(/(?:https?:\/\/)?(?:www\.)?instagram\.com\/(p|reel|tv)\/([a-zA-Z0-9_-]+)/);  
    return match ? match[2] : null;  
  },  
  
  request: async (endpoint, data = {}, method = 'post') => {  
    try {  
      const { data: response } = await axios({  
        method,  
        url: `${endpoint.startsWith('http') ? '' : instaDownloader.api.base}${endpoint}`,  
        data: method === 'post' ? data : undefined,  
        params: method === 'get' ? data : undefined,  
        headers: instaDownloader.headers  
      });  
      return {  
        status: true,  
        code: 200,  
        data: response  
      };  
    } catch (error) {  
      return {  
        status: false,  
        code: error.response?.status || 500,  
        error: error.response?.data || error.message  
      };  
    }  
  },  
  
  getCDN: async () => {  
    const response = await instaDownloader.request(instaDownloader.api.cdn, {}, 'get');  
    if (!response.status || !response.data?.cdn) {  
      return {  
        status: false,  
        code: response.code,  
        error: "Gagal mendapatkan CDN."  
      };  
    }  
    return {  
      status: true,  
      code: 200,  
      data: response.data.cdn  
    };  
  },  
  
  formatAudio: ["128"],  
  formatVideo: ["360", "480", "720", "1080", "4k"],  
  
  download: async (link, format) => {  
    if (!link) {  
      return {  
        status: false,  
        code: 400,  
        error: "Masukkan link Instagram."  
      };  
    }  
  
    if (!instaDownloader.isInstagramUrl(link)) {  
      return {  
        status: false,  
        code: 400,  
        error: "Itu bukan link Instagram yang valid."  
      };  
    }  
  
    const id = instaDownloader.extractId(link);  
    if (!id) {  
      return {  
        status: false,  
        code: 400,  
        error: "Gagal mendapatkan ID dari link Instagram."  
      };  
    }  
  
    const allFormats = [...instaDownloader.formatVideo, ...instaDownloader.formatAudio];  
    if (!format || !allFormats.includes(format)) {  
      return {  
        status: false,  
        code: 400,  
        error: "Format tidak valid. Pilih dari daftar di bawah.",  
        available_fmt: allFormats  
      };  
    }  
  
    try {  
      const cdnx = await instaDownloader.getCDN();  
      if (!cdnx.status) return cdnx;  
      const cdn = cdnx.data;  
  
      const result = await instaDownloader.request(`https://${cdn}${instaDownloader.api.info}`, { url: link });  
      if (!result.status) return result;  
        
      const decrypted = await instaDownloader.crypto.decrypt(result.data.data);  
  
      const dlVid = await instaDownloader.request(`https://${cdn}${instaDownloader.api.download}`, {  
        id: id,  
        downloadType: "video",  
        quality: format,  
        key: decrypted.key  
      });  
      const dlAud = await instaDownloader.request(`https://${cdn}${instaDownloader.api.download}`, {  
        id: id,  
        downloadType: "audio",  
        quality: "144",  
        key: decrypted.key  
      });  
  
      return {  
        status: true,  
        code: 200,  
        result: {  
          title: decrypted.title || "Tidak diketahui",  
          type: instaDownloader.formatAudio.includes(format) ? 'audio' : 'video',  
          format: format,  
          thumbnail: decrypted.thumbnail || "https://via.placeholder.com/300",  
          download: {  
            video: dlVid.data.data.downloadUrl,  
            audio: dlAud.data.data.downloadUrl  
          },  
          id: id,  
          key: decrypted.key,  
          duration: decrypted.duration,  
          quality: instaDownloader.formatAudio.includes(format) ? '128' : format,  
          downloaded: dlAud.data.data.downloaded  
        }  
      };  
  
    } catch (error) {  
      return {  
        status: false,  
        code: 500,  
        error: error.message  
      };  
    }  
  }  
};  
  
module.exports = instaDownloader;