import {mkdirSync,writeFileSync} from 'node:fs';
mkdirSync('dist',{recursive:true});
writeFileSync('dist/health.txt','Yoga Permana portfolio gateway\n');
