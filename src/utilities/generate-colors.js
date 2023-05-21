const generatePastelColor = () => {
  // Generate RGB values in 100 to 255
  const RED = Math.floor(Math.random() * 156) + 100;
  const GREEN = Math.floor(Math.random() * 156) + 100;
  const BLUE = Math.floor(Math.random() * 156) + 100;
  const RESULT = (RED * 0x10000 + GREEN * 0x100 + BLUE)
    .toString(16)
    .padStart(6, '0');
  return `#${RESULT}`;
};

const makeColorDark = (color, percentage) => {
  const HEX = color.replace('#', '');
  let red = parseInt(HEX.substring(0, 2), 16);
  let green = parseInt(HEX.substring(2, 4), 16);
  let blue = parseInt(HEX.substring(4, 6), 16);

  red = Math.round(red * (1 - percentage));
  green = Math.round(green * (1 - percentage));
  blue = Math.round(blue * (1 - percentage));

  return (
    '#' + (red * 0x10000 + green * 0x100 + blue).toString(16).padStart(6, '0')
  );
};

const makeColorLight = (color, percentage) => {
  const HEX = color.replace('#', '');
  let red = parseInt(HEX.substring(0, 2), 16);
  let green = parseInt(HEX.substring(2, 4), 16);
  let blue = parseInt(HEX.substring(4, 6), 16);

  red = Math.round(red + (255 - red) * percentage);
  green = Math.round(green + (255 - green) * percentage);
  blue = Math.round(blue + (255 - blue) * percentage);

  return (
    '#' + (red * 0x10000 + green * 0x100 + blue).toString(16).padStart(6, '0')
  );
};

export { generatePastelColor, makeColorDark, makeColorLight };
