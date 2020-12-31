import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, 
} from '@fortawesome/free-solid-svg-icons';

const ForgotPasswordForm = props => {
  return (
    <div className='forgot-password-form-container'>

      <h2 className='m-0 text-default'>Forgot your password?</h2>
      <p className='text-gray-700'>Enter your email address below and we'll get you back on track.</p>

      <form>

        <FormGroup className='m-0 w-100'>
          <InputGroup className="input-group-alternative mb-3">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <FontAwesomeIcon icon={ faEnvelope } />
              </InputGroupText>
            </InputGroupAddon>
            <Input type='email' className='form-control-alternative' required placeholder='Email' />
          </InputGroup>
        </FormGroup>

        <div className='w-100 d-flex justify-content-between align-items-center'>
            <NavLink to='/login'>Back to sign in</NavLink>
            <Button color='primary'>Reset Password</Button>
        </div>
        
      </form>
      
    </div>
  );

};

export default ForgotPasswordForm;