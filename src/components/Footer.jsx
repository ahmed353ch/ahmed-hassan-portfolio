export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gradient-to-br from-brand-cyan to-brand-violet rounded-sm rotate-45"></div>
          <span className="font-heading text-lg tracking-tighter">AH.</span>
        </div>
        <p className="text-gray-500 text-sm">
          © 2024 Ahmed Hassan. All Rights Reserved.
        </p>
        <div className="flex gap-6">
          <a className="text-gray-500 hover:text-white transition-colors" href="#">LinkedIn</a>
          <a className="text-gray-500 hover:text-white transition-colors" href="#">Dribbble</a>
          <a className="text-gray-500 hover:text-white transition-colors" href="#">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
