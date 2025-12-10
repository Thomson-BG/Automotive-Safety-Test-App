import React, { useState } from 'react';
import { AppMode, Topic, UserStats } from './types';
import { Menu } from './components/Menu';
import { QuizGame } from './components/QuizGame';
import { DiagnosticGame } from './components/DiagnosticGame';
import { Wrench } from 'lucide-react';

const INITIAL_STATS: UserStats = {
  xp: 0,
  level: 1,
  rank: "Lube Tech",
  streak: 0
};

export default function App() {
  const [mode, setMode] = useState<AppMode>(AppMode.MENU);
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [stats, setStats] = useState<UserStats>(INITIAL_STATS);

  const handleTopicSelect = (topic: Topic, newMode: AppMode) => {
    setSelectedTopic(topic);
    setMode(newMode);
  };

  const handleQuizComplete = (score: number) => {
    // 5 questions, 100XP each
    const xpGain = score * 100;
    setStats(prev => ({
        ...prev,
        xp: prev.xp + xpGain,
        streak: prev.streak + 1
    }));
    setMode(AppMode.MENU);
    setSelectedTopic(null);
  };

  const handleDiagnosticComplete = (success: boolean) => {
      // 500XP for a successful diagnosis
      const xpGain = success ? 500 : 50; // Participation points
      setStats(prev => ({
        ...prev,
        xp: prev.xp + xpGain,
        streak: success ? prev.streak + 1 : prev.streak
      }));
      setMode(AppMode.MENU);
      setSelectedTopic(null);
  }

  const handleExit = () => {
    setMode(AppMode.MENU);
    setSelectedTopic(null);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col">
      {/* Navbar */}
      <nav className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setMode(AppMode.MENU)}>
            <div className="bg-amber-600 p-1.5 rounded-lg shadow-lg shadow-amber-900/20">
              <Wrench className="text-white" size={20} strokeWidth={2.5} />
            </div>
            <span className="font-extrabold text-xl tracking-tight text-white">Bulldog<span className="text-amber-500">Garage</span></span>
          </div>
          <div className="text-xs md:text-sm font-medium bg-slate-800 px-3 py-1 rounded-full border border-slate-700 flex items-center gap-2">
            <span className="text-slate-400">XP</span>
            <span className="text-amber-500 font-bold">{stats.xp}</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow py-8 px-4">
        {mode === AppMode.MENU && (
          <Menu stats={stats} onSelectTopic={handleTopicSelect} />
        )}
        
        {mode === AppMode.QUIZ && selectedTopic && (
          <QuizGame 
            topic={selectedTopic} 
            onComplete={handleQuizComplete} 
            onExit={handleExit} 
          />
        )}

        {mode === AppMode.DIAGNOSTIC && selectedTopic && (
          <DiagnosticGame 
            topic={selectedTopic}
            onComplete={handleDiagnosticComplete}
            onExit={handleExit}
          />
        )}
      </main>

      <footer className="text-center py-6 text-slate-600 text-sm">
        <p>© {new Date().getFullYear()} Bulldog Garage Apprentice. Built for Future Techs.</p>
      </footer>
    </div>
  );
}