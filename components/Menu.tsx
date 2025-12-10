import React from 'react';
import { Topic, AppMode, UserStats } from '../types';
import { TOPIC_CONFIG, RANKS } from '../constants';
import { Trophy, Activity, BookOpen, Wrench } from 'lucide-react';

interface MenuProps {
  stats: UserStats;
  onSelectTopic: (topic: Topic, mode: AppMode) => void;
}

export const Menu: React.FC<MenuProps> = ({ stats, onSelectTopic }) => {
  const currentRank = RANKS.reduce((prev, curr) => stats.xp >= curr.minXp ? curr : prev, RANKS[0]);
  const nextRank = RANKS.find(r => r.minXp > stats.xp) || RANKS[RANKS.length - 1];
  const progress = Math.min(100, ((stats.xp - currentRank.minXp) / ((nextRank.minXp - currentRank.minXp) || 1)) * 100);

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-8 fade-in">
      {/* Header Stats */}
      <div className="bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <div className={`p-4 rounded-full bg-slate-900 ${currentRank.color}`}>
              <Trophy size={32} />
            </div>
            <div>
              <h2 className="text-sm text-slate-400 uppercase tracking-wider">Bulldog Rank</h2>
              <h1 className={`text-2xl font-bold ${currentRank.color}`}>{currentRank.title}</h1>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 space-y-2">
            <div className="flex justify-between text-sm text-slate-400">
              <span>{stats.xp} XP</span>
              <span>Next: {nextRank.title} ({nextRank.minXp} XP)</span>
            </div>
            <div className="h-3 bg-slate-900 rounded-full overflow-hidden">
              <div 
                className="h-full bg-amber-600 transition-all duration-1000 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Quiz Section */}
        <div className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
                <BookOpen className="text-amber-500" />
                <div>
                    <h3 className="text-xl font-bold text-white">Study Bank</h3>
                    <p className="text-slate-400 text-xs">ASE-style questions from the Bulldog library</p>
                </div>
            </div>
            
            <div className="grid grid-cols-1 gap-3">
                {Object.values(Topic).map((topic) => {
                    const Config = TOPIC_CONFIG[topic];
                    return (
                        <button
                            key={topic}
                            onClick={() => onSelectTopic(topic, AppMode.QUIZ)}
                            className="group flex items-center gap-4 p-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-all hover:border-amber-500/50 text-left"
                        >
                            <div className={`p-2 rounded-lg ${Config.bg} ${Config.color}`}>
                                <Config.icon size={20} />
                            </div>
                            <span className="font-medium group-hover:text-white transition-colors">{topic}</span>
                        </button>
                    );
                })}
            </div>
        </div>

        {/* Diagnostic Section */}
        <div className="space-y-4">
             <div className="flex items-center gap-2 mb-2">
                <Activity className="text-blue-500" />
                <div>
                    <h3 className="text-xl font-bold text-white">Shop Diagnostics</h3>
                    <p className="text-slate-400 text-xs">Solve real customer scenarios</p>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-3">
                {Object.values(Topic).map((topic) => {
                    const Config = TOPIC_CONFIG[topic];
                    return (
                        <button
                            key={topic}
                            onClick={() => onSelectTopic(topic, AppMode.DIAGNOSTIC)}
                            className="group flex items-center gap-4 p-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-all hover:border-blue-500/50 text-left"
                        >
                             <div className={`p-2 rounded-lg ${Config.bg} ${Config.color}`}>
                                <Config.icon size={20} />
                            </div>
                            <span className="font-medium group-hover:text-white transition-colors">{topic}</span>
                        </button>
                    );
                })}
            </div>
        </div>
      </div>
    </div>
  );
};