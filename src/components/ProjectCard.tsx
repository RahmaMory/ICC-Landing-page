
// import { Link } from "react-router-dom"
// import { ArrowUpRight } from "lucide-react"
// import type { Project } from "../data/projects"

// interface Props {
//   project: Project
// }

// export default function ProjectCard({ project }: Props) {
//   return (
//     <Link
    
//       to={`/project/${project.slug}`}
//       className="group block"
//     >
//       {/* image box */}
//       <div className="relative rounded-2xl overflow-hidden border border-white/5 bg-[#0B1120]">

//         <img
//           src={project.image}
//           alt={project.title}
//           className="w-full h-60 object-cover transition duration-500 group-hover:scale-110"
//         />

//         {/* overlay */}
//        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end justify-start p-6">
//   <span className="text-white font-medium tracking-wide flex">
//     View Case Study <ArrowUpRight className="text-xs ml-1"/>
//   </span>
// </div>
//       </div>

//       {/* title row */}
//       <div className="flex items-center justify-between mt-4">
//         <h3 className="text-lg font-semibold text-white group-hover:text-blue-500 transition duration-300">
//           {project.title} 
//         </h3>

//         <span className="text-xs bg-white/5 border border-white/10 px-3 py-1 rounded-lg text-gray-300">
//           {project.tag}
//         </span>
//       </div>

//       <p className="text-sm text-gray-400 mt-1">
//         {project.category}
//       </p>
//     </Link>
//   )
// }


import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import type { Project } from "../data/projects"

interface Props {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -6 }}
    >
      <Link
        to={`/project/${project.slug}`}
        className="group block"
      >
        {/* image box */}
        <div className="relative rounded-2xl overflow-hidden border border-white/5 bg-[#0B1120]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-60 object-cover transition duration-500 group-hover:scale-110"
          />

          {/* overlay */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-linear-to-t from-black/90 via-black/40 to-transparent flex items-end justify-start p-6">
            <span className="text-white font-medium tracking-wide flex">
              View Case Study <ArrowUpRight className="text-xs ml-1" />
            </span>
          </div>
        </div>

        {/* title row */}
        <div className="flex items-center justify-between mt-4">
          <h3 className="text-lg font-semibold text-white group-hover:text-blue-500 transition duration-300">
            {project.title}
          </h3>

          <span className="text-xs bg-white/5 border border-white/10 px-3 py-1 rounded-lg text-gray-300">
            {project.tag}
          </span>
        </div>

        <p className="text-sm text-gray-400 mt-1">
          {project.category}
        </p>
      </Link>
    </motion.div>
  )
}