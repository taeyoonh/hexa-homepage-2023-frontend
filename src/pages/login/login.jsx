import React from 'react';
import LoginForm from './components/LoginForm';
import { LoginViewModel } from './vm/LoginViewModel';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Login = () => {
  const viewModel = new LoginViewModel();

  return (
    <div>
      <Header />
      <h2>Login</h2>
      <LoginForm viewModel={viewModel} />
      <Footer />
    </div>
  );
};

export default Login;
