'use client';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { Product } from '@/components/ProductCard';

type CartItem = Product & { qty: number };
type CartState = {
  items: CartItem[];
  add: (p: Product)=>void;
  remove: (id: string)=>void;
  clear: ()=>void;
  count: number;
  total: number;
};

const Ctx = createContext<CartState | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }){
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(()=>{
    const raw = localStorage.getItem('cart');
    if(raw) setItems(JSON.parse(raw));
  },[]);

  useEffect(()=>{
    localStorage.setItem('cart', JSON.stringify(items));
  },[items]);

  const add = (p: Product)=>{
    setItems(prev=>{
      const idx = prev.findIndex(i=>i.id===p.id);
      if(idx>-1){
        const copy=[...prev]; copy[idx].qty+=1; return copy;
      }
      return [...prev, {...p, qty:1}];
    });
  };

  const remove = (id: string)=> setItems(prev=>prev.filter(i=>i.id!==id));
  const clear = ()=> setItems([]);

  const {count,total} = useMemo(()=>{
    let c=0,t=0;
    for(const i of items){ c+=i.qty; t+=i.qty*i.price_cents; }
    return {count:c,total:t};
  },[items]);

  const value = { items, add, remove, clear, count, total };
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCart(){
  const ctx = useContext(Ctx);
  if(!ctx) throw new Error('useCart must be used inside CartProvider');
  return ctx;
}
