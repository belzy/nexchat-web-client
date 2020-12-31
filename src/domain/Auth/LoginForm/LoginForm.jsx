import React from 'react';
import googleIcon from '../../../assets/img/google.svg';
import { Checkbox, SocialButton } from '../../../components/components';
import { 
        Card, 
        CardBody, 
        Button, 
        FormGroup, 
        Input, 
        InputGroup, 
        InputGroupAddon, 
        InputGroupText,
        Label,
      } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, faLock,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';

const LoginForm = props => {
  return (
      <div className='login-form-container'>

        <h2 className='m-0 text-default'>Welcome Back</h2>
        <p className='text-gray-700'>Log in to manage your account</p>

        <Card className='shadow login-form-card p-0;'>
          <CardBody className='p-0 m-0'>
            <form className='login-form'>

              <div className='top'>
                <p className='subtext text-gray-600 text-center mb-4'>Sign in with</p>

                <div className='top-buttons'>
                  <SocialButton 
                    text='Google' 
                    socialIcon={ <img className='mr-3' src={ googleIcon } width='20' height='20' alt='Google Logo' /> } 
                  />
                  
                  <SocialButton 
                    text='Facebook'
                    socialIcon={ <FontAwesomeIcon icon={ faFacebook } style={{ fontSize: '20px' }} /> } 
                  />
                </div>
              </div>

              <div className='d-flex flex-column bottom'>
                <p className='subtext text-gray-600 text-center mb-4'>Or sign in with your email</p>

                <FormGroup className='m-0 w-100'>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <FontAwesomeIcon icon={ faEnvelope } />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input type='email' className='form-control-alternative' required placeholder='Email' />
                  </InputGroup>

                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <FontAwesomeIcon icon={ faLock } />
                      </InputGroupText>
                    </InputGroupAddon>
                      <Input type='password' className='form-control-alternative' required placeholder='Password' />
                    </InputGroup>
                    
                    <Checkbox className='mb-3' id='login-form-remember-me-checkbox' label='Remember Me' />

                </FormGroup>
                <Button color='primary align-self-center'>Sign In</Button>
              </div>

            </form>

          </CardBody>
        </Card>
        <div className='d-flex justify-content-between mt-3 w-100'>
          <NavLink to='/forgot-password'>Forgot Password?</NavLink>
          <NavLink to='/register'>Create New Account</NavLink>
        </div>
      </div>
  );
}

export default LoginForm;