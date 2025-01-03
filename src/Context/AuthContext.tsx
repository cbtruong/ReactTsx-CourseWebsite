import React, { createContext, useContext, useState, ReactNode } from "react";
import { UserInfoProps } from "../Types/ClientTypes";

// Định nghĩa kiểu dữ liệu cho Context
interface AuthContextProps {
  isLoggedIn: boolean;
  userInfo: UserInfoProps | null;
  setIsLoggedIn: (value: boolean) => void; 
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfoProps>>;
}

// Giá trị mặc định cho Context
const defaultValue: AuthContextProps = {
  isLoggedIn: false,
  userInfo: null,
  setIsLoggedIn: () => {},
  setUserInfo: () => {},
};

// Tạo Context
const AuthContext = createContext<AuthContextProps>(defaultValue);

// Custom hook để sử dụng AppContext
export const useAuthContext = () => {
  return useContext(AuthContext);
};

// Provider component
interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<UserInfoProps>({
    email: "",
    name: "",
    picture: "",
  });

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        userInfo,
        setIsLoggedIn,
        setUserInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
