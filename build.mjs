import {mkdirSync,writeFileSync,copyFileSync} from 'node:fs';
const dir='.vercel/output/functions/proxy.func';
mkdirSync(dir,{recursive:true});
writeFileSync('.vercel/output/config.json',JSON.stringify({version:3,routes:[{src:'/(.*)',dest:'/proxy'}]}));
writeFileSync(dir+'/.vc-config.json',JSON.stringify({runtime:'nodejs22.x',handler:'index.mjs',launcherType:'Nodejs',maxDuration:30}));
copyFileSync('proxy.mjs',dir+'/index.mjs');
