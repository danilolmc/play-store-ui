import "./App.css";
import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { Banners } from "./components/Banners";
import { MainContainer } from "./components/MainContainer";
import { AppsContainer } from "./components/AppsContainer";
import { useEffect,  useState } from 'react';
import {  getInitialsApps, getPopularAndRecomendedApps, getBestSeller } from './services/cards.service';

function App() {
 
  const [appsRecomendedAndPopular,setappsRecomendedAndPopular] = useState([]);
  const [appsBestSeller,setappsBestSeller] = useState([]);

    useEffect(() => {
      setappsRecomendedAndPopular(getPopularAndRecomendedApps());
      setappsBestSeller(getBestSeller())
    },[])
  

  return (
    <>
      <Header>
        <Menu />
        <Banners></Banners>
      </Header>
      <MainContainer>
        <AppsContainer title="Popular & Recomended" apps={appsRecomendedAndPopular}/>
        <AppsContainer title="Best Sellers" apps={appsBestSeller}/>
      </MainContainer>
    </>
  );
}

export default App;
