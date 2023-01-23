import {
  Box,
  Center,
  Flex,
  Icon,
  Image,
  ListItem,
  Text,
  UnorderedList,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";

import { BsTelephoneOutbound } from "react-icons/bs";

import iveco from "../assets/iveco.png";
import logo from "../assets/logoVeu.png";
import roadMap from "../assets/road.png";
import fiorino from "../assets/fiorino.png";

export default function Home() {
  const isMobile = useBreakpointValue({
    m: true,
    d: false,
  });

  return (
    <Center h="100vh" w='100vw' bgColor='#1A202E'>
      <VStack w={{ m: "100vw", d: "1440rem" }} h="100%">
        <VStack w="100%">
          <Box bgColor="#244466" h="60rem" w="100%"></Box>

          <Box
            bgColor="#04113C"
            w="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Image alt="Logo Veu" src={logo.src} w="200rem" h="200rem" />
          </Box>

          <VStack w="100%">
            <VStack w="100%" alignItems="flex-start">
              <Box mt={{ m: "30rem !important", d: "inherit" }}>
                <Text
                  fontSize={{ m: "45rem", d: "100rem" }}
                  fontFamily="titulo"
                  textAlign="center"
                >
                  VEU MUDANÇAS
                </Text>
                <Text
                  fontSize={{ m: "16.9rem", d: "30rem" }}
                  bgColor="#244466"
                  p="4rem"
                  fontFamily="cta"
                  textAlign="center"
                >
                  O MELHOR TRANSPORTE VOCÊ ENCONTRA AQUI
                </Text>
              </Box>
            </VStack>

            <Box
              display="flex"
              alignItems="center"
              flexDir={{ m: "column", d: "row" }}
              w="100%"
              position="relative"
              height={{ m: "none", d: "500rem" }}
            >
              <Box
                display="flex"
                w="100%"
                h={{ m: "80rem", d: "217rem" }}
                pos="absolute"
                top={{ m: "none", d: "100rem" }}
                alignItems="center"
                bgColor="#290603"
              ></Box>

              {!isMobile && (
                <Box w="100%">
                  <Image
                    pos="absolute"
                    alt="Image RoadMap"
                    top="2rem"
                    zIndex="1"
                    src={roadMap.src}
                    w="485rem"
                    h="315rem"
                    left="-7rem"
                    objectFit="cover"
                    objectPosition="5rem 80rem"
                  />
                </Box>
              )}

              <Text
                w="355rem"
                fontSize="31.1rem"
                fontFamily="cta"
                fontWeight="bold"
                top={{ m: "-5rem", d: "140rem" }}
                zIndex="4"
                pos={{ m: "relative", d: "absolute" }}
                left={{ m: "inherit", d: "325rem" }}
              >
                DISPONÍVEL EM TODAS AS REGIÕES DO BRASIL
              </Text>

              {!isMobile && (
                <Image
                  alt="Iveco Image"
                  position="absolute"
                  src={iveco.src}
                  w="820rem"
                  h="555rem"
                  left="475rem"
                  zIndex="1"
                  top="-115rem"
                />
              )}

              {!isMobile && (
                <Image
                  alt="Fiorino Image"
                  position="absolute"
                  src={fiorino.src}
                  w="595rem"
                  h="450rem"
                  left="840rem"
                  top="-30rem"
                  zIndex="2"
                />
              )}
            </Box>
          </VStack>

          <Box
            w="100%"
            fontSize="28.3rem"
            bgColor="#172a69"
            h="50rem"
            fontFamily="texto"
            display="flex"
            justifyContent="center"
            alignItems="center"
            mt={{ m: "30rem !important", d: "unset" }}
          >
            NOSSOS SERVIÇOS
          </Box>

          <Box
            mt={{ m: "30rem", d: "unset" }}
            w="100%"
            fontSize="18rem"
            bgColor="#091129"
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
            flexDir={{ m: "column", d: "row" }}
          >
            {!isMobile && (
              <Image
                alt="Iveco"
                src={iveco.src}
                transform="rotateY(186deg)"
                w="420rem"
                h="300rem"
              />
            )}

            <Flex pl={{ m: "10rem", d: "80rem" }}>
              <UnorderedList>
                <ListItem fontSize="24.7rem" fontFamily="cta">
                  MUDANÇAS E EVENTOS PARA TODO BRASIL
                </ListItem>
                <ListItem fontSize="24.7rem" fontFamily="cta">
                  MONTAGEM E DESMONTAGEM DE MÓVEIS
                </ListItem>
              </UnorderedList>
            </Flex>
          </Box>

          <VStack
            w={{ m: "100%", d: "450rem" }}
            h={{ m: "200rem", d: "400rem" }}
            bgColor="#141211"
            mt={{ m: "30rem !important", d: "inherit" }}
            p="30rem"
            justifyContent="space-evenly"
          >
            <Box
              fontSize="15rem"
              bgColor="black"
              p="20rem"
              mb="40rem"
              fontFamily="texto"
            >
              FAÇA SEU ORÇAMENTO
            </Box>

            <Box display="flex" alignItems="baseline" gap="5rem">
              <Icon as={BsTelephoneOutbound} h="10rem" w="10rem" />
              <Text fontSize="15rem">19 0 0000-0000</Text>
            </Box>

            <Box display="flex" alignItems="center">
              <Image alt="Email" />
              <Text fontSize="15rem">veumudanças@gmail.com</Text>
            </Box>
          </VStack>

          <Box w="100%" h="50rem" bgColor="#172a69"></Box>
        </VStack>
      </VStack>
    </Center>
  );
}
