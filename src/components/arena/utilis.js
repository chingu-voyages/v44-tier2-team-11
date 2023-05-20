const AND = 'AND';
const OR = 'OR';
const XOR = 'XOR';
const NOR = 'NOR';

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
