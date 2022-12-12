import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material";

export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        primary: {
          DEFAULT: "#000000",
          100: "#000000",
          200: "#000000",
          300: "#000000",
          400: "#000000",
          500: "#0F0E0E",
          600: "#232323",
          700: "#3D3D3D",
          800: "#525252",
          900: "#5C5C5C",
        },
        secondary: {
          DEFAULT: "#7C7C7C",
        },
        black: {
          DEFAULT: "#000000",
          100: "#000000",
          200: "#000000",
          300: "#000000",
          400: "#000000",
          500: "#0F0E0E",
          600: "#292929",
          700: "#3D3D3D",
          800: "#525252",
          900: "#5C5C5C",
        },
        white: {
          DEFAULT: "#FFFFFF",
          100: "#F7F7F7",
        },
        gray: {
          DEFAULT: "#3C3C3C",
        },
        accentMain: "#0F0E0E",
      }
    : {
        white: {
          DEFAULT: "#FFFFFF",
          100: "#F7F7F7",
          200: "#D1D1D1",
        },
        primary: {
          DEFAULT: "#FFFFFF",
          500: "#F7F7F7",
        },
        secondary: {
          DEFAULT: "#7C7C7C",
        },
        black: {
          DEFAULT: "#000000",
          100: "#525252",
          200: "#3D3D3D",
          300: "#292929",
          400: "#141414",
          500: "#000000",
          600: "#000000",
          700: "#000000",
          800: "#000000",
          900: "#000000",
        },
        gray: {
          DEFAULT: "#3C3C3C",
        },
        accentMain: "#F7F7F7",
      }),
});

//Function for Reverse colours (реверс цветов из tailwind shades)
const getReverseColours = (obj) => {
  const newObj = {};
  for (let key in obj) {
    const keys = Object.keys(obj[key]);
    let vals = Object.values(obj[key]);
    const keyDefault = keys.splice(-1);
    const valDefault = vals.splice(-1);
    vals = vals.reverse();
    keys.shift();
    vals.shift();

    newObj[key] = keys.reduce(
      (acc, key, i) => ({ ...acc, [key]: vals[i] }),
      {}
    );
    newObj[key] = keyDefault.reduce(
      (acc, key, i) => ({ ...acc, [key]: valDefault[i] }),
      newObj[key]
    );
  }
  return newObj;
};
//console.log(getReverseColours(tokens("dark")));
///////////////////////////////////////////////////////////////////

export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primary.DEFAULT,
            },
            secondary: {
              main: colors.secondary.DEFAULT,
            },
            neutral: {
              dark: colors.black[500],
              light: colors.white[100],
            },
          }
        : {
            primary: {
              main: colors.primary.DEFAULT,
            },
            secondary: {
              main: colors.secondary.DEFAULT,
            },
            neutral: {
              dark: colors.black[500],
              light: colors.white[100],
            },
          }),
    },
    typography: {
      fontFamily: ["Poppins", "sans-serif"].join(", "),
      fontSize: 14,
      fontWeight: 500,
      h1: {
        fontFamily: ["Poppins", "sans-serif"].join(", "),
        fontSize: 28,
        fontWeight: 600,
      },
      h2: {
        fontFamily: ["Poppins", "sans-serif"].join(", "),
        fontSize: 20,
        fontWeight: 600,
      },
      h3: {
        fontFamily: ["Poppins", "sans-serif"].join(", "),
        fontSize: 18,
        fontWeight: 600,
      },
      p: {
        fontFamily: ["Poppins", "sans-serif"].join(", "),
        fontSize: 14,
        fontWeight: 500,
      },
    },
  };
};

export const ColorModeContext = createContext({
  //toggleTheme: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [colorMode, theme];
};
