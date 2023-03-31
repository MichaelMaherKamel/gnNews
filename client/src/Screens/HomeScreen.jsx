import {
  Box,
  Flex,
  Heading,
  Link,
  HStack,
  Icon,
  Image,
  Skeleton,
  Stack,
  useColorModeValue as mode,
} from '@chakra-ui/react';

import { FaArrowRight } from 'react-icons/fa';
import { BsNewspaper } from 'react-icons/bs';

const HomeScreen = () => {
  return (
    <Box
      maxW='7xl'
      mx='auto'
      px={{
        base: '0',
        lg: '12',
      }}
      py={{
        base: '0',
        lg: '12',
      }}
    >
      <Stack
        direction={{
          base: 'column-reverse',
          lg: 'row',
        }}
        spacing={{
          base: '0',
          lg: '20',
        }}
      >
        <Box
          width={{
            lg: 'sm',
          }}
          transform={{
            base: 'translateY(-50%)',
            lg: 'none',
          }}
          bg={{
            base: mode('red.50', 'gray.700'),
            lg: 'transparent',
          }}
          mx={{
            base: '6',
            md: '8',
            lg: '0',
          }}
          px={{
            base: '6',
            md: '8',
            lg: '0',
          }}
          py={{
            base: '6',
            md: '8',
            lg: '12',
          }}
        >
          <Stack
            spacing={{
              base: '8',
              lg: '10',
            }}
          >
            <Stack
              spacing={{
                base: '2',
                lg: '4',
              }}
            >
              <Heading size='xl' color={mode('red.500', 'red.300')}>
                <BsNewspaper /> gnNews
              </Heading>
              <Heading size='xl' fontWeight='normal'>
                Where you can see News in one place
              </Heading>
            </Stack>
            <HStack spacing='3'>
              <Link
                href='http://localhost:3000/countries'
                color={mode('red.500', 'red.300')}
                fontWeight='bold'
                fontSize='lg'
              >
                Discover now
              </Link>
              <Icon color={mode('red.500', 'red.300')} as={FaArrowRight} />
            </HStack>
          </Stack>
        </Box>
        <Flex flex='1' overflow='hidden'>
          <Image
            src='https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=1600'
            alt='Lovely Image'
            fallback={<Skeleton />}
            maxH='450px'
            minW='300px'
            objectFit='cover'
            flex='1'
          />
        </Flex>
      </Stack>
    </Box>
  );
};

export default HomeScreen;
