import {
  Box,
  Center,
  Flex,
  List,
  ListIcon,
  ListItem,
  VStack,
  Image,
  Text,
  HStack,
  MenuList,
  MenuItem,
  Wrap,
  WrapItem,
  Spacer,
  Divider,
} from '@chakra-ui/react';
import { Link, Link as ReactLink } from 'react-router-dom';
import Content from './content';
import { useState, useEffect } from 'react';
import { BsFillCaretRightFill } from 'react-icons/bs';
import axios from 'axios';

const Menu = () => {
  const [countries, setCountries] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get('https://newsapi.org/v2/sources?language=en&category=general&apiKey=f7faa326a04340528d46dd391c3a0656')
  //     .then((res) => {
  //       setCountries(res.data.sources);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((res) => setCountries(res.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Flex>
      <Box width='200px' height='88vh' backgroundColor='gray.200' padding={4} overflowY='scroll'>
        <Center mt={4}>
          <Box fontWeight='bold'>Choose a Country</Box>
        </Center>

        <VStack mt={8} justify={'left'}>
          <List spacing={3}>
            {countries.map((country) => (
              <ListItem>
                <Box key={country.name.common}>
                  <HStack>
                    <Text justify={'left'} fontSize='xs'>
                      {country.name.common}
                    </Text>
                    <Spacer />
                    <Image src={country.flags.svg} alt={country.name.common} boxSize={'25px'} />
                  </HStack>
                </Box>
              </ListItem>
            ))}
          </List>
        </VStack>
      </Box>
      <Content />
    </Flex>
  );
};

export default Menu;
