import React from 'react';
import { Container } from 'reactstrap';

const Sidebar = props => {
  return (
    <div className='Sidebar bg-secondary h-100'>
      <Container fluid={ true } className='p-3'>
        { props.children }
      </Container>
    </div>
  );
};

export default Sidebar;