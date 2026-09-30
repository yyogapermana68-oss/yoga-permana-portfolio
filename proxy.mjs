const origin='https://yoga-permana-portfolio.yyogapermana68.chatgpt.site';
export default async function handler(req,res){
 const path=new URL(req.url,'https://portfolio.invalid');
 if(path.pathname==='/admin'||path.pathname.startsWith('/admin/')||path.pathname==='/signin-with-chatgpt'){
  res.writeHead(307,{Location:origin+'/admin','Cache-Control':'no-store'});res.end();return;
 }
 if(!['GET','HEAD'].includes(req.method)){res.writeHead(405,{Allow:'GET, HEAD'});res.end();return;}
 try{
  const upstream=new URL(origin+path.pathname+path.search);
  const headers={};
  for(const key of ['accept','range','rsc','next-router-state-tree','next-router-prefetch'])if(typeof req.headers[key]==='string')headers[key]=req.headers[key];
  const response=await fetch(upstream,{headers,method:req.method,redirect:'manual',signal:AbortSignal.timeout(25000)});
  res.statusCode=response.status;
  for(const key of ['content-type','content-range','accept-ranges','vary','x-content-type-options'])if(response.headers.has(key))res.setHeader(key,response.headers.get(key));
  res.setHeader('Cache-Control','no-store');
  const location=response.headers.get('location');
  if(location)res.setHeader('Location',location.startsWith(origin)?location.slice(origin.length)||'/':location);
  if(req.method==='HEAD'){res.end();return;}
  if(response.body){for await(const chunk of response.body)res.write(Buffer.from(chunk));}res.end();
 }catch{res.statusCode=502;res.end('Portfolio temporarily unavailable. Please refresh shortly.');}
}

