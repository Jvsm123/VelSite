import { ChakraTheme, extendTheme } from "@chakra-ui/react";

import { colors } from "./globals";

import defaultConfigs from "./defaults";

const theme: Partial<ChakraTheme> = extendTheme({
  ...defaultConfigs,
  colors,
});

export default theme;
