import React, { useCallback, useRef, useState } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

import getValidationErros from '../../utils/getValidationErrors';

import Logo from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, AimationContainer } from './styles';

interface LoginData {
  email: string;
  password: string;
}
const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  // carrega a funcao de realizar login do contexto
  const { Login } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();
  const [loadind, setLoading] = useState(false);
  // funcao de enviar dados depois de apertar botao de
  const Submit = useCallback(
    async (data: LoginData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Email obrigatório')
            .email('Digite um email válido'),
          password: Yup.string().required('Senha obrigatória'),
        });
        // realizando validacao de dados
        await schema.validate(data, {
          abortEarly: false,
        });
        // conexto de login
        setLoading(true);
        await Login({
          email: data.email,
          password: data.password,
        });
        setLoading(false); // final notificacao de sucesso de login
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErros(err);
          formRef.current?.setErrors(errors);
        } else {
          // notificacao de erro
          addToast({
            type: 'error',
            title: 'Erro na autenticação',
            description:
              'Ocorreu um erro ao fazer login, cheque as suas credenciais',
          });
          // final notificacao de erro
        }
      }
    },
    [Login, addToast, history],
  );
  return (
    <Container>
      <Content>
        <AimationContainer>
          <Form ref={formRef} onSubmit={Submit}>
            <Input name="email" icon={FiMail} placeholder="Digite seu email" />

            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Digite sua senha"
            />

            <Button loading={loadind} type="submit">
              Entrar
            </Button>
          </Form>
        </AimationContainer>
      </Content>
    </Container>
  );
};
export default Login;
