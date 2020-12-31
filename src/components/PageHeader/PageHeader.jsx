import React from 'react';

const PageHeader = props => {
  return (
    <div className={ `PageTopbar border-bottom border-1 border-secondary px-lg-4 py-lg-3 py-2 ${ props.className ? props.className : '' }` }>
      {/* <div className='d-flex align-items-center container-xxl'>

        <div>
          <IconButton 
            renderIcon={ <ChevronLeft /> } 
          />
        </div>

        <div className='PageTopbar__heading-container d-flex align-items-center media'>

          <Avatar src={ props.image } size='md' className='mr-3' />

          <div className='media-body'>
            <h6 className='h6 m-0 p-0'>{ props.heading }</h6>
            <small>{ props.subHeading }</small>
          </div>

        </div>


      </div> */}
      { props.children }
    </div>
  );
};

export default PageHeader;