import React, { useState, InputHTMLAttributes } from 'react';

import { FiSearch, FiChevronDown, FiBell, FiLogIn } from 'react-icons/fi';

import { Menu, MenuItem, Profile, Notification } from './styles';
import avatar from '../../assets/avatar.png';
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputValue?: string;
}
const MenuBar: React.FC<InputProps> = () => {
  const [inputValue, setInputValue] = useState<string>('');

  return (
    <>
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
    </>
  );
};
export default MenuBar;
