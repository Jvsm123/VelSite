import { Box, Button, Center, Image, Text, VStack } from "@chakra-ui/react";

import logo from "../assets/logoVeu.png";
import roadMap from "../assets/road.png";
import iveco from "../assets/iveco.png";

export default function Home() {
  return (
    <Center w={{ m: "100vw", d: "100vw" }}>
      <VStack w="100%">
        <Box w="100%" h="4rem" bgColor="#244466"></Box>

        <Box
          w="100%"
          h="10rem"
          bgColor="#04113C"
          mt="0rem !important"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Image alt="Logo Veu" src={logo.src} w="8rem" h="8rem" />
        </Box>

        <VStack>
          <Box>
            <Text>VEU MUDANÇAS</Text>
            <Text>O MELHOR TRANSPORTE VOCÊ ENCONTRA AQUI</Text>
          </Box>

          <Box display="flex" alignItems="center" w="100%">
            <Box
              display="flex"
              position="absolute"
              left="0rem"
              alignItems="center"
            >
              <Image
                alt="Image RoadMap"
                src={roadMap.src}
                w="15rem"
                h="15rem"
              />
              <Text h="100%" w="20rem" fontSize="1rem">
                DISPONÍVEL EM TODAS AS REGIÕES DO BRASIL
              </Text>
            </Box>

            <Image alt="Iveco Image" src={iveco.src} w="60rem" h="30rem" />
          </Box>
        </VStack>

        <Box w="100%" h="5rem" fontSize="2rem" bgColor="#172a69">
          NOSSOS SERVIÇOS
        </Box>

        <Box w="100%" h="10rem" fontSize="2rem" bgColor="#091129">
          <Image alt="Iveco" />

          <Box>
            <Text>MUDANÇAS E EVENTOS PARA TODO BRASIL</Text>
            <Text>MONTAGEM E DESMONTAGEM DE MÓVEIS</Text>
          </Box>
        </Box>

        <VStack>
          <Box>FAÇA SEU ORÇAMENTO</Box>

          <Box>
            <Image alt="Tel" />
            <Text>19 0 0000-0000</Text>
          </Box>

          <Box>
            <Image alt="Email" />
            <Text>veumudanças@gmail.com</Text>
          </Box>
        </VStack>
      </VStack>
    </Center>
  );
}
