import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { IEnterRoomData } from '../forms/FormEnterRoom/FormEnterRoom';

interface IGlassInput {
  setEnterRoomData: Dispatch<SetStateAction<IEnterRoomData>>;
  enterRoomData: IEnterRoomData;
}
export default function GlassInput({
  setEnterRoomData,
  enterRoomData
}: IGlassInput): React.ReactElement {
  const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEnterRoomData({ ...enterRoomData, [name]: value });
  };
  return (
    <GlassInputStyle>
      <div className="input__container">
        <div className="shadow__input"></div>

        <input
          type="text"
          name="userName"
          className="input__search"
          placeholder="Qual seu nome, Meu Nobre?"
          value={enterRoomData.userName}
          onChange={handleChangeText}
        />
      </div>
    </GlassInputStyle>
  );
}

const GlassInputStyle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100px;

  position: relative;

  .input__container {
    position: relative;
    background: rgba(255, 255, 255, 0.664);
    padding: 10px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    border-radius: 10px;
    width: 400px;
    transition: transform 400ms;
    transform-style: preserve-3d;

    perspective: 500px;

    position: relative;
    animation: levitar 10s normal ease-in-out;

    @keyframes levitar {
      0% {
        transform: translateY(-150px) rotateY(-360deg) rotateX(360deg);
      }

      50% {
        transform: translateY(5px);
      }
      100% {
        transform: translateY(0);
      }
    }

    :hover {
      animation: levitar 5s normal ease-in-out;
    }
  }

  .shadow__input {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    bottom: 0;
    z-index: -1;
    filter: blur(30px);
    border-radius: 8px;
    background-color: #999cff;
    background-image: radial-gradient(
        at 85% 51%,
        hsla(60, 60%, 61%, 1) 0px,
        transparent 50%
      ),
      radial-gradient(at 74% 68%, hsla(235, 69%, 77%, 1) 0px, transparent 50%),
      radial-gradient(at 64% 79%, hsla(284, 72%, 73%, 1) 0px, transparent 50%),
      radial-gradient(at 75% 16%, hsla(283, 60%, 72%, 1) 0px, transparent 50%),
      radial-gradient(at 90% 65%, hsla(153, 70%, 64%, 1) 0px, transparent 50%),
      radial-gradient(at 91% 83%, hsla(283, 74%, 69%, 1) 0px, transparent 50%),
      radial-gradient(at 72% 91%, hsla(213, 75%, 75%, 1) 0px, transparent 50%);
  }

  .input__button__shadow {
    cursor: pointer;
    border: none;
    background: none;
    transition: transform 400ms, background 400ms;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    padding: 5px;
  }

  .input__button__shadow:hover {
    background: rgba(255, 255, 255, 0.411);
  }

  .input__search {
    width: 100%;
    border-radius: 10px;
    outline: none;
    border: none;
    padding: 8px;
    position: relative;
  }
`;
