import { Box, Flex, Divider } from '@chakra-ui/react';
import { Link, Link as ReactLink } from 'react-router-dom';
import Content from './content';
const LeftMenu = () => {
  return (
    <Flex>
      <Box bg='gray.200' height='88vh' width='200px'>
        <Box px='20px' py='10px' fontWeight='bold'>
          My App
        </Box>
        <Box p='10px'>
          <p>Dashboard</p>
        </Box>
        <Box p='10px'>
          <p>Settings</p>
        </Box>
      </Box>
      <Content />
    </Flex>
  );
};

export default LeftMenu;
