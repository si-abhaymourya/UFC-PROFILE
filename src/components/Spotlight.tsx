'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { SpotlightItem, Icons } from '@/types';
import { fetchSpotlight, fetchIcons } from '@/utils/api';

interface SpotlightProps {
  spotlightItems: SpotlightItem[];
  icons: Icons;
}

export default function Spotlight({ spotlightItems, icons }: SpotlightProps) {
  return (
    <section className="gradient-dark py-10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-12">
          <h2 className="font-ufc text-4xl font-bold text-white tracking-tight">UFC SPOTLIGHT</h2>
          <div className="flex gap-3">
            <button className="spotlight-prev bg-red-600 hover:bg-red-700 p-4 rounded-full transition-all duration-300 shadow-ufc">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={icons.arrowLeft} />
              </svg>
            </button>
            <button className="spotlight-next bg-red-600 hover:bg-red-700 p-4 rounded-full transition-all duration-300 shadow-ufc">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: '.spotlight-next',
            prevEl: '.spotlight-prev',
          }}
          slidesPerView={1.2}
          spaceBetween={20}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="spotlight-swiper"
        >
          {spotlightItems.map((item) => (
            <SwiperSlide key={item.id}>
              <div className={`rounded-2xl overflow-hidden h-96 hover-lift shadow-ufc ${
                item.type === 'video' ? 'gradient-red' : 'gradient-card'
              }`}>
                <div className="relative h-56 overflow-hidden">
                  <Image 
                    src={item.image} 
                    alt={item.title}
                    width={400}
                    height={224}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white bg-opacity-90 rounded-full p-5 shadow-2xl">
                        <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                          <path d={icons.play} />
                        </svg>
                      </div>
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                      item.type === 'video' 
                        ? 'bg-white text-red-600' 
                        : 'bg-red-600 text-white'
                    }`}>
                      {item.type.toUpperCase()}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-semibold mb-3 leading-tight">{item.title}</h3>
                  <p className={`text-sm mb-4 ${
                    item.type === 'video' ? 'text-red-100' : 'text-gray-400'
                  }`}>
                    {item.description}
                  </p>
                  <div className={`flex items-center font-semibold text-sm ${
                    item.type === 'video' ? 'text-white' : 'text-red-500'
                  }`}>
                    {item.actionText}
                    <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d={icons.arrowRight} clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}