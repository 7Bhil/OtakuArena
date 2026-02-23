import React from 'react';
import { Search, Bell, Settings, User, Swords, Trophy, Brain, Zap, LayoutDashboard, List, Heart, MessageSquare } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-primary/10 bg-background-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <div 
            className="flex items-center gap-3 cursor-pointer" 
            onClick={() => setActiveTab('home')}
          >
            <div className="size-10 bg-primary rounded-lg flex items-center justify-center text-white shadow-lg shadow-primary/20">
              <Zap className="size-6 fill-white" />
            </div>
            <h1 className="text-2xl font-black tracking-tighter text-white uppercase italic">Otaku Mash</h1>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => setActiveTab('arena')}
              className={`text-sm font-semibold transition-colors flex items-center gap-2 ${activeTab === 'arena' ? 'text-primary' : 'hover:text-primary'}`}
            >
              <Swords className="size-4" /> Vote
            </button>
            <button 
              onClick={() => setActiveTab('quizzes')}
              className={`text-sm font-semibold transition-colors flex items-center gap-2 ${activeTab === 'quizzes' ? 'text-primary' : 'hover:text-primary'}`}
            >
              <Brain className="size-4" /> Quizzes
            </button>
            <button 
              onClick={() => setActiveTab('leaderboard')}
              className={`text-sm font-semibold transition-colors flex items-center gap-2 ${activeTab === 'leaderboard' ? 'text-primary' : 'hover:text-primary'}`}
            >
              <Trophy className="size-4" /> Ranking
            </button>
            <button 
              onClick={() => setActiveTab('profile')}
              className={`text-sm font-semibold transition-colors flex items-center gap-2 ${activeTab === 'profile' ? 'text-primary' : 'hover:text-primary'}`}
            >
              <User className="size-4" /> Profile
            </button>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5">
            <Search className="text-primary size-4 mr-2" />
            <input 
              type="text" 
              placeholder="Search anime..." 
              className="bg-transparent border-none focus:ring-0 text-sm w-40 placeholder:text-slate-500 text-white outline-none"
            />
          </div>
          
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-full hover:bg-white/5 text-slate-300">
              <Bell className="size-5" />
            </button>
            <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-primary/25 transition-all">
              Join the Mash
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
