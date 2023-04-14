import { createContext, useState } from 'react';

interface ISession {
  nameRoom: string;
  userName: string;
}

interface ISessionContextData {
  session: ISession;
  setSession(value: ISession): void;
}

interface ISessionProviderProps {
  children?: React.ReactNode;
}

const SessionContext = createContext<ISessionContextData>(
  {} as ISessionContextData
);

export const SessionProvider: React.FC<ISessionProviderProps> = ({
  children
}) => {
  const [session, setSessionState] = useState({ nameRoom: '', userName: '' });
  console.log(session);
  function setSession(value: ISession) {
    setSessionState(value);
  }

  return (
    <SessionContext.Provider value={{ session, setSession }}>
      {children}
    </SessionContext.Provider>
  );
};

export default SessionContext;
