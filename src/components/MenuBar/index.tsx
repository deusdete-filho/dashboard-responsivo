import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { FiHome, FiFolder, FiBarChart2, FiMail, FiFile } from 'react-icons/fi';

import { Menu, Logo, MenuItem, MenuItemText, MenuItemContent } from './styles';

const MenuBar: React.FC = () => {
  const [activeIndex, setactiveIndex] = useState(0);

  return (
    <>
      <Menu>
        <Logo></Logo>
        <MenuItem>
          <Link to="/">
            <MenuItemText
              active={activeIndex === 2 && true}
              onClick={() => setactiveIndex(2)}
            >
              <div>
                <FiFolder size={24} />
              </div>
            </MenuItemText>
          </Link>
        </MenuItem>

        <MenuItem>
          <Link to="/data">
            <MenuItemText
              active={activeIndex === 1 && true}
              onClick={() => setactiveIndex(1)}
            >
              <div>
                <FiBarChart2 size={24} />
              </div>
            </MenuItemText>
          </Link>
        </MenuItem>

        <MenuItem>
          <Link to="/email">
            <MenuItemText
              active={activeIndex === 5 && true}
              onClick={() => setactiveIndex(5)}
            >
              <div>
                <FiMail size={24} />
              </div>{' '}
            </MenuItemText>
          </Link>
        </MenuItem>

        <MenuItem>
          <Link to="/page">
            <MenuItemText
              active={activeIndex === 3 && true}
              onClick={() => setactiveIndex(3)}
            >
              <div>
                <FiFile size={24} />
              </div>{' '}
            </MenuItemText>
          </Link>
        </MenuItem>
      </Menu>
    </>
  );
};
export default MenuBar;
