import React, { useState } from 'react';
import styled from 'styled-components';
import { ICheckboxButtonRoom, IRoom } from '../../interfaces/IChat';
import { GlassInput } from '../../shared/inputs/GlassInput';

export function HomePage(): React.ReactElement {
  const rooms: IRoom[] = [
    { id: 2, name: 'Sala da Sarinha' },
    { id: 3, name: 'Sala da Lele' },
    { id: 4, name: 'Sala do Juan' },
    { id: 5, name: 'Sala do Luís' }
  ];

  const [selectedId, setSelectedId] = useState<number>(0);

  return (
    <HomePageStyle>
      <GlassInput />
      <CheckboxStyle>
        <div className="titleContainer">Escolha uma sala</div>
        <ul className="listRooms">
          {rooms
            ? rooms.map((room, index) => (
                <CheckboxButtonRoom
                  key={index}
                  id={room.id}
                  name={room.name}
                  setSelectedId={setSelectedId}
                  selectedId={selectedId}
                />
              ))
            : ''}
        </ul>

        <button>entrar</button>
      </CheckboxStyle>
    </HomePageStyle>
  );
}

const CheckboxStyle = styled.div`
  background-color: #fff;
  max-width: 400px;

  min-height: 500px;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  .usernameContainer {
    width: 100%;
    height: 60px;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    place-content: center;
    place-items: center;

    input {
      border-radius: 5px;
      border: none;
    }
  }
  .titleContainer {
    width: 100%;
    display: flex;
    place-content: center;
    font-size: 28px;
    color: #9b9b9b;
    padding: 20px;
    margin-bottom: 20px;
  }

  .listRooms {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

const HomePageStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

const CheckboxButtonRoom: React.FC<ICheckboxButtonRoom> = (
  props: ICheckboxButtonRoom
) => {
  const { id, name, setSelectedId, selectedId } = props;

  const handleCheckboxChange = (id: number) => {
    setSelectedId(id);
  };
  return (
    <CheckboxButtonRoomStyle
      backgroundChecked={selectedId === id ? true : false}
      onClick={() => handleCheckboxChange(id)}
    >
      <div className="checkbox-wrapper-5">
        <div className="check">
          <input
            id="check-5"
            type="checkbox"
            checked={selectedId === id ? true : false}
            onChange={() => handleCheckboxChange(id)}
          />
          <label htmlFor="check-5"></label>
        </div>
      </div>

      <p>{name}</p>
    </CheckboxButtonRoomStyle>
  );
};

const CheckboxButtonRoomStyle = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #9b9b9b;
  width: 100%;
  border: none;
  height: 50px;
  border-radius: 5px;
  font-size: 14px;
  padding: 20px;
  cursor: pointer;
  margin-bottom: 5px;
  background-color: ${props =>
    props.backgroundChecked
      ? 'background-color: #85FFBD;background-image: linear-gradient(45deg, #85FFBD 0%, #85FFBD 100%);'
      : '#fff'};

  :hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  .checkbox-wrapper-5 .check {
    --size: 30px;

    position: relative;
    background: linear-gradient(90deg, #f19af3, #f099b5);
    line-height: 0;
    perspective: 400px;
    font-size: var(--size);

    box-shadow: rgb(0, 0, 0, 0.1) 3px 3px 6px 0px inset,
      rgba(255, 255, 255, 0.1) -3px -3px 6px 1px inset;
  }

  .checkbox-wrapper-5 .check input[type='checkbox'],
  .checkbox-wrapper-5 .check label,
  .checkbox-wrapper-5 .check label::before,
  .checkbox-wrapper-5 .check label::after,
  .checkbox-wrapper-5 .check {
    appearance: none;
    display: inline-block;
    border-radius: var(--size);
    border: 0;
    transition: 0.35s ease-in-out;
    box-sizing: border-box;
    cursor: pointer;
  }

  .checkbox-wrapper-5 .check label {
    width: calc(2.2 * var(--size));
    height: var(--size);
    background: #d7d7d7;
    overflow: hidden;
  }

  .checkbox-wrapper-5 .check input[type='checkbox'] {
    position: absolute;
    z-index: 1;
    width: calc(0.8 * var(--size));
    height: calc(0.8 * var(--size));
    top: calc(0.1 * var(--size));
    left: calc(0.1 * var(--size));
    background: linear-gradient(45deg, #dedede, #ffffff);
    box-shadow: 0 6px 7px rgba(0, 0, 0, 0.3);
    outline: none;
    margin: 0;
  }

  .checkbox-wrapper-5 .check input[type='checkbox']:checked {
    left: calc(1.3 * var(--size));
  }

  .checkbox-wrapper-5 .check input[type='checkbox']:checked + label {
    background: transparent;
  }

  .checkbox-wrapper-5 .check label::before,
  .checkbox-wrapper-5 .check label::after {
    content: '· ·';
    position: absolute;
    overflow: hidden;
    left: calc(0.15 * var(--size));
    top: calc(0.5 * var(--size));
    height: var(--size);
    letter-spacing: calc(-0.04 * var(--size));
    color: #9b9b9b;
    font-family: 'Times New Roman', serif;
    z-index: 2;
    font-size: calc(0.6 * var(--size));
    border-radius: 0;
    transform-origin: 0 0 calc(-0.5 * var(--size));
    backface-visibility: hidden;
  }

  .checkbox-wrapper-5 .check label::after {
    content: '●';
    top: calc(0.65 * var(--size));
    left: calc(0.2 * var(--size));
    height: calc(0.1 * var(--size));
    width: calc(0.35 * var(--size));
    font-size: calc(0.2 * var(--size));
    transform-origin: 0 0 calc(-0.4 * var(--size));
  }

  .checkbox-wrapper-5 .check input[type='checkbox']:checked + label::before,
  .checkbox-wrapper-5 .check input[type='checkbox']:checked + label::after {
    left: calc(1.55 * var(--size));
    top: calc(0.4 * var(--size));
    line-height: calc(0.1 * var(--size));
    transform: rotateY(360deg);
  }

  .checkbox-wrapper-5 .check input[type='checkbox']:checked + label::after {
    height: calc(0.16 * var(--size));
    top: calc(0.55 * var(--size));
    left: calc(1.6 * var(--size));
    font-size: calc(0.6 * var(--size));
    line-height: 0;
  }
`;
