import React from 'react';
import { Swords, Brain, Trophy, Rocket, ChevronRight, Zap } from 'lucide-react';
import { motion } from 'motion/react';

interface HomeProps {
  setActiveTab: (tab: string) => void;
}

export default function Home({ setActiveTab }: HomeProps) {
  return (
    <div className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 hero-glow -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-1 space-y-8 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-black uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Season 4 Live Now
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-black tracking-tight leading-[0.9] text-white">
              THE ULTIMATE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-blue">ANIME ARENA.</span>
            </h1>
            
            <p className="text-xl text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Face-off in epic anime battles, test your knowledge with themed quizzes, and climb the global leaderboard to become the ultimate Otaku.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4">
              <button 
                onClick={() => setActiveTab('arena')}
                className="group relative bg-primary hover:scale-105 transition-transform text-white px-10 py-5 rounded-xl font-bold text-lg flex items-center gap-3 shadow-xl shadow-primary/20"
              >
                Start Mashing
                <Rocket className="size-6 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => setActiveTab('leaderboard')}
                className="px-10 py-5 rounded-xl font-bold text-lg border border-primary/20 hover:bg-primary/5 transition-all flex items-center gap-3"
              >
                View Rankings
                <Trophy className="size-6" />
              </button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-8 pt-8 opacity-60">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-white italic">1.2M+</div>
                <div className="text-xs uppercase tracking-tighter">Votes Cast</div>
              </div>
              <div className="w-px h-8 bg-primary/20"></div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-white italic">45k</div>
                <div className="text-xs uppercase tracking-tighter">Active Users</div>
              </div>
              <div className="w-px h-8 bg-primary/20"></div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-white italic">800+</div>
                <div className="text-xs uppercase tracking-tighter">Quizzes</div>
              </div>
            </div>
          </motion.div>

          {/* Face-off Preview */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex-1 w-full max-w-xl"
          >
            <div className="relative grid grid-cols-2 gap-4 p-4 glass-card rounded-2xl overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="vs-badge size-16 rounded-full border-4 border-background-dark flex items-center justify-center shadow-2xl">
                  <span className="text-white font-black italic text-2xl tracking-tighter">VS</span>
                </div>
              </div>
              
              {/* Contender 1 */}
              <div className="group relative h-[450px] rounded-xl overflow-hidden cursor-pointer border border-white/5">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10"></div>
                <img 
                  src="https://picsum.photos/seed/anime1/400/600" 
                  alt="Anime Contender 1" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">Challenger</span>
                  <h3 className="text-xl font-bold text-white">Shadow Monarch</h3>
                </div>
              </div>
              
              {/* Contender 2 */}
              <div className="group relative h-[450px] rounded-xl overflow-hidden cursor-pointer border border-white/5">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10"></div>
                <img 
                  src="https://picsum.photos/seed/anime2/400/600" 
                  alt="Anime Contender 2" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <span className="text-[10px] font-bold text-accent-blue uppercase tracking-[0.2em]">Defender</span>
                  <h3 className="text-xl font-bold text-white">Cursed King</h3>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Path Selection */}
        <section className="py-24">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-black italic text-white">CHOOSE YOUR PATH</h2>
            <div className="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div 
              onClick={() => setActiveTab('arena')}
              className="glass-card p-8 rounded-2xl group hover:border-primary/50 transition-all cursor-pointer"
            >
              <div className="size-16 rounded-xl bg-primary/20 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                <Swords className="size-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 italic">Face-off</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Two titans enter, one remains. Vote in blind match-ups to determine the global community rankings.
              </p>
              <div className="flex items-center text-primary font-bold text-sm uppercase tracking-wider group-hover:gap-2 transition-all">
                Enter Arena <ChevronRight className="size-4 ml-1" />
              </div>
            </div>

            <div 
              onClick={() => setActiveTab('quizzes')}
              className="glass-card p-8 rounded-2xl group hover:border-accent-blue/50 transition-all cursor-pointer"
            >
              <div className="size-16 rounded-xl bg-accent-blue/20 flex items-center justify-center text-accent-blue mb-8 group-hover:scale-110 transition-transform">
                <Brain className="size-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 italic">Otaku Quizzes</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Test your lore knowledge with dynamic themed quizzes. From Shonen basics to Seinen obscurities.
              </p>
              <div className="flex items-center text-accent-blue font-bold text-sm uppercase tracking-wider group-hover:gap-2 transition-all">
                Take a Quiz <ChevronRight className="size-4 ml-1" />
              </div>
            </div>

            <div 
              onClick={() => setActiveTab('leaderboard')}
              className="glass-card p-8 rounded-2xl group hover:border-white/30 transition-all cursor-pointer"
            >
              <div className="size-16 rounded-xl bg-white/10 flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform">
                <Trophy className="size-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 italic">Global Rank</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Earn points for every vote and quiz. Climb the ranks to unlock exclusive profile frames and badges.
              </p>
              <div className="flex items-center text-white font-bold text-sm uppercase tracking-wider group-hover:gap-2 transition-all">
                Climb Rankings <ChevronRight className="size-4 ml-1" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
