// App.tsx
import React, { useState, useEffect, useCallback, ReactElement } from 'react';
import { AppScreen, QuizCategory, QuizQuestion, HighScore } from './types';
import { quizCategories } from './constants';
// Removed: import { useSound } from './hooks/useSound';

import Button from './components/Button';
// Removed: import SoundToggle from './components/SoundToggle';
import ProgressBar from './components/ProgressBar';
import QuizCard from './components/QuizCard';
import ConfettiAnimation from './components/ConfettiAnimation';

/**
 * The main application component for the Smart Kids Quiz App.
 * Manages the overall app flow, state, quiz logic, and renders different screens.
 *
 * @returns {React.ReactElement} The rendered Smart Kids Quiz App.
 */
const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>(AppScreen.HOME);
  const [selectedCategory, setSelectedCategory] = useState<QuizCategory | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([]);
  const [feedbackAnimation, setFeedbackAnimation] = useState<'correct' | 'wrong' | null>(null);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);
  const [highScores, setHighScores] = useState<Record<string, HighScore>>({});

  // Removed: Initialize and manage sound effects
  // const { isMuted, playCorrectSound, playWrongSound, toggleMute } = useSound();

  // Load high scores from localStorage on initial mount
  useEffect(() => {
    try {
      const storedHighScores = localStorage.getItem('quizAppHighScores');
      if (storedHighScores) {
        setHighScores(JSON.parse(storedHighScores));
      }
    } catch (e) {
      console.error('Failed to load high scores from localStorage:', e);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Save high scores to localStorage whenever highScores state changes
  useEffect(() => {
    try {
      localStorage.setItem('quizAppHighScores', JSON.stringify(highScores));
    } catch (e) {
      console.error('Failed to save high scores to localStorage:', e);
    }
  }, [highScores]);


  /**
   * Initializes a quiz for the selected category.
   * Shuffles questions and resets quiz state.
   */
  const startQuiz = useCallback((category: QuizCategory) => {
    // Shuffle questions to ensure variety
    const shuffledQuestions = [...category.questions].sort(() => Math.random() - 0.5);
    setSelectedCategory(category);
    setQuizQuestions(shuffledQuestions);
    setCurrentQuestionIndex(0);
    setScore(0);
    setFeedbackAnimation(null);
    setShowConfetti(false);
    setCurrentScreen(AppScreen.QUIZ);
  }, []);

  /**
   * Handles user's answer submission. Updates score, plays sound,
   * shows feedback animation, and advances to the next question or results screen.
   *
   * @param {boolean} isCorrect - True if the submitted answer is correct, false otherwise.
   */
  const handleAnswer = useCallback((isCorrect: boolean) => {
    if (isCorrect) {
      setScore(prev => prev + 1);
      console.debug('Correct answer: Sound would play here if enabled.'); // Replaced playCorrectSound()
      setFeedbackAnimation('correct');
      // Trigger confetti if it's the last question and correct
      if (currentQuestionIndex === quizQuestions.length - 1) {
        setShowConfetti(true);
      }
    } else {
      console.debug('Wrong answer: Sound would play here if enabled.'); // Replaced playWrongSound()
      setFeedbackAnimation('wrong');
    }

    // Allow a short delay for feedback animation before moving to the next question
    setTimeout(() => {
      setFeedbackAnimation(null); // Clear animation state
      const nextQuestionIndex = currentQuestionIndex + 1;
      if (nextQuestionIndex < quizQuestions.length) {
        setCurrentQuestionIndex(nextQuestionIndex);
      } else {
        // Quiz finished
        setCurrentScreen(AppScreen.RESULTS);
        // Update high score if applicable
        if (selectedCategory) {
          setHighScores(prevScores => {
            const currentHighScore = prevScores[selectedCategory.id]?.score || 0;
            if (score > currentHighScore) {
              return {
                ...prevScores,
                [selectedCategory.id]: { score: score, date: new Date().toLocaleDateString() },
              };
            }
            return prevScores;
          });
        }
      }
    }, 1000); // 1-second delay for feedback
  }, [currentQuestionIndex, quizQuestions.length, score, selectedCategory]); // eslint-disable-line react-hooks/exhaustive-deps

  /**
   * Generates an encouraging message based on the quiz performance.
   *
   * @param {number} finalScore - The user's final score.
   * @param {number} totalQuestions - The total number of questions in the quiz.
   * @returns {string} An encouraging message.
   */
  const getEncouragingMessage = useCallback((finalScore: number, totalQuestions: number): string => {
    const percentage = (finalScore / totalQuestions) * 100;
    if (percentage === 100) {
      return '🥳 Amazing! You are a Quiz Master!';
    } else if (percentage >= 75) {
      return '🌟 Excellent job! You did great!';
    } else if (percentage >= 50) {
      return '👍 Good effort! Keep practicing!';
    } else {
      return '💡 You\'re learning! Try again to improve!';
    }
  }, []);

  // --- Render Screens ---

  /**
   * Renders the Home Screen of the app.
   */
  const renderHomeScreen = (): ReactElement => (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-3xl shadow-2xl max-w-xl w-full text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4 animate-pulse-slow">
        Smart Kids Quiz App
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 mb-8 font-semibold">
        Learn • Play • Think Smart
      </p>
      <Button onClick={() => setCurrentScreen(AppScreen.CATEGORIES)} className="text-2xl px-12 py-5">
        Start Quiz
      </Button>
    </div>
  );

  /**
   * Renders the Categories Screen, allowing the user to select a quiz category.
   */
  const renderCategoriesScreen = (): ReactElement => (
    <div className="flex flex-col items-center p-6 bg-white rounded-3xl shadow-2xl max-w-2xl w-full">
      <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-8 text-center">
        Choose Your Adventure!
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
        {quizCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => startQuiz(category)}
            className="
              relative flex flex-col items-center justify-center p-6
              bg-gradient-to-br from-indigo-100 to-purple-100
              rounded-2xl shadow-lg transition-all duration-300 ease-in-out
              hover:scale-[1.03] hover:shadow-xl hover:from-indigo-200 hover:to-purple-200
              active:scale-98 focus:outline-none focus:ring-4 focus:ring-purple-400
              text-purple-800
            "
          >
            <span className="text-5xl md:text-6xl mb-3">{category.emoji}</span>
            <span className="text-xl md:text-2xl font-bold">{category.name}</span>
            {highScores[category.id] && (
              <span className="absolute bottom-2 left-2 text-xs font-medium text-purple-600 bg-purple-100 px-2 py-1 rounded-full opacity-80">
                High: {highScores[category.id].score} / {category.questions.length}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );

  /**
   * Renders the Quiz Screen, displaying the current question and options.
   */
  const renderQuizScreen = (): ReactElement => {
    if (!selectedCategory || quizQuestions.length === 0) {
      return (
        <div className="text-center text-red-500 font-bold text-2xl">
          Error: Quiz data not loaded.
          <Button onClick={() => setCurrentScreen(AppScreen.CATEGORIES)}>
            Back to Categories
          </Button>
        </div>
      );
    }

    const currentQuestion = quizQuestions[currentQuestionIndex];

    return (
      <div className="flex flex-col items-center w-full max-w-3xl p-4">
        <ProgressBar current={currentQuestionIndex + 1} total={quizQuestions.length} />
        <QuizCard
          question={currentQuestion}
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={quizQuestions.length}
          onAnswer={handleAnswer}
          feedbackAnimation={feedbackAnimation}
        />
        <ConfettiAnimation active={showConfetti && feedbackAnimation === 'correct'} onAnimationEnd={() => setShowConfetti(false)} />
      </div>
    );
  };

  /**
   * Renders the Results Screen, showing the final score and encouraging messages.
   */
  const renderResultsScreen = (): ReactElement => {
    if (!selectedCategory) {
      return (
        <div className="text-center text-red-500 font-bold text-2xl">
          Error: Quiz category not selected.
          <Button onClick={() => setCurrentScreen(AppScreen.CATEGORIES)}>
            Back to Categories
          </Button>
        </div>
      );
    }

    const totalQuestions = quizQuestions.length;
    const encouragingMessage = getEncouragingMessage(score, totalQuestions);
    const currentHighScore = highScores[selectedCategory.id]?.score || 0;

    return (
      <div className="flex flex-col items-center p-8 bg-white rounded-3xl shadow-2xl max-w-xl w-full text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-green-600 mb-6">
          Quiz Finished!
        </h2>
        <p className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
          Your Score: <span className="text-purple-600">{score}</span> / {totalQuestions}
        </p>
        <p className="text-xl md:text-2xl text-gray-800 mb-8 px-4">
          {encouragingMessage}
        </p>

        {currentHighScore > 0 && (
            <p className="text-lg md:text-xl text-yellow-600 font-medium mb-6">
                Your High Score for {selectedCategory.name}: {currentHighScore} / {totalQuestions}
            </p>
        )}

        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <Button onClick={() => startQuiz(selectedCategory)} className="text-lg px-8 py-4 bg-gradient-to-r from-blue-400 to-blue-600">
            Retry Quiz
          </Button>
          <Button onClick={() => setCurrentScreen(AppScreen.CATEGORIES)} className="text-lg px-8 py-4 bg-gradient-to-r from-purple-400 to-indigo-600">
            Change Category
          </Button>
        </div>
        <ConfettiAnimation active={score === totalQuestions} onAnimationEnd={() => setShowConfetti(false)} />
      </div>
    );
  };

  /**
   * Renders the appropriate screen based on the `currentScreen` state.
   */
  const renderScreen = (): ReactElement => {
    switch (currentScreen) {
      case AppScreen.HOME:
        return renderHomeScreen();
      case AppScreen.CATEGORIES:
        return renderCategoriesScreen();
      case AppScreen.QUIZ:
        return renderQuizScreen();
      case AppScreen.RESULTS:
        return renderResultsScreen();
      default:
        return renderHomeScreen();
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4">
      {/* Removed: <SoundToggle isMuted={isMuted} toggleMute={toggleMute} /> */}
      {renderScreen()}
    </div>
  );
};

export default App;