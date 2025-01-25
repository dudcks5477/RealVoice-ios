import React, {createContext, useContext, useState} from 'react';

export const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({children}) => {
  const [userData, setUserData] = useState({
    userUuid: '',
    phoneNumber: '',
    callingCode: '+82',
    nickName: '',
    realName: '',
    bio: '',
    countryName: 'KOREA',
    joinYear: '2024',
    createTime: new Date().toISOString(),
    fcmToken: '',
  });

  const setUser = newUserData => {
    setUserData(prevState => ({
      ...prevState,
      ...newUserData,
    }));
  };

  return (
    <UserContext.Provider value={{userData, setUserData, setUser}}>
      {children}
    </UserContext.Provider>
  );
};