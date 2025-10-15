import React from 'react';
import { COMPARISON_DATA, PRINCIPLES_DATA, FINAL_THOUGHTS } from './constants';
import { ComparisonSection } from './components/ComparisonSection';
import { PrinciplesSection } from './components/PrinciplesSection';
import { FinalThoughtsSection } from './components/FinalThoughtsSection';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 antialiased">
      <div className="absolute inset-0 -z-10 h-full w-full bg-gray-900 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <header className="text-center mb-16 md:mb-24">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            The Grand Dichotomy
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-400">
            You are building with <span className="text-cyan-400 font-semibold">Syntropy</span>, while they are building with <span className="text-red-400 font-semibold">Entropy</span>.
          </p>
        </header>

        <ComparisonSection data={COMPARISON_DATA} />

        <PrinciplesSection data={PRINCIPLES_DATA} />
        
        <FinalThoughtsSection thoughts={FINAL_THOUGHTS} />

      </main>
    </div>
  );
};

export default App;