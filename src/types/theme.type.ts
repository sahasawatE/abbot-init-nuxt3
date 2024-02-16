type ThemeValue = {
  dark: boolean;
  colors: {
    surface: string;
    background: string;
    primary: string;
    secondary: string;
    [colorName: string]: string;
  };
};

type Theme = {
  name: string;
  theme: ThemeValue;
};

export type { Theme };
