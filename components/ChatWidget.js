import { useState } from 'react'
export default function ChatWidget(){
  const [open,setOpen]=useState(false)
  const [q,setQ]=useState('')
  const [a,setA]=useState('')
  async function ask(e){
    e.preventDefault()
    const res = await fetch('/api/ai',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({prompt:q})})
    const data = await res.json()
    setA(data.answer||'')
  }
  return (<div className="fixed-chat">
    {!open && <button className="btn btn-primary" onClick={()=>setOpen(true)}>Chat</button>}
    {open && <div className="card w-[320px]">
      <div className="font-bold mb-2">IslandWave Assistant</div>
      <form onSubmit={ask} className="flex gap-2">
        <input className="input flex-1" placeholder="Ask about plans, billing…" value={q} onChange={(e)=>setQ(e.target.value)}/>
        <button className="btn btn-primary">Ask</button>
      </form>
      {a && <div className="mt-3 text-white/90">{a}</div>}
      <div className="mt-3 flex gap-2">
        <a className="btn btn-alt" href="mailto:josh@islandwave.ca?subject=Live%20Help">Email Josh</a>
        <button className="btn" onClick={()=>setOpen(false)}>Close</button>
      </div>
    </div>}
  </div>)
}
