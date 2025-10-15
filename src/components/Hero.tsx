"use client";

import { useState, useEffect } from "react";
import { Fighter, Icons } from "@/types";
import { fetchFighter, fetchIcons } from "@/utils/api";

interface HeroProps {
  fighter: Fighter;
  icons: Icons;
}

export default function Hero({ fighter, icons }: HeroProps) {

  return (
    <section className="relative w-full h-[500px] sm:h-[750px] overflow-hidden group rounded-bl-[20px] rounded-br-[20px]">
      {/* UFC-themed gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-red-900 to-black"></div>
      
      {/* UFC Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjMDAwMDAwIi8+CjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iI0ZGRkZGRiIvPgo8cmVjdCB4PSIyMCIgeT0iMjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iI0ZGRkZGRiIvPgo8L3N2Zz4K')]"></div>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

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

    </section>
  );
}
