"use client"

import { useState } from 'react'

const areaImages = [
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000", // Generic industrial
  "https://images.unsplash.com/photo-1487881079313-1b91340a6b7e?auto=format&fit=crop&q=80&w=1000", // Substations
  "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1000", // Rural electrification
  "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=1000", // Solar IPP
  "https://images.unsplash.com/photo-1548612185-30061e8784be?auto=format&fit=crop&q=80&w=1000", // Transmission lines
  "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&q=80&w=1000", // Civil works
]

export default function InteractiveAreas({ areas }: { areas: any }) {
  const [activeIdx, setActiveIdx] = useState(0)

  return (
    <div className="mt-12 grid lg:grid-cols-[1fr_320px] gap-4 items-stretch">
      {/* Image Side */}
      <div className="relative min-h-[450px] lg:min-h-[520px] w-full rounded-md overflow-hidden">
        {areaImages.map((src, i) => (
          <img 
            key={src}
            src={src} 
            alt={areas.items[i]?.title || 'Area image'}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${activeIdx === i ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      </div>

      {/* Tabs Side */}
      <div className="flex flex-col gap-1.5 h-full">
        {areas.items.map((area: any, i: number) => (
          <button
            key={i}
            onClick={() => setActiveIdx(i)}
            className={`text-left px-6 py-4 rounded-md transition-colors duration-200 text-lg font-medium flex-1 ${
              activeIdx === i 
                ? 'bg-[#7a729e] text-white' 
                : 'bg-[#f4f5f7] text-gray-800 hover:bg-[#eaeef3]'
            }`}
          >
            {area.title}
          </button>
        ))}
      </div>
    </div>
  )
}
