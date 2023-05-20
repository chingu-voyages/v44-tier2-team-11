import { useState, useEffect, useRef } from 'react';

const SpeedForm = () => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [second, setSecond] = useState(1);
  const trackRef = useRef(null);
  const handleRef = useRef(null);
  const LEVELS = 9; // Max level that user can slide

  useEffect(() => {
    // Modal has 450ms of animation
    // Need to wait for the animation to end to get proper information about node elements
    setTimeout(() => {
      if (!trackRef.current) return;
      const TRACK_CLIENT_RECT = trackRef.current.getBoundingClientRect(); // Get track's information
      const WIDTH_FOR_EACH_LEVEL = TRACK_CLIENT_RECT.width / LEVELS; // Get width for each level

      const handleMouseMove = (event) => {
        const OFFSET_X = event.clientX - TRACK_CLIENT_RECT.left; // Get current mouse position
        const LEVEL = Math.round(OFFSET_X / WIDTH_FOR_EACH_LEVEL); // Get current level as mouse moves
        const LIMIT_LEVEL = Math.max(0, Math.min(LEVELS, LEVEL)); // To ensure that handle will go beyond 0 and 10.
        const LEVEL_IN_PERCENTAGE = LIMIT_LEVEL * (100 / LEVELS); // Convert the current level into percentage
        setSecond(LIMIT_LEVEL + 1);
        setCurrentPosition(LEVEL_IN_PERCENTAGE);
      };

      const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };

      handleRef.current.addEventListener('mousedown', () => {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
      });
    }, 450);
  });

  return (
    <div>
      <span className="mb-2 text-sm font-black text-form-900">Boot Speed:</span>
      <div className="w-64">
        <span className="mb-2 block text-right text-sm font-black text-primary-900">
          {second}s
        </span>
        <div className="relative h-1 rounded-md bg-form-400" ref={trackRef}>
          <div
            className="h-full rounded-md bg-primary-500"
            style={{ width: `${currentPosition}%` }}
          ></div>
          <button
            type="button"
            className="absolute top-0 -mt-1 h-3 w-3 -translate-x-2/4 cursor-pointer rounded-full border-2 border-white bg-primary-500 shadow-md"
            style={{ left: `${currentPosition}%` }}
            ref={handleRef}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default SpeedForm;
