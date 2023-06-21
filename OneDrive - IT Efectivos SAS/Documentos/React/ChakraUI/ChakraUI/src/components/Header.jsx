import { Box, Image, Button } from '@chakra-ui/react';

export const Header = () => {
  const handleButtonClick = () => {
    window.open('https://www.youtube.com/watch?v=ade9mrRzLf4', '_blank');
  };

  return (
    <div>
      <Box w='60vw' h='200px' p={4} color='white' position="relative" fontFamily='Arial' fontSize='2rem'>
        <Image width="100%" height="100%" objectFit="cover" src='https://deportesaludable.com/wp-content/uploads/2020/03/entrenamiento-de-fuerza-e1583660344978.jpg' alt='Descripción de la imagen' />
        <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" zIndex={1}>
          Contrulle tu futuro
          <Box display="flex" mt={4}>
            <Button bg="rgba(255, 255, 255, 0.3)" _hover={{ bg: "rgba(255, 255, 255, 0.9)" }} mr={2}>
              Ver detalles
            </Button>
            <Button bg="rgba(255, 255, 255, 0.3)" _hover={{ bg: "rgba(255, 255, 255, 0.9)" }} onClick={handleButtonClick}>
              Ver Video
            </Button>
          </Box>
        </Box>
      </Box>

      <Box  w='40vw' h='150px' p={4} color='white' position="relative"  fontFamily='Arial' fontSize='1rem' mt={5} float="left">
        <Image  h='300px' src='https://deportesaludable.com/wp-content/uploads/2020/03/entrenamiento-de-fuerza-e1583660344978.jpg' alt='Descripción de la imagen' />
        <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" zIndex={1} textAlign="center">
          Contrulle tu futuro
          <Box display="flex" mt={4}>
            <Button  bg="rgba(255, 255, 255, 0.3)" _hover={{ bg: "rgba(255, 255, 255, 0.9)" }} mr={2}>
              Ver detalles
            </Button>
            <Button bg="rgba(255, 255, 255, 0.3)" _hover={{ bg: "rgba(255, 255, 255, 0.9)" }} onClick={handleButtonClick}>
              Ver Video
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
};


