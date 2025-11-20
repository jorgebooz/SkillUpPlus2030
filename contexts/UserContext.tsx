import React, { createContext, useContext, useState, ReactNode } from 'react';

type UserData = {
  firstName: string;
  lastName: string;
  email: string;
  interests: string[];
  stats: {
    completedCourses: number;
    studyTime: string;
    progress: number;
  };
};

const UserContext = createContext<{
  userData: UserData;
  setUserData: (data: UserData) => void;
}>({
  userData: {
    firstName: 'Estudante',
    lastName: '',
    email: '',
    interests: [],
    stats: { completedCourses: 0, studyTime: '0h', progress: 0 }
  },
  setUserData: () => {},
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userData, setUserData] = useState<UserData>({
    firstName: 'Estudante',
    lastName: '',
    email: '',
    interests: ['IA & Machine Learning', 'Sustentabilidade', 'Liderança'],
    stats: { completedCourses: 3, studyTime: '8h', progress: 45 }
  });

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);