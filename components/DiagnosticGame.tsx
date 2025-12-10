import React, { useState, useEffect } from 'react';
import { Topic, DiagnosticScenario } from '../types';
import { generateDiagnosticScenario } from '../services/geminiService';
import { Loader2, User, Stethoscope, AlertTriangle, ArrowLeft } from 'lucide-react';

interface DiagnosticGameProps {
  topic: Topic;
  onComplete: (success: boolean) => void;
  onExit: () => void;
}

export const DiagnosticGame: React.FC<DiagnosticGameProps> = ({ topic, onComplete, onExit }) => {
  const [scenario, setScenario] = useState<DiagnosticScenario | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedDiagnosis, setSelectedDiagnosis] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    let mounted = true;
    const loadScenario = async () => {
      setLoading(true);
      const data = await generateDiagnosticScenario(topic);
      if (mounted) {
        setScenario(data);
        setLoading(false);
      }
    };
    loadScenario();
    return () => { mounted = false; };
  }, [topic]);

  const handleDiagnosis = (option: string) => {
    if (selectedDiagnosis) return;
    setSelectedDiagnosis(option);
    setShowResult(true);
  };

  const handleFinish = () => {
      if (!scenario) return;
      const isCorrect = selectedDiagnosis === scenario.correctDiagnosis;
      onComplete(isCorrect);
  };

  if (loading || !scenario) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-slate-400 space-y-4">
        <Loader2 className="animate-spin text-blue-500" size={48} />
        <p>Pulling customer vehicle history...</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-4 fade-in">
        <button onClick={onExit} className="mb-4 text-slate-400 hover:text-white flex items-center gap-2 text-sm">
            <ArrowLeft size={16} /> Back to Shop
        </button>

        {/* Repair Order */}
        <div className="bg-slate-100 text-slate-900 rounded-t-xl p-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                <Stethoscope size={120} />
            </div>
            <div className="relative z-10">
                <div className="flex justify-between items-start mb-6 border-b border-slate-300 pb-4">
                    <div>
                        <h2 className="text-2xl font-black uppercase tracking-tighter">Repair Order</h2>
                        <span className="text-sm font-mono text-slate-600">#{scenario.id.substring(0, 8)}</span>
                    </div>
                    <div className="text-right">
                        <div className="font-bold">{scenario.vehicle}</div>
                        <div className="text-sm text-slate-600">RO Date: Today</div>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="flex gap-4">
                        <div className="bg-slate-200 p-2 rounded-lg h-fit">
                            <User size={24} className="text-slate-600" />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-700 text-sm uppercase">Customer States</h3>
                            <p className="font-medium text-lg italic">"{scenario.complaint}"</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="bg-slate-200 p-2 rounded-lg h-fit">
                            <AlertTriangle size={24} className="text-amber-600" />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-700 text-sm uppercase">Technician Notes</h3>
                            <p className="text-slate-800">{scenario.details}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Diagnostic Options */}
        <div className="bg-slate-800 rounded-b-xl p-6 border border-t-0 border-slate-700 shadow-xl">
            <h3 className="text-slate-400 text-sm uppercase font-bold mb-4 tracking-wider">Select Diagnosis</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {scenario.options.map((opt, idx) => {
                    const isSelected = selectedDiagnosis === opt;
                    const isCorrect = opt === scenario.correctDiagnosis;
                    
                    let cardClass = "p-4 rounded-xl border-2 text-left transition-all relative overflow-hidden ";
                    
                    if (showResult) {
                        if (opt === scenario.correctDiagnosis) {
                            cardClass += "bg-green-500/20 border-green-500 text-white";
                        } else if (isSelected) {
                            cardClass += "bg-red-500/20 border-red-500 text-slate-300 opacity-75";
                        } else {
                            cardClass += "bg-slate-800 border-slate-700 text-slate-500 opacity-50";
                        }
                    } else {
                        cardClass += "bg-slate-700 border-slate-600 hover:border-blue-400 hover:bg-slate-600 text-slate-200";
                    }

                    return (
                        <button 
                            key={idx}
                            disabled={showResult}
                            onClick={() => handleDiagnosis(opt)}
                            className={cardClass}
                        >
                            <span className="font-semibold">{opt}</span>
                        </button>
                    )
                })}
            </div>

            {showResult && (
                <div className="mt-8 pt-6 border-t border-slate-700 fade-in">
                    <h4 className={`text-lg font-bold mb-2 ${selectedDiagnosis === scenario.correctDiagnosis ? 'text-green-400' : 'text-red-400'}`}>
                        {selectedDiagnosis === scenario.correctDiagnosis ? 'Correct Diagnosis!' : 'Incorrect Diagnosis'}
                    </h4>
                    <p className="text-slate-300 mb-6 leading-relaxed">
                        {scenario.explanation}
                    </p>
                    <button 
                        onClick={handleFinish}
                        className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg shadow-lg shadow-blue-500/25 transition-all"
                    >
                        Complete Scenario
                    </button>
                </div>
            )}
        </div>
    </div>
  );
};