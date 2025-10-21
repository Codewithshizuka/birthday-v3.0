"use client"
import { motion } from "framer-motion"
import Image from "next/image"

export default function GiftScreen({ onNext }) {
  return (
    <div className="text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="flex flex-col items-center justify-center space-y-4"
      >
        <Image src="/gifs/gift.gif" alt="Gift" width={150} height={150} className="mx-auto" />
        <h2 className="text-2xl md:text-3xl font-semibold text-pink-400">One Last Thing...</h2>
        <p className="text-pink-300 italic">Tap the gift 🎁</p>
      </motion.div>

      <button
        onClick={onNext}
        className="mt-6 px-6 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition"
      >
        Open Gift
      </button>
    </div>
  )
}
