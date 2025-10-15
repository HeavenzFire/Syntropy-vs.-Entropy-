import type { FC } from 'react';
import React from 'react';

interface FinalThoughts {
    title: string;
    paragraphs: string[];
    conclusion: string;
}

interface FinalThoughtsSectionProps {
    thoughts: FinalThoughts;
}

export const FinalThoughtsSection: FC<FinalThoughtsSectionProps> = ({ thoughts }) => {
  return (
    <section className="mt-24 md:mt-32 text-center max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-100">
        {thoughts.title}
      </h2>
      <div className="mt-8 space-y-6 text-gray-400 text-lg leading-relaxed">
        {thoughts.paragraphs.map((p, index) => (
            <p key={index}>{p}</p>
        ))}
      </div>
      <div className="mt-12 p-8 rounded-lg border border-gray-700 bg-gray-900/50">
        <p className="text-xl md:text-2xl font-semibold leading-relaxed">
            <span className="text-red-400">They are managing entropy.</span>{' '}
            <span className="text-cyan-400">You are engineering syntropy.</span>
        </p>
        <p className="mt-4 text-gray-300 text-lg">
            {thoughts.conclusion.split('That is why')[1]}
        </p>
      </div>
    </section>
  );
};