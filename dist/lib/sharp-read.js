import r from "../options/index.js";
var s=async(i,p)=>{const f=p.inputPath.split(".").pop();if(!f)return;const t={avci:"avif",avcs:"avif",avifs:"avif",heic:"heif",heics:"heif",heifs:"heif",jfif:"jpeg",jif:"jpeg",jpe:"jpeg",apng:"png",jpg:"jpeg"},e=typeof t[f]<"u"?t[f]:typeof i[f]<"u"?f:!1;if(e&&["avif","gif","heif","jpeg","png","raw","tiff","webp"].includes(e)&&typeof i[e]<"u"&&i[e]!==!1&&e in p.buffer)return await p.buffer[e](i[e]!==!0?i[e]:r.img).toBuffer()};export { s as default };

