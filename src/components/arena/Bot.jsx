import React, { useEffect } from 'react';
import { useState } from 'react';

const Bot = ({ id, initialTop, initialLeft, direction, inGame }) => {
  const [top, setTop] = useState(initialTop);
  const [left, setLeft] = useState(initialLeft);
  const [speed, setSpeed] = useState(56);
  useEffect(() => {
    let moveBot;
    if (top <= 7 && top >= 0 && left >= 0 && left <= 7 && inGame) {
      moveBot = setInterval(() => {
        if (direction === 'south') {
          if (top + 1 >= 7) {
            return setTop(7);
          }
          return setTop(top + 1);
        } else if (direction === 'north') {
          if (top - 1 <= 0) {
            return setTop(0);
          }
          return setTop(top - 1);
        } else if (direction === 'east') {
          if (left - 1 < 0) {
            return setLeft(0);
          }
          return setLeft(left - 1);
        } else if (direction === 'west') {
          if (left + 1 >= 7) {
            return setLeft(7);
          }
          return setLeft(left + 1);
        }
      }, 1000);
    }
    return () => {
      clearInterval(moveBot);
    };
  });
  return (
    <div
      className="absolute h-14 w-14 rounded-full bg-primary-300 duration-300 ease-linear"
      style={{ left: left * speed, top: top * speed }}
    >
      Bot {id}
    </div>
  );
};

export default Bot;
