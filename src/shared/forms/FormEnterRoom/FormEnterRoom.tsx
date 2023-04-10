import styled from 'styled-components';

import { useState } from 'react';
import { IRoom } from '../../../interfaces/IChat';
import { GlassInput } from '../../inputs/GlassInput';
import CheckboxFormEnterRoom from './CheckboxFormEnterRoom';

interface IFormEnterRoom {
  rooms: IRoom[];
}

export default function FormEnterRoom({ rooms }: IFormEnterRoom) {
  const [selectedId, setSelectedId] = useState<number>(0);

  return (
    <FormEnterRoomStyle>
      <GlassInput />
      <CheckboxFormEnterRoom
        selectedId={selectedId}
        setSelectedId={setSelectedId}
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
