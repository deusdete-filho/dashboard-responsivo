import React, { useState, useRef } from 'react';
import Content from '../../components/Content';
import Container from '../../components/Container';
import MenuBar from '../../components/MenuBar';
import Modal from '../../components/Modal';
import SearchBar from '../../components/SearchBar';
import { GiPlainCircle } from 'react-icons/gi';
import avatar from '../../assets/avatar.png';

import {
  FiUser,
  FiActivity,
  FiTrendingDown,
  FiBook,
  FiPlus,
  FiEdit,
} from 'react-icons/fi';
import { FiSearch, FiChevronDown, FiBell, FiLogIn } from 'react-icons/fi';

import {
  Section1,
  Section2,
  ListPerfil,
  ListDados,
  ListaBuscar,
} from './styles';
import { Button } from '../../components/Content/styles';
import { ButtonClean } from '../../components/Content/styles';
import Input from '../../components/Input';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import {
  Menu,
  MenuItem,
  Profile,
  Notification,
} from '../../components/SearchBar/styles';

const Dashboard: React.FC = () => {
  const [modal, setModal] = useState(false);
  const [inputValue, setInputValue] = useState<string>('');
  const formRef = useRef<FormHandles>(null);

  return (
    <>
      {modal && (
        <Modal>
          <h1 style={{ marginBottom: 30 }}>Criar novo dashboard</h1>

          <Form ref={formRef} onSubmit={() => setModal(false)}>
            <Input name="email" placeholder="Digite o nome" />
          </Form>

          <div style={{ flexDirection: 'row', display: 'flex', marginTop: 20 }}>
            <Button onClick={() => setModal(false)}>CONFIRMAR</Button>
            <ButtonClean
              style={{ marginLeft: 30 }}
              onClick={() => setModal(false)}
            >
              CANCELAR
            </ButtonClean>
          </div>
        </Modal>
      )}
      <Container>
        <MenuBar />
        <div>
          <Menu>
            <MenuItem>
              <FiSearch size={20} />
              <input
                type="text"
                placeholder="Search..."
                onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
                  setInputValue(ev.target.value)
                }
                value={inputValue}
              />
            </MenuItem>
            <div>
              <Profile>
                <div>
                  <span>Deusdete Filho</span>
                  <p>Administrador</p>
                </div>
                <div>
                  <img src={avatar} alt="" />
                </div>
                <div>
                  <FiChevronDown size={24}></FiChevronDown>
                </div>
              </Profile>
              <Notification>
                <div>
                  <FiBell size={24}></FiBell>
                </div>
                <div>
                  <FiLogIn size={24}></FiLogIn>
                </div>
              </Notification>
            </div>
          </Menu>

          {!inputValue ? (
            <Content>
              <header>
                <div style={{ flexDirection: 'column' }}>
                  <h1>Mensagens</h1>
                  <p>Visão geral das mensagens</p>
                </div>
                <div>
                  <ButtonClean>
                    <FiEdit size={20} />
                    Manage dashboard
                  </ButtonClean>
                  <Button
                    style={{ marginLeft: 30 }}
                    onClick={() => setModal(true)}
                  >
                    <FiPlus size={20} /> Create new dashboard
                  </Button>
                </div>
              </header>
            </Content>
          ) : (
            <Content>
              <header>
                <div style={{ flexDirection: 'column' }}>
                  <h1>Buscar</h1>
                  <p>Resultado da pesquisa</p>
                </div>
              </header>

              <ListaBuscar>
                <div>
                  <span>Deusdete C. Filho</span>
                  <span>deusdetefilho@gmail.com</span>
                  <span>Rua da Caixa d'água</span>
                </div>

                <div>
                  <span>Deusdete C. Filho</span>
                  <span>deusdetefilho@gmail.com</span>
                  <span>Rua da Caixa d'água</span>
                </div>

                <div>
                  <span>Deusdete C. Filho</span>
                  <span>deusdetefilho@gmail.com</span>
                  <span>Rua da Caixa d'água</span>
                </div>

                <div>
                  <span>Deusdete C. Filho</span>
                  <span>deusdetefilho@gmail.com</span>
                  <span>Rua da Caixa d'água</span>
                </div>

                <div>
                  <span>Deusdete C. Filho</span>
                  <span>deusdetefilho@gmail.com</span>
                  <span>Rua da Caixa d'água</span>
                </div>
                <div>
                  <span>Deusdete C. Filho</span>
                  <span>deusdetefilho@gmail.com</span>
                  <span>Rua da Caixa d'água</span>
                </div>
                <div>
                  <span>Deusdete C. Filho</span>
                  <span>deusdetefilho@gmail.com</span>
                  <span>Rua da Caixa d'água</span>
                </div>
                <div>
                  <span>Deusdete C. Filho</span>
                  <span>deusdetefilho@gmail.com</span>
                  <span>Rua da Caixa d'água</span>
                </div>
                <div>
                  <span>Deusdete C. Filho</span>
                  <span>deusdetefilho@gmail.com</span>
                  <span>Rua da Caixa d'água</span>
                </div>
                <div>
                  <span>Deusdete C. Filho</span>
                  <span>deusdetefilho@gmail.com</span>
                  <span>Rua da Caixa d'água</span>
                </div>
                <div>
                  <span>Deusdete C. Filho</span>
                  <span>deusdetefilho@gmail.com</span>
                  <span>Rua da Caixa d'água</span>
                </div>

                <div>
                  <span>Deusdete C. Filho</span>
                  <span>deusdetefilho@gmail.com</span>
                  <span>Rua da Caixa d'água</span>
                </div>

                <div>
                  <span>Deusdete C. Filho</span>
                  <span>deusdetefilho@gmail.com</span>
                  <span>Rua da Caixa d'água</span>
                </div>

                <div>
                  <span>Deusdete C. Filho</span>
                  <span>deusdetefilho@gmail.com</span>
                  <span>Rua da Caixa d'água</span>
                </div>
              </ListaBuscar>
            </Content>
          )}
        </div>
      </Container>
    </>
  );
};
export default Dashboard;
