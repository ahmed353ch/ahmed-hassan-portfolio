export default function Contact() {
  return (
    <section className="py-24 relative overflow-hidden" id="contact">
      <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-brand-violet/20 blur-[150px] rounded-full"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-heading text-5xl md:text-7xl mb-8 leading-tight">Let's Build <br/>Something <span className="text-brand-cyan">Iconic.</span></h2>
            <div className="space-y-6">
              <a className="text-2xl md:text-3xl font-light hover:text-brand-cyan transition-colors block border-b border-white/10 pb-4" href="mailto:hello@ahmedhassan.design">
                hello@ahmedhassan.design
              </a>
              <p className="text-gray-500">Currently available for freelance projects and full-time opportunities.</p>
            </div>
          </div>
          <div className="glass p-8 md:p-12 rounded-custom">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Name</label>
                  <input className="w-full bg-white/5 border-white/10 rounded-custom px-4 py-3 focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all text-white placeholder:text-white/20 outline-none" placeholder="John Doe" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Email</label>
                  <input className="w-full bg-white/5 border-white/10 rounded-custom px-4 py-3 focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all text-white placeholder:text-white/20 outline-none" placeholder="john@example.com" type="email" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Message</label>
                <textarea className="w-full bg-white/5 border-white/10 rounded-custom px-4 py-3 focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all text-white placeholder:text-white/20 outline-none resize-none" placeholder="Tell me about your project..." rows="4"></textarea>
              </div>
              <button className="w-full bg-white text-brand-black font-bold py-4 rounded-custom hover:bg-brand-cyan transition-colors duration-300" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
