import styled from 'styled-components';

const LoginScreen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  gap: 1rem;

  img {
    width: 350px;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    transform-origin: bottom;
    animation-name: translate;
    animation-timing-function: ease;
  }

  @keyframes translate {
    0%   { transform: scale(1,1)      translateY(0); }
    10%  { transform: scale(1.1,.8)   translateY(0); }
    30%  { transform: scale(.9,1.1)   translateY(-15px); }
    50%  { transform: scale(1,.95) translateY(0); }
    57%  { transform: scale(1,1)      translateY(-7px); }
    64%  { transform: scale(1,1)      translateY(0); }
    100% { transform: scale(1,1)      translateY(0); }
  }

  h1 {
    font-size: 90%;
    border-bottom: 2px solid #777;
  }

  @media (max-width: 500px) {
    img {
      width: 300px;
      height: 300px;
    }
  }
`;

export default LoginScreen;
