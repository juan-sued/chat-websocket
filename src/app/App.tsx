import styled from 'styled-components';
import { ChatBasicGiant } from '../shared/chats/ChatBasicGiant';

import { BrowserRouter } from 'react-router-dom';
import Routes from '../Routes';
import GlobalStyles from '../styles/globalStyles';

function App(): React.ReactElement {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;

const AppStyle = styled.div`
  width: 100%;
  height: 100%;
`;
