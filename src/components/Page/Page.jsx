import React from 'react';

const Page = props => {
  return (
    <div className={ `Page flex-xl-grow-1 flex-column bg-white ${ props.visible ? 'd-flex' : 'd-none' }` }>

      { props.children }

    </div>
  );
};

export default Page;