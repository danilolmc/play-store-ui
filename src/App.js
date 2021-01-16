import './App.css';
import { Header } from './components/Header';
import { Menu } from './components/Menu';
import { Banners } from './components/Banners';
import { MainContainer } from './components/MainContainer';
import { AppsContainer } from './components/AppsContainer';

function App() {
  return (
   <>
    <Header>
      <Menu/>
      <Banners></Banners>
    </Header>
    <MainContainer>
      <AppsContainer title="Popular & Recomended" qtdApps={159}/>
    </MainContainer>
   </>
  );
}

export default App;
