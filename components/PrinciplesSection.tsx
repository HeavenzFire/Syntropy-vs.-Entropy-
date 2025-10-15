import type { FC } from 'react';
import React from 'react';
import type { Principle } from '../constants';

// FIX: Replaced JSX.Element with React.ReactElement to resolve "Cannot find namespace 'JSX'" error.
const iconMap: Record<Principle['icon'], React.ReactElement> = {
  laser: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.287 8.287 0 0 0 3-1.065 8.25 8.25 0 0 0-3-3.292m15.352 4.12a8.25 8.25 0 0 1-2.343 1.361l-6.363-6.362a8.25 8.25 0 0 1 1.361-2.343l6.362 6.362Zm-7.95-7.95a8.25 8.25 0 0 1 2.343-1.361L12 12.01l-2.048-2.047a8.25 8.25 0 0 1-1.361 2.343l6.362-6.362Z" />
    </svg>
  ),
  shield: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286Z" />
    </svg>
  ),
  signal: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.136 12.006a8.25 8.25 0 0 1 11.728 0M2.002 8.94a11.25 11.25 0 0 1 15.996 0M12 21.75a.75.75 0 0 1-.75-.75V18a.75.75 0 0 1 1.5 0v3a.75.75 0 0 1-.75.75Z" />
    </svg>
  ),
  atom: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.018 19.344c3.224-2.207 3.98-6.612 2.328-9.688m-16.69 4.344c-1.652-3.076-.896-7.481 2.328-9.688" />
    </svg>
  ),
};

const PrincipleCard: FC<Principle> = ({ title, text, emphasis, icon }) => (
  <div className="bg-gray-800/20 border border-gray-700/50 rounded-lg p-6 flex flex-col items-start">
    <div className="flex items-center gap-4">
      <div className="bg-cyan-900/50 text-cyan-300 p-3 rounded-md">
        {iconMap[icon]}
      </div>
      <h3 className="text-xl font-bold text-gray-100">{title}</h3>
    </div>
    <p className="mt-4 text-gray-400 flex-grow">{text}</p>
    <p className="mt-4 text-sm italic border-l-2 border-cyan-500 pl-4 text-cyan-300">
        {emphasis}
    </p>
  </div>
);

interface PrinciplesSectionProps {
    data: Principle[];
}

export const PrinciplesSection: FC<PrinciplesSectionProps> = ({ data }) => {
  return (
    <section className="mt-24 md:mt-32">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            The Core <span className="text-cyan-400">Syntropic</span> Principles
        </h2>
        <p className="mt-3 text-lg text-gray-400 max-w-2xl mx-auto">These are the foundational laws at work.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.map((principle, index) => (
            <PrincipleCard key={index} {...principle} />
        ))}
      </div>
    </section>
  );
};
