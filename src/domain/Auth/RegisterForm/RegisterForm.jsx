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
        InputGroupText 
      } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, faLock,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';

const RegisterForm = props => {
  return (
    <div className='register-form-container'>

      <h2 className='m-0 text-default'>Welcome To neXchat!</h2>
      <p className='text-gray-700'>Create an account to get started.</p>

      <Card className='shadow register-form-card p-0;'>
        <CardBody className='p-0 m-0'>
          <form className='register-form'>

            <div className='top'>
              <p className='subtext text-gray-600 text-center mb-4'>Sign up with</p>

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
              <p className='subtext text-gray-600 text-center mb-4'>Or sign up with your email</p>

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
                  
                  <Checkbox className='mb-3' id='register-form-privacy-policy-checkbox' label={(<span>I agree to the <NavLink to='/privacy-policy'>Privacy Policy</NavLink></span>)} />


              </FormGroup>
              <Button color='primary align-self-center'>Sign Up</Button>
            </div>

          </form>

        </CardBody>
      </Card>
      <NavLink to='/login' className='align-self-start mt-3'>I already have an account</NavLink>

    </div>
  );
};

export default RegisterForm;