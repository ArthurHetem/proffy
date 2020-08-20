import React from 'react';

import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Checkbox from './components/Checkbox';

import logoImg from '../../assets/images/logo.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css';

function Login() {
    return (
        <div id="page-login">
            <div className="logo-container">
                <img src={logoImg} alt="Proffy" />
                <span>Sua plataforma de estudos online</span>
            </div>
            
            <main>
                <form>
                        <h1>Fazer login</h1>
                        <Input
                            name="email"
                            label=""
                            type="text"
                            placeholder="E-mail"
                            className="inputs"
                            required
                        />
                        <Input
                            name="password"
                            label="" 
                            type="password"
                            placeholder="Senha"
                            autoComplete="off"
                            className="inputs"
                            required
                        />
                       
                       <div className="login-options">
                            {/* <Checkbox
                            name="checkbox"
                            options={[{ id: 'yes', value: 'yes', label: 'Lembrar-me' }]}
                            /> */}
                            <Link to="/reset-password">Esqueci minha senha</Link>
                        </div>

                        <Button
                            name="default"
                            label="Entrar"
                            type="submit"
                        />    
                </form>

                <footer>
                    <div id="footer-content">
                        <div className="register-block">
                            <p>Não tem conta?</p>
                            <Link to="/register">Cadastre-se</Link>
                        </div>
                        <p>É de graça <img src={purpleHeartIcon} alt="Purple Heart"/></p>
                    </div>                    
                </footer>
            </main>
        </div>
    )
}

export default Login;