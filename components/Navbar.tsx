'use client';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/components/cart/CartContext';

export default function Navbar(){
  const { count } = useCart();
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur shadow-soft">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="text-xl font-bold text-primary">AnakEmak Store</Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="hover:text-primary-dark">Home</Link>
          <Link href="/cart" className="hover:text-primary-dark">Cart</Link>
          <Link href="/admin" className="hover:text-primary-dark">Admin</Link>
        </nav>
        <Link href="/cart" className="relative">
          <ShoppingCart />
          {count > 0 && (
            <span className="absolute -right-2 -top-2 badge text-xs">{count}</span>
          )}
        </Link>
      </div>
    </header>
  );
}
