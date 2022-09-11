import React, { useEffect, useState } from 'react';
import { getPetTypes } from '../../api/petfinder';
import Logo from '../../assets/logo.svg';
import Search from '../search';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const [petTypes, setPetTypes] = useState([]);

  const linkStyle = (isActive) => {
    let style = {
      background: isActive ? '#320059' : '',
      color: 'white',
      textDecoration: 'none',
      borderRadius: '18px',
      padding: '6px 24px',
      fontSize: '18px',
      display: 'inline-block',
      textAlign: 'center'
    };
    return style;
  };

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
          <NavLink to={'/'} end isactive="true" style={linkStyle()}>
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
                  style={linkStyle()}
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
