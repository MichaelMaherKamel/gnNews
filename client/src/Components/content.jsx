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
  Card,
  CardBody,
  Image,
  CardFooter,
  Button,
  ButtonGroup,
  Center,
} from '@chakra-ui/react';
//import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import changeView from '../Redux/Actions/viewActions';
import changeCountry from '../Redux/Actions/countryActions';
import axios from 'axios';

const Content = () => {
  const isGridView = useSelector((state) => state.view.isGridView);
  const countryCode = useSelector((state) => state.country.country);

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const apiKey = 'f7faa326a04340528d46dd391c3a0656';
    const url = `https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=${apiKey}`;

    axios.get(url).then((response) => {
      setArticles(response.data.articles);
    });
  }, [countryCode]);
  return (
    <Box bg='gray.100' width={'100%'} padding='3' height='88vh' overflowY='scroll' overflowX='scroll'>
      <Heading as='h1' size='lg' mb={8}>
        News
      </Heading>
      {isGridView ? (
        <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }} gap={8}>
          {articles.map((article) => (
            <GridItem key={article.source.id} boxShadow='md' bg='white' p={4} borderRadius={4}>
              <Heading as='h2' size='lg' mb={4}>
                {article.author}
              </Heading>
              <Divider />
              <a mt={4} href={article.url} target='_blank'>
                {article.title}
              </a>
            </GridItem>
          ))}
        </Grid>
      ) : (
        <List spacing={'3'}>
          {articles.map((article) => (
            <ListItem key={article.source.id} boxShadow='md' bg='white' p={4} borderRadius={4}>
              <Heading as='h2' size='lg' mb={4}>
                {article.author}
              </Heading>
              <Divider />
              <a mt={4} href={article.url} target='_blank'>
                {article.title}
              </a>
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default Content;
