'use client';
import Image from 'next/image';
import { useCart } from '@/components/cart/CartContext';

export type Product = {
  id: string;
  name: string;
  description: string | null;
  price_cents: number;
  image_url: string | null;
  category: string | null;
  stock: number | null;
};

export default function ProductCard({ product }: { product: Product }){
  const { add } = useCart();
  const price = (product.price_cents/100).toLocaleString('id-ID',{style:'currency',currency:'IDR'});
  return (
    <div className="rounded-2xl border p-4 shadow-soft hover:shadow-md transition bg-white">
      <div className="relative w-full h-56 rounded-xl overflow-hidden bg-gray-100">
        {product.image_url ? (
          <Image src={product.image_url} alt={product.name} fill className="object-cover" />
        ) : null}
      </div>
      <div className="mt-4">
        <h3 className="font-semibold line-clamp-1">{product.name}</h3>
        <p className="text-sm text-gray-500 line-clamp-2 min-h-[40px]">{product.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-bold text-primary">{price}</span>
          <button className="btn" onClick={()=>add(product)}>Tambah</button>
        </div>
      </div>
    </div>
  );
}
