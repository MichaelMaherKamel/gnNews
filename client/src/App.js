import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/navbar';
import LeftMenu from './Components/menu';
import Footer from './Components/footer';

function App() {
  return (
    <ChakraProvider resetCSS>
      <Router>
        <Navbar />
        <main>
          <LeftMenu />
        </main>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
