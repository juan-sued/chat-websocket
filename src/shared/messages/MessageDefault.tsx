import styled from 'styled-components';

export interface IMessage {
  idConnection: string;
  userName: string;
  message: string;
  idConnectionUserCurrent: string;
  nameRoom: string;
}

export default function MessageDefault({
  message,
  idConnection,
  userName,
  idConnectionUserCurrent,
  nameRoom
}: IMessage) {
  const type = idConnectionUserCurrent === idConnection ? 'sended' : 'received';

  return (
    <MessageDefaultStyle>
      <div className={'container ' + type}>
        <div className="messageContainer ">
          <div className="nameUser">{userName}</div>
          <div className="message">{message}</div>
          <div className="triangle"></div>
        </div>
      </div>
    </MessageDefaultStyle>
  );
}

const MessageDefaultStyle = styled.li`
  width: 100%;
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

      .nameUser {
        font-size: 10px;
        width: 100%;
        margin-bottom: 8px;
        color: white;
      }
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
    .messageContainer {
      width: auto;
      height: 100%;
      align-items: end;
      background-color: #fff;

      .triangle {
        transform: rotate(180deg);

        border-right: 10px solid #ccc;
        left: 20px;
      }
    }
    .nameUser {
      display: none;
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
`;
