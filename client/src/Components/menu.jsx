import {
  Box,
  Center,
  List,
  ListItem,
  VStack,
  Image,
  Text,
  HStack,
  Spacer,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import changeCountry from '../Redux/Actions/countryActions';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const Menu = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/region/europe')
      .then((res) => setCountries(res.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const dispatch = useDispatch();

  // const setCountry = () => {
  //   dispatch(changeCountry(country.cca2));
  // };

  return (
    <Box width='200px' height='88vh' backgroundColor='gray.200' padding={4} overflowY='scroll'>
      <Center mt={4}>
        <Box fontWeight='bold'>Countries</Box>
      </Center>
      <VStack mt={8} justify={'left'}>
        <List spacing={3}>
          {countries.slice(1, 30).map((country) => (
            <ListItem>
              <LinkBox key={country.name.common}>
                <HStack>
                  <LinkOverlay
                    as={ReactLink}
                    to={`/country/${country.cca2}`}
                    onClick={() => {
                      dispatch(changeCountry(country.cca2));
                    }}
                  >
                    <Text fontSize='xs' fontWeight={'semibold'} lineHeight={'tight'}>
                      {country.name.common}
                    </Text>
                  </LinkOverlay>
                  <Spacer />
                  <Image src={country.flags.svg} alt={country.name.common} boxSize={'25px'} />
                </HStack>
              </LinkBox>
            </ListItem>
          ))}
        </List>
      </VStack>
    </Box>
  );
};

export default Menu;
