// color design tokens export

export const tokensDark = {
    grey: {
      0: "#ffffff", // manually adjusted
      10: "#f6f6f6", // manually adjusted
      50: "#f0f0f0", // manually adjusted
      100: "#fefefd",
      200: "#fdfdfc",
      300: "#fcfbfa",
      400: "#fbfaf9",
      500: "#faf9f7",
      600: "#c8c7c6",
      700: "#969594",
      800: "#646463",
      900: "#323231",
      1000: "#000000", // manually adjusted
    },
    // secondary: {
    //   // blue
    //   100: "#d9e5ee",
    //   200: "#b3cbdd",
    //   300: "#8db0cc",
    //   400: "#6796bb",
    //   500: "#417caa",
    //   600: "#346388",
    //   700: "#274a66",
    //   800: "#1a3244",
    //   900: "#0d1922",
    // },
    secondary: {
      // yellow
      50: "#f0f0f0", // manually adjusted
      100: "#ffefd2",
      200: "#ffdfa6",
      300: "#fed079",
      400: "#fec04d",
      500: "#feb020",
      600: "#cb8d1a",
      700: "#986a13",
      800: "#66460d",
      900: "#332306",
    },
  
    primary: {
      100: "#d7d7d7",
      200: "#afafaf",
      300: "#888888",
      400: "#606060",
      500: "#383838",
      600: "#2d2d2d",
      700: "#222222",
      800: "#161616",
      900: "#0b0b0b",
    },
    // #OE103D
  };
  
  // function that reverses the color palette
  function reverseTokens(tokensDark) {
    const reversedTokens = {};
    Object.entries(tokensDark).forEach(([key, val]) => {
      const keys = Object.keys(val);
      const values = Object.values(val);
      const length = keys.length;
      const reversedObj = {};
      for (let i = 0; i < length; i++) {
        reversedObj[keys[i]] = values[length - i - 1];
      }
      reversedTokens[key] = reversedObj;
    });
    return reversedTokens;
  }
  export const tokensLight = reverseTokens(tokensDark);
  
  // mui theme settings
  export const themeSettings = (mode) => {
    return {
      palette: {
        mode: mode,
        ...(mode === "dark"
          ? {
              // palette values for dark mode
              primary: {
                ...tokensDark.primary,
                main: tokensDark.primary[400],
                light: tokensDark.primary[400],
              },
              secondary: {
                ...tokensDark.secondary,
                main: tokensDark.secondary[300],
              },
              neutral: {
                ...tokensDark.grey,
                main: tokensDark.grey[500],
              },
              background: {
                default: tokensDark.primary[600],
                alt: tokensDark.primary[500],
              },
            }
          : {
              // palette values for light mode
              primary: {
                ...tokensLight.primary,
                main: tokensDark.grey[50],
                light: tokensDark.grey[100],
              },
              secondary: {
                ...tokensLight.secondary,
                main: tokensDark.secondary[600],
                light: tokensDark.secondary[700],
              },
              neutral: {
                ...tokensLight.grey,
                main: tokensDark.grey[500],
              },
              neutral1: {
                ...tokensLight.primary,
                main: tokensLight.primary[500],
              },
              neutral2: {
                ...tokensLight.secondary,
                main: tokensLight.secondary[500],
              },
              background: {
                default: tokensDark.grey[0],
                alt: tokensDark.grey[50],
              },
            }),
      },
      typography: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 12,
        h1: {
          fontFamily: ["Inter", "sans-serif"].join(","),
          fontSize: 40,
        },
        h2: {
          fontFamily: ["Inter", "sans-serif"].join(","),
          fontSize: 32,
        },
        h3: {
          fontFamily: ["Inter", "sans-serif"].join(","),
          fontSize: 24,
        },
        h4: {
          fontFamily: ["Inter", "sans-serif"].join(","),
          fontSize: 20,
        },
        h5: {
          fontFamily: ["Inter", "sans-serif"].join(","),
          fontSize: 16,
        },
        h6: {
          fontFamily: ["Inter", "sans-serif"].join(","),
          fontSize: 14,
        },
      },
    };
  };
  