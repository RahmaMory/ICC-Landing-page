// import { useParams } from "react-router-dom"
// import { projects } from "../data/projects"

// export default function ProjectDetails() {
//   const { slug } = useParams()

//   const project = projects.find(p => p.slug === slug)

//   if (!project)
//     return <h1 className="text-center mt-20">Project Not Found</h1>

//   return (
//     <section className="min-h-screen bg-[#020617] text-white py-20 px-6">
//       <div className="max-w-5xl mx-auto">

//         <img src={project.image} className="rounded-2xl mb-10 w-full" title="project_img" />

//         <h1 className="text-4xl font-bold mb-6">
//           {project.title}
//         </h1>

//         <p className="text-gray-400 text-lg mb-10">
//           {project.desc}
//         </p>

//         <p className="text-gray-300 leading-relaxed">
//           {project.content}
//         </p>

//       </div>
//     </section>
//   )
// }






import { useParams } from "react-router-dom"
import { projects } from "../data/projects"
import { motion } from "framer-motion"
import { fadeUp } from "../lib/motion"

export default function ProjectDetails() {
  const { slug } = useParams()

  const project = projects.find(p => p.slug === slug)

  if (!project)
    return <h1 className="text-center mt-20">Project Not Found</h1>

  return (
    <section className="min-h-screen bg-[#020617] text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* image */}
        <motion.img
          src={project.image}
          title="project_img"
          className="rounded-2xl mb-10 w-full"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />

        {/* title */}
        <motion.h1
          className="text-4xl font-bold mb-6"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          {project.title}
        </motion.h1>

        {/* short desc */}
        <motion.p
          className="text-gray-400 text-lg mb-10"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.1 }}
        >
          {project.desc}
        </motion.p>

        {/* content */}
        <motion.p
          className="text-gray-300 leading-relaxed"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.2 }}
        >
          {project.content}
        </motion.p>

      </div>
    </section>
  )
}