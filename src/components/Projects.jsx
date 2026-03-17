import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

export default function Projects() {
  const projects = [
    {
      id: 1,
      tag1: 'UI/UX',
      tag2: 'Mobile',
      tagColor: 'text-brand-cyan',
      title: 'E-commerce App',
      description: 'A premium shopping experience for luxury fashion brands.',
      image: project1,
      linkColor: 'text-brand-cyan'
    },
    {
      id: 2,
      tag1: 'Web',
      tag2: 'Dashboard',
      tagColor: 'text-brand-violet',
      title: 'Crypto Dashboard',
      description: 'Real-time data visualization for decentralized finance protocols.',
      image: project2,
      linkColor: 'text-brand-violet'
    },
    {
      id: 3,
      tag1: 'UI/UX',
      tag2: 'Mobile',
      tagColor: 'text-white',
      title: 'Health Tracker',
      description: 'AI-powered wellness app for modern athlete health monitoring.',
      image: project3,
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
          {projects.map((project, index) => (
            <motion.article 
              key={project.id} 
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="project-card glass rounded-custom overflow-hidden group"
            >
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
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
