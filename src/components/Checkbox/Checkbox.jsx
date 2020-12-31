import React from 'react';

const Checkbox = props => {
  return (
    <div className={`custom-control custom-checkbox ${ props.className }`}>
      <input
            className="custom-control-input"
            id={ props.id }
            type="checkbox"
        />
        <label className="custom-control-label" htmlFor={ props.id }>
            { props.label }
        </label>
    </div>
  );
};

export default Checkbox;