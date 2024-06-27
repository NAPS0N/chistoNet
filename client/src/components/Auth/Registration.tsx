
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../App/redux/store';
import { clearError, registrationThunk } from '../../App/redux/slicers/AuthSlicer';
import { Form, Input, Button } from 'antd';

import { useNavigate } from 'react-router-dom'

function Registration({setOpen}:{setOpen:React.Dispatch<React.SetStateAction<boolean>>}): JSX.Element {
  const [signUpForm, setSignUpForm] = useState({
    id: null,
    phoneNumber: '+79999999999',
    login: '',
    password: '',
    firstName: '',
    lastName: '',
    email: 'email@email.com',
    isBlocked: false,
  });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const err = useAppSelector((state) => state.auth.error);

  const reg = async (): Promise<void> => {
    const data = await dispatch(registrationThunk(signUpForm));
    setOpen(false);
    navigate('/personalaccaunt')

  };

  return (
    <Form style={{ width: '360px', padding: '8% 0 0', margin: 'auto' }} onFinish={reg}>
      <h3>Регистрация</h3>
      <br/>
    <Form.Item label="Email" name="email">
      <Input
        type="text"
        placeholder={signUpForm.email}
        value={signUpForm.email}
        onChange={(e) => setSignUpForm({ ...signUpForm, email: e.target.value })}
      />
    </Form.Item>

    <Form.Item label="Номер телефона" name="phoneNumber">
      <Input
        type="text"
        placeholder={signUpForm.phoneNumber}
        value={signUpForm.phoneNumber}
        onChange={(e) => setSignUpForm({ ...signUpForm, phoneNumber: e.target.value })}
      />
    </Form.Item>

    <Form.Item label="Password" name="password">
      <Input.Password
        placeholder={signUpForm.password}
        value={signUpForm.password}
        onChange={(e) => setSignUpForm({ ...signUpForm, password: e.target.value })}
      />
    </Form.Item>

    <Form.Item>
      <Button style={{background: '#468866'}} type="primary" htmlType="submit"  onClick={() => void reg() }>
        Зарегистрироваться
      </Button>
    </Form.Item>
  </Form>
);
}

export default Registration;


