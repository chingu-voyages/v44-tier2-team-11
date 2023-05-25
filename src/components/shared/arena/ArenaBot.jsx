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
  const [colliedCheck, setColliedCheck] = useState(true);
  const [isCollied, setIsCollied] = useState(false);
  const [botOver, setBotOver] = useState(false);
  // console.log(inGamePositions);

  useEffect(() => {
    let timeId;
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
          direction: ComparedDirection,
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

          console.log(
            `bot ${botId} Boolean:${booleanValue} , Boolean:${comparedValue}, result:${result}`
          );

          if (result === 1 && id < botId) {
            //Stop Bot
            setIsCollied(true);
            setTimeout(() => {
              setIsCollied(false);
              //keep bot moving
            }, 1000);
          } else if (result === 0) {
            if (direction === ComparedDirection) return;
            //Stop Bot
            setIsCollied(true);
            setColliedCheck(false);
            setTimeout(() => {
              setIsCollied(() => {
                return false;
              });
              //keep bot moving
            }, 2000);
            setTimeout(() => {
              setColliedCheck(true);
              //resume collied check
            }, speed * 11);
          } else if (result === 1 && id > botId) {
            setIsCollied(true);
            inGamePositions.current = inGamePositions.current.filter(
              (bot) => bot.id !== id
            );

            setTimeout(() => {
              setIsCollied(false);
              console.log('2s');
              setBotOver(true);
            }, 1000);
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
          direction,
        };
        const newPosArr = [
          ...inGamePositions.current.filter((bot) => bot.id !== id),
          botPos,
        ];

        inGamePositions.current = newPosArr;
        if (!colliedCheck) return;
        checkForCollision();
      }
    };
    updateInGamePos();

    return () => {
      clearTimeout(timeId);
    };
  });

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
      !botOver &&
      !isCollied
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
      className="transparent absolute grid place-items-center  "
      style={{
        width: 'calc(100/8)%',
        height: 'calc(100/8)%',
        left: left * 56 + 5,
        top: top * 56,
        transition: `all ${speed / 1000}s linear`,

        display: botOver ? 'none' : '',
      }}
    >
      <BotFig scale="44" priColor={background} bColor={stroke} />
    </div>
  );
};

export default Bot;
