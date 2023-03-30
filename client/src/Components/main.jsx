import { Flex } from '@chakra-ui/react';
import Content from './content';
import Menu from './menu';

const Main = () => {
  return (
    <Flex>
      <Menu />
      <Content />
    </Flex>
  );
};

export default Main;
