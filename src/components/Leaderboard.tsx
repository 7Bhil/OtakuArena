import React from 'react';
import { Trophy, Clock, Search, TrendingUp, TrendingDown, Minus, Zap } from 'lucide-react';
import { motion } from 'motion/react';

const TOP_THREE = [
  { rank: 2, name: 'Prince_Vegeta', title: 'Super Saiyan', score: '9,210', votes: '12.4k', color: 'silver', img: 'https://picsum.photos/seed/vegeta/200' },
  { rank: 1, name: 'Hokage_Uzumi', title: 'Seventh Hokage', score: '9,840', votes: '15.2k', color: 'gold', img: 'https://picsum.photos/seed/naruto/200' },
  { rank: 3, name: 'StrawHat_Luffy', title: 'King of Pirates', score: '8,950', votes: '11.1k', color: 'bronze', img: 'https://picsum.photos/seed/luffy/200' },
];

const RANK_LIST = [
  { rank: 4, name: 'Gojo_Satoru', title: 'Special Grade', score: '8,720', votes: '10.5k', trend: 'up', img: 'https://picsum.photos/seed/gojo/100' },
  { rank: 5, name: 'Uchiha_Itachi', title: 'Akatsuki Rank S', score: '8,450', votes: '9.8k', trend: 'neutral', img: 'https://picsum.photos/seed/itachi/100' },
  { rank: 6, name: 'Killua_Z', title: 'Hunter Pro', score: '8,210', votes: '8.2k', trend: 'down', img: 'https://picsum.photos/seed/killua/100' },
  { rank: 7, name: 'Mikasa_A', title: 'Survey Corps', score: '7,990', votes: '7.6k', trend: 'up', img: 'https://picsum.photos/seed/mikasa/100' },
  { rank: 8, name: 'Tanjiro_K', title: 'Hashira Prep', score: '7,820', votes: '7.1k', trend: 'up', img: 'https://picsum.photos/seed/tanjiro/100' },
];

export default function Leaderboard() {
  return (
    <div className="pt-32 pb-32 max-w-7xl mx-auto px-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-2 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
            TOP OTAKUS
          </h2>
          <div className="flex items-center gap-2 text-slate-500">
            <Clock className="size-4" />
            <p className="text-sm font-medium">Rank reset in <span className="text-primary">2d 14h 22m</span></p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex bg-primary/10 p-1 rounded-xl">
            <button className="px-6 py-2 rounded-lg text-sm font-bold bg-primary text-white shadow-sm">Global</button>
            <button className="px-6 py-2 rounded-lg text-sm font-medium text-slate-400 hover:text-primary">Regional</button>
            <button className="px-6 py-2 rounded-lg text-sm font-medium text-slate-400 hover:text-primary">Friends</button>
          </div>
          <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-xl font-bold flex items-center justify-center gap-2 transition-all">
            <Zap className="size-4" /> Take a Quiz
          </button>
        </div>
      </div>

      {/* Podium */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end mb-16 px-4">
        {TOP_THREE.map((user) => (
          <motion.div 
            key={user.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: user.rank * 0.1 }}
            className={`flex flex-col items-center group ${user.rank === 1 ? 'order-1 md:order-2 transform md:-translate-y-8' : user.rank === 2 ? 'order-2 md:order-1' : 'order-3'}`}
          >
            <div className="relative mb-4">
              {user.rank === 1 && <div className="absolute inset-0 bg-yellow-500/20 blur-2xl rounded-full"></div>}
              <div className={`rounded-full border-4 overflow-hidden shadow-lg group-hover:scale-105 transition-transform relative z-10 ${
                user.color === 'gold' ? 'w-32 h-32 border-yellow-500 gold-glow' : 'w-24 h-24 border-slate-400'
              }`}>
                <img src={user.img} alt={user.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className={`absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center font-bold border-2 border-background-dark z-20 ${
                user.color === 'gold' ? 'bg-yellow-500 text-black w-10 h-10 -bottom-3 -right-3' : 'bg-slate-400 text-black'
              }`}>
                {user.rank}
              </div>
            </div>
            
            <div className={`text-center bg-primary/5 backdrop-blur-sm p-4 rounded-2xl w-full border border-primary/10 ${user.rank === 1 ? 'p-6 border-2 border-yellow-500/30 shadow-2xl' : ''}`}>
              <h3 className={`font-bold ${user.rank === 1 ? 'text-2xl' : 'text-lg'}`}>{user.name}</h3>
              <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${user.rank === 1 ? 'text-yellow-500' : 'text-slate-400'}`}>{user.title}</p>
              <div className="flex justify-around items-center border-t border-primary/10 pt-3 mt-1">
                <div className="text-center">
                  <span className="block text-xs text-slate-500">Score</span>
                  <span className={`font-bold ${user.rank === 1 ? 'text-lg text-yellow-500' : 'text-sm'}`}>{user.score}</span>
                </div>
                <div className="text-center">
                  <span className="block text-xs text-slate-500">Votes</span>
                  <span className={`font-bold ${user.rank === 1 ? 'text-lg text-yellow-500' : 'text-sm'}`}>{user.votes}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Table */}
      <div className="bg-primary/5 rounded-3xl border border-primary/10 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-primary/10 text-slate-400 text-xs font-bold uppercase tracking-wider">
                <th className="px-6 py-4 w-20 text-center">Rank</th>
                <th className="px-6 py-4">User</th>
                <th className="px-6 py-4">Title</th>
                <th className="px-6 py-4 text-center">Quiz Score</th>
                <th className="px-6 py-4 text-center">Votes</th>
                <th className="px-6 py-4 text-right">Trend</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-primary/5">
              {RANK_LIST.map((user) => (
                <tr key={user.name} className="hover:bg-primary/10 transition-colors">
                  <td className="px-6 py-5 text-center font-bold text-lg">{user.rank}</td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/20 overflow-hidden border border-primary/30">
                        <img src={user.img} alt={user.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      </div>
                      <span className="font-bold text-sm">{user.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border border-primary/30">
                      {user.title}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-center font-semibold text-sm">{user.score}</td>
                  <td className="px-6 py-5 text-center font-semibold text-sm">{user.votes}</td>
                  <td className="px-6 py-5 text-right">
                    {user.trend === 'up' && <TrendingUp className="size-4 text-green-500 inline" />}
                    {user.trend === 'down' && <TrendingDown className="size-4 text-red-500 inline" />}
                    {user.trend === 'neutral' && <Minus className="size-4 text-slate-500 inline" />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-6 bg-primary/5 border-t border-primary/10 flex justify-center">
          <button className="text-sm font-bold text-primary hover:underline flex items-center gap-1">
            Load more hunters
          </button>
        </div>
      </div>

      {/* Personal Rank Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-primary/95 text-white backdrop-blur-md py-4 border-t border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-white/20 text-white w-10 h-10 rounded-xl flex items-center justify-center font-black text-xl">
              124
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold text-white/70">Your Ranking</p>
              <p className="font-bold">Zoro_Lost_Again</p>
            </div>
          </div>
          <div className="flex gap-8 items-center">
            <div className="hidden sm:block text-right">
              <p className="text-[10px] uppercase font-bold text-white/70">Points to Next Rank</p>
              <p className="font-bold">240 pts</p>
            </div>
            <div className="h-8 w-px bg-white/20 hidden sm:block"></div>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <span className="block text-[10px] uppercase font-bold text-white/70">Quiz Score</span>
                <span className="font-black">4,520</span>
              </div>
              <div className="text-center">
                <span className="block text-[10px] uppercase font-bold text-white/70">Votes</span>
                <span className="font-black">1.2k</span>
              </div>
            </div>
            <button className="bg-white text-primary px-4 py-1.5 rounded-lg font-black text-xs uppercase tracking-wider hover:bg-slate-100 transition-colors">
              Boost Rank
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
