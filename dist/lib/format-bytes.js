var e=async(t,B=2)=>{if(t===0)return"0 Bytes";const o=1024,r=Math.floor(Math.log(t)/Math.log(o));return`${parseFloat((t/o**r).toFixed(B<0?0:B))} ${["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][r]}`};export { e as default };

