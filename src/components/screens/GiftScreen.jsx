"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function GiftScreen({ onNext }) {
  const [isOpened, setIsOpened] = useState(false)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-pink-950 to-purple-900 text-center text-white">
      {!isOpened ? (
        <>
          <motion.img
            src="/gifs/gift.gif"
            alt="Gift Box"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-56 mb-6"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpened(true)}
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:shadow-lg transition"
          >
            🎁 Tap to Open
          </motion.button>
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center"
        >
          <img
            src="/gifs/surprise.gif"
            alt="Surprise"
            className="w-64 mb-4"
          />
          <p className="text-pink-200 text-lg mb-4 font-semibold">
            Lots of love for you ❤️
          </p>
          <p className="text-pink-100 mb-6">
            Once again, Happy Birthday! Hope you loved your surprise.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onNext}
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-5 py-2 rounded-full font-medium shadow-md hover:shadow-lg transition"
          >
            ↻ Replay
          </motion.button>
        </motion.div>
      )}
    </div>
  )
}
