export default function About() {
  return (
    <section className="py-24 relative" id="about">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1" data-purpose="about-visual">
            <div className="aspect-square glass rounded-custom flex items-center justify-center relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-violet/20 to-transparent"></div>
              <div className="w-48 h-48 border-4 border-brand-violet animate-spin-slow rotate-45 glow-violet"></div>
              <div className="absolute w-48 h-48 border-2 border-brand-cyan animate-reverse-spin -rotate-12"></div>
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="font-heading text-4xl md:text-5xl">Elevating Digital <br/><span className="text-brand-violet">Experiences.</span></h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              I craft immersive digital interfaces that bridge the gap between aesthetics and functionality. With a deep passion for 3D web design and user-centric architecture, I help brands stand out in the digital void.
            </p>
            <div className="grid grid-cols-2 gap-8 py-6">
              <div>
                <span className="block text-4xl font-heading text-brand-cyan">12+</span>
                <span className="text-sm text-gray-500 uppercase tracking-widest">Projects Completed</span>
              </div>
              <div>
                <span className="block text-4xl font-heading text-brand-violet">03</span>
                <span className="text-sm text-gray-500 uppercase tracking-widest">Years Experience</span>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm uppercase tracking-widest text-gray-500">Expertise</h4>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 glass rounded-full text-xs font-semibold text-brand-cyan border-brand-cyan/30">Figma Mastery</span>
                <span className="px-4 py-2 glass rounded-full text-xs font-semibold text-brand-violet border-brand-violet/30">React &amp; Three.js</span>
                <span className="px-4 py-2 glass rounded-full text-xs font-semibold text-white border-white/20">Mobile UI</span>
                <span className="px-4 py-2 glass rounded-full text-xs font-semibold text-brand-cyan border-brand-cyan/30">Branding</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
