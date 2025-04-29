import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const SkillBar = ({ language, level }) => {
  const [progress, setProgress] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true, // only trigger once
    threshold: 0.3,     // 30% visible to trigger
  });

  useEffect(() => {
    if (inView) {
      setProgress(level);
    }
  }, [inView, level]);

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-md font-semibold">{language}</span>
        <span className="text-sm text-white">{progress}%</span>
      </div>
      <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
        <div
          className="bg-orange-500 h-4 rounded-full transition-all duration-[5000ms] ease-in-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
