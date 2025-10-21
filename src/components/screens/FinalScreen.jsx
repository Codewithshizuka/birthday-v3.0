"use client"
import { motion } from "framer-motion"
import Image from "next/image"

export default function FinalScreen({ onNext }) {
  return (
    <motion.div
  className="flex flex-col items-center justify-center min-h-screen text-center space-y-6 bg-gradient-to-tr from-purple-800/40 to-black/70 p-8 rounded-3xl shadow-2xl"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <Image src="/gifs/surprise.gif" alt="Surprise" width={180} height={180} />
      <h2 className="text-2xl text-pink-400 font-semibold">Lots of love for you ❤️</h2>
      <p className="text-white/80 italic">
        Once again happy bday I want to wish you in na different way, if you were with me I would have wished you in a more beautiful way
        Hope you loved your surprise�
      </p>
      <button
        onClick={onNext}
        className="px-6 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition"
      >
        ↻ Replay
      </button>
    </motion.div>
  )
}
