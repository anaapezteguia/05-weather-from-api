import React from 'react';

const Header = ({ title }) => {
  return (
    <nav>
      <div className="nav-wrapper light-blue darken-2">
        <a href="#!" className="brand-logo">
          {/* we have to disable the href because of Materialize options*/}
          {title}
        </a>
      </div>
    </nav>
  );
};

export default Header;
