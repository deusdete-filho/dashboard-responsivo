import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthState {
  token: string;
  user: User;
}
interface LoginCredentials {
  email: string;
  password: string;
}
interface AuthContextData {
  user: User;
  Login(credentials: LoginCredentials): Promise<void>;
  Logof(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(' useAuth erro');
  }
  return context;
}
const AuthProvider: React.FC = ({ children }) => {
  // salvar dados do login no contexto
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@admin:token');
    const user = localStorage.getItem('@admin:user');

    if (token && user) {
      api.defaults.headers.Authorization = `Bearer ${token}`;

      return { token, user: JSON.parse(user) };
    }
    return {} as AuthState;
  });

  // funcao de realizar login na sessao
  const Login = useCallback(async ({ email, password }) => {
    // evia os dados para a api
    const response = await api.post('sessions', {
      email,
      password,
    });
    const { token, user } = response.data;

    // salva os dados no storage do navegador

    localStorage.setItem('@admin:token', token);
    localStorage.setItem('@admin:user', JSON.stringify(user));
    api.defaults.headers.Authorization = `Bearer ${token}`;

    setData({ token, user });
  }, []);

  // funcao de fazer logof
  const Logof = useCallback(() => {
    localStorage.removeItem('@admin:token');
    localStorage.removeItem('@admin:user');

    setData({} as AuthState);
  }, []);
  return (
    <AuthContext.Provider value={{ user: data.user, Login, Logof }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
