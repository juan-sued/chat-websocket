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

export { IMessage, IRoom };
