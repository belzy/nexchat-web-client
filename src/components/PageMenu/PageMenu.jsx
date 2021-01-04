import React from 'react';

const PageMenu = props => {
  return (
    <div className={ `PageMenu flex-column bg-white ${ props.visible ? 'd-flex' : 'd-none' }` }>

      { props.children }

    </div>
  );
};

export default PageMenu;