import { useEffect, useRef } from 'react';
import { useState } from 'react';
import {
  changeDirection,
  winLosTie,
  CheckForAllTie,
} from '../../../utilities/utilis.js';
import GlobalContext from '../../../contexts/global-context/global-context.js';
import BotDynamic from '../bots/BotDynamic.jsx';

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
  const {
    inGamePositions,
    setInGame,
    botScores,
    configuration,
    gameOver,
    arenaCell,
  } = useContext(GlobalContext);

  const INITIAL_CELL_SIZE =
    arenaCell?.current?.getBoundingClientRect().width ?? 0;
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
  const [isMoving, setIsMoving] = useState(false);
  const [calculatedPosX, setCalculatedPosX] = useState(
    left * INITIAL_CELL_SIZE + 6
  );
  const [calculatedPosY, setCalculatedPosY] = useState(
    top * INITIAL_CELL_SIZE + 4
  );

  // Global Configuration
  // console.log(configuration);
  const operator = configuration?.operation || 'AND';
  const speed = 350;
  const configSpeed = configuration?.speed ?? 1000;
  const TRANSITION_DEFAULT = `all ${speed / 1000}s linear`;
  const [transition, setTransition] = useState(TRANSITION_DEFAULT);

  // console.log(botScores);

  // console.log(inGamePositions);

  useEffect(() => {
    let timeId;
    // Check For Game Over
    // console.log('Check For Game Over');
    // console.log(inGamePositions.current.length);
    if (inGamePositions.current.length === 1 && inGame) {
      // console.log('checked');
      timeId = setTimeout(() => {
        gameOver();
      }, 3000);
    }
    return () => clearTimeout(timeId);
  });

  // console.log(botScores.current);
  //update bot scores for the first time
  useEffect(() => {
    const bot = { id, name, win: 0, lose: 0, colorSchemes };
    botScores.current = [...botScores.current, bot];
  }, []);

  //Stop for A while When Bots reach the cell
  useEffect(() => {
    if (top.toFixed(1) % 1 === 0 && left.toFixed(1) % 1 === 0) {
      setIsCollied(true);
      // console.log('stop');
      const timeId = setTimeout(() => {
        setIsCollied(false);
        // console.log('move');
      }, configSpeed);
      return () => clearTimeout(timeId);
    }
  }, [top, left, configSpeed]);

  //Check For Collision
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
          // console.log(`bot ${name} collied with bot ${botName}`);
          setIsCollied(true);
          colliedCheck.current = false;
          // console.log(`bot ${id} x:${PosX} , y:${PosY}`);
          // console.log(`bot ${botId} x:${x} , y:${y}`);
          const result = winLosTie(booleanValue, comparedValue, operator);

          // console.log(
          //   `bot ${botId} Boolean:${booleanValue} , Boolean:${comparedValue}, result:${result}`
          // );

          if (result === 1 && id < botId) {
            //Stop Bot

            timeId = setTimeout(() => {
              setIsCollied(false);

              //keep bot moving
              //update bot Scores
              const botScore = botScores.current.find((bot) => bot.id === id);
              //add Win Scores
              botScore.win = botScore.win + 1;
              //update bot score array
              botScores.current = [
                ...botScores.current.filter((bot) => bot.id !== id),
                botScore,
              ];
              toast.success(`${name} won`, {
                position: toast.POSITION.TOP_LEFT,
              });
              colliedCheck.current = true;
            }, 1995);
          } else if (result === 0) {
            timeId = setTimeout(() => {
              setIsCollied(() => {
                return false;
              });
              //keep bot moving
              toast.success(`${name} vs ${botName} tied`, {
                position: toast.POSITION.TOP_LEFT,
              });
              // console.log('tie');
              console.log(CheckForAllTie(inGamePositions.current, operator));
              if (CheckForAllTie(inGamePositions.current, operator) === true) {
                setIsCollied(true);
                gameOver();
              }
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
              botScore.lose = botScore.lose + 1;
              //update bot score array
              botScores.current = [
                ...botScores.current.filter((bot) => bot.id !== id),
                botScore,
              ];

              setBotOver(true);

              toast.error(`${name} lost`, {
                position: toast.POSITION.TOP_LEFT,
              });
              inGamePositions.current = inGamePositions.current.filter(
                (bot) => bot.id !== id
              );
            }, 1000);
          }
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
    let moveBot;

    const shouldGetNewDirection =
      top <= 7 &&
      top >= 0 &&
      left >= 0 &&
      left <= 7 &&
      inGame &&
      !botOver &&
      !isCollied;

    if (shouldGetNewDirection) {
      setIsMoving(true);
      moveBot = setInterval(() => {
        if (currentDirection.current === 'south') {
          if (top + duration >= 7) {
            setTop(7);
            currentDirection.current = changeDirection(
              left,
              7,
              currentDirection.current
            );
            return;
          }
          return setTop(top + duration);
        } else if (currentDirection.current === 'north') {
          if (top - duration <= 0) {
            setTop(0);
            currentDirection.current = changeDirection(
              left,
              0,
              currentDirection.current
            );
            return;
          }
          return setTop(top - duration);
        } else if (currentDirection.current === 'west') {
          if (left - duration < 0) {
            setLeft(0);
            currentDirection.current = changeDirection(
              0,
              top,
              currentDirection.current
            );
            return;
          }
          return setLeft(left - duration);
        } else if (currentDirection.current === 'east') {
          if (left + duration >= 7) {
            setLeft(7);
            currentDirection.current = changeDirection(
              7,
              top,
              currentDirection.current
            );
            return;
          }
          return setLeft(left + duration);
        }
      }, speed);
    }

    return () => {
      setIsMoving(false);
      clearInterval(moveBot);
    };
  });

  // Whenever the browser is being resized, recalculate bot position
  useEffect(() => {
    let timeoutId = null;
    const updatePosition = () => {
      const CELL_SIZE = arenaCell.current.getBoundingClientRect().width;
      setCalculatedPosX(left * CELL_SIZE + 6);
      setCalculatedPosY(top * CELL_SIZE + 4);
    };
    const controlBattleGround = () => {
      if (transition !== null) setTransition(null);
      if (inGame) setInGame(false);
      updatePosition();
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setTransition(TRANSITION_DEFAULT);
      }, 250);
    };
    updatePosition();

    window.addEventListener('resize', controlBattleGround);
    return () => {
      window.removeEventListener('resize', controlBattleGround);
    };
  }, [top, left, arenaCell]);

  return (
    <div
      ref={botPositions}
      className={`transparent group absolute grid place-items-center text-gray-50 ${
        isMoving ? 'jumping-animation' : ''
      }`}
      style={{
        width: '9%',
        height: '9%',
        left: calculatedPosX,
        top: calculatedPosY,
        transition: transition,
        transform: 'translateX(3%) transformY(10%)',
        display: botOver ? 'none' : '',
        paddingBottom: '.2rem',
      }}
    >
      <BotDynamic
        className="translate-y-1"
        baseColor={background}
        strokeColor={stroke}
      />
      <p
        className="duration-750 absolute bottom-0 max-w-[100px] translate-y-[80%] scale-0 truncate rounded-sm px-2 py-0.5 text-xs font-semibold transition-transform ease-in group-hover:scale-100"
        style={{ backgroundColor: stroke }}
      >
        {name}
      </p>
    </div>
  );
};

export default Bot;
