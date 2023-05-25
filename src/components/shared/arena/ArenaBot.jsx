import { useEffect, useRef } from 'react';
import { useState } from 'react';
import { winLosTie } from '../../../utilities/utilis.js';
import GlobalContext from '../../../contexts/global-context/global-context.js';
import BotFig from '../bots/BotFig.jsx';

// NPM
import { useContext } from 'react';
import { toast } from 'react-toastify';

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
  const { inGamePositions, botScores } = useContext(GlobalContext);
  const speed = 500;
  const { background, stroke, base } = colorSchemes;
  const currentDirection = useRef(direction);
  const botPositions = useRef();
  const PosX = botPositions?.current?.offsetLeft;
  const PosY = botPositions?.current?.offsetTop;
  const botWidth = botPositions?.current?.clientWidth;
  const botHeight = botPositions?.current?.clientHeight;
  const colliedCheck = useRef(true);
  const [isCollied, setIsCollied] = useState(false);
  const [botOver, setBotOver] = useState(false);
  console.log(inGamePositions);
  //update bot scores for the first time

  useEffect(() => {
    const bot = { id, name, wins: 0, loses: 0 };
    botScores.current = [...botScores.current, bot];
  }, []);

  useEffect(() => {
    let timeId;
    let CheckColliedTime;

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
          name: botName,
        } = bot;
        if (
          PosX + botWidth >= x &&
          PosX <= x + width &&
          PosY + botHeight >= y &&
          PosY <= y + height
        ) {
          if (currentDirection.current === ComparedDirection) return;
          console.log(`bot ${name} collied with bot ${botName}`);
          setIsCollied(true);
          colliedCheck.current = false;
          // console.log(`bot ${id} x:${PosX} , y:${PosY}`);
          // console.log(`bot ${botId} x:${x} , y:${y}`);
          const result = winLosTie(booleanValue, comparedValue, 'AND');

          console.log(
            `bot ${botId} Boolean:${booleanValue} , Boolean:${comparedValue}, result:${result}`
          );

          if (result === 1 && id < botId) {
            //Stop Bot

            timeId = setTimeout(() => {
              timeId = setIsCollied(false);

              //keep bot moving
              //update bot Scores
              const botScore = botScores.current.find((bot) => bot.id === id);
              //add Win Scores
              botScore.wins = botScore.wins + 1;
              //update bot score array
              botScores.current = [
                ...botScores.current.filter((bot) => bot.id !== id),
                botScore,
              ];
              toast.success(`${name} won`);
              colliedCheck.current = true;
            }, 1995);
          } else if (result === 0) {
            // if (currentDirection.current === ComparedDirection) return;
            //Stop Bot

            timeId = setTimeout(() => {
              setIsCollied(() => {
                return false;
              });
              //keep bot moving
              toast.success(`${name} vs ${botName} tied`);
              console.log('tie');
            }, 2000);
            CheckColliedTime = setTimeout(() => {
              colliedCheck.current = true;
              //resume collied check
            }, speed * 5 + 2200);
          } else if (result === 1 && id > botId) {
            //lost
            //Stop Bot

            timeId = setTimeout(() => {
              //bot disappear
              //update bot Scores
              const botScore = botScores.current.find((bot) => bot.id === id);
              //add lose Scores
              botScore.loses = botScore.loses + 1;
              //update bot score array
              botScores.current = [
                ...botScores.current.filter((bot) => bot.id !== id),
                botScore,
              ];

              setBotOver(true);

              toast.success(`${name} lost`);
              inGamePositions.current = inGamePositions.current.filter(
                (bot) => bot.id !== id
              );
            }, 1000);
          }
          console.log(botScores.current);
        }
        return () => {
          clearTimeout(timeId);
          clearTimeout(CheckColliedTime);
        };
      });
    };

    const updateInGamePos = () => {
      if (PosX >= 0 && PosY >= 0 && !botOver) {
        const botPos = {
          id,
          x: PosX,
          y: PosY,
          width: botWidth,
          height: botHeight,
          booleanValue,
          direction: currentDirection.current,
          name,
          colliedCheck,
        };
        const newPosArr = [
          ...inGamePositions.current.filter((bot) => bot.id !== id),
          botPos,
        ];

        inGamePositions.current = newPosArr;
        if (!colliedCheck.current || !inGame) return;
        checkForCollision();
      }
    };
    updateInGamePos();
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
      className="transparent absolute grid place-items-center overflow-hidden text-gray-50 "
      style={{
        width: '9%',
        height: '9%',
        left: left * 56 + 8,
        top: top * 56 + 8,
        transition: `all ${speed / 1000}s linear`,
        transform: 'translateX(3%) transformY(10%)',
        display: botOver ? 'none' : '',
        paddingBottom: '.2rem',
      }}
    >
      <BotFig scale="36" priColor={background} bColor={stroke} />
      <p className="absolute top-0">{name}</p>
    </div>
  );
};

export default Bot;
