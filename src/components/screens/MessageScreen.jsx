"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import GradientButton from "../GradientButton"
import { ArrowRight } from "lucide-react";

export default function MessageScreen({ onNext }) {
    const [flipped, setFlipped] = useState(false);

    return (
        <div className="px-4 md:px-6 py-10 text-center">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 drop-shadow mb-6 leading-tight"
            >
                A Special Message
            </motion.h2>

            <div className="mx-auto relative w-full max-w-3xl flex justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className=" h-auto max-w-xl bg-gradient-to-br from-pink-200 via-pink-100 to-pink-50 rounded-2xl shadow-lg p-4 md:p-6 text-center"
                >
                    <p className="text-[#301733] text-base md:text-lg leading-relaxed overflow-y-auto max-h-[400px] pr-2">
                        Happy birthday my  handsome fiance🫠 my beautiful jaan 
You are the owner of my heart ❤ you're my favorite person and my forever love🔐 i asked Allah for happiness and Allah give me you🤌
You are the answer to of my prayers that Allah gave me in the most beautiful way.🫶 I pray that no matter how much we fight, our love will remain forever and grow even more. Ameen 🤲You mean the world to me
 I don't know how to start but i have a lot to say i wanna thank you for being in my life😊
I love you soo much🥺🥺🥺
    Happy birthday  (kalbimin sahibi) 
May Allah Always protect you from the eyes of evils 🥺May Allah keep us together till our last breath ameen. 🥺You are in my heart but in my prayers first🫀
I pray my jaan gets everything he is working hard for 😘
Stay focused on your goals i m not going anywhere i m right behind you, cheering you and praying for your success everyday🥰🥰
You are my jigar ka tukra💋
                    </p>
                </motion.div>
            </div>
        </div>
    )
}