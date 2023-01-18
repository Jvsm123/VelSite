import { ChakraTheme, extendTheme } from "@chakra-ui/react";

import { colors, fonts } from "./globals";

import defaultConfigs from "./defaults";

const theme: Partial<ChakraTheme> = extendTheme({
  ...defaultConfigs,
  colors,
  fonts
});

export default theme;
