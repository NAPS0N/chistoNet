
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../App/redux/store';
import { clearError, registrationThunk } from '../../App/redux/slicers/AuthSlicer';
import { useNavigate } from 'react-router-dom'

function Registration(): JSX.Element {
  const [signUpForm, setSignUpForm] = useState({
    id: null,
    phoneNumber: '',
    login: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    isBlocked: false,
  });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const err = useAppSelector((state) => state.auth.error);

  const logIn = async (): Promise<void> => {
    const data = await dispatch(registrationThunk(signUpForm));

  };

  return (
    <form
      style={{ width: '360px', padding: '8% 0 0', margin: 'auto' }}
      onSubmit={(e) => e.preventDefault()}
    >

<label htmlFor="email" className="form-label">
        Email
      </label>
      <input
        type="text"
        placeholder="Email"
        value={signUpForm.email}
        onChange={(e) => setSignUpForm({ ...signUpForm, email: e.target.value })}
        className="form-control"
        id="email"
      />


      <label htmlFor="phoneNumber" className="form-label">
        Номер телефона
      </label>
      <input
        type="text"
        placeholder="Номер телефона"
        value={signUpForm.phoneNumber}
        onChange={(e) => setSignUpForm({ ...signUpForm, phoneNumber: e.target.value })}
        className="form-control"
        id="phoneNumber"
      />

      <label htmlFor="password" className="form-label">
        Password
      </label>
      <input
        type="password"
        placeholder="Password"
        value={signUpForm.password}
        onChange={(e) => setSignUpForm({ ...signUpForm, password: e.target.value })}
        className="form-control"
        id="password"
      />

      

      <div className="d-grid gap-1">
        <button type="submit" onClick={() => void logIn()} className="btn btn-success">
          Зарегистрироваться
        </button>
      </div>
    </form>
  );
}

export default Registration;


