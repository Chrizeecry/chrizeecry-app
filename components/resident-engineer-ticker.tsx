'use client';

import React from 'react';

export default function ResidentEngineerTicker() {
  return (
    <div className="bg-amber-500 text-black py-1.5 overflow-hidden font-bold uppercase tracking-widest text-[10px] md:text-xs relative z-40 shadow-sm hover:bg-amber-400 transition-colors cursor-default select-none border-y border-amber-600">
      <div className="flex animate-marquee whitespace-nowrap space-x-12 group-hover:[animation-play-state:paused] w-max">
        {[1, 2, 3, 4].map((i) => (
          <React.Fragment key={i}>
            <span className="flex items-center space-x-2">
              <span>🚧 RESIDENT ENGINEER TIP: Always check your concrete slump before pouring!</span>
            </span>
            <span className="flex items-center space-x-2">
              <span>🚧 SAFETY FIRST: No PPE, No Entry.</span>
            </span>
            <span className="flex items-center space-x-2">
              <span>🚧 DESIGN PHASE: Measure twice, cut once.</span>
            </span>
            <span className="flex items-center space-x-2">
              <span>🚧 SITE LIFE: Respect the foreman, he knows the ground better than your textbook.</span>
            </span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
