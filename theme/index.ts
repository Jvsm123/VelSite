import { ChakraTheme, defineStyleConfig, extendTheme } from "@chakra-ui/react";

import { colors, fonts } from "./globals";

import defaultConfigs from "./defaults";

const fontsDefault = defineStyleConfig({
  baseStyle: {
    color: "#fff",
  },
});

const theme: Partial<ChakraTheme> = extendTheme({
  components: {
    fontsDefault,
  },
  ...defaultConfigs,
  colors,
  fonts,
});

export default theme;
