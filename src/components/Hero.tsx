"use client";

import { useState, useEffect } from "react";
import { Fighter, Icons } from "@/types";
import { fetchFighter, fetchIcons } from "@/utils/api";

interface HeroProps {
  fighter: Fighter;
  icons: Icons;
}

export default function Hero({ fighter, icons }: HeroProps) {
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <section className="relative w-full h-[500px] sm:h-[750px] overflow-hidden group rounded-bl-[20px] rounded-br-[20px]">
      <video
        autoPlay
        muted={isMuted}
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={fighter.videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content - HIDDEN by default, shows ON HOVER */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
        <div className="text-center max-w-4xl px-6">
          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {fighter.tags.map((tag, index) => (
              <span
                key={index}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold text-white border ${
                  tag === "Title Holder"
                    ? "gradient-red border-red-500 shadow-lg"
                    : "gradient-card border-gray-600"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Fighter Name - HIDDEN by default, shows ON HOVER */}
          <div className="mb-8">
            <p className="text-gray-300 text-xl font-medium mb-3 tracking-wider">
              {fighter.nickname}
            </p>
            <h1 className="font-ufc text-6xl lg:text-8xl font-bold text-white mb-6 tracking-tight uppercase">
              {fighter.name}
            </h1>
            <p className="text-gray-300 text-xl font-light mb-2">
              {fighter.division}
            </p>
            <p className="text-white text-3xl font-semibold">
              {fighter.record} (W-L-D)
            </p>
          </div>
        </div>
      </div>

      {/* Mute/Unmute Button */}
      <button
        onClick={toggleMute}
        className="fixed top-6 right-6 z-20 bg-black bg-opacity-70 hover:bg-opacity-90 text-white p-3 rounded-full transition-all duration-300 shadow-ufc"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d={isMuted ? icons.mute : icons.unmute}
            clipRule="evenodd"
          />
        </svg>
      </button>
    </section>
  );
}
