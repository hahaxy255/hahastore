export default function Footer(){
  return (
    <footer className="mt-16 border-t">
      <div className="container py-8 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} AnakEmak Store. All rights reserved.</p>
        <p className="opacity-70">Built with Next.js, Tailwind, Supabase</p>
      </div>
    </footer>
  );
}
