import { useEffect, useRef } from 'react';

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let width, height;
    let particles = [];
    let mouse = { x: null, y: null };
    let reqId;

    function resize() {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    }

    const handleResize = () => resize();
    window.addEventListener('resize', handleResize);
    
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    canvas.addEventListener('mousemove', handleMouseMove);

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (mouse.x && mouse.y) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 80) {
            this.x -= dx * 0.02;
            this.y -= dy * 0.02;
          }
        }

        if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) this.reset();
      }
      draw() {
        ctx.fillStyle = 'rgba(0, 245, 255, 0.5)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function init() {
      resize();
      particles = [];
      for (let i = 0; i < 100; i++) particles.push(new Particle());
      animate();
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      reqId = requestAnimationFrame(animate);
    }

    init();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(reqId);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" id="hero">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-cyan/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-violet/10 blur-[120px] rounded-full"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="relative w-full max-w-lg mx-auto mb-12 flex justify-center items-center h-[400px]" data-purpose="hero-visual">
          <div className="animate-float w-64 h-64 border-2 border-brand-cyan/30 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] relative">
            <div className="absolute inset-0 border-2 border-brand-violet/30 rounded-full rotate-45 animate-pulse-slow"></div>
            <div className="absolute inset-4 glass rounded-full flex items-center justify-center overflow-hidden">
              <div className="w-full h-full bg-gradient-to-tr from-brand-cyan/20 to-brand-violet/20 opacity-50 blur-2xl"></div>
              <canvas ref={canvasRef} className="absolute inset-0 cursor-grab active:cursor-grabbing w-full h-full" id="hero-canvas"></canvas>
            </div>
          </div>
        </div>
        
        <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl mb-6 tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
          Ahmed Hassan
        </h1>
        <p className="text-lg md:text-2xl text-gray-400 mb-10 font-light tracking-wide">
          UI/UX Designer &amp; <span className="text-brand-cyan">Frontend Developer</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a className="px-10 py-4 bg-brand-cyan text-brand-black font-bold rounded-custom btn-glow transition-all hover:scale-105" href="#work">
            View Work
          </a>
          <a className="px-10 py-4 border border-white/20 hover:bg-white/5 rounded-custom transition-all" href="#contact">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
