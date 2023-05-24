import { useEffect, useRef } from 'react';
import { useState } from 'react';
import { winLosTie } from '../../../utilities/utilis.js';
import GlobalContext from '../../../contexts/global-context/global-context.js';
import BotFig from '../bots/BotFig.jsx';

// NPM
import { useContext } from 'react';

const Bot = ({
  id,
  x,
  y,
  direction,
  inGame,
  name,
  booleanValue,
  colorSchemes,
}) => {
  const [top, setTop] = useState(y);
  const [left, setLeft] = useState(x);
  const [duration, setSpeed] = useState(0.2);
  const { inGamePositions } = useContext(GlobalContext);
  const speed = 500;
  const { background, stroke, base } = colorSchemes;
  const currentDirection = useRef(direction);
  const botPositions = useRef();
  const PosX = botPositions?.current?.offsetLeft;
  const PosY = botPositions?.current?.offsetTop;
  const botWidth = botPositions?.current?.clientWidth;
  const botHeight = botPositions?.current?.clientHeight;
  const isCollied = useRef(false);
  const botOver = useRef(false);
  console.log(inGamePositions);
  const checkForCollision = () => {
    const compareArr = inGamePositions.current.filter((bot) => bot.id !== id);
    compareArr.map((bot) => {
      const {
        id: botId,
        x,
        y,
        width,
        height,
        booleanValue: comparedValue,
      } = bot;
      if (
        PosX + botWidth > x &&
        PosX < x + width &&
        PosY + botHeight > y &&
        PosY < y + height
      ) {
        console.log(`bot ${id} collied with bot ${botId}`);
        console.log(`bot ${id} x:${PosX} , y:${PosY}`);
        console.log(`bot ${botId} x:${x} , y:${y}`);
        const result = winLosTie(booleanValue, comparedValue, 'AND');
        isCollied.current = true;
        console.log(
          `bot ${botId} Boolean:${booleanValue} , Boolean:${comparedValue}, result:${result}`
        );

        if (result === 1 && id < botId) {
          inGame = true;
        } else if (result === 0) {
          inGame = true;
        } else if (result === 1 && id > botId) {
          inGame = false;
          inGamePositions.current = inGamePositions.current.filter(
            (bot) => bot.id !== id
          );
          botOver.current = true;
        }
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
        booleanValue,
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

  useEffect(() => {
    const changeDirection = () => {
      const directions = ['south', 'west', 'north', 'east'];
      const newDirections = directions.filter((d) => d !== currentDirection);
      const randomIndex = Math.floor(Math.random() * newDirections.length);
      currentDirection.current = directions[randomIndex];
    };
    let moveBot;

    if (
      top <= 7 &&
      top >= 0 &&
      left >= 0 &&
      left <= 7 &&
      inGame &&
      !botOver.current
    ) {
      moveBot = setInterval(() => {
        if (currentDirection.current === 'south') {
          if (top + duration >= 7) {
            setTop(7);
            changeDirection();
            return;
          }
          return setTop(top + duration);
        } else if (currentDirection.current === 'north') {
          if (top - duration <= 0) {
            setTop(0);
            changeDirection();
            return;
          }
          return setTop(top - duration);
        } else if (currentDirection.current === 'east') {
          if (left - duration < 0) {
            setLeft(0);
            changeDirection();
            return;
          }
          return setLeft(left - duration);
        } else if (currentDirection.current === 'west') {
          if (left + duration >= 7) {
            setLeft(7);
            changeDirection();
            return;
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
      className="transparent absolute grid h-14 w-14   place-items-center rounded-full"
      style={{
        left: left * 56,
        top: top * 56,
        transition: `all ${speed / 1000}s linear`,
        paddingBottom: '1rem',
        display: botOver.current ? '' : '',
      }}
    >
      <BotFig scale="46" priColor={background} bColor={stroke} />
      {name}
    </div>
  );
};

export default Bot;
