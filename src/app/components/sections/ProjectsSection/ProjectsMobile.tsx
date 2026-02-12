import { useState, lazy, Suspense } from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "@/app/components/features/figma/ImageWithFallback";
import { getImagePath } from '@/app/utils/imagePath';
import { Project, projects } from '@/app/data/projects';

const ProjectModal = lazy(() => import('@/app/components/features/ProjectModal').then(module => ({ default: module.ProjectModal })));
const ProjectFeed = lazy(() => import('@/app/components/features/ProjectFeed').then(module => ({ default: module.ProjectFeed })));

function ProjectCardMobile({ project, index, onSelect, priority = false }: { project: Project, index: number, onSelect: (p: Project) => void, priority?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full flex flex-col gap-6 mb-16"
      onClick={() => onSelect(project)}
    >
      {/* 1. Visual Side - Full Width & Clean */}
      <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-white dark:bg-[#251e1e] shadow-xl">
        <ImageWithFallback
          src={getImagePath(project.image)}
          alt={project.title}
          className="w-full h-full object-cover"
          loading={priority ? "eager" : "lazy"}
        />
        {/* Subtle Number Overlay */}
        <div className="absolute top-4 right-4 bg-white/90 dark:bg-[#1a1515]/90 backdrop-blur-sm w-8 h-8 flex items-center justify-center rounded-full text-[10px] font-black text-[#795558] dark:text-[#FCF6EF] border border-[#795558]/10 dark:border-white/10">
          0{index + 1}
        </div>
      </div>

      {/* 2. Narrative Side - Minimalist Feed Style */}
      <div className="flex flex-col space-y-3 px-2">
        {/* Category & Tags - Horizontal Scroll */}
        <div 
          data-lenis-prevent
          className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-1 -mx-2 px-2"
        >
          <span className="whitespace-nowrap text-[9px] font-black uppercase tracking-[0.2em] text-[#795558]/60 dark:text-[#FCF6EF]/60 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#795558]/40 dark:bg-[#FCF6EF]/40 rounded-full" />
            {project.category}
          </span>
          {project.typography.slice(0, 2).map((font, i) => (
            <span key={i} className="whitespace-nowrap px-2 py-1 rounded-md bg-[#795558]/5 dark:bg-white/5 text-[8px] font-bold uppercase tracking-wider text-[#795558]/40 dark:text-[#FCF6EF]/40 border border-[#795558]/5 dark:border-white/5">
              {font}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-4xl font-serif text-[#795558] dark:text-[#FCF6EF] leading-tight">
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="text-sm text-[#795558]/70 dark:text-[#FCF6EF]/70 font-light leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* CTA */}
        <button className="self-start mt-2 text-[#795558] dark:text-[#FCF6EF] text-[10px] font-black uppercase tracking-[0.3em] border-b border-[#795558]/20 dark:border-[#FCF6EF]/20 pb-1">
          Ver Caso Completo
        </button>
      </div>
    </motion.div>
  );
}

export function ProjectsMobile() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isFeedOpen, setIsFeedOpen] = useState(false);

  return (
    <section id="projetos" className="py-12 bg-[#FCF6EF]/50 dark:bg-[#1a1515] transition-colors duration-500 relative overflow-hidden">
      {/* Header - Compact */}
      <div className="px-6 mb-12 flex flex-col items-center text-center">
        <span className="text-[9px] uppercase tracking-[0.4em] text-[#795558]/60 dark:text-[#FCF6EF]/60 font-black mb-4 block">Portfólio 2024</span>
        <h2 className="text-5xl font-serif text-[#795558] dark:text-[#FCF6EF] leading-[0.9]">
          Projetos <br /> <span className="italic font-light opacity-60 dark:opacity-40">Selecionados</span>
        </h2>
      </div>

      {/* Feed List */}
      <div className="px-4">
        {projects.map((project, index) => (
          <ProjectCardMobile key={project.id} project={project} index={index} onSelect={setSelectedProject} priority={index === 0} />
        ))}
      </div>

      {/* Footer CTA - Button */}
      <div className="mt-8 flex justify-center px-6">
        <button
          onClick={() => setIsFeedOpen(true)}
          className="w-full py-4 rounded-xl border border-[#795558]/20 dark:border-white/20 text-[#795558] dark:text-[#FCF6EF] text-[10px] font-black uppercase tracking-[0.3em] hover:bg-[#795558] hover:text-white dark:hover:bg-[#FCF6EF] dark:hover:text-[#1a1515] transition-all bg-white dark:bg-white/5 shadow-lg"
        >
          Ver Galeria Completa
        </button>
      </div>

      <Suspense fallback={null}>
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        <ProjectFeed isOpen={isFeedOpen} onClose={() => setIsFeedOpen(false)} projects={projects} onSelectProject={(p: Project) => { setSelectedProject(p); setIsFeedOpen(false); }} />
      </Suspense>
    </section>
  );
}
