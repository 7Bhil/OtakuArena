/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Leaderboard from './components/Leaderboard';
import Arena from './components/Arena';
import Quizzes from './components/Quizzes';
import Profile from './components/Profile';
import { Zap } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-background-dark text-slate-100 selection:bg-primary selection:text-white">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main>
        {activeTab === 'home' && <Home setActiveTab={setActiveTab} />}
        {activeTab === 'leaderboard' && <Leaderboard />}
        {activeTab === 'arena' && <Arena />}
        {activeTab === 'quizzes' && <Quizzes />}
        {activeTab === 'profile' && <Profile />}
      </main>

      {/* Footer */}
      <footer className="py-20 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="size-8 bg-primary rounded flex items-center justify-center text-white">
                  <Zap className="size-4 fill-white" />
                </div>
                <h2 className="text-xl font-black tracking-tighter text-white uppercase italic">Otaku Mash</h2>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                L'arène ultime pour les fans d'anime pour exprimer leur passion à travers le vote et les défis de connaissances.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 italic">Plateforme</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><button onClick={() => setActiveTab('arena')} className="hover:text-primary transition-colors">Voter</button></li>
                <li><button onClick={() => setActiveTab('quizzes')} className="hover:text-primary transition-colors">Quiz</button></li>
                <li><button onClick={() => setActiveTab('leaderboard')} className="hover:text-primary transition-colors">Classement</button></li>
                <li><button className="hover:text-primary transition-colors">API</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 italic">Communauté</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><button className="hover:text-primary transition-colors">Discord</button></li>
                <li><button className="hover:text-primary transition-colors">Twitter</button></li>
                <li><button className="hover:text-primary transition-colors">Directives</button></li>
                <li><button className="hover:text-primary transition-colors">Événements</button></li>
              </ul>
            </div>
            
            <div className="col-span-2">
              <h4 className="text-white font-bold mb-6 italic">Rester informé</h4>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Adresse email" 
                  className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:ring-primary focus:border-primary outline-none text-white"
                />
                <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2.5 rounded-lg text-sm font-bold">S'abonner</button>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-slate-600">
            <p>© 2024 Otaku Mash Arena. Tous les personnages sont la propriété de leurs studios respectifs.</p>
            <div className="flex gap-8">
              <button className="hover:text-white transition-colors">Politique de confidentialité</button>
              <button className="hover:text-white transition-colors">Conditions d'utilisation</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
