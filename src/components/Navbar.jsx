import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-[100] px-6 py-4">
      <nav className="max-w-7xl mx-auto flex items-center justify-between glass px-8 py-4 rounded-full">
        <div className="flex items-center gap-2" data-purpose="logo">
          <div className="w-8 h-8 bg-gradient-to-br from-brand-cyan to-brand-violet rounded-md rotate-45"></div>
          <span className="font-heading text-xl tracking-tighter">AH.</span>
        </div>
        <ul className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest text-gray-400">
          <li><a className="hover:text-brand-cyan transition-colors" href="#work">Work</a></li>
          <li><a className="hover:text-brand-violet transition-colors" href="#about">About</a></li>
          <li><a className="hover:text-white transition-colors" href="#contact">Contact</a></li>
        </ul>
        <div className="md:hidden">
          <button className="text-white">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>
    </header>
  );
}
