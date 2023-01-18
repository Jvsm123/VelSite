import {
  Box,
  Button,
  Center,
  Image,
  ListItem,
  Text,
  UnorderedList,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";

import logo from "../assets/logoVeu.png";
import roadMap from "../assets/road.png";
import iveco from "../assets/iveco.png";

export default function Home() {
  return (
    <Center h="100vh">
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
            <Box>
              <Text fontSize="61rem" fontFamily="titulo">
                VEU MUDANÇAS
              </Text>
              <Text
                fontSize="16.9rem"
                bgColor="#244466"
                p="4rem"
                fontFamily="cta"
              >
                O MELHOR TRANSPORTE VOCÊ ENCONTRA AQUI
              </Text>
            </Box>

            <Box
              display="flex"
              alignItems="center"
              w="100%"
              position="relative"
              height="500rem"
            >
              <Box
                display="flex"
                w="100%"
                h="255rem"
                pos="absolute"
                top="160rem"
                alignItems="center"
                bgColor="#290603"
              ></Box>

              <Box w="100%">
                <Image
                  pos="absolute"
                  alt="Image RoadMap"
                  top="98rem"
                  zIndex="1"
                  src={roadMap.src}
                  w="485rem"
                  h="315rem"
                  objectFit="cover"
                  objectPosition="5rem 80rem"
                />
              </Box>

              <Text
                w="290rem"
                fontSize="25.1rem"
                fontFamily="cta"
                fontWeight="bold"
                zIndex="4"
                pos="absolute"
                left="325rem"
              >
                DISPONÍVEL EM TODAS AS REGIÕES DO BRASIL
              </Text>

              <Image
                alt="Iveco Image"
                position="absolute"
                src={iveco.src}
                w="935rem"
                h="650rem"
                left="520rem"
                zIndex="1"
              />
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
          >
            NOSSOS SERVIÇOS
          </Box>

          <Box
            w="100%"
            fontSize="18rem"
            bgColor="#091129"
            display="flex"
            alignItems="center"
			justifyContent='flex-start'
          >
            <Image alt="Iveco" src={iveco.src} transform="rotateY(186deg)" w='300rem' h='300rem'/>

            <Box>
              <UnorderedList>
                <ListItem fontSize="24.7rem" fontFamily="cta">
                  MUDANÇAS E EVENTOS PARA TODO BRASIL
                </ListItem>
                <ListItem fontSize="24.7rem" fontFamily="cta">
                  MONTAGEM E DESMONTAGEM DE MÓVEIS
                </ListItem>
              </UnorderedList>
            </Box>
          </Box>

          <VStack
            w="450rem"
            h="400rem"
            bgColor="#141211"
            mt="30rem !important"
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

            <Box display="flex" alignItems="center">
              <Image alt="Tel" />
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
