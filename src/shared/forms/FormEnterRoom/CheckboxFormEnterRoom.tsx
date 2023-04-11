import styled from 'styled-components';
import { IRoom } from '../../../interfaces/IChat';
import ButtonArrow from '../../buttons/ButtonArrow';
import { CheckboxButtonRoom } from '../../buttons/CheckboxButtonRoom';
import { IEnterRoomData } from './FormEnterRoom';
import { Dispatch, SetStateAction, useState } from 'react';

interface ICheckboxFormEnterRoom {
  rooms: IRoom[];
  setEnterRoomData: Dispatch<SetStateAction<IEnterRoomData>>;
  enterRoomData: IEnterRoomData;
}

export default function CheckboxFormEnterRoom({
  rooms,
  setEnterRoomData,
  enterRoomData
}: ICheckboxFormEnterRoom) {
  return (
    <CheckboxFormEnterRoomStyle>
      <div className="titleContainer">Salitas</div>
      <ul className="listRooms">
        {rooms
          ? rooms.map((room, index) => (
              <CheckboxButtonRoom
                key={index}
                id={room.id}
                name={room.name}
                setEnterRoomData={setEnterRoomData}
                enterRoomData={enterRoomData}
              />
            ))
          : ''}
      </ul>
      <ButtonArrow />
    </CheckboxFormEnterRoomStyle>
  );
}

const CheckboxFormEnterRoomStyle = styled.div`
  background-color: #fff;
  max-width: 400px;

  min-height: 300px;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;

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
