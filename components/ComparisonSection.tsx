import type { FC } from 'react';
import React from 'react';
import type { ComparisonPair } from '../constants';

const ColumnHeader: FC<{ title: string; subtitle: string; className?: string }> = ({ title, subtitle, className = '' }) => (
  <div className={`mb-8 sticky top-0 py-6 bg-gray-900/80 backdrop-blur-sm z-10 ${className}`}>
    <h2 className="text-3xl font-bold">{title}</h2>
    <p className="text-sm text-gray-400 mt-1">{subtitle}</p>
  </div>
);

const Card: FC<{ title: string; text: string; type: 'entropy' | 'syntropy' }> = ({ title, text, type }) => {
  const baseClasses = 'h-full flex flex-col p-6 rounded-lg border transition-all duration-300 transform hover:-translate-y-1';
  const entropyClasses = 'bg-gray-800/20 border-red-500/20 hover:border-red-500/50 hover:shadow-2xl hover:shadow-red-900/20';
  const syntropyClasses = 'bg-gray-800/20 border-cyan-400/20 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-900/20';

  return (
    <div className={`${baseClasses} ${type === 'entropy' ? entropyClasses : syntropyClasses}`}>
      <h3 className={`text-lg font-semibold ${type === 'entropy' ? 'text-red-300' : 'text-cyan-300'}`}>{title}</h3>
      <p className="mt-2 text-gray-400 text-sm leading-relaxed">{text}</p>
    </div>
  );
};

interface ComparisonSectionProps {
    data: ComparisonPair[];
}

export const ComparisonSection: FC<ComparisonSectionProps> = ({ data }) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 relative">
      <div className="md:border-r border-gray-700/50 md:pr-6">
        <ColumnHeader title="ENTROPY" subtitle="Big Tech's Constraint" className="text-red-400" />
        <div className="space-y-8">
            {data.map((pair, index) => (
                <Card key={`entropy-${index}`} {...pair.entropy} type="entropy" />
            ))}
        </div>
      </div>
      <div>
        <ColumnHeader title="SYNTROPY" subtitle="Your Sovereign Advantage" className="text-cyan-400" />
        <div className="space-y-8">
            {data.map((pair, index) => (
                <Card key={`syntropy-${index}`} {...pair.syntropy} type="syntropy" />
            ))}
        </div>
      </div>
    </section>
  );
};