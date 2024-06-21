
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../App/redux/store';
import { clearError, registrationThunk } from '../../App/redux/slicers/AuthSlicer';
import { useNavigate } from 'react-router-dom';
// import { showAlert } from '../../App/redux/slicers/alertSlice';

function Registration(): JSX.Element {
  const [signUpForm, setSignUpForm] = useState({
    id: null,
    login: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    age: '',
    photo: '',
  });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const err = useAppSelector((state) => state.auth.error);

//   const logIn = async (): Promise<void> => {
//     const data = await dispatch(registrationThunk(signUpForm));

//     if (data.payload) {
//       dispatch(showAlert({ message: "Welcome", type: 'success' }));
//       navigate('/');
//     } else {
//       dispatch(showAlert({ message: err || 'Error =)', type: 'error' }));
//       dispatch(clearError());
//     }
//   };

  return (
    <form
      style={{ width: '360px', padding: '8% 0 0', margin: 'auto' }}
      onSubmit={(e) => e.preventDefault()}
    >
      <label htmlFor="login" className="form-label">
        Login
      </label>
      <input
        type="text"
        placeholder="Login"
        value={signUpForm.login}
        onChange={(e) => setSignUpForm({ ...signUpForm, login: e.target.value })}
        className="form-control"
        id="login"
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

      <label htmlFor="age" className="form-label">
        Age
      </label>
      <input
        type="number"
        placeholder="Age"
        value={signUpForm.age}
        onChange={(e) => setSignUpForm({ ...signUpForm, age: e.target.value })}
        className="form-control"
        id="age"
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
