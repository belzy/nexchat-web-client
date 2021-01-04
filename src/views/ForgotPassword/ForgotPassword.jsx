import React from 'react';
import {
  ForgotPasswordForm, Auth,
} from '../../domain/domain';

const ForgotPassword = props => {
  return (<Auth><ForgotPasswordForm /></Auth>);
};

export default ForgotPassword;