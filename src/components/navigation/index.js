import React, { useEffect, useState } from 'react';
import { getPetTypes } from '../../api/petfinder';
import Logo from '../../assets/logo.svg';
import Search from '../search';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const [petTypes, setPetTypes] = useState([]);

  useEffect(() => {
    async function getPetTypesData() {
      const { types } = await getPetTypes();
      setPetTypes(types);
    }

    getPetTypesData();
  }, []);

  return (
    <nav>
      <div className="nav-logo">
        <img src={Logo} alt="Petlover" />
        <Search />
      </div>
      <ul className="nav-links">
        <li key="all" className="nav-link">
          <NavLink
            to={'/'}
            end
            isactive="true"
            style={({ isActive }) => ({
              background: isActive ? '#320059' : '#56009b'
            })}
          >
            All Pets
          </NavLink>
        </li>
        {petTypes
          ? petTypes.map((type) => (
              <li key={type.name} className="nav-link">
                <NavLink
                  to={`/${type._links.self.href.split('/').pop()}`}
                  key={type.name}
                  end
                  style={({ isActive }) => ({
                    background: isActive ? '#320059' : '#56009b'
                  })}
                >
                  {type.name}s
                </NavLink>{' '}
              </li>
            ))
          : 'Loading...'}
      </ul>
    </nav>
  );
};

export default Navigation;
