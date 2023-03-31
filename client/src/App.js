import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import CountryScreen from './Screens/CountryScreen';

function App() {
  return (
    <ChakraProvider resetCSS>
      <Router>
        <main>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/countries' element={<CountryScreen />}>
              <Route path='/countries/:country' element={<CountryScreen />} />
            </Route>
          </Routes>
        </main>
      </Router>
    </ChakraProvider>
  );
}

export default App;
