// LoginForm.jsx (또는 LoginForm.tsx)
import React, { useState } from 'react';
import "@pages/login/login.css";
const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // 로그인 처리 로직 작성
  };

  return (
    <form className="login-container">
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={handleUsernameChange}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
      />
      <button type="button" onClick={handleLogin}>Login</button>
    </form>
  );
};

export default LoginForm;
