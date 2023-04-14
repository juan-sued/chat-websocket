import React from 'react';
import styled from 'styled-components';

import lovepik_cell from '../../assets/lovepik_cell.png';
import FormEnterRoom from '../../shared/forms/FormEnterRoom/FormEnterRoom';
import { IRoom } from '../../interfaces/IChat';

export function HomePage(): React.ReactElement {
  const rooms: IRoom[] = [
    { id: 2, name: 'Sala da Sarinha' },
    { id: 3, name: 'Sala da Lele' },
    { id: 4, name: 'Sala do Juan' },
    { id: 5, name: 'Sala do Luís' }
  ];

  return (
    <HomePageStyle>
      <div className="containerLogo">
        <h1>HA! BLAS</h1>
      </div>
      <div className="containerImg">
        <img src={lovepik_cell} alt="" />
      </div>

      <FormEnterRoom rooms={rooms} />
    </HomePageStyle>
  );
}

const HomePageStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  z-index: -2;

  .containerLogo {
    position: fixed;
    z-index: -1;
    width: 100%;
    height: 100%;
    top: 20%;
    padding-left: 70px;

    h1 {
      color: #ffcc70;
      width: 380px;
      word-wrap: break-word;
      font-size: 150px;
      background-image: linear-gradient(
        45deg,
        #f099b5 15%,
        #ffcc70 80%,
        #ffcc70 100%
      );
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
    }
  }

  .containerImg {
    position: fixed;
    z-index: -1;
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
    left: 500px;
    img {
      width: fit-content;
      height: 821px;
    }
  }

  @media (max-width: 420px) {
    .containerLogo {
      display: flex;
      top: 0;
      align-items: end;
      justify-content: center;
      padding: 20px;

      h1 {
        font-size: 30px;
      }
    }
  }
`;
