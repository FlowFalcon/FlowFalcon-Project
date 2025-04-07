/*  
  Creator Script : XBotzLauncher,  
  Name Script : Youtube Downloader Support 8K,  
  Sumber : https://whatsapp.com/channel/0029Vay9UUE7T8bUHDMZCo1I,  
*/  
  
const axios = require("axios");  
const crypto = require("crypto");  
  
const savetube = {  
  api: {  
    base: "https://media.savetube.me/api",  
    cdn: "/random-cdn",  
    info: "/v2/info",   
    download: "/download"  
  },  
  headers: {  
    'accept': '*/*',  
    'content-type': 'application/json',  
    'origin': 'https://yt.savetube.me',  
    'referer': 'https://yt.savetube.me/',  
    'user-agent': 'Postify/1.0.0'  
  },  
  formatVideo: ['144', '240', '360', '480', '720', '1080', '1440', '2k', '3k', '4k', '5k', '8k'],  
  formatAudio: ['mp3', 'm4a', 'webm', 'aac', 'flac', 'opus', 'ogg', 'wav' ],  
  
  crypto: {  
    hexToBuffer: (hexString) => {  
      const matches = hexString.match(/.{1,2}/g);  
      return Buffer.from(matches.join(''), 'hex');  
    },  
  
    decrypt: async (enc) => {  
      try {  
        const secretKey = 'C5D58EF67A7584E4A29F6C35BBC4EB12';  
        const data = Buffer.from(enc, 'base64');  
        const iv = data.slice(0, 16);  
        const content = data.slice(16);  
        const key = savetube.crypto.hexToBuffer(secretKey);  
          
        const decipher = crypto.createDecipheriv('aes-128-cbc', key, iv);  
        let decrypted = decipher.update(content);  
        decrypted = Buffer.concat([decrypted, decipher.final()]);  
          
        return JSON.parse(decrypted.toString());  
      } catch (error) {  
        throw new Error(`${error.message}`);  
      }  
    }  
  },  
  
  isUrl: str => {   
    try {   
      new URL(str);   
      return true;   
    } catch (_) {   
      return false;   
    }   
  },  
  
  youtube: url => {  
    if (!url) return null;  
    const a = [  
      /youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})/,  
      /youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/,  
      /youtube\.com\/v\/([a-zA-Z0-9_-]{11})/,  
      /youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/,  
      /youtu\.be\/([a-zA-Z0-9_-]{11})/  
    ];  
    for (let b of a) {  
      if (b.test(url)) return url.match(b)[1];  
    }  
    return null;  
  },  
  
  request: async (endpoint, data = {}, method = 'post') => {  
    try {  
      const { data: response } = await axios({  
        method,  
        url: `${endpoint.startsWith('http') ? '' : savetube.api.base}${endpoint}`,  
        data: method === 'post' ? data : undefined,  
        params: method === 'get' ? data : undefined,  
        headers: savetube.headers  
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
        error: error.message  
      };  
    }  
  },  
  
  getCDN: async () => {  
    const response = await savetube.request(savetube.api.cdn, {}, 'get');  
    if (!response.status) return response;  
    return {  
      status: true,  
      code: 200,  
      data: response.data.cdn  
    };  
  },  
  
  download: async (link, format) => {  
    if (!link) {  
      return {  
        status: false,  
        code: 400,  
        error: "Infokan linknya cik"  
      };  
    }  
  
    if (!savetube.isUrl(link)) {  
      return {  
        status: false,  
        code: 400,  
        error: "Itu bukan link youtube kocak"  
      };  
    }  
  
    const allFormats = [...savetube.formatVideo, ...savetube.formatAudio];  
    if (!format || !allFormats.includes(format)) {  
      return {  
        status: false,  
        code: 400,  
        error: "Itu bukan formats yang ada cik, liat dibawah ini",  
        available_fmt: allFormats  
      };  
    }  
  
    const id = savetube.youtube(link);  
    if (!id) {  
      return {  
        status: false,  
        code: 400,  
        error: "Yaelah link youtubenya ada yang salah cik"  
      };  
    }  
  
    try {  
      const cdnx = await savetube.getCDN();  
      if (!cdnx.status) return cdnx;  
      const cdn = cdnx.data;  
  
      const result = await savetube.request(`https://${cdn}${savetube.api.info}`, {  
        url: `https://www.youtube.com/watch?v=${id}`  
      });  
      if (!result.status) return result;  
      const decrypted = await savetube.crypto.decrypt(result.data.data);  
  
      const dl = await savetube.request(`https://${cdn}${savetube.api.download}`, {  
        id: id,  
        downloadType: savetube.formatAudio.includes(format) ? 'audio' : 'video',  
        quality: savetube.formatAudio.includes(format) ? '128' : format,  
        key: decrypted.key  
      });  
  
      return {  
        status: true,  
        code: 200,  
        result: {  
          title: decrypted.title || "Gak tau 🤷🏻",  
          type: savetube.formatAudio.includes(format) ? 'audio' : 'video',  
          format: format,  
          thumbnail: decrypted.thumbnail || `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`,  
          download: dl.data.data.downloadUrl,  
          id: id,  
          key: decrypted.key,  
          duration: decrypted.duration,  
          quality: savetube.formatAudio.includes(format) ? '128' : format,  
          downloaded: dl.data.data.downloaded || false  
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
  
module.exports = savetube;