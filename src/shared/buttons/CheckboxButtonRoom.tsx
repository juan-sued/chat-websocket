import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { IEnterRoomData } from '../forms/FormEnterRoom/FormEnterRoom';

interface ICheckboxButtonRoom {
  id: number;
  name: string;
  setEnterRoomData: Dispatch<SetStateAction<IEnterRoomData>>;
  enterRoomData: IEnterRoomData;
}

export const CheckboxButtonRoom: React.FC<ICheckboxButtonRoom> = ({
  id,
  name,
  setEnterRoomData,
  enterRoomData
}: ICheckboxButtonRoom) => {
  const handleCheckboxChange = (value: string) => {
    setEnterRoomData({ ...enterRoomData, nameRoom: value });
  };

  const isSelected: boolean = enterRoomData.nameRoom === name ? true : false;
  return (
    <CheckboxButtonRoomStyle
      backgroundChecked={isSelected}
      onClick={() => handleCheckboxChange(name)}
      type="button"
    >
      <div className="checkbox-wrapper-5">
        <div className="check">
          <input
            id="check-5"
            type="checkbox"
            checked={isSelected}
            onChange={() => handleCheckboxChange(name)}
          />
          <label htmlFor="check-5"></label>
        </div>
      </div>

      <p>{name}</p>
    </CheckboxButtonRoomStyle>
  );
};
interface ICheckboxButtonRoomStyle {
  backgroundChecked: boolean;
}
const CheckboxButtonRoomStyle = styled.button<ICheckboxButtonRoomStyle>`
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

  p {
    color: ${props =>
      props.backgroundChecked ? 'rgba(0, 0, 0, 0.5)' : '#9b9b9b'};

    font-weight: ${props => (props.backgroundChecked ? '600' : '500')};
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
