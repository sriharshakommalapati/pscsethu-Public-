import React, { useState, useEffect } from 'react';
import {
  CheckSquare,
  Clock,
  AlertCircle,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ChevronRight,
  ChevronLeft,
  X,
  Award,
} from 'lucide-react';
import { MockTest } from '../types';
import { GoogleAdUnit } from './GoogleAdUnit';

interface MockTestModalProps {
  test: MockTest;
  onClose: () => void;
  onFinishTest: (score: number, totalMarks: number, accuracyPercent: number) => void;
}

export const MockTestModal: React.FC<MockTestModalProps> = ({
  test,
  onClose,
  onFinishTest,
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [timeRemainingSeconds, setTimeRemainingSeconds] = useState(test.durationMinutes * 60);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [scoreResult, setScoreResult] = useState<{
    correct: number;
    incorrect: number;
    unattempted: number;
    totalScore: number;
    accuracy: number;
  } | null>(null);

  useEffect(() => {
    if (isSubmitted) return;
    const timer = setInterval(() => {
      setTimeRemainingSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitTest();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isSubmitted]);

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSelectOption = (optionIndex: number) => {
    if (isSubmitted) return;
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestionIndex]: optionIndex,
    });
  };

  const handleSubmitTest = () => {
    let correct = 0;
    let incorrect = 0;
    let unattempted = 0;

    test.questions.forEach((q, idx) => {
      const selected = selectedAnswers[idx];
      if (selected === undefined) {
        unattempted++;
      } else if (selected === q.correctIndex) {
        correct++;
      } else {
        incorrect++;
      }
    });

    const marksPerQuestion = test.totalMarks / test.questions.length;
    const penaltyPerQuestion = marksPerQuestion * test.negativeMarking;
    const rawScore = (correct * marksPerQuestion) - (incorrect * penaltyPerQuestion);
    const totalScore = Math.max(0, Math.round(rawScore * 10) / 10);
    const attemptedCount = correct + incorrect;
    const accuracy = attemptedCount > 0 ? Math.round((correct / attemptedCount) * 100) : 0;

    const result = { correct, incorrect, unattempted, totalScore, accuracy };
    setScoreResult(result);
    setIsSubmitted(true);
    onFinishTest(totalScore, test.totalMarks, accuracy);
  };

  const currentQ = test.questions[currentQuestionIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-xs animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-3xl w-full flex flex-col max-h-[95vh] overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-indigo-600 text-white">
                {test.commissionCode}
              </span>
              <span className="text-xs text-slate-400">{test.examStage}</span>
            </div>
            <h3 className="text-base font-bold text-slate-100 mt-1">{test.title}</h3>
          </div>

          <div className="flex items-center gap-4">
            {!isSubmitted && (
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-800 border border-slate-700 font-mono text-xs font-bold text-amber-300">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>{formatTimer(timeRemainingSeconds)}</span>
              </div>
            )}
            <button
              onClick={onClose}
              className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {/* RESULT VIEW IF SUBMITTED */}
          {isSubmitted && scoreResult && (
            <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-50 to-amber-50 border border-indigo-200 text-center space-y-4">
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto text-white shadow-md">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 font-serif">Test Evaluation Complete</h4>
                <p className="text-xs text-slate-600">Calculated with 1/3rd penalty for incorrect answers.</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-lg mx-auto">
                <div className="bg-white p-3 rounded-xl border border-slate-200">
                  <div className="text-xl font-black text-indigo-700 font-mono">
                    {scoreResult.totalScore}/{test.totalMarks}
                  </div>
                  <div className="text-[11px] text-slate-500 font-semibold">Total Score</div>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200">
                  <div className="text-xl font-black text-emerald-600 font-mono">
                    {scoreResult.correct}
                  </div>
                  <div className="text-[11px] text-slate-500 font-semibold">Correct</div>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200">
                  <div className="text-xl font-black text-rose-600 font-mono">
                    {scoreResult.incorrect}
                  </div>
                  <div className="text-[11px] text-slate-500 font-semibold">Incorrect</div>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200">
                  <div className="text-xl font-black text-sky-600 font-mono">
                    {scoreResult.accuracy}%
                  </div>
                  <div className="text-[11px] text-slate-500 font-semibold">Accuracy</div>
                </div>
              </div>

              {/* Sponsored Recommended Test Series & Mentorship Ad */}
              <div className="pt-2">
                <GoogleAdUnit
                  formatType="in-article"
                  adSlot="4910294827"
                  label="SPONSORED CIVIL SERVICES RANK BOOSTER & CRASH COURSE"
                />
              </div>
            </div>
          )}

          {/* Question Navigator */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Question {currentQuestionIndex + 1} of {test.questions.length}
            </span>
            <div className="flex items-center gap-1">
              {test.questions.map((_, idx) => {
                const isAnswered = selectedAnswers[idx] !== undefined;
                const isCurrent = idx === currentQuestionIndex;
                return (
                  <button
                    key={idx}
                    onClick={() => setCurrentQuestionIndex(idx)}
                    className={`w-7 h-7 rounded-lg text-xs font-bold font-mono transition cursor-pointer ${
                      isCurrent
                        ? 'bg-indigo-600 text-white'
                        : isAnswered
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Question Text */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-indigo-50 text-indigo-800">
                {currentQ.subject}
              </span>
              <span className="text-xs text-slate-400">•</span>
              <span className="text-xs font-medium text-slate-600">{currentQ.topic}</span>
            </div>

            <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
              {currentQ.question}
            </h4>

            {/* Options */}
            <div className="space-y-2.5 pt-2">
              {currentQ.options.map((opt, optIdx) => {
                const isSelected = selectedAnswers[currentQuestionIndex] === optIdx;
                const isCorrect = currentQ.correctIndex === optIdx;

                let optionStyle = 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-800';
                if (isSelected && !isSubmitted) {
                  optionStyle = 'bg-indigo-50 border-indigo-600 text-indigo-900 font-semibold ring-2 ring-indigo-200';
                } else if (isSubmitted) {
                  if (isCorrect) {
                    optionStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold';
                  } else if (isSelected && !isCorrect) {
                    optionStyle = 'bg-rose-50 border-rose-400 text-rose-950 font-semibold';
                  }
                }

                return (
                  <button
                    key={optIdx}
                    onClick={() => handleSelectOption(optIdx)}
                    disabled={isSubmitted}
                    className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm flex items-center justify-between transition cursor-pointer ${optionStyle}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full border border-current flex items-center justify-center font-bold text-xs shrink-0">
                        {String.fromCharCode(65 + optIdx)}
                      </span>
                      <span>{opt}</span>
                    </div>

                    {isSubmitted && isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    )}
                    {isSubmitted && isSelected && !isCorrect && (
                      <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation box on submitted */}
            {isSubmitted && (
              <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 text-xs text-slate-800 leading-relaxed">
                <div className="font-bold text-slate-900 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Correct Answer: Option {String.fromCharCode(65 + currentQ.correctIndex)}</span>
                </div>
                <p className="text-slate-600">{currentQ.explanation}</p>
              </div>
            )}
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <button
            onClick={() => setCurrentQuestionIndex(Math.max(0, currentQuestionIndex - 1))}
            disabled={currentQuestionIndex === 0}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 disabled:opacity-40 cursor-pointer flex items-center gap-1"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          {!isSubmitted ? (
            <button
              onClick={handleSubmitTest}
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md cursor-pointer"
            >
              Submit & View Scorecard
            </button>
          ) : (
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 cursor-pointer"
            >
              Finish Review & Return
            </button>
          )}

          <button
            onClick={() =>
              setCurrentQuestionIndex(
                Math.min(test.questions.length - 1, currentQuestionIndex + 1)
              )
            }
            disabled={currentQuestionIndex === test.questions.length - 1}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 disabled:opacity-40 cursor-pointer flex items-center gap-1"
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
