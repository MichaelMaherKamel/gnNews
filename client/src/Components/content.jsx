import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  GridItem,
  Divider,
  Flex,
  Stack,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import changeView from '../Redux/Actions/viewActions';

const data = [
  {
    id: 1,
    title: 'Lorem Ipsum',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac purus eget ante vulputate molestie. Donec hendrerit urna eu dapibus molestie.',
  },
  {
    id: 2,
    title: 'Dolor Sit Amet',
    content:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  {
    id: 3,
    title: 'Consectetur Adipiscing Elit',
    content:
      'Etiam euismod accumsan tellus, eget imperdiet metus tristique ac. Vivamus sed nibh nec sem porttitor consectetur vel ut lorem.',
  },

  {
    id: 4,
    title: 'Testing',
    content:
      'Etiam euismod accumsan tellus, eget imperdiet metus tristique ac. Vivamus sed nibh nec sem porttitor consectetur vel ut lorem.',
  },
];

const Content = () => {
  const isGridView = useSelector((state) => state.view.isGridView);
  return (
    <Box bg='gray.100' width={'100%'} padding='3'>
      <Heading as='h1' size='m' mb={8}>
        Welcome to the Content Page
      </Heading>
      {isGridView ? (
        <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }} gap={8}>
          {data.map((item) => (
            <GridItem key={item.id} boxShadow='md' bg='white' p={4} borderRadius={4}>
              <Heading as='h2' size='lg' mb={4}>
                {item.title}
              </Heading>
              <Divider />
              <Text mt={4}>{item.content}</Text>
            </GridItem>
          ))}
        </Grid>
      ) : (
        <List spacing={'3'}>
          {data.map((item) => (
            <ListItem key={item.id} boxShadow='md' bg='white' p={4} borderRadius={4}>
              <Heading as='h2' size='lg' mb={4}>
                {item.title}
              </Heading>
              <Divider />
              <Text mt={4}>{item.content}</Text>
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default Content;
