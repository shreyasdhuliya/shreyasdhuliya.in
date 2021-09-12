//react imports
import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


//navbar  imports
import HomePage from '../../components/HomePage'
import Portfolio from '../../components/Portfolio'
import Contact from '../../components/Contact'
import About from '../../components/AboutMe'
import Artwork from '../../components/Artwork'
import EnterScreen from '../../components/EnterScreen'
import ViewPort from '../../components/Portfolio/ViewPortfolio'
import AddArt from '../../components/Admin/AddArt'


import './index.scss'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'

export default function NavBar() {
  
  return (
    <Router>

      <DesktopNav />
      <MobileNav/>
     
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        {/*Nabar routes */}
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/Artwork">
          <Artwork/>
        </Route>

        <Route exact path="/portfolio/artwork/viewpost/:category/:post">
          <ViewPort />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/addart">
          <AddArt />
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>


        {/*drawer routes 
           {DrawerList.map((listitem, index) => (
              <Route key={index} path={listitem.href}>
              {listitem.comp}
            </Route>
           ))*/}

        {/*enter screen */}
        <Route path="/">
          <EnterScreen />
        </Route>

      </Switch>

    </Router>
  );

}