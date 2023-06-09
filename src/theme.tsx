const windowSize = {
  small: `screen and (max-width: '600px')`,
  base: `screen and (max-width: '768px')`,
  large: `screen and (max-width: '1024px')`,
};

const fontSize = {
  sm: "1rem",
  base: "1.25rem",
  lg: "1.5rem",
};

const lightversion = {
  background: "#D3CEDF",
  fontPrimary: "black",
  fontSecondary: "grey",
  primary: "#3366CC",
  secondary: "#ddd",
  hover: "#577d86",
};

const darkversion = {
  background: "#577d86",
  fontPrimary: "white",
  fontSecondary: "grey",
  primary: "#FFCCCC",
  secondary: "#ddd",
  hover: "#D3CEDF",
};

export const theme = {
  windowSize,
  fontSize,
  lightversion,
  darkversion,
};
