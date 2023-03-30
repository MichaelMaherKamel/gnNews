import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/navbar';
import homePage from './Screens/HomeScreen';

import Footer from './Components/footer';
import Main from './Components/main';

function App() {
  return (
    <ChakraProvider resetCSS>
      <Router>
        <Navbar />
        <main>
          <Main />
        </main>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
