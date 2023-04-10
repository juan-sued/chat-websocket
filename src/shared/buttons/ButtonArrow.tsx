import styled from 'styled-components';

interface ButtonArrowProps {
  fontSize?: string;
  backgroundColor?: string;
  width?: string;
  heightButton?: string;
  hoverColor?: string;
}

export default function ButtonArrow({
  fontSize = '20px',
  backgroundColor,
  width,
  heightButton = '50px',
  hoverColor = '#0006'
}: ButtonArrowProps) {
  return (
    <ButtonArrowStyle
      className="cssbuttons-io-button"
      hoverColor={hoverColor}
      heightButton={heightButton}
      fontSize={fontSize}
      backgroundColor={backgroundColor}
      width={width}
      type="submit"
    >
      {'ENTRAR'}
      <div className="icon">
        <svg
          height="24"
          width="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path
            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </ButtonArrowStyle>
  );
}

const ButtonArrowStyle = styled.button<ButtonArrowProps>`
  background: white;
  color: rgba(0, 0, 0, 0.3);
  margin-top: 20px;

  font-family: inherit;
  padding: 0.35em;
  padding-left: 1.2em;
  font-size: 17px;
  font-weight: 700;
  border-radius: 10px;
  border: none;
  letter-spacing: 0.05em;
  display: flex;
  align-items: center;
  box-shadow: rgba(50, 50, 93, 0.15) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.05) 0px 18px 36px -18px inset;
  overflow: hidden;
  position: relative;
  height: 50px;
  padding-right: 3.3em;
  width: 100%;

  .icon {
    background-color: #ffcc70;
    margin-left: 1em;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.2em;
    width: 2.2em;
    border-radius: 10px;
    box-shadow: 0.1em 0.1em 0.6em 0.2em rgba(100, 100, 111, 0.2);
    right: 0.3em;
    transition: all 0.3s;
    height: 80%;
    :hover {
      background-color: #ffcc70;
    }
  }
  :hover {
    cursor: pointer;
  }
  :hover .icon {
    width: calc(100% - 0.6em);
  }

  .icon svg {
    width: 1.1em;
    transition: transform 0.3s;
    color: white;
  }

  :hover .icon svg {
    transform: translateX(0.1em);
  }

  .cssbuttons-io-button:active .icon {
    transform: scale(0.95);
  }
`;
