import { ArrowRight } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      tag1: 'UI/UX',
      tag2: 'Mobile',
      tagColor: 'text-brand-cyan',
      title: 'E-commerce App',
      description: 'A premium shopping experience for luxury fashion brands.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA86PQC1ZOMLl7jWBqsw__VleFaUdGLLHaCDbzqYSVsGIGuNY3DlIcyMvSNuyRPnoRH5ni-hGIzvLcyQ1WR1spTC2gvdEa5236D1Ai-ViDfqMJvwbEwAsnafj63dsg2BXHM56OTN52kMUP5iq5qeI2NwQW_aPzwB7aL0lIe_KksiUcklemHi-SJTS-JIBqcnChkTkxDg8FUflnhKNJ9apIh8FxY8pOlcs8sUGkVlKlgMiS_p8RRbTGP7XHxSSgdZnSSKYWrd4uSTLkf',
      linkColor: 'text-brand-cyan'
    },
    {
      id: 2,
      tag1: 'Web',
      tag2: 'Dashboard',
      tagColor: 'text-brand-violet',
      title: 'Crypto Dashboard',
      description: 'Real-time data visualization for decentralized finance protocols.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQs7arN4w_a1eqQfmwoXSilzcgvWzf4S0X8YvznLMpUJH1rVTowpUb__XHWHq-AxtD8MrWdL33kpNCfH-jEmwKdlrJOYAqJJw72FZS0UGBjsIIO79N5vFroGzWS7RpxFYk5Blj5i0gALJ75KrVqaBRN-YoTlrHgPvMtET-C0Fm8TTrdN-M9gWsWRcCloiLkDgoZO0MylT0vyLiADmDhqsV6oLHkt60GlTkizW5Q591lmWJO6MOTNL9s_2fAQ1raWinmPoDmLxWdBkN',
      linkColor: 'text-brand-violet'
    },
    {
      id: 3,
      tag1: 'UI/UX',
      tag2: 'Mobile',
      tagColor: 'text-white',
      title: 'Health Tracker',
      description: 'AI-powered wellness app for modern athlete health monitoring.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCi3xbeeCHbBz5EQWAebcUbebShM6xbDTSIEvic6IIk4ADlJaSvlCZf_E-ZtESUkAljCOHh3N2f7rhxCVx1uS4T40pZGWoGDgxq9IGSuqAhD9C0Sbn2wAu6mrttykhUclRvWqlAQVI17uZLQM5hAn4Z-cPZJ1D3ojDwUiBwqE_yMQan-ybRsrkjI4zk5FMTvetG5n6nbe7c8BXaPhOYFpTX0yI1xuangy5QK9FwTK5qs2la0ZbXRB9npqysx9sEb48tYwzshQzRmhSS',
      linkColor: 'text-white'
    }
  ];

  return (
    <section className="py-24" id="work">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h4 className="text-brand-cyan uppercase tracking-tighter font-bold mb-2">Portfolio</h4>
            <h2 className="font-heading text-5xl">Selected Work</h2>
          </div>
          <p className="text-gray-500 max-w-sm">
            A curated collection of projects where design meets high-performance engineering.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article key={project.id} className="project-card glass rounded-custom overflow-hidden group">
              <div className="h-64 overflow-hidden relative">
                <img alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={project.image} />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black to-transparent opacity-60"></div>
              </div>
              <div className="p-8">
                <div className="flex gap-2 mb-4">
                  <span className={`text-[10px] uppercase font-bold tracking-widest ${project.tagColor}`}>{project.tag1}</span>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-gray-500">{project.tag2}</span>
                </div>
                <h3 className="font-heading text-2xl mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-6">{project.description}</p>
                <a className={`inline-flex items-center gap-2 ${project.linkColor} text-sm font-bold group/link`} href="#">
                  View Project <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
