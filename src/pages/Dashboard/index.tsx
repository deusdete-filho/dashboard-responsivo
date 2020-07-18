import React, { useState, useRef } from 'react';
import Content from '../../components/Content';
import Container from '../../components/Container';
import MenuBar from '../../components/MenuBar';
import Modal from '../../components/Modal';
import SearchBar from '../../components/SearchBar';
import { Bar, Doughnut } from 'react-chartjs-2';
import { GiPlainCircle } from 'react-icons/gi';
import avatar from '../../assets/avatar.png';
import CountUp from 'react-countup';
import {
  FiUser,
  FiActivity,
  FiTrendingDown,
  FiBook,
  FiPlus,
  FiEdit2,
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
const data = {
  datasets: [
    {
      label: 'Sales',
      type: 'line',
      data: [51, 52, 50, 49, 51, 49, 40, 10, 9, 7, 5, 3],
      fill: false,
      borderColor: '#FF7A00',
      backgroundColor: '#FF7A00',
      pointBorderColor: '#FF7A00',
      pointBackgroundColor: '#FF7A00',
      pointHoverBackgroundColor: '#FF7A00',
      pointHoverBorderColor: '#FF7A00',
      yAxisID: 'y-axis-2',
    },
    {
      label: 'Visitor',
      type: 'bar',
      data: [200, 185, 590, 621, 250, 400, 90, 80, 70, 60, 40, 10],
      fill: false,
      backgroundColor: '#6F52ED',
      borderColor: '#6F52ED',
      hoverBackgroundColor: '#6F52ED',
      hoverBorderColor: '#6F52ED',
      yAxisID: 'y-axis-1',
    },
  ],
};

const options = {
  responsive: true,
  labels: [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ],
  tooltips: {
    mode: 'label',
  },
  elements: {
    line: {
      fill: false,
    },
  },
  scales: {
    xAxes: [
      {
        display: true,
        gridLines: {
          display: false,
        },

        labels: [
          'Jan',
          'Fev',
          'Mar',
          'Abr',
          'Mai',
          'Jun',
          'Jul',
          'Ago',
          'Set',
          'Out',
          'Nov',
          'Dez',
        ],
      },
    ],
    yAxes: [
      {
        type: 'linear',
        display: false,
        position: 'left',
        id: 'y-axis-1',
        gridLines: {
          display: false,
        },
        labels: {
          show: true,
        },
      },
      {
        type: 'linear',
        display: false,
        position: 'right',
        id: 'y-axis-2',
        gridLines: {
          display: false,
        },
        labels: {
          show: false,
        },
      },
    ],
  },
};
const legendOpts = {
  display: false,
  displayName: false,
  position: 'right',
  fullWidth: false,
  reverse: true,
  labels: {
    fontColor: '#474747',
  },
};
const data2 = {
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ['#6F52ED', '#FF7A00', '#373B53'],
      hoverBackgroundColor: ['#6F52ED', '#FF7A00', '#373B53'],
    },
  ],
};
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
                placeholder="Pesquisar clientes..."
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
                  <h1>Dashboard</h1>
                  <p>Visão geral da aplicação</p>
                </div>
                <div>
                  <ButtonClean>
                    <FiEdit2 size={20} />
                    Editar dashboard
                  </ButtonClean>
                  <Button
                    style={{ marginLeft: 30 }}
                    onClick={() => setModal(true)}
                  >
                    <FiPlus size={20} /> Criar novo dashboard
                  </Button>
                </div>
              </header>

              <Section1>
                <div>
                  <span style={{ background: 'rgba(113,59,219,0.05)' }}>
                    <FiUser size={24} color="#713BDB" />
                  </span>
                  <section>
                    <h2>
                      <CountUp end={102} />
                    </h2>
                    <p> Funcionários</p>
                  </section>
                </div>
                <div>
                  <span style={{ background: 'rgba(51,214,159,0.07)' }}>
                    <FiActivity size={24} color="#21B8C7" />
                  </span>
                  <section>
                    <h2>
                      <CountUp end={642} />
                    </h2>
                    <p> Ações</p>
                  </section>
                </div>
                <div>
                  <span style={{ background: 'rgba(255,76,97,0.05)' }}>
                    <FiTrendingDown size={24} color="#FF4C61" />
                  </span>
                  <section>
                    <label>
                      <h2>
                        <CountUp end={932} />
                      </h2>
                      <h3>(-14%)</h3>
                    </label>
                    <p> Despesas</p>
                  </section>
                </div>
                <div>
                  <span style={{ background: 'rgba(76,184,255,0.07)' }}>
                    <FiBook size={24} color="#4CB8FF" />
                  </span>
                  <section>
                    <h2>
                      <CountUp end={823} />
                    </h2>
                    <p> Pedidos</p>
                  </section>
                </div>
              </Section1>

              <Section2>
                <div>
                  <header>
                    <span>Pedidos realizados no mês</span>
                    <label>
                      <GiPlainCircle
                        size={10}
                        color="#FF7A00"
                        style={{ marginRight: 8 }}
                      />
                      Desempenho
                      <GiPlainCircle
                        size={10}
                        color="#6F52ED"
                        style={{ marginRight: 8, marginLeft: 8 }}
                      />
                      Mês
                    </label>
                  </header>
                  <Bar
                    data={data}
                    width={100}
                    height={50}
                    options={options}
                    legend={legendOpts}
                  />
                </div>
                <div>
                  <header>
                    <span>Últimos pedidos</span>
                    <label>
                      Decrescente
                      <FiChevronDown
                        size={15}
                        color="#A6ACBE"
                        style={{ marginLeft: 8 }}
                      />
                    </label>
                  </header>
                  <ListPerfil>
                    <span>
                      <img src={avatar} alt="" />
                      <p> Deusdete Filho</p>
                    </span>
                    <span>
                      <h2>2</h2>
                    </span>
                  </ListPerfil>

                  <ListPerfil>
                    <span>
                      <img src={avatar} alt="" />
                      <p> Maria José</p>
                    </span>
                    <span>
                      <h2>4</h2>
                    </span>
                  </ListPerfil>

                  <ListPerfil>
                    <span>
                      <img src={avatar} alt="" />
                      <p> Carlos Alberto</p>
                    </span>
                    <span>
                      <h2>19</h2>
                    </span>
                  </ListPerfil>
                  <ListPerfil>
                    <span>
                      <img src={avatar} alt="" />
                      <p> Joaquim Santos</p>
                    </span>
                    <span>
                      <h2>9</h2>
                    </span>
                  </ListPerfil>
                  <ListPerfil>
                    <span>
                      <img src={avatar} alt="" />
                      <p> Deusdete Filho</p>
                    </span>
                    <span>
                      <h2>3</h2>
                    </span>
                  </ListPerfil>

                  <ListPerfil>
                    <span>
                      <img src={avatar} alt="" />
                      <p> Joana Santos</p>
                    </span>
                    <span>
                      <h2>9</h2>
                    </span>
                  </ListPerfil>
                </div>
                <div>
                  <header>
                    <span>Dados</span>
                  </header>
                  <Doughnut data={data2} />

                  <ListDados>
                    <span>
                      <GiPlainCircle
                        size={10}
                        color="#FF7A00"
                        style={{ marginRight: 8 }}
                      />
                      <p> Pedidos aprovados</p>
                    </span>
                    <span>
                      <h2>9</h2>
                    </span>
                  </ListDados>

                  <ListDados>
                    <span>
                      <GiPlainCircle
                        size={10}
                        color="#6F52ED"
                        style={{ marginRight: 8 }}
                      />
                      <p> Pedidos rejeitados</p>
                    </span>
                    <span>
                      <h2>9</h2>
                    </span>
                  </ListDados>

                  <ListDados>
                    <span>
                      <GiPlainCircle
                        size={10}
                        color="#373B53"
                        style={{ marginRight: 8 }}
                      />
                      <p> Pedidos enviados</p>
                    </span>
                    <span>
                      <h2>9</h2>
                    </span>
                  </ListDados>

                  <ListDados>
                    <span>
                      <GiPlainCircle
                        size={10}
                        color="#373B53"
                        style={{ marginRight: 8 }}
                      />
                      <p> Pedidos entregues</p>
                    </span>
                    <span>
                      <h2>9</h2>
                    </span>
                  </ListDados>
                </div>
              </Section2>
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
