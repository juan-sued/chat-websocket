import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { socket } from '../../socket';
import MessageDefault, { IMessage } from '../messages/MessageDefault';

export const ChatBasicGiant: React.FC = () => {
  const messageEndRef = useRef<HTMLUListElement>(null);
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [inputValue, setInputValue] = useState('');

  const idConnectionUserCurrent = socket.id;

  useEffect(() => {
    socket.off('message').on('message', (message: IMessage) => {
      setMessages(messages => [...messages, message]);
    });

    return () => {
      socket.off('message', (message: IMessage) => {
        setMessages(messages => [...messages, message]);
      });
    };
  }, []);

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({
        behavior: 'auto',
        block: 'end'
      });
    }
  }, [messages]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    socket.emit('message', { message: inputValue, idConnection: socket.id });
    setInputValue('');
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

  return (
    <ChatBasicGiantStyle>
      <form className="card" onSubmit={handleSubmit}>
        <div className="chat-header">Chat</div>
        <ul className="message-list" ref={messageEndRef}>
          {messages
            ? messages.map((message, index) => (
                <MessageDefault
                  key={index}
                  idConnection={message.idConnection}
                  user={message.user}
                  message={message.message}
                  idConnectionUserCurrent={idConnectionUserCurrent}
                />
              ))
            : ''}
        </ul>
        <div className="containerInput">
          <input
            type="text"
            placeholder="Escreva aqui..."
            value={inputValue}
            onChange={handleInputChange}
          />
          <button className="send-button">Enviar</button>
        </div>
      </form>
    </ChatBasicGiantStyle>
  );
};

const ChatBasicGiantStyle = styled.div`
  height: 100%;
  font-weight: 100;
  display: flex;
  place-content: center;

  .card {
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
      rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
      rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 450px;

    .chat-header {
      background-color: #333;
      color: #fff;
      padding: 10px;
      font-size: 18px;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      cursor: pointer;
    }

    .message-list {
      width: 100%;
      height: 100%;
      min-height: 400px;
      overflow-y: scroll;
      list-style: none;
      padding: 10px;
    }

    .containerInput {
      height: 60px;
      padding: 10px;
      display: flex;
      justify-content: space-around;
      width: 100%;
      gap: 10px;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.6);

      input {
        border-radius: 5px;
        border: none;
        padding: 5px;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.08);
      }

      .send-button {
        border: none;
        outline: none;
        background-color: blueviolet;
        color: #fff;
        font-size: 14px;
        padding: 5px 10px;
        cursor: pointer;
        border-radius: 5px;
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
          rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
          rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
        transition: 0.3s;

        :active {
          box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
            rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;

          border: none;
        }
        :focus {
          border: none;
        }
      }
    }
  }

  @media (max-width: 320px) {
    .chat-window {
      ::-webkit-scrollbar {
        display: none;
        background-color: red;
      }
    }
  }
`;
