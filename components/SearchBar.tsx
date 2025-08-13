'use client';
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

export default function SearchBar(){
  const [q, setQ] = useState('');
  const [results, setResults] = useState<any[]>([]);

  useEffect(()=>{
    const id = setTimeout(async ()=>{
      if(q.length===0){ setResults([]); return; }
      const res = await fetch('/api/search?q='+encodeURIComponent(q));
      const data = await res.json(); setResults(data);
    }, 300);
    return ()=>clearTimeout(id);
  }, [q]);

  return (
    <div className="mt-8">
      <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Cari produk..."
        className="w-full rounded-2xl border px-4 py-3 outline-none focus:ring-2 focus:ring-primary/30" />
      {results.length>0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {results.map((p:any)=> <ProductCard key={p.id} product={p} />)}
        </div>
      )}
    </div>
  );
}
