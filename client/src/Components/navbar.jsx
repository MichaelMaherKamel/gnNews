import { Button, Flex, Spacer, Icon, Text, useDisclosure } from '@chakra-ui/react';
import { Link, Link as ReactLink } from 'react-router-dom';
import { BsNewspaper } from 'react-icons/bs';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import changeView from '../Redux/Actions/viewActions';

const Navbar = () => {
  //Toggle Views using React State Hooks
  // const [tileView, setView] = useState(true);

  //Toggle Views using Redux
  const isGridView = useSelector((state) => state.view.isGridView);
  const dispatch = useDispatch();
  const setView = () => {
    dispatch(changeView());
  };
  //=======================
  const { getDisclosureProps, getButtonProps } = useDisclosure();
  const buttonProps = getButtonProps();
  const disclosureProps = getDisclosureProps();
  return (
    <Flex align='center' bg='gray.800' color='white' height='60px' px='20px'>
      <Link as={ReactLink} to='/'>
        <Flex alignItems='center'>
          <Icon as={BsNewspaper} h={6} w={6} color='orange.400' margin={'1'} />
          <Text>gnNews</Text>
        </Flex>
      </Link>
      <Spacer />
      {/* <Button onClick={() => setView(!tileView)} size='sm' colorScheme='blue'>
        {tileView === true ? 'Switch to Tiles' : 'Switch to List'}
      </Button> */}
      <Button onClick={setView} size='sm' colorScheme='blue'>
        {isGridView ? 'List View' : 'Grid View'}
      </Button>
      <Button {...buttonProps} size='sm' colorScheme='red'>
        Toggle Me
      </Button>
      <Text {...disclosureProps} mt={4}>
        The Hardest Par for me is the redux 😄
        <br />
        The best part about the Project is everything in it 💌
      </Text>
    </Flex>
  );
};

export default Navbar;
