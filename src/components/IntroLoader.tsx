import { motion } from "framer-motion";
// import logo from "../assets/logo.jpeg";
// import logo1 from '../assets/logos/Gemini_Generated_Image_4e6sei4e6sei4e6s-removebg-preview.png'
import logo2 from '../assets/logos//Gemini_Generated_Image_uzp7zxuzp7zxuzp7-removebg-preview-removebg-preview.png'
// import logo3 from '../assets/logos/image-removebg-preview (1).png'
// import logo4 from '../assets/logos/image-removebg-preview.png'


export default function IntroLoader() {
  return (
    <motion.div
      className="fixed inset-0 z-9999 flex items-center justify-center overflow-hidden bg-[#090E18]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02, transition: { duration: 0.7, ease: "easeInOut" } }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.08),transparent_28%)]" />

      <div className="relative flex flex-col items-center justify-center">
        <motion.div
          className="absolute h-65 w-65 rounded-full bg-cyan-400/10 blur-3xl"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
        />

        <motion.div
          className="absolute h-85 w-85 rounded-full border border-cyan-400/8"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{
            opacity: [0.15, 0.3, 0.15],
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 3,
            delay: 1.1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute h-55 w-55 rounded-full border border-cyan-300/25"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1, rotate: 360 }}
          transition={{
            opacity: { duration: 0.8, delay: 1 },
            scale: { duration: 0.8, delay: 1, ease: "easeOut" },
            rotate: { duration: 8, delay: 1.2, repeat: Infinity, ease: "linear" },
          }}
        />

        <motion.div
          className="absolute h-46.25 w-46.25 rounded-full border border-white/10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, rotate: -360 }}
          transition={{
            opacity: { duration: 0.8, delay: 1.15 },
            scale: { duration: 0.8, delay: 1.15, ease: "easeOut" },
            rotate: { duration: 10, delay: 1.25, repeat: Infinity, ease: "linear" },
          }}
        />

        <motion.div
          initial={{ x: -160, opacity: 0, scale: 0.85 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <motion.img
            src={logo2}
            alt="ICC logo"
            className="mx-auto h-20 w-20 rounded-full object-cover "
            animate={{ y: [0, -3, 0] }}
            transition={{
              duration: 2.4,
              delay: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        <motion.h1
          initial={{ x: 160, opacity: 0, letterSpacing: "0.35em" }}
          animate={{ x: 0, opacity: 1, letterSpacing: "0.12em" }}
          transition={{ duration: 0.85, delay: 0.15, ease: "easeOut" }}
          className="relative z-10 mt-5 text-3xl font-semibold text-white sm:text-4xl"
        >
          ICC
        </motion.h1>

        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 120, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
          className="relative z-10 mt-4 h-px bg-linear-to-r from-transparent via-cyan-300/70 to-transparent"
        />

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="relative z-10 mt-4 text-xs uppercase tracking-[0.22em] text-white/35"
        >
          Initializing experience
        </motion.p>
      </div>
    </motion.div>
  );
}