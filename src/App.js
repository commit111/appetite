//import logo from './logo.svg';
//import './App.css';

//started jul 30, 2023

import Pages from "./pages/Pages";
import Category from "./components/Category";
import {BrowserRouter} from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {GrRestaurant} from "react-icons/gr";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav>
        <GrRestaurant />
        <Logo to={"/"}>Appetite</Logo>
      </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 2.1rem;
  font-weight: 400;
  font-family: "Berkshire Swash", cursive;
  margin-left: 0.5rem;
  background: linear-gradient(45deg, #FF1493, #FF8014);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Nav = styled.div`
  padding: 4rem 0rem 1rem 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg{
    font-size: 2.2rem;
  }
`;

export default App;
