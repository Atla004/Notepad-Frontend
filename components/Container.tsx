import { ReactNode } from "react";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
  shadow,
  Surface,
} from "react-native-paper";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#FA7921", // naranja
    surface: "#EBEBD3", // Beige
    primaryContainer: "#F7F7ED", //white
    tertiary: "#532302", //marron
    shadow: "#3C3C3B", // gris
    scrim: "#FDCDAC", //naranja claro
  },
  roundness: 8, // Añadir más propiedades si es necesario
  // Puedes añadir más propiedades según sea necesario
};

interface LayoutProps {
  children: ReactNode;
}

export default function Container({ children }: LayoutProps) {
  return <PaperProvider theme={theme}>{children}</PaperProvider>;
}
