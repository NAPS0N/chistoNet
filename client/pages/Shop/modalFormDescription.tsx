
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { useAppDispatch } from '../../src/App/redux/store';


function modalFormDescription({setOpen}:{setOpen:React.Dispatch<React.SetStateAction<boolean>>}): JSX.Element {
  const [descriptionForm, setDescriptionForm] = useState({description: ''});

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // const updateDescription = async ():  Promise<void> => 
  // dis
  // const logIn = async (): Promise<void> =>
  //   dispatch(logInThunk(loginForm))
  //     .then(() => navigate('/'))
  //     .then(()=> setOpen(false))
  //     .catch(console.log);
      

  return (
    <Form style={{ width: '360px', padding: '8% 0 0', margin: 'auto' }} onFinish={logIn}>
      <h3>Форма изменения описания</h3>
      <br/>
      <Form.Item label="Login" name="email">
        <Input
          type="text"
          placeholder={descriptionForm.description}
          value={descriptionForm.description}
          onChange={(e) => setDescriptionForm({ ...descriptionForm, description: e.target.value })}
        />
      </Form.Item>
      <Form.Item>
        <Button style={{background: '#468866'}} type="primary" htmlType="submit">
          Изменить
        </Button>
      </Form.Item>
      <Form.Item>
      </Form.Item>
    </Form>
  );
}

export default modalFormDescription;
