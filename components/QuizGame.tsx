import React, { useState, useEffect } from 'react';
import { Topic, QuizQuestion } from '../types';
import { generateQuizQuestions } from '../services/geminiService';
import { Loader2, CheckCircle, XCircle, ArrowRight, RotateCcw } from 'lucide-react';

interface QuizGameProps {
  topic: Topic;
  onComplete: (score: number) => void;
  onExit: () => void;
}

export const QuizGame: React.FC<QuizGameProps> = ({ topic, onComplete, onExit }) => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  useEffect(() => {
    let mounted = true;
    const loadQuiz = async () => {
      setLoading(true);
      const data = await generateQuizQuestions(topic);
      if (mounted) {
        setQuestions(data);
        setLoading(false);
      }
    };
    loadQuiz();
    return () => { mounted = false; };
  }, [topic]);

  const handleAnswer = (index: number) => {
    if (selectedOption !== null) return; // Prevent double answering
    setSelectedOption(index);
    setShowExplanation(true);
    if (index === questions[currentIdx].correctIndex) {
      setScore(s => s + 1);
    }
  };

  const nextQuestion = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(p => p + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      onComplete(score + (selectedOption === questions[currentIdx].correctIndex ? 1 : 0) - score); // Add last point if correct
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-slate-400 space-y-4">
        <Loader2 className="animate-spin text-amber-500" size={48} />
        <p>Building your quiz from the service manual...</p>
      </div>
    );
  }

  const currentQ = questions[currentIdx];

  return (
    <div className="max-w-2xl mx-auto p-4 fade-in">
      <div className="flex justify-between items-center mb-6 text-sm text-slate-400">
        <button onClick={onExit} className="hover:text-white transition-colors">
          Exit Quiz
        </button>
        <span>{currentIdx + 1} of {questions.length}</span>
      </div>

      <div className="bg-slate-800 rounded-2xl p-6 md:p-8 shadow-xl border border-slate-700">
        <h2 className="text-xl md:text-2xl font-bold mb-6 text-slate-100 leading-tight">
          {currentQ.question}
        </h2>

        <div className="space-y-3">
          {currentQ.options.map((opt, idx) => {
            let btnClass = "w-full p-4 text-left rounded-xl border border-slate-600 transition-all font-medium ";
            
            if (selectedOption === null) {
              btnClass += "hover:bg-slate-700 hover:border-slate-500 bg-slate-800/50";
            } else {
              if (idx === currentQ.correctIndex) {
                btnClass += "bg-green-500/20 border-green-500 text-green-100";
              } else if (idx === selectedOption) {
                btnClass += "bg-red-500/20 border-red-500 text-red-100";
              } else {
                btnClass += "bg-slate-800/50 opacity-50";
              }
            }

            return (
              <button
                key={idx}
                disabled={selectedOption !== null}
                onClick={() => handleAnswer(idx)}
                className={btnClass}
              >
                <div className="flex items-center justify-between">
                  <span>{opt}</span>
                  {selectedOption !== null && idx === currentQ.correctIndex && <CheckCircle size={20} className="text-green-500" />}
                  {selectedOption !== null && idx === selectedOption && idx !== currentQ.correctIndex && <XCircle size={20} className="text-red-500" />}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {showExplanation && (
        <div className="mt-6 p-6 bg-slate-800/80 rounded-2xl border border-slate-700 fade-in">
          <h3 className="font-bold text-amber-500 mb-2">Tech Tip</h3>
          <p className="text-slate-300 mb-4">{currentQ.explanation}</p>
          <button
            onClick={nextQuestion}
            className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold rounded-xl flex items-center justify-center gap-2 transition-colors"
          >
            {currentIdx === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
            <ArrowRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
};