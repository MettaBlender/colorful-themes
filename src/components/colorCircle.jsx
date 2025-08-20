"use client";

import { useState } from "react";

export default function ColorCircle({colors, segments, title}) {

  // Berechne die Koordinaten für jedes Kuchenstück
  const getSegmentPath = (index, totalSegments, radius = 100) => {
    const angle = (360 / totalSegments) * index;
    const nextAngle = (360 / totalSegments) * (index + 1);
    const startX = radius + radius * Math.cos((angle * Math.PI) / 180);
    const startY = radius + radius * Math.sin((angle * Math.PI) / 180);
    const endX = radius + radius * Math.cos((nextAngle * Math.PI) / 180);
    const endY = radius + radius * Math.sin((nextAngle * Math.PI) / 180);
    const largeArcFlag = nextAngle - angle <= 180 ? 0 : 1;

    return `M ${radius},${radius} L ${startX},${startY} A ${radius},${radius} 0 ${largeArcFlag} 1 ${endX},${endY} Z`;
  };

  return (
    <div className="flex flex-col items-center justify-center my-2 p-4">
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        className="drop-shadow-md"
      >
        {Array.from({ length: segments }).map((_, index) => (
          <path
            key={index}
            d={getSegmentPath(index, segments)}
            fill={colors[index % colors.length]}
            className={`transition-colors duration-300`}
          />
        ))}
      </svg>
      <p className="mt-3 w-full text-center text-2xl">{title}</p>
    </div>
  );
}
