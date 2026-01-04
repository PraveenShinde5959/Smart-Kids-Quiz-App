// components/QuizCard.tsx
import React, { useState, useEffect } from 'react';
import { QuizQuestion } from '../types';
import Button from './Button';

/**
 * Props for the QuizCard component.
 */
interface QuizCardProps {
  question: QuizQuestion;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (isCorrect: boolean) => void;
  feedbackAnimation: 'correct' | 'wrong' | null;
}

/**
 * Displays a single quiz question, its options, and manages user interaction
 * and visual feedback.
 *
 * @param {QuizCardProps} props - The properties for the quiz card.
 * @returns {JSX.Element} The rendered quiz card component.
 */
const QuizCard: React.FC<QuizCardProps> = ({ question, questionNumber, totalQuestions, onAnswer, feedbackAnimation }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [answered, setAnswered] = useState<boolean>(false);

  // Reset state when a new question is loaded
  useEffect(() => {
    setSelectedOption(null);
    setAnswered(false);
  }, [question]);

  /**
   * Determines the CSS classes for an option based on its selection and correctness.
   *
   * @param {string} option - The option text.
   * @returns {string} The combined CSS classes for the option button.
   */
  const getOptionClasses = (option: string): string => {
    let classes = 'w-full py-3 px-4 text-left text-lg md:text-xl font-semibold rounded-xl shadow-md transition-all duration-200 ease-in-out transform ';

    if (!answered) {
      classes += 'bg-white text-gray-800 hover:scale-[1.02] hover:bg-blue-100 active:scale-[0.98] ';
      if (selectedOption === option) {
        classes += 'border-4 border-blue-500 ';
      }
    } else {
      classes += 'cursor-not-allowed ';
      if (option === question.answer) {
        // Correct answer
        classes += 'bg-green-500 text-white ';
      } else if (selectedOption === option && option !== question.answer) {
        // Wrong answer selected by user
        classes += 'bg-red-500 text-white ';
      } else {
        // Unselected wrong answers
        classes += 'bg-gray-300 text-gray-600 ';
      }
    }
    return classes;
  };

  /**
   * Handles an option click event.
   *
   * @param {string} option - The text of the selected option.
   */
  const handleOptionClick = (option: string) => {
    if (!answered) {
      setSelectedOption(option);
    }
  };

  /**
   * Submits the selected answer and triggers the `onAnswer` callback.
   */
  const handleSubmitAnswer = () => {
    if (selectedOption !== null && !answered) {
      setAnswered(true);
      const isCorrect = selectedOption === question.answer;
      onAnswer(isCorrect);
    }
  };

  return (
    <div className={`
      bg-white p-6 md:p-8 rounded-2xl shadow-2xl flex flex-col items-center justify-center
      w-full max-w-lg mx-auto transform transition-transform duration-300
      ${feedbackAnimation === 'correct' ? 'animate-correct-answer' : ''}
      ${feedbackAnimation === 'wrong' ? 'animate-wrong-answer' : ''}
    `}>
      <p className="text-xl md:text-2xl font-bold text-gray-800 mb-6 text-center leading-relaxed">
        {`Question ${questionNumber} of ${totalQuestions}: ${question.question}`}
      </p>

      <div className="w-full grid grid-cols-1 gap-4 mb-6">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(option)}
            disabled={answered}
            className={getOptionClasses(option)}
          >
            {option}
          </button>
        ))}
      </div>

      <Button
        onClick={handleSubmitAnswer}
        disabled={selectedOption === null || answered}
        className="w-full md:w-auto px-10 py-4 text-xl"
      >
        {answered ? (selectedOption === question.answer ? '🎉 Correct!' : '❌ Wrong!') : 'Submit Answer'}
      </Button>
    </div>
  );
};

export default QuizCard;