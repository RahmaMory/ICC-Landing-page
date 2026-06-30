



// import { CircleCheck } from 'lucide-react';
// import { Link } from 'react-router-dom';


// export default function Hero() {

// const bgImages = [
//   "/projects/p1.png",
//   "/projects/img.avif",
//   "/projects/p4.png",
//   "/projects/p7.jpg",
//   "/projects/p6.webp",
//   "/projects/p8.jpg",
//   "/projects/p9.webp",
  
// ];

// const sizes = [
//   "w-[110px] h-[70px] sm:w-[170px] sm:h-[105px]",
//   "w-[110px] h-[70px] sm:w-[180px] sm:h-[110px]",

//   "w-[100px] h-[60px] sm:w-[150px] sm:h-[95px]",
//   "w-[160px] h-[100px] sm:w-[240px] sm:h-[150px]",
//   "w-[100px] h-[60px] sm:w-[150px] sm:h-[95px]",

//   "w-[110px] h-[70px] sm:w-[170px] sm:h-[105px]",
//   "w-[110px] h-[70px] sm:w-[180px] sm:h-[110px]",
// ];

// const positions = [
//   "top-2 left-2 sm:top-4 sm:left-8 rotate-[-6deg]",
//   "top-4 right-2 sm:top-10 sm:right-6 rotate-[5deg]",

//   "top-[38%] left-1 sm:left-2 rotate-[-8deg]",
//   "top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2",
//   "top-[40%] right-1 sm:right-2 rotate-[7deg]",

//   "bottom-2 left-4 sm:bottom-6 sm:left-12 rotate-[4deg]",
//   "bottom-4 right-4 sm:bottom-8 sm:right-10 rotate-[-5deg]",
// ];
// const delays = [
//   "0s",
//   "1s",
//   "2s",
//   "3s",
//   "1.5s",
//   "2.5s",
//   "3.5s",
// ];
// const durations = ["4s","5s","3.5s","4.5s","2.8s","2.2s","6.7s"];
// return (
// <div className="container mx-auto">

// <section className="pt-20 pb-20">

// <div className="container mx-auto px-6 grid lg:grid-cols-[1.2fr_.8fr] gap-12 items-center">

// {/* LEFT */}
// <div>

// <span className="text-xs bg-white/5 border border-white/10 px-4 py-2 rounded-full gap-2 inline-flex items-center">
// <span className="w-2 h-2 bg-green-500 rounded-full relative">
// <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-50 animate-ping"></span>
// </span>
// Accepting New Projects for Q1
// </span>

// <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight">
// You Imagine <br />
// <span className="bg-gradient-to-r from-blue-500 to-emerald-400 bg-clip-text text-transparent">
// We Build
// </span>
// </h1>

// <p className="mt-6 text-gray-400 max-w-xl text-lg sm:text-xl">
// Stop dreaming and start shipping. We are the "Infinity Code Collaboration" studio for startups that need speed, quality, and a design that converts.
// </p>

// <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

// <Link to={'/contact'} className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-500 hover:opacity-90 transition">
// Start Your Project →
// </Link>

// <button className="px-6 py-3 rounded-lg border border-white/10 hover:bg-white/5 transition">
// View Our Work
// </button>

// </div>

// <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-8 text-sm text-gray-400">

// <span className="flex items-center gap-1">
// <CircleCheck className="text-green-500 w-4 h-4" /> Fast MVPs
// </span>

// <span className="flex items-center gap-1">
// <CircleCheck className="text-green-500 w-4 h-4" /> Quality-First
// </span>

// <span className="flex items-center gap-1">
// <CircleCheck className="text-green-500 w-4 h-4" /> Startup-Friendly
// </span>

// </div>

// </div>

// {/* RIGHT */}
// <div className="relative w-full min-h-[26rem] sm:min-h-[30rem] overflow-hidden">

// {/* frame */}
// <div className="absolute inset-0 rounded-3xl border border-[#171D29] backdrop-blur-sm"></div>

// {/* background images */}
// {bgImages.map((img, i) => (
// <img 
// title='bg_img'
// key={i}
// src={img}
//     style={{ animationDelay: delays[i], animationDuration: durations[i] }}
// className={`absolute ${sizes[i]} object-cover rounded-xl opacity-50 blur-[1px] shadow-xl ${positions[i]} float`}
// />
// ))}

// {/* top card */}
// <div className="
// absolute
// top-[60px] left-1/2 -translate-x-1/2
// sm:left-10 sm:translate-x-0
// w-48 h-28 sm:w-72 sm:h-36
// rounded-xl border border-white/10
// overflow-hidden backdrop-blur-md
// z-20
// ">

// <img title='img1' src="/projects/p5.jpg" className="w-full h-full object-cover"/>

// </div>

// {/* bottom card */}
// <div className="
// absolute
// bottom-[30px] left-1/2 -translate-x-1/2
// sm:right-12 sm:left-auto sm:translate-x-0
// w-48 h-32 sm:w-72 sm:h-44
// rounded-xl border border-white/10
// overflow-hidden backdrop-blur-md
// z-20
// ">

// <img title='img2' src="/projects/p2.webp" className="w-full h-full object-cover"/>

// </div>

// {/* center */}
// <div
// className="
// absolute left-1/2 top-[52%]
// -translate-x-1/2 -translate-y-1/2
// bg-black/90 px-4 py-2 sm:px-8 sm:py-4
// rounded-xl border border-white/10
// shadow-2xl text-center
// z-30
// "
// >

// <p className="text-xl sm:text-3xl font-bold">100+</p>

// <p className="text-[10px] sm:text-xs tracking-widest text-gray-400">
// PROJECTS SHIPPED
// </p>

// </div>

// </div>

// </div>
// </section>
// </div>
// )
// }






import { CircleCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeLeft, fadeRight, fadeUp, staggerContainer } from '../lib/motion';

export default function Hero() {
  const bgImages = [
    "/projects/p1.png",
    "/projects/img.avif",
    "/projects/p4.png",
    "/projects/p7.jpg",
    "/projects/p6.webp",
    "/projects/p8.jpg",
    "/projects/p9.webp",
  ];

  const sizes = [
    "w-[110px] h-[70px] sm:w-[170px] sm:h-[105px]",
    "w-[110px] h-[70px] sm:w-[180px] sm:h-[110px]",
    "w-[100px] h-[60px] sm:w-[150px] sm:h-[95px]",
    "w-[160px] h-[100px] sm:w-[240px] sm:h-[150px]",
    "w-[100px] h-[60px] sm:w-[150px] sm:h-[95px]",
    "w-[110px] h-[70px] sm:w-[170px] sm:h-[105px]",
    "w-[110px] h-[70px] sm:w-[180px] sm:h-[110px]",
  ];

  const positions = [
    "top-2 left-2 sm:top-4 sm:left-8 rotate-[-6deg]",
    "top-4 right-2 sm:top-10 sm:right-6 rotate-[5deg]",
    "top-[38%] left-1 sm:left-2 rotate-[-8deg]",
    "top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2",
    "top-[40%] right-1 sm:right-2 rotate-[7deg]",
    "bottom-2 left-4 sm:bottom-6 sm:left-12 rotate-[4deg]",
    "bottom-4 right-4 sm:bottom-8 sm:right-10 rotate-[-5deg]",
  ];

  const delays = [
    "0s",
    "1s",
    "2s",
    "3s",
    "1.5s",
    "2.5s",
    "3.5s",
  ];

  const durations = ["4s", "5s", "3.5s", "4.5s", "2.8s", "2.2s", "6.7s"];

  return (
    <div className="container mx-auto">
      <section className="pt-20 pb-20">
        <div className="container mx-auto px-6 grid lg:grid-cols-[1.2fr_.8fr] gap-12 items-center">
          {/* LEFT */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              variants={fadeUp}
              className="text-xs bg-white/5 border border-white/10 px-4 py-2 rounded-full gap-2 inline-flex items-center"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full relative">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-50 animate-ping"></span>
              </span>
              Accepting New Projects for Q1
            </motion.span>

            <motion.h1
              variants={fadeLeft}
              className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight"
            >
              You Imagine <br />
              <span className="bg-linear-to-r from-blue-500 to-emerald-400 bg-clip-text text-transparent">
                We Build
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-gray-400 max-w-xl text-lg sm:text-xl"
            >
              Stop dreaming and start shipping. We are the "Infinity Code Collaboration" studio for startups that need speed, quality, and a design that converts.
            </motion.p>

          <motion.div
  variants={fadeUp}
  className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start w-full sm:w-auto"
>
  <Link
    to="/contact"
    className="
      inline-flex items-center justify-center
      w-full sm:w-auto
      min-w-55
      h-12 sm:h-13
      px-6
      rounded-xl
      text-sm sm:text-base
      font-semibold
      bg-linear-to-r from-blue-600 to-indigo-500
      text-white
      shadow-[0_10px_30px_rgba(59,130,246,0.22)]
      transition-all duration-300
      hover:opacity-90 hover:scale-[1.01]
    "
  >
    <span>Start Your Project</span>
    <span className="ml-2">→</span>
  </Link>

  <Link
    to="/#work"
    className="
      inline-flex items-center justify-center
      w-full sm:w-auto
      min-w-55
      h-12 sm:h-13
      px-6
      rounded-xl
      text-sm sm:text-base
      font-semibold
      border border-white/10
      bg-white/3
      text-white
      transition-all duration-300
      hover:bg-white/5 hover:border-white/20 hover:scale-[1.01]
    "
  >
    <span>View Our Work</span>
  </Link>
</motion.div>

            <motion.div
              variants={staggerContainer}
              className="flex flex-wrap justify-center lg:justify-start gap-6 mt-8 text-sm text-gray-400"
            >
              <motion.span variants={fadeUp} className="flex items-center gap-1">
                <CircleCheck className="text-green-500 w-4 h-4" /> Fast MVPs
              </motion.span>

              <motion.span variants={fadeUp} className="flex items-center gap-1">
                <CircleCheck className="text-green-500 w-4 h-4" /> Quality-First
              </motion.span>

              <motion.span variants={fadeUp} className="flex items-center gap-1">
                <CircleCheck className="text-green-500 w-4 h-4" /> Startup-Friendly
              </motion.span>
            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate="visible"
            className="relative w-full min-h-104 sm:min-h-120 overflow-hidden"
          >
            {/* frame */}
            <div className="absolute inset-0 rounded-3xl border border-[#171D29] backdrop-blur-sm"></div>

            {/* background images */}
            {bgImages.map((img, i) => (
              <motion.img
                title='bg_img'
                key={i}
                src={img}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 0.5, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.08 }}
                style={{ animationDelay: delays[i], animationDuration: durations[i] }}
                className={`absolute ${sizes[i]} object-cover rounded-xl blur-[1px] shadow-xl ${positions[i]} float`}
              />
            ))}

            {/* top card */}
            <motion.div
              initial={{ opacity: 0, y: 40, rotate: -3 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="
                absolute
                top-15 left-1/2 -translate-x-1/2
                sm:left-10 sm:translate-x-0
                w-48 h-28 sm:w-72 sm:h-36
                rounded-xl border border-white/10
                overflow-hidden backdrop-blur-md
                z-20
              "
            >
              <img title='img1' src="/projects/p5.jpg" className="w-full h-full object-cover" />
            </motion.div>

            {/* bottom card */}
            <motion.div
              initial={{ opacity: 0, y: 40, rotate: 3 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="
                absolute
                bottom-7.5 left-1/2 -translate-x-1/2
                sm:right-12 sm:left-auto sm:translate-x-0
                w-48 h-32 sm:w-72 sm:h-44
                rounded-xl border border-white/10
                overflow-hidden backdrop-blur-md
                z-20
              "
            >
              <img title='img2' src="/projects/p2.webp" className="w-full h-full object-cover" />
            </motion.div>

            {/* center */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1 }}
              className="
                absolute left-1/2 top-[52%]
                -translate-x-1/2 -translate-y-1/2
                bg-black/90 px-4 py-2 sm:px-8 sm:py-4
                rounded-xl border border-white/10
                shadow-2xl text-center
                z-30
              "
            >
              <p className="text-xl sm:text-3xl font-bold">100+</p>

              <p className="text-[10px] sm:text-xs tracking-widest text-gray-400">
                PROJECTS SHIPPED
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}