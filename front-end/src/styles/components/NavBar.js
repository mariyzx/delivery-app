import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background-color: black;
  padding-left: 24px;
  position: fixed;
  width: 100%;
  top: 0;

  h3 {
    color: #F9B717;
  }
  
  .hamburguer {
    display: none;
    cursor: pointer;
    background-color: transparent;
    border: none;
  }

  .bar {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background-color: white;
  }

  .active {
    color: red;
    left: 0;
  }


  @media (max-width: 550px) {
    .hamburguer {
      display: block;
      margin-right: 30px;
    }
  }

`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: center;
  padding-right: 24px;
  
  h3 {
    color: white;
  }
  a {
    transition: 2s ease;
    text-decoration: none;
  }

  a:hover {
    color: #f2b705;
  }

  @media (max-width: 550px) {
    position: fixed;
    left: -100%;
    top: 80px;
    gap: 0;
    flex-direction: column;
    background-color: #F9B717;
    width: 100%;
    text-align: center;
    transition: 0.3s;

    h3 {
      margin: 0.3rem;
    }
  }
 
`;
