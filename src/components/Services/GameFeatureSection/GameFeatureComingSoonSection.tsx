// import { useState } from 'react'
// import { Play } from 'lucide-react'

// // function VideoCard({ video }: { video: { id: string; title: string } }) {
// //   const [playing, setPlaying] = useState(false)

// //   return (
// //     <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white aspect-video">
// //       {!playing ? (
// //         <>
// //           {/* Thumbnail via Drive preview */}
// //           <img
// //             src={`https://drive.google.com/thumbnail?id=${video.id}&sz=w800`}
// //             alt={video.title}
// //             className="h-full w-full object-cover opacity-70 transition-opacity duration-300 group-hover:opacity-90"
// //           />

// //           {/* Overlay */}
// //           <div className="absolute inset-0 bg-[#071126]/40" />

// //           {/* Play button */}
// //           <button
// //             onClick={() => setPlaying(true)}
// //             className="absolute inset-0 flex flex-col items-center justify-center gap-3"
// //           >
// //             <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-400/20 border border-blue-400/30 backdrop-blur-sm transition-all duration-300 group-hover:bg-blue-400/30 group-hover:scale-110">
// //               <Play className="h-5 w-5 text-blue-300 fill-blue-300" />
// //             </div>
// //             <span className="text-xs font-medium text-white/70">{video.title}</span>
// //           </button>
// //         </>
// //       ) : (
// //         <iframe
// //           src={`https://drive.google.com/file/d/${video.id}/preview`}
// //           className="h-full w-full"
// //           allow="autoplay"
// //           allowFullScreen
// //         />
// //       )}
// //     </div>
// //   )
// // }





import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Joystick, Users, Boxes, MonitorSmartphone } from 'lucide-react'
import { fadeUp, staggerContainer } from '../../../lib/motion'
import ProjectCard from '../../ProjectCard'
import { projects } from '../../../data/projects'

export default function GameFeatureComingSoonSection() {
  const gameProjects = projects.filter((project) => project.category === 'Game')

  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6 md:py-28 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(34,211,238,0.10),transparent_24%),radial-gradient(circle_at_80%_70%,rgba(99,102,241,0.08),transparent_28%)]" />

      <div className="mx-auto max-w-300">
        <motion.div
          className="relative overflow-hidden rounded-4xl border border-white/10 bg-[#121d2e] px-8 py-14 sm:px-12 md:px-16 md:py-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(34,211,238,0.08),transparent_28%)]" />

          <div className="relative z-10 flex flex-col items-center text-center">
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-blue-400/15 bg-blue-400/8 px-5 py-2 text-xs font-medium tracking-[0.12em] text-blue-300"
            >
              <Joystick className="h-4 w-4" />
              GAME DEVELOPMENT
            </motion.div>

            <motion.div variants={fadeUp} className="relative mt-8">
              <div className="absolute inset-0 rounded-full bg-blue-400/20 blur-2xl" />
              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-400/10">
                <Joystick className="h-8 w-8 text-blue-300" />
              </div>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-8 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-5xl lg:text-[64px]"
            >
              Interactive Games, <span className="bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Built to Be Played.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-base leading-8 text-white/62 sm:text-lg"
            >
              ICC designs and develops responsive browser games, multiplayer
              experiences, and interactive products from concept to launch.
            </motion.p>

            <motion.div
              variants={staggerContainer}
              className="mt-10 grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3"
            >
              {[
                { icon: Users, text: "Real-time and room-based multiplayer" },
                { icon: Boxes, text: "Game logic, rules, and interactive 3D" },
                { icon: MonitorSmartphone, text: "Responsive browser experiences" },
              ].map(({ icon: Icon, text }) => (
                <motion.div
                  key={text}
                  variants={fadeUp}
                  whileHover={{ y: -3 }}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/3 px-5 py-4 text-left text-sm text-white/70"
                >
                  <Icon className="h-5 w-5 shrink-0 text-blue-300" aria-hidden="true" />
                  {text}
                </motion.div>
              ))}
            </motion.div>

            {/* Video Grid Subsection
<motion.div variants={fadeUp} className="mt-12 w-full max-w-3xl">
  <p className="mb-4 text-sm font-medium tracking-wide text-white/40 uppercase">
    Preview Clips
  </p>

  <div className="grid grid-cols-2 gap-3 sm:grid-cols-2">
    {[
      {
        id: "136nH08_gxtFgR05Y3OYdr5MvH_RKqh5d",
        title: "Game Demo  Concept 1",
      },
      {
        id: "DRIVE_FILE_ID_2",
        title: "Game Demo  Concept 2",
      },
      {
        id: "DRIVE_FILE_ID_3",
        title: "Interactive Walkthrough",
      },
      {
        id: "DRIVE_FILE_ID_4",
        title: "Brand Experience",
      },
    ].map((video) => (
      <VideoCard key={video.id} video={video} />
    ))}
  </div>
</motion.div>

         */}

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
            >
              <Link
                to="/#contact"
                className="group inline-flex items-center justify-center rounded-2xl bg-blue-400 px-8 py-4 text-base font-semibold text-[#071126] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_28px_rgba(34,211,238,0.30)]"
              >
                <span>Discuss a Game Idea</span>
                <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <p className="text-sm text-white/45">
                Free 15-minute discovery call.
              </p>
            </motion.div>
          </div>
        </motion.div>

        <div className="mt-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-10 text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
              Real work
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Explore Our Game Projects
            </h2>
          </motion.div>

          <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
            {gameProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
