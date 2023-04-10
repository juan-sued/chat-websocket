interface IMessage {
  idConnection: string;
  user: string;
  message: string;
  idConnectionUserCurrent: string;
}

interface IRoom {
  id: number;
  name: string;
}

interface ICheckboxButtonRoom {
  id: number;
  name: string;
  setSelectedId: (id: number) => void;
  selectedId: number;
}

export { IMessage, IRoom, ICheckboxButtonRoom };
