// components/ProgressBar.tsx
import React from 'react';

/**
 * Props for the ProgressBar component.
 */
interface ProgressBarProps {
  current: number;
  total: number;
}

/**
 * A progress bar component to visually indicate the current question number
 * relative to the total number of questions.
 *
 * @param {ProgressBarProps} props - The properties for the progress bar.
 * @returns {JSX.Element} The rendered progress bar component.
 */
const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const progressPercentage = (current / total) * 100;

  return (
    <div className="w-full bg-gray-200 rounded-full h-4 mb-4 overflow-hidden shadow-inner">
      <div
        className="bg-gradient-to-r from-yellow-400 to-orange-500 h-4 rounded-full transition-all duration-500 ease-out"
        style={{ width: `${progressPercentage}%` }}
        role="progressbar"
        aria-valuenow={current}
        aria-valuemin={0}
        aria-valuemax={total}
        aria-label={`Question ${current} of ${total}`}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-xs font-semibold text-gray-700">
        {`${current} / ${total}`}
      </div>
    </div>
  );
};

export default ProgressBar;