import { useEffect, useRef } from 'react';
import { useState } from 'react';
import { useGlobalContext } from '../../contex';

const Bot = ({ id, x, y, direction, inGame, speed }) => {
  const [top, setTop] = useState(y);
  const [left, setLeft] = useState(x);
  const [duration, setSpeed] = useState(0.2);
  const { inGamePositions } = useGlobalContext();
  const botPositions = useRef();
  const PosX = botPositions?.current?.offsetLeft;
  const PosY = botPositions?.current?.offsetTop;
  const botWidth = botPositions?.current?.clientWidth;
  const botHeight = botPositions?.current?.clientHeight;
  const checkForCollision = () => {
    const compareArr = inGamePositions.current.filter((bot) => bot.id !== id);
    compareArr.map((bot) => {
      const { id: botId, x, y, width, height } = bot;
      if (
        PosX + botWidth > x &&
        PosX < x + width &&
        PosY + botHeight > y &&
        PosY < y + height
      ) {
        console.log(`bot ${id} collied with bot ${botId}`);
        console.log(`bot ${id} x:${PosX} , y:${PosY}`);
        console.log(`bot ${botId} x:${x} , y:${y}`);
        inGame = false;
      }
    });
  };

  const updateInGamePos = () => {
    if (PosX >= 0 && PosY >= 0) {
      const botPos = {
        id,
        x: PosX,
        y: PosY,
        width: botWidth,
        height: botHeight,
      };
      const newPosArr = [
        ...inGamePositions.current.filter((bot) => bot.id !== id),
        botPos,
      ];

      inGamePositions.current = newPosArr;
      checkForCollision();
    }
  };
  updateInGamePos();
  console.log(inGamePositions.current);
  console.log(`bot${id}`, PosX, PosY);

  useEffect(() => {
    let moveBot;
    if (top <= 7 && top >= 0 && left >= 0 && left <= 7 && inGame) {
      moveBot = setInterval(() => {
        if (direction === 'south') {
          if (top + duration >= 7) {
            return setTop(7);
          }
          return setTop(top + duration);
        } else if (direction === 'north') {
          if (top - duration <= 0) {
            return setTop(0);
          }
          return setTop(top - duration);
        } else if (direction === 'east') {
          if (left - duration < 0) {
            return setLeft(0);
          }
          return setLeft(left - duration);
        } else if (direction === 'west') {
          if (left + duration >= 7) {
            return setLeft(7);
          }
          return setLeft(left + duration);
        }
      }, speed);
    }
    return () => {
      clearInterval(moveBot);
    };
  });
  return (
    <div
      ref={botPositions}
      className="absolute h-14 w-14 rounded-full bg-primary-300 "
      style={{
        left: left * 56,
        top: top * 56,
        transition: `all ${speed / 999}s linear`,
      }}
    >
      Bot {id}
    </div>
  );
};

export default Bot;
