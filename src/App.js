import './App.css';
import { Header } from './components/Header';
import { Menu } from './components/Menu';
import { Banners } from './components/Banners';

function App() {
  return (
   <>
    <Header>
      <Menu/>
      <Banners></Banners>
    </Header>
   </>
  );
}

export default App;
