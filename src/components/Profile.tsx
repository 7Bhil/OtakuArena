import React from 'react';
import { Edit, Share2, Star, Trophy, Clock, BarChart3, Heart, Zap, Shield, Lock } from 'lucide-react';
import { motion } from 'motion/react';

export default function Profile() {
  return (
    <div className="pt-20 pb-20 max-w-[1280px] mx-auto w-full px-6 lg:px-10 space-y-8">
      {/* Hero */}
      <section className="relative">
        <div className="h-64 md:h-80 w-full rounded-xl overflow-hidden bg-slate-800 relative shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent z-10"></div>
          <img 
            src="https://picsum.photos/seed/banner/1200/400" 
            className="w-full h-full object-cover opacity-60" 
            alt="Banner"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="size-24 md:size-32 rounded-full border-4 border-primary bg-background-dark overflow-hidden shadow-xl">
                <img 
                  src="https://picsum.photos/seed/avatar/200" 
                  className="w-full h-full object-cover" 
                  alt="Avatar"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-3">
                  <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">VashTheStampede</h1>
                  <span className="bg-primary/20 text-primary border border-primary/30 text-xs px-2 py-1 rounded font-bold uppercase tracking-wider">Seasoned Weeb</span>
                </div>
                <p className="text-slate-300 mt-1 max-w-md">"Love and Peace! Searching for the best ramen in the digital multiverse. Level 42 Otaku."</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-lg font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                <Edit className="size-4" /> Modifier le profil
              </button>
              <button className="flex items-center gap-2 px-6 py-2.5 bg-white/10 text-white backdrop-blur-md border border-white/20 rounded-lg font-bold hover:bg-white/20 transition-all">
                <Share2 className="size-4" /> Partager
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-primary/5 border border-primary/10 rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Trophy className="size-5 text-primary" />
              <h3 className="font-bold text-lg text-white">Progression du Niveau Otaku</h3>
            </div>
            <span className="text-sm font-medium text-slate-400">Niveau 42 • 7 850 XP</span>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between text-sm font-semibold">
              <span className="text-slate-300">Vers le Niveau 43</span>
              <span className="text-primary">75%</span>
            </div>
            <div className="w-full bg-slate-800 h-4 rounded-full overflow-hidden p-1">
              <div className="bg-primary h-full rounded-full relative" style={{ width: '75%' }}>
                <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
              </div>
            </div>
            <p className="text-xs text-slate-500 italic">250 XP restants avant d'atteindre le statut "Senpai Légendaire".</p>
          </div>
        </div>
        <div className="bg-primary/5 border border-primary/10 rounded-xl p-6 shadow-sm flex flex-col justify-center">
          <p className="text-slate-400 text-sm font-medium">Classement Mondial</p>
          <div className="flex items-end gap-2 mt-1">
            <h2 className="text-4xl font-bold text-white">#1 204</h2>
            <span className="text-emerald-500 text-sm font-bold flex items-center mb-1">
              <Star className="size-4 fill-emerald-500" /> 50
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-2">Top 5% des votants actifs cette saison</p>
        </div>
      </section>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left */}
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-primary/5 border border-primary/10 rounded-xl p-6 shadow-sm">
            <h3 className="font-bold text-lg mb-6 flex items-center gap-2 text-white">
              <BarChart3 className="size-5 text-primary" /> Expertise par Genre
            </h3>
            <div className="relative w-full aspect-square flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 200 200">
                <circle className="text-primary/20" cx="100" cy="100" fill="none" r="80" stroke="currentColor" strokeDasharray="2,2"></circle>
                <circle className="text-primary/20" cx="100" cy="100" fill="none" r="50" stroke="currentColor" strokeDasharray="2,2"></circle>
                <polygon className="text-primary/10" fill="none" points="100,20 180,75 160,160 40,160 20,75" stroke="currentColor" strokeWidth="1"></polygon>
                <polygon fill="#8c2bee" fillOpacity="0.3" points="100,35 150,85 140,140 60,130 50,70" stroke="#8c2bee" strokeWidth="2"></polygon>
                <text className="text-[10px] fill-slate-400 font-bold uppercase" textAnchor="middle" x="100" y="15">Shonen</text>
                <text className="text-[10px] fill-slate-400 font-bold uppercase" textAnchor="start" x="185" y="75">Mecha</text>
                <text className="text-[10px] fill-slate-400 font-bold uppercase" textAnchor="start" x="160" y="175">Isekai</text>
                <text className="text-[10px] fill-slate-400 font-bold uppercase" textAnchor="end" x="40" y="175">Seinen</text>
                <text className="text-[10px] fill-slate-400 font-bold uppercase" textAnchor="end" x="15" y="75">Slice</text>
              </svg>
            </div>
          </div>

          <div className="bg-primary/5 border border-primary/10 rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-lg flex items-center gap-2 text-white">
                <Shield className="size-5 text-primary" /> Badges
              </h3>
              <button className="text-xs text-primary font-bold hover:underline">Voir tout</button>
            </div>
            <div className="flex flex-wrap gap-4">
              {[Zap, Shield, Star].map((Icon, i) => (
                <div key={i} className="size-14 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 hover:border-primary transition-all cursor-help">
                  <Icon className="size-8 text-primary" />
                </div>
              ))}
              <div className="size-14 rounded-lg bg-slate-800/50 flex items-center justify-center border border-dashed border-slate-700 opacity-40">
                <Lock className="size-6" />
              </div>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="lg:col-span-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-primary/5 border border-primary/10 rounded-xl p-6 shadow-sm">
              <p className="text-slate-400 text-sm font-medium">Total des votes exprimés</p>
              <div className="flex items-center gap-4 mt-2">
                <h2 className="text-3xl font-bold text-white">1 240</h2>
                <span className="bg-emerald-500/10 text-emerald-500 text-xs px-2 py-0.5 rounded-full font-bold">+12% cette semaine</span>
              </div>
            </div>
            <div className="bg-primary/5 border border-primary/10 rounded-xl p-6 shadow-sm">
              <p className="text-slate-400 text-sm font-medium">Précision des Quiz</p>
              <div className="flex items-center gap-4 mt-2">
                <h2 className="text-3xl font-bold text-primary">94,5%</h2>
                <span className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full font-bold">Excellent</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-xl flex items-center gap-2 text-white">
              <Heart className="size-5 text-primary" /> Top 3 Favoris
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: 'Chainsaw Man', votes: 24, rank: '1er', img: 'https://picsum.photos/seed/csm1/400/600' },
                { name: 'Solo Leveling', votes: 18, rank: '2e', img: 'https://picsum.photos/seed/solo/400/600' },
                { name: 'Neon Genesis', votes: 12, rank: '3e', img: 'https://picsum.photos/seed/eva/400/600' },
              ].map((anime, i) => (
                <div key={i} className="group relative rounded-xl overflow-hidden aspect-[2/3] bg-slate-800 shadow-lg cursor-pointer">
                  <img src={anime.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={anime.name} referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                  <div className={`absolute top-2 left-2 size-8 flex items-center justify-center rounded-lg font-bold text-white text-sm shadow-lg ${
                    i === 0 ? 'bg-primary' : i === 1 ? 'bg-slate-400' : 'bg-orange-700'
                  }`}>{anime.rank}</div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-bold truncate">{anime.name}</p>
                    <p className="text-slate-300 text-xs">Voté {anime.votes} fois</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary/5 border border-primary/10 rounded-xl p-6 shadow-sm">
            <h3 className="font-bold text-lg mb-6 flex items-center gap-2 text-white">
              <Clock className="size-5 text-primary" /> Activité Récente
            </h3>
            <div className="space-y-6">
              <div className="flex gap-4 relative pb-6 border-l-2 border-primary/20 ml-2 pl-6">
                <div className="absolute -left-[9px] top-0 size-4 rounded-full bg-primary border-4 border-background-dark"></div>
                <div className="flex flex-col flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-white">A terminé "Quiz Shonen Ultime"</p>
                    <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Il y a 2h</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">Score 95% (Bonus Précision Parfaite ! +50 XP)</p>
                </div>
              </div>
              <div className="flex gap-4 relative pb-6 border-l-2 border-primary/20 ml-2 pl-6">
                <div className="absolute -left-[9px] top-0 size-4 rounded-full bg-primary/40 border-4 border-background-dark"></div>
                <div className="flex flex-col flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-white">A voté pour "Chainsaw Man"</p>
                    <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Il y a 5h</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">A participé aux sondages de la saison Automne 2023.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
