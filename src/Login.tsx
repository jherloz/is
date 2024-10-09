import React, { useState } from 'react';
import './Login.css';
import Catalogo from './Catalogo';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    setIsAuthenticated(true); // Simula autenticación exitosa
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registrando Email:', email);
    console.log('Registrando Password:', password);
    setIsAuthenticated(true); // Simula registro exitoso
  };

  //Cuando inicias sesion manda al catalogo de mientras
  if (isAuthenticated) {
    return <Catalogo />;
  }

  return (
    <div className="login-container">
      <h2>{isRegistering ? 'Registro' : 'Login'}</h2>
      <form onSubmit={isRegistering ? handleRegister : handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{isRegistering ? 'Registrar' : 'Iniciar Sesión'}</button>
      </form>
      <button onClick={() => setIsRegistering(!isRegistering)}>
        {isRegistering ? 'Ya tengo una cuenta' : 'Crear una cuenta'}
      </button>
    </div>
  );
};

export default Login;
