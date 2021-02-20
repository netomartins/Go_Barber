import React from 'react';
import { Container, Content, Background } from './styles';
import logoImg from '../../assets/logo.svg';

const SignIn: React.FC = () => (
  <>
    <img src={logoImg} alt="GoBarber" />

    <form>
      <h1> Faça seu Logon </h1>

      <input placeholder="Email" />

      <input type="password" placeholder="senha" />

      <button type="submit"> Entrar </button>
    </form>
  </>
);

export default SignIn;
