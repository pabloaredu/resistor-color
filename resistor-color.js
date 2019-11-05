
export const colorCode = (inputColor) => {
  if (!inputColor) {
    return colors;
  }
  const colors = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];
  for (const color of colors) {
    if (inputColor === color) {
      return colors.indexOf(color);
    }
  }
};

export const COLORS = undefined;
