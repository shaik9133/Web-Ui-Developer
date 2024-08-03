import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressCircle = () => {
  const percentage = 70;

  return (
    <div className="flex flex-col items-center justify-center w-20 h-25  rounded-full p-4">
      <div className="">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            textColor: '#fff',
            pathColor: '#6495ED',
            trailColor: '#333',
            textSize: '24px',
          })}
        />
      </div>
      <div className="text-xs text-gray-500 mt-1"></div>
    </div>
  );
};

export default ProgressCircle;
