import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as s from './sidebar.styles';


const Sidebar = props => {
  const { 
    sidebarHeader = {
      full : null,
      short : null
    },
    menuItems = [],
    fonts = '',
    isLoggedin = true
  } = props;


  // State
  const [selected, setSelectedMenuItem] = useState(menuItems[0].name);
  const [isSidebarOpen, setSidebarState] = useState(true);
  const [header, setHeader] = useState(sidebarHeader.full);
  const [loggedin, setLoggedinState] = useState(isLoggedin); 


  const handleMenuItemClick = name  => {
    if (name === 'LOG OUT'){
      setLoggedinState(false);
    } else {
      setSelectedMenuItem(name);
    }
  }

  const menuItemsJSX = menuItems.map((item, index) => {
    const isItemSelected = selected === item.name

    return (
      <Link to={item.to} style={{textDecoration: 'none' }}>
        <s.MenuItem 
        key={index} 
        font={fonts} 
        selected={isItemSelected} 
        onClick={() => handleMenuItemClick(item.name)}
        isSidebarOpen={isSidebarOpen}
        >
        <s.Icon isSidebarOpen={isSidebarOpen} src={item.icon}/>
        <s.Text isSidebarOpen={isSidebarOpen}>{item.name}</s.Text>
      </s.MenuItem>
      </Link>
    )
  });

  // Effects

  // Update of header state
  useEffect(() => {
    isSidebarOpen ? setTimeout(() => setHeader(sidebarHeader.full), 200) : setHeader(sidebarHeader.short);
  }, [isSidebarOpen, sidebarHeader])


  // Update of sidebar state
  useEffect(() => {
    const updateWindowWidth = () => {
      if (window.innerWidth < 1280) setSidebarState(false);
      else setSidebarState(true)
    }

    window.addEventListener('resize', updateWindowWidth);

    return () => window.removeEventListener('resize', updateWindowWidth);
  }, [isSidebarOpen]);

  return(
    <s.SidebarContainer isSidebarOpen={isSidebarOpen}>
      <s.SidebarLogo src={header} />
      <s.MenuItemContainer>{menuItemsJSX}</s.MenuItemContainer>
      <s.Logout onClick={() => setLoggedinState(false)}/>
      <s.TogglerContainer onClick={() => setSidebarState(!isSidebarOpen)}>
        <s.Toggler/>
      </s.TogglerContainer>
    </s.SidebarContainer>
  )
}

export default Sidebar