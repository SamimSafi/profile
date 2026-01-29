import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IconExternalLink, IconGithub, IconChevronLeft, IconChevronRight } from '@/components/ui/Icons'
import { Section } from '@/components/animation/Section'
import { projects, Project } from '@/data/projects'

function ImageGallery({ images, title }: { images: string[], title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length)
  const prev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)

  return (
    <div className="group/gallery relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-[#161b22]">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${title} screenshot ${currentIndex + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="h-full w-full object-cover object-top"
        />
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white opacity-0 blur-sm transition-all group-hover/gallery:opacity-100 group-hover/gallery:blur-0 hover:bg-black/70"
            aria-label="Previous image"
          >
            <IconChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white opacity-0 blur-sm transition-all group-hover/gallery:opacity-100 group-hover/gallery:blur-0 hover:bg-black/70"
            aria-label="Next image"
          >
            <IconChevronRight size={20} />
          </button>
          
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === currentIndex ? 'w-4 bg-[var(--primary)]' : 'w-1.5 bg-white/30'
                }`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="space-y-24 md:space-y-32">
        {projects.map((p, i) => {
          const isEven = i % 2 === 0
          return (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid gap-8 md:grid-cols-2 md:gap-12 md:items-center"
            >
              <div className={isEven ? 'md:order-1' : 'md:order-2'}>
                {/* Screenshot / preview */}
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                  className="relative transition-shadow hover:shadow-glow-border rounded-2xl"
                >
                  {p.images && p.images.length > 0 ? (
                    <ImageGallery images={p.images} title={p.title} />
                  ) : (
                    <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[var(--primary)]/15 via-[var(--bg)] to-[var(--accent)]/10">
                      {p.image ? (
                        <img
                          src={p.image}
                          alt=""
                          className="h-full w-full object-cover object-top"
                        />
                      ) : (
                        <div
                          className="absolute inset-0 opacity-40"
                          style={{
                            background: `radial-gradient(circle at 30% 30%, rgba(99,102,241,0.25) 0%, transparent 50%),
                              radial-gradient(circle at 70% 70%, rgba(34,211,238,0.15) 0%, transparent 50%)`,
                          }}
                        />
                      )}
                    </div>
                  )}
                  
                  <div className="absolute bottom-3 right-3 z-20 flex flex-wrap justify-end gap-2">
                    {p.tech.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-white/10 bg-black/60 backdrop-blur-md px-2.5 py-1 text-xs text-[var(--text)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

              <div className={isEven ? 'md:order-2' : 'md:order-1'}>
                <h3 className="font-heading text-2xl font-semibold text-[var(--text)] md:text-3xl">
                  {p.title}
                </h3>
                <p className="mt-3 text-[var(--text-muted)] leading-relaxed">{p.description}</p>
                {p.impact && (
                  <p className="mt-2 text-sm font-medium text-[var(--accent)]">{p.impact}</p>
                )}
                {p.stats && p.stats.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-4">
                    {p.stats.map((s) => (
                      <span
                        key={s.label}
                        className="text-sm text-[var(--text-muted)]"
                      >
                        <span className="font-semibold text-[var(--text)]">{s.value}</span>{' '}
                        {s.label}
                      </span>
                    ))}
                  </div>
                )}
                <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="text-sm text-[var(--text-muted)] flex items-center gap-1.5"
                    >
                      <span className="h-1 w-1 rounded-full bg-[var(--primary)]" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex gap-4">
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-[var(--primary)] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[var(--primary)]/90"
                    >
                      <IconExternalLink size={14} />
                      Live Demo
                    </a>
                  )}
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-5 py-2.5 text-sm text-[var(--text-muted)] transition hover:border-white/20 hover:text-[var(--text)]"
                    >
                      <IconGithub size={14} />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          )
        })}
      </div>
    </Section>
  )
}
