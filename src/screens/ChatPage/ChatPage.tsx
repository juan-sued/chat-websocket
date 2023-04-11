import styled from 'styled-components';
import { ChatBasicGiant } from '../../shared/chats/ChatBasicGiant';

export default function ChatPage() {
  return (
    <ChatPageStyle>
      <ChatBasicGiant />
    </ChatPageStyle>
  );
}

const ChatPageStyle = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px;
`;
