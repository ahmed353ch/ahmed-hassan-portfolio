export default function SkillsMarquee() {
  const skills = [
    { name: 'Figma', highlight: false },
    { name: 'React', highlight: false },
    { name: 'Flutter', highlight: false },
    { name: 'Three.js', highlight: false },
    { name: 'Tailwind', highlight: false },
    { name: 'Spline', highlight: false },
  ];

  return (
    <section className="py-12 border-y border-white/5 overflow-hidden">
      <div className="marquee-container relative flex whitespace-nowrap">
        <div className="flex gap-16 items-center animate-marquee">
          {skills.concat(skills).map((skill, index) => (
            <div key={index} className="flex items-center gap-4 text-2xl font-heading text-gray-600 grayscale hover:grayscale-0 hover:text-white transition-all cursor-default relative shrink-0">
              <span className="w-8 h-8 bg-white/10 rounded-full"></span> {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
