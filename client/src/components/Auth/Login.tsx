
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { useAppDispatch } from '../../App/redux/store';
import { logInThunk } from '../../App/redux/slicers/AuthSlicer';

function LogIn({setOpen}:{setOpen:React.Dispatch<React.SetStateAction<boolean>>}): JSX.Element {
  const [loginForm, setLoginForm] = useState({ email: 'user1@email.com', password: '123456' });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logIn = async (): Promise<void> =>
    dispatch(logInThunk(loginForm))
      .then(() => navigate('/'))
      .then(()=> setOpen(false))
      .catch(console.log);
      

  return (
    <Form style={{ width: '360px', padding: '8% 0 0', margin: 'auto' }} onFinish={logIn}>
      <h3>Войти</h3>
      <br/>
      <Form.Item label="Login" name="email">
        <Input
          type="text"
          placeholder={loginForm.email}
          value={loginForm.email}
          onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
        />
      </Form.Item>
      <Form.Item label="Password" name="password">
        <Input.Password
          placeholder={loginForm.email}
          value={loginForm.password}
          onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
        />
      </Form.Item>
      <Form.Item>
        <Button style={{background: '#468866'}} type="primary" htmlType="submit">
          Войти
        </Button>
      </Form.Item>

      <Form.Item>
               
               
             
      </Form.Item>
    </Form>
  );
}

export default LogIn;
