import React from 'react';
import { Brain, Trophy, Search, Star, List, ChevronDown, Clock, CheckCircle, BarChart3, Zap } from 'lucide-react';
import { motion } from 'motion/react';

const QUIZZES = [
  { id: 1, title: 'Dragon Ball: Saiyan History', desc: 'Test your knowledge of the Saiyan race from Planet Vegeta to the Tournament of Power.', questions: 25, op: '+850 OP', category: 'Shonen', difficulty: 'Hard', img: 'https://picsum.photos/seed/dbz/400/300' },
  { id: 2, title: 'Studio Ghibli Master', desc: 'Identify the magical creatures and hidden details from Miyazaki\'s greatest works.', questions: 15, op: '+300 OP', category: 'Fantasy', difficulty: 'Easy', img: 'https://picsum.photos/seed/ghibli/400/300' },
  { id: 3, title: '90s Classics: Neon Era', desc: 'How well do you remember the golden age of Evangelion, Cowboy Bebop, and Sailor Moon?', questions: 20, op: '+550 OP', category: 'Retro', difficulty: 'Medium', img: 'https://picsum.photos/seed/retro/400/300' },
  { id: 4, title: 'Seinen Masterpiece Check', desc: 'A deep dive into Berserk, Monster, and Vagabond. Only for the true connoisseurs.', questions: 40, op: '+1,200 OP', category: 'Seinen', difficulty: 'Extreme', img: 'https://picsum.photos/seed/seinen/400/300' },
  { id: 5, title: 'Isekai Specialist Exam', desc: 'Reincarnated? Summoned? Test your knowledge of worlds beyond our own.', questions: 20, op: '+500 OP', category: 'Isekai', difficulty: 'Medium', img: 'https://picsum.photos/seed/isekai/400/300' },
  { id: 6, title: 'Sci-Fi Anime Essentials', desc: 'Ghost in the Shell to Psycho-Pass. Can you handle the tech-heavy questions?', questions: 10, op: '+250 OP', category: 'Cyber', difficulty: 'Easy', img: 'https://picsum.photos/seed/scifi/400/300' },
];

export default function Quizzes() {
  return (
    <div className="pt-32 pb-20 max-w-[1600px] mx-auto w-full px-6 lg:px-10 flex flex-col lg:flex-row gap-8">
      {/* Sidebar */}
      <aside className="w-full lg:w-80 flex flex-col gap-6">
        <div className="bg-primary/5 rounded-xl p-6 border border-primary/10 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <div className="size-14 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20">
              <Trophy className="size-8" />
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-widest text-slate-400 font-bold">Rang Actuel</h3>
              <p className="text-xl font-bold text-white">Élite Classe-S</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Progression vers Légende</span>
              <span className="text-primary font-bold">75%</span>
            </div>
            <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-primary" style={{ width: '75%' }}></div>
            </div>
            <p className="text-[11px] text-slate-400 text-center font-medium">1 250 XP restants pour le statut Légende</p>
          </div>
          <div className="mt-8 flex flex-col gap-2">
            <button className="w-full py-2.5 px-4 bg-primary text-white rounded-lg font-bold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-md shadow-primary/30">
              Voir le profil complet
            </button>
            <button className="w-full py-2.5 px-4 bg-primary/10 text-white rounded-lg font-bold text-sm flex items-center justify-center gap-2 hover:bg-primary/20 transition-all">
              Boutique (2 450 OP)
            </button>
          </div>
        </div>

        <div className="bg-primary/5 rounded-xl p-6 border border-primary/10 shadow-sm">
          <h3 className="text-white font-bold mb-4 flex items-center gap-2">
            <Clock className="size-4 text-primary" /> Quiz Récents
          </h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500">
                <CheckCircle className="size-5" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-slate-200 line-clamp-1">Naruto : Examens Chuunin</p>
                <p className="text-xs text-slate-500">Score 95% • +450 OP</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500">
                <BarChart3 className="size-5" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-slate-200 line-clamp-1">Classiques Rétro des années 90</p>
                <p className="text-xs text-slate-500">Score 62% • +120 OP</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <section className="flex-1 flex flex-col gap-6">
        <div className="relative overflow-hidden rounded-2xl bg-primary/10 border border-primary/20 p-8">
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-black text-white leading-tight mb-2">Centre des Quiz</h1>
              <p className="text-slate-400 text-lg max-w-lg">Testez vos connaissances en anime, grimpez dans le classement mondial et gagnez des points Otaku (OP) pour des récompenses exclusives.</p>
              <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
                <button className="bg-primary text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-lg shadow-primary/20">
                  <Zap className="size-5" /> Défi Aléatoire
                </button>
                <button className="bg-background-dark text-white border border-primary/20 px-6 py-3 rounded-xl font-bold hover:bg-primary/5 transition-all">
                  Comment jouer
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-3 overflow-x-auto pb-2 no-scrollbar whitespace-nowrap">
          <button className="px-5 py-2.5 rounded-xl bg-primary text-white font-bold text-sm shadow-md shadow-primary/20">Tous les Quiz</button>
          {['Maître Shonen', 'Rétro 90s', 'Studio Ghibli', 'Contes Isekai', 'Savoir Seinen'].map(cat => (
            <button key={cat} className="px-5 py-2.5 rounded-xl bg-primary/5 text-slate-300 font-semibold text-sm border border-primary/10 hover:border-primary transition-all">
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {QUIZZES.map((quiz) => (
            <motion.div 
              key={quiz.id}
              whileHover={{ y: -5 }}
              className="group bg-primary/5 rounded-2xl overflow-hidden border border-primary/10 flex flex-col hover:border-primary transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <img src={quiz.img} alt={quiz.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent"></div>
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-primary/90 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase">{quiz.category}</span>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                    quiz.difficulty === 'Hard' || quiz.difficulty === 'Extreme' ? 'bg-orange-600/90' : 'bg-green-500/90'
                  }`}>{quiz.difficulty === 'Hard' ? 'Difficile' : quiz.difficulty === 'Extreme' ? 'Extrême' : quiz.difficulty === 'Medium' ? 'Moyen' : 'Facile'}</span>
                </div>
                <div className="absolute bottom-4 left-4 flex items-center gap-1 text-white">
                  <Star className="size-3 fill-yellow-500 text-yellow-500" />
                  <span className="text-xs font-bold">{quiz.op}</span>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{quiz.title}</h4>
                <p className="text-sm text-slate-400 mt-2 line-clamp-2">{quiz.desc}</p>
                <div className="mt-auto pt-5 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-slate-500">
                    <List className="size-4" />
                    <span className="text-xs font-medium">{quiz.questions} Questions</span>
                  </div>
                  <button className="bg-primary/10 text-primary hover:bg-primary hover:text-white px-4 py-2 rounded-lg text-sm font-bold transition-all">Lancer le Quiz</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <button className="px-8 py-3 bg-primary/5 border border-primary/10 rounded-xl text-white font-bold hover:bg-primary/10 transition-all flex items-center gap-2">
            <ChevronDown className="size-5" /> Charger plus de quiz
          </button>
        </div>
      </section>
    </div>
  );
}
