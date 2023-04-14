import styled from 'styled-components';

import { FormEvent, useContext, useState } from 'react';
import { IRoom } from '../../../interfaces/IChat';
import GlassInput from '../../inputs/GlassInput';
import CheckboxFormEnterRoom from './CheckboxFormEnterRoom';
import { useNavigate } from 'react-router-dom';
import SessionContext from '../../../contexts/sessionContext';
interface IFormEnterRoom {
  rooms: IRoom[];
}

export interface IEnterRoomData {
  nameRoom: string;
  userName: string;
}

export default function FormEnterRoom({ rooms }: IFormEnterRoom) {
  const { setSession } = useContext(SessionContext);

  const navigate = useNavigate();

  const [enterRoomData, setEnterRoomData] = useState<IEnterRoomData>({
    nameRoom: '',
    userName: ''
  });

  function submitFormEnterRoom(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSession(enterRoomData);
    navigate('/chat');
  }
  return (
    <FormEnterRoomStyle onSubmit={submitFormEnterRoom}>
      <GlassInput
        setEnterRoomData={setEnterRoomData}
        enterRoomData={enterRoomData}
      />
      <CheckboxFormEnterRoom
        enterRoomData={enterRoomData}
        setEnterRoomData={setEnterRoomData}
        rooms={rooms}
      />
    </FormEnterRoomStyle>
  );
}

const FormEnterRoomStyle = styled.form`
  display: flex;
  flex-direction: column;
  place-content: center;
  place-items: center;
  width: 100%;
`;
