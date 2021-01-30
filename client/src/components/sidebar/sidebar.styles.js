import styled from '@emotion/styled';


export const SidebarContainer = styled.div`
  width: ${p => p.isSidebarOpen ? '20%' : '8%'};
  height:100vh; 
  max-width: 280px;
  min-width: 90px;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  background: white;
  position: sticky;
  top:0;
  transition: .2s ease-in all;
`

export const SidebarLogo = styled.img`
  width: 80%;
  height: auto;
  padding: 15% 0;
  margin-left: 8%;

`

export const MenuItemContainer = styled.div``;
export const ItemContainer = styled.div``;

// Menu items -------------------------------------------------------------
export const MenuItem = styled.div`
  ${p => !p.isSidebarOpen && `
    text-align: center;
    ${p.selected && `background-color : rgba(235,248,250,0.5)`};
  `}
  padding: 6px 30px;
  color : ${p => p.selected ? 'rgba(22,148,214,1)': 'rgba(140,140,140,1)'};
  &:hover{
    color: rgba(22,148,214,1);
    transition: .1s ease-in all;
  };

  white-space: nowrap;
  position: relative; // Dropdown Icon
  &:after {
    content: '';
    border: 0.6px solid ${p => p.selected ? 'rgba(22,148,214,1)': 'rgba(235,248,255,1)'};
    display: block;
    margin: 15px 0 4px;
  };

  ${p => !p.selected && `
      &:hover {
        &:after {
          border: 1px solid rgba(22,148,214,1);
          transition: .1s ease-in all;
        }
      }
  `}
`

export const Text = styled.p`
  display: ${p => p.isSidebarOpen ? 'inline' : 'none'};
  font-size: 0.9vw;
  font-weight: Bold;
  font-family: ${p => p.font};
  top:11px;
  left:82px;
`

export const Icon = styled.img`
  height: 25px;
  width: auto;
  ${p => !p.isSidebarOpen && `
    padding-left: 1.3 vw;
  `};
  ${p => p.isSidebarOpen && `
    padding-right: 2vw
  `};
`

export const Logout = styled.p`
  display: ${p => p.isSidebarOpen ? 'inline' : 'none'};
  font-size: 0.9vw;
  font-weight: Bold;
  font-family: ${p => p.font};
  top:11px;
  left:82px;
`



// Toggler -----------------------------------------------------------------------------
export const TogglerContainer = styled.div`
  position: absolute;
  width: 30%;
  bottom: 10%;
  left: 0;
  right: 0;
  margin: 0 auto;
`

export const Toggler = styled.div`
    height: 40px;
    cursor: pointer;
    position: relative; // horizontal lines
    &:after {
      content: '';
      position: absolute;
      left: 0;
      top: .25em;
      height: .1em;
      width: 100%;
      background: grey;
      box-shadow: 
        0 .75em 0 0 grey,
        0 1.5em 0 0 grey;        
    }
`