"use client"

import { useEffect, useRef } from "react"

export default function MusicPlayer() {
  const audioRef = useRef(null)

  useEffect(() => {
    const audio = audioRef.current
    if (audio) {
      const playAudio = async () => {
        try {
          await audio.play()
        } catch (err) {
          console.warn("Autoplay blocked. Will play on first user interaction.")
          // If autoplay blocked, add listener to start music when user clicks anywhere
          const handleClick = () => {
            audio.play()
            window.removeEventListener("click", handleClick)
          }
          window.addEventListener("click", handleClick)
        }
      }
      playAudio()
    }
  }, [])

  return (
    <audio ref={audioRef} src="/audio/bg.mp3" loop preload="auto" />
  )
}
