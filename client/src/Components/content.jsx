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
  // return (
  //   <Box bg='gray.100' width={'100%'} padding='3'>
  //     <Heading as='h1' size='m' mb={8}>
  //       Welcome to the Content Page
  //     </Heading>
  //     {isGridView ? (
  //       <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }} gap={8}>
  //         {data.map((item) => (
  //           <GridItem key={item.id} boxShadow='md' bg='white' p={4} borderRadius={4}>
  //             <Heading as='h2' size='lg' mb={4}>
  //               {item.title}
  //             </Heading>
  //             <Divider />
  //             <Text mt={4}>{item.content}</Text>
  //           </GridItem>
  //         ))}
  //       </Grid>
  //     ) : (
  //       <List spacing={'3'}>
  //         {data.map((item) => (
  //           <ListItem key={item.id} boxShadow='md' bg='white' p={4} borderRadius={4}>
  //             <Heading as='h2' size='lg' mb={4}>
  //               {item.title}
  //             </Heading>
  //             <Divider />
  //             <Text mt={4}>{item.content}</Text>
  //           </ListItem>
  //         ))}
  //       </List>
  //     )}
  //   </Box>
  // );
  return (
    <div>
      <h1>News for {countryCode}</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.url}>
            <a href={article.url}>{article.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Content;
