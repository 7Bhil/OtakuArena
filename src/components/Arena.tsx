import React from 'react';
import { Swords, Vote, SkipForward, Flag, Circle, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export default function Arena() {
  return (
    <div className="relative min-h-screen flex flex-col pt-20">
      {/* Background Overlay */}
      <div className="fixed inset-0 z-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-background-dark via-primary/10 to-background-dark"></div>
        <div className="grid grid-cols-4 grid-rows-3 gap-4 p-4 h-full blur-3xl scale-110">
          <div className="bg-primary/20 rounded-xl"></div>
          <div className="bg-slate-800 rounded-xl"></div>
          <div className="bg-primary/10 rounded-xl"></div>
          <div className="bg-slate-900 rounded-xl"></div>
        </div>
      </div>

      <div className="relative z-10 flex-grow flex flex-col">
        {/* Progress */}
        <div className="max-w-4xl mx-auto w-full px-6 py-8">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="text-primary"><Vote className="size-4" /></span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Objectif quotidien</span>
            </div>
            <span className="text-xs font-bold text-primary">13 / 20 Votes</span>
          </div>
          <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-primary shadow-[0_0_10px_rgba(140,43,238,0.5)] rounded-full" style={{ width: '65%' }}></div>
          </div>
        </div>

        {/* Arena */}
        <main className="flex-grow flex flex-col items-center justify-center p-6">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-extrabold text-white mb-2 tracking-tight">Qui gagne le combat ?</h2>
            <p className="text-slate-400 text-lg">Choisissez votre favori pour grimper dans le classement mondial</p>
          </div>

          <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 relative items-center">
            {/* Left Contender */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="group relative flex flex-col items-center lg:items-end lg:pr-16"
            >
              <div className="relative w-full max-w-[400px] aspect-[2/3] rounded-2xl overflow-hidden shadow-2xl border-2 border-transparent group-hover:border-primary/50 transition-all">
                <img 
                  src="https://picsum.photos/seed/jjk/400/600" 
                  alt="Jujutsu Kaisen" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="px-3 py-1 bg-primary text-[10px] font-black uppercase tracking-tighter rounded-md mb-2 inline-block">Studio MAPPA</span>
                  <h3 className="text-3xl font-black text-white leading-tight">Jujutsu<br />Kaisen</h3>
                </div>
              </div>
              <div className="mt-6 w-full max-w-[400px]">
                <button className="w-full bg-primary hover:bg-primary/90 text-white font-black py-4 rounded-xl shadow-xl transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-lg active:scale-95">
                  Voter Maintenant <Vote className="size-6" />
                </button>
              </div>
            </motion.div>

            {/* VS Badge */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:block">
              <div className="vs-badge w-24 h-24 rounded-full flex items-center justify-center border-4 border-background-dark shadow-2xl">
                <span className="text-white text-3xl font-black tracking-tighter italic">VS</span>
              </div>
            </div>

            {/* Right Contender */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="group relative flex flex-col items-center lg:items-start lg:pl-16"
            >
              <div className="relative w-full max-w-[400px] aspect-[2/3] rounded-2xl overflow-hidden shadow-2xl border-2 border-transparent group-hover:border-primary/50 transition-all">
                <img 
                  src="https://picsum.photos/seed/csm/400/600" 
                  alt="Chainsaw Man" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="px-3 py-1 bg-primary text-[10px] font-black uppercase tracking-tighter rounded-md mb-2 inline-block">Studio MAPPA</span>
                  <h3 className="text-3xl font-black text-white leading-tight">Chainsaw<br />Man</h3>
                </div>
              </div>
              <div className="mt-6 w-full max-w-[400px]">
                <button className="w-full bg-primary hover:bg-primary/90 text-white font-black py-4 rounded-xl shadow-xl transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-lg active:scale-95">
                  Voter Maintenant <Vote className="size-6" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Actions */}
          <div className="mt-16 flex items-center gap-6">
            <button className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 font-bold uppercase tracking-widest text-sm">
              <SkipForward className="size-4" /> Passer le combat
            </button>
            <div className="w-px h-4 bg-slate-700"></div>
            <button className="text-slate-500 hover:text-red-400 transition-colors flex items-center gap-2 font-bold uppercase tracking-widest text-[10px]">
              <Flag className="size-3" /> Signaler un problème
            </button>
          </div>
        </main>

        {/* Footer */}
        <footer className="p-8 text-center bg-background-dark/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-xs font-medium">© 2024 AnimeBattle Platform. Toutes les œuvres sont la propriété de leurs studios respectifs.</p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
                <Zap className="size-3" /> 12.4k Votants actifs
              </div>
              <div className="flex items-center gap-2 text-green-400 font-bold text-xs uppercase tracking-widest">
                <Circle className="size-3 fill-green-400" /> Serveur en ligne
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
