import {
  Button,
  Flex,
  Spacer,
  Icon,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';
import { Link, Link as ReactLink } from 'react-router-dom';
import { BsNewspaper } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import changeView from '../Redux/Actions/viewActions';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure(); // For the toggle button
  const isGridView = useSelector((state) => state.view.isGridView); //For the view button
  const dispatch = useDispatch();
  const setView = () => {
    dispatch(changeView());
  };

  return (
    <Flex align='center' bg='gray.800' color='white' height='60px' px='20px'>
      <Link as={ReactLink} to='/'>
        <Flex alignItems='center'>
          <Icon as={BsNewspaper} h={6} w={6} color='orange.400' margin={'1'} />
          <Text>gnNews</Text>
        </Flex>
      </Link>
      <Spacer />
      <Button onClick={setView} size='sm' colorScheme='blue' margin={'1px'}>
        {isGridView ? 'List View' : 'Grid View'}
      </Button>
      <Button onClick={onOpen} size='sm' colorScheme='red' margin={'1px'}>
        Toggle Me
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Hi 😃</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              For me the hardest part about the project is trying to use 2 APIs and sync data based on one anohter.
            </Text>
            <Text>The best part of this Project is that I enjoyed it and learned many stuff while doing it 💌</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default Navbar;
