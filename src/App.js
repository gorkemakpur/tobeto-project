import './App.css';
import Navi from './components/Navbar/Navi';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';
import Content from './components/Content/Content';

function App() {
  return (
    <div className="App">
      <Navi />
      
      <Content />

      <Footer />
    </div>
  );
}

export default App;
