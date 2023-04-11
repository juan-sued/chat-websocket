import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { socket } from '../../socket';
import { IMessage } from '../../interfaces/IChat';

export const ChatBasicGiant: React.FC = () => {
  const [toggle, setToggle] = useState(true);
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
      messageEndRef.current.scrollIntoView({ block: 'end' });
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

  if (toggle) {
    return (
      <ChatBasicGiantStyle>
        <button className="OpenChat" onClick={() => setToggle(!toggle)}>
          CHAT
        </button>
      </ChatBasicGiantStyle>
    );
  } else {
    return (
      <ChatBasicGiantStyle>
        <form className="card" onSubmit={handleSubmit}>
          <div className="chat-header" onClick={() => setToggle(!toggle)}>
            Chat
          </div>
          <div className="chat-window">
            <ul className="message-list" ref={messageEndRef}>
              {messages
                ? messages.map((message, index) => (
                    <Message
                      key={index}
                      idConnection={message.idConnection}
                      user={message.user}
                      message={message.message}
                      idConnectionUserCurrent={idConnectionUserCurrent}
                    />
                  ))
                : ''}
            </ul>
          </div>
          <div className="chat-input">
            <input
              type="text"
              className="message-input"
              placeholder="Escreva aqui..."
              value={inputValue}
              onChange={handleInputChange}
            />
            <button className="send-button">Enviar</button>
          </div>
        </form>
      </ChatBasicGiantStyle>
    );
  }
};

function Message(props: IMessage) {
  const { message, idConnection, user, idConnectionUserCurrent } = props;

  const type = idConnectionUserCurrent === idConnection ? 'sended' : 'received';
  return (
    <li className={'container ' + type}>
      <div className="messageContainer ">
        <div className="message">{message}</div>
        <div className="triangle"></div>
      </div>
    </li>
  );
}

const ChatBasicGiantStyle = styled.div`
  width: 100%;
  height: 100%;

  font-weight: 100;
  display: flex;

  place-content: center;
  .OpenChat {
    height: 41px;
    width: 600px;
    background-color: #333;
    border-radius: 5px;
    border: none;
    color: #ccc;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
      rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
      rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
    transition: all 0.2s ease-out;

    :hover {
      box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    }

    :active {
      box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
        rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    }
  }

  .card {
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;

    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
      rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
      rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
    width: 600px;
    height: auto;
  }

  .chat-header {
    background-color: #333;
    color: #fff;
    padding: 10px;
    font-size: 18px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    cursor: pointer;
  }
  .chat-window {
    height: 76vh;
    overflow-y: scroll;
  }

  .message-list {
    list-style: none;
    margin: 0;
    padding: 0;
    padding: 10px 10px 10px 10px;

    .container {
      width: 100%;
      display: flex;
      justify-content: start;

      .messageContainer {
        display: flex;
        flex-direction: column;
        justify-content: end;
        align-items: start;
        margin-bottom: 10px;
        border-radius: 4px;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
          rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
          rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
        min-width: 40px;
        padding: 10px;
        min-height: 40px;

        .message {
          word-wrap: break-word;
          white-space: normal;
          overflow-wrap: break-word;
          max-width: 200px;
          font-size: 14px;
          text-align: start;
          color: #333;
          width: 100%;
        }
        .triangle {
          width: 0;
          height: 0;
          border-top: 4px solid transparent;
          border-right: 10px solid blueviolet;
          border-bottom: 4px solid transparent;
          position: relative;
          bottom: 0px;
          right: 20px;
        }
      }
    }

    .sended {
      background-color: #fff;

      .messageContainer {
        width: auto;
        height: 100%;
        align-items: end;

        .triangle {
          transform: rotate(180deg);

          border-right: 10px solid #ccc;
          left: 20px;
        }
      }

      justify-content: end;
    }

    .received {
      .messageContainer {
        background-color: blueviolet;
        .message {
          color: #fff;
        }
      }
    }
  }

  .chat-input {
    display: flex;
    align-items: center;
    padding: 10px;
    border-top: 1px solid #ccc;
  }

  .message-input {
    flex: 1;
    border: none;
    outline: none;
    padding: 6px;
    font-size: 14px;
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
  }

  .send-button:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
      rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
      rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  }

  @media (max-width: 420px) {
    .chat-window {
      ::-webkit-scrollbar {
        display: none;
      }
    }
  }
`;
