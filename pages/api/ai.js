export default function handler(req,res){
  if(req.method!=='POST') return res.status(405).json({error:'Use POST'})
  const q = String(req.body?.prompt||'').toLowerCase()
  let a=''
  if(q.includes('plan')) a='Plans: Basic 100Mbps $49, Plus 300Mbps $69, Pro 1Gbps $99 (CAD).'
  else if(q.includes('beat')) a='Go to Plans → Beat Your Bill and send your bill; we will email a better offer.'
  else if(q.includes('coverage')) a='Available across Canada; verify by postal code at signup.'
  else a='I can help with plans, billing, beat-your-bill, marketplace & community.'
  res.json({answer:a})
}
