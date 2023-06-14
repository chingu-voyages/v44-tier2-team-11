const AND = 'AND';
const OR = 'OR';
const XOR = 'XOR';
const NOR = 'NOR';

export const CheckForAllTie = (botArray, operator) => {
  let results = new Set();
  botArray.map((currentBot) => {
    const botId = currentBot.id;
    const comparedBots = botArray.filter((bot) => bot.id !== botId);
    comparedBots.map((comparedBot) => {
      const result = winLosTie(
        currentBot.booleanValue,
        comparedBot.booleanValue,
        operator
      );
      results.add(result);
    });
  });
  console.log(results);

  return results.size === 1 ? true : false;
};

export const winLosTie = (bot1, bot2, operator) => {
  const firstBoolean = bot1;
  const secondBoolean = bot2;
  if (operator === AND) {
    if (firstBoolean === 1 && secondBoolean === 1) {
      return 1;
    } else {
      return 0;
    }
  }
  if (operator === OR) {
    if (firstBoolean === 0 && secondBoolean === 0) {
      return 0;
    } else {
      return 1;
    }
  }
  if (operator === XOR) {
    if (
      (firstBoolean === 0 && secondBoolean === 0) ||
      (firstBoolean === 1 && secondBoolean === 1)
    ) {
      return 0;
    } else {
      return 1;
    }
  }
  if (operator === NOR) {
    if (firstBoolean === 0 && secondBoolean === 0) {
      return 1;
    } else {
      return 0;
    }
  }
};

export const changeDirection = (x, y, direction) => {
  const directions = ['south', 'north', 'west', 'east'];

  if (x === 0 && y === 0) {
    const newDirections = ['north', 'east', 'south', 'west'];
    const randomIndex = Math.floor(Math.random() * 4);
    return newDirections[randomIndex];
  } else if (x === 0 && y === 7) {
    const newDirections = ['north', 'east', 'south', 'west'];
    const randomIndex = Math.floor(Math.random() * 4);
    return newDirections[randomIndex];
  } else if (x === 7 && y === 7) {
    const newDirections = ['north', 'east', 'south', 'west'];
    const randomIndex = Math.floor(Math.random() * 4);
    return newDirections[randomIndex];
  } else if (x === 7 && y === 0) {
    const newDirections = ['north', 'east', 'south', 'west'];
    const randomIndex = Math.floor(Math.random() * 4);
    return newDirections[randomIndex];
  }
  const newDirections = directions.filter((d) => d !== direction);
  const randomIndex = Math.floor(Math.random() * 3);
  return newDirections[randomIndex];
};
