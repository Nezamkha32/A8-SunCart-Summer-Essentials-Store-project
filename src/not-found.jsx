import React from 'react';
import Link from "next/link";
export default function NotFound() {
  return (
    <div className="min-h-screen bg-linear-to-br from-amber-50 to-orange-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="font-display text-8xl font-black text-amber-900 mb-2">404</h1>
        <h2 className="font-display text-2xl font-bold text-amber-700 mb-3">
          Page Not Found 
        </h2>
        <p className="text-gray-500 mb-8 leading-relaxed">
          Looks like this page got lost in the summer breeze! Let&apos;s get you back to the sunshine.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/" className="btn-sun inline-flex items-center gap-2">
           Go Home
          </Link>
          <Link href="/products" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-amber-400 text-amber-700 font-semibold rounded-full hover:bg-amber-50 transition-colors">
            Shop Products
          </Link>
export default not-found;
        </div>
      </div>
    </div>
  );
}