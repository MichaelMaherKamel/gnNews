import { Box, Spacer } from '@chakra-ui/react';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();
  return (
    <Box bg='gray.800' color='white' height='60px' px='20px' py='10px' display={'flex'}>
      <Box>&copy; {currentYear} gnNews. All rights reserved.</Box>
      <Spacer />
      <Box>
        {currentDate} {currentTime}
      </Box>
    </Box>
  );
};

export default Footer;
