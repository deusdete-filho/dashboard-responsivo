import React from 'react';
import Content from '../../components/Content';
import Container from '../../components/Container';
import MenuBar from '../../components/MenuBar';
import SearchBar from '../../components/SearchBar';
import {
  Bar,
  Doughnut,
  Pie,
  Radar,
  Line,
  HorizontalBar,
} from 'react-chartjs-2';
import { GiPlainCircle } from 'react-icons/gi';
import avatar from '../../assets/avatar.png';

import {
  FiUser,
  FiActivity,
  FiTrendingDown,
  FiBook,
  FiChevronDown,
  FiPlus,
  FiEdit2,
} from 'react-icons/fi';

import { Section1, Section2, ListPerfil, ListDados } from './styles';
import { Button } from '../../components/Content/styles';
import { ButtonClean } from '../../components/Content/styles';
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

const dataline = {
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
  datasets: [
    {
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(111,82,237,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [200, 185, 590, 621, 250, 400, 90, 80, 70, 60, 40, 10],
    },
  ],
};

const databarline = {
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
  datasets: [
    {
      backgroundColor: 'rgba(111,82,237,1)',
      borderColor: 'rgba(111,82,237,0.6)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(111,82,237,0.5)',
      hoverBorderColor: 'rgba(111,82,237,0.3)',
      data: [200, 185, 590, 621, 250, 400, 90, 80, 70, 60, 40, 10],
    },
  ],
};
const Dashboard: React.FC = () => {
  return (
    <>
      <Container>
        <MenuBar />
        <div>
          <SearchBar />
          <Content>
            <header>
              <div style={{ flexDirection: 'column' }}>
                <h1>Estatísticas</h1>
                <p>Visão geral da aplicação</p>
              </div>
              <div>
                <ButtonClean>
                  <FiEdit2 size={20} />
                  Editar dashboard
                </ButtonClean>
                <Button style={{ marginLeft: 30 }}>
                  <FiPlus size={20} /> Criar novo dashboard
                </Button>
              </div>
            </header>

            <Section1>
              <div>
                <header>
                  <span>Dado</span>
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
                    <GiPlainCircle
                      size={10}
                      color="#373B53"
                      style={{ marginRight: 8, marginLeft: 8 }}
                    />
                    Mês
                  </label>
                </header>
                <section>
                  <Pie data={data2} legend={legendOpts} />
                </section>{' '}
              </div>

              <div>
                <header>
                  <span>Dado</span>
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
                    <GiPlainCircle
                      size={10}
                      color="#373B53"
                      style={{ marginRight: 8, marginLeft: 8 }}
                    />
                    Mês
                  </label>
                </header>
                <section>
                  <Doughnut data={data2} legend={legendOpts} />
                </section>{' '}
              </div>

              <div>
                <header>
                  <span>Dado</span>
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
                    <GiPlainCircle
                      size={10}
                      color="#373B53"
                      style={{ marginRight: 8, marginLeft: 8 }}
                    />
                    Mês
                  </label>
                </header>
                <section>
                  <Pie data={data2} legend={legendOpts} />
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
                      color="#373B53"
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
                  <span>Dados</span>
                </header>
                <Line data={dataline} legend={legendOpts} />
              </div>
            </Section2>

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
                      color="#373B53"
                      style={{ marginRight: 8, marginLeft: 8 }}
                    />
                    Mês
                  </label>
                </header>
                <HorizontalBar data={databarline} />
              </div>
              <div>
                <header>
                  <span>Dados</span>
                </header>
                <Bar data={databarline} legend={legendOpts} />
              </div>
            </Section2>
          </Content>
        </div>
      </Container>
    </>
  );
};
export default Dashboard;
