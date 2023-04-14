import styled from 'styled-components';

import { BrowserRouter } from 'react-router-dom';
import Routes from '../Routes';
import GlobalStyles from '../styles/globalStyles';

import { SessionProvider } from '../contexts/sessionContext';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <SessionProvider>
          <Routes />
        </SessionProvider>
      </BrowserRouter>
    </>
  );
};

export default App;

const AppStyle = styled.div`
  width: 100%;
  height: 100%;
`;
