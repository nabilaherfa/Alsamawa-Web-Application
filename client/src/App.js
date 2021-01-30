import React, { Component } from 'react';
import * as s from './App.styles'
import 'bootstrap/dist/css/bootstrap.min.css';

//Components
import Sidebar from './components/sidebar/sidebar';
import MainView from './components/screens/MainView';
import MainView2 from './components/screens/MainView2';


const App = () => {
  const sidebarHeader = {
    full : 'images/logo.png',
    short : 'images/short_logo.png'
  };
  const menuItems = [
    {name: 'HOME', to: '/home', icon: 'images/Home.png', subMenuItems: []},
    {name: 'PROFIL', to: '/profil', icon: 'images/profile.png', subMenuItems: []},
    {name: 'KELAS', to: '/kelaspranikah', icon: 'images/kelas.png', subMenuItems: []},
    {name: 'TA\'ARUF', to: '/formcv', icon: 'images/taaruf.png', subMenuItems: []},
    {name: 'TANYA USTADZ', to: '/tanyaustadz', icon: 'images/tanyaustad.png', subMenuItems: []},
    {name: 'SETTINGS', to: '/settings', icon: '/images/Setings.png', subMenuItems: []},
    {name: 'LOG OUT', to: '/', icon: '/images/logout.png', subMenuItems: []}
  ];
  const fonts = 'Roboto';
  
  const isLoggedin = true

  if (isLoggedin){
    return (
      <s.App>
          <Sidebar sidebarHeader={sidebarHeader} menuItems={menuItems} fonts={fonts} isLoggedin={isLoggedin}/>
          <MainView />
      </s.App>
    );
  } else{
    return (
      <s.App>
          <MainView2 />
      </s.App>
    )
  }
}

export default App;
