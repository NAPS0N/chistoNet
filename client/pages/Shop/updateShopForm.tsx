
import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { useAppDispatch } from '../../src/App/redux/store';
import { ShopTypeUpdate } from './ShopType';


function updateShopForm({setOpen}:{setOpen:React.Dispatch<React.SetStateAction<boolean>>}): JSX.Element {
  const [updateForm, setUpdateForm] = useState<ShopTypeUpdate>({
    userId: null,
    labelName: '',
    logo: '',
    address: '',
    photo: null,
    description: '',
    lax: '',
    lon: '',
    phoneNumber: '',
  });

  const dispatch = useAppDispatch();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setUpdateForm({ ...updateForm, photo: e.target.files[0] });
    }

  const updateShop = async ():  Promise<void> => 
  await dispatch(updateFormShop(updateForm)).catch(console.log);

  // const logIn = async (): Promise<void> =>
  //   dispatch(logInThunk(loginForm))
  //     .then(() => navigate('/'))
  //     .then(()=> setOpen(false))
  //     .catch(console.log);
    

  return (
    <Form style={{ width: '360px', padding: '8% 0 0', margin: 'auto' }} onFinish={updateShop}>
      <h3>Форма обновления информации о Магазине</h3>
      <br/>

      <Form.Item label="photo" name="photo">
        <Input
          type="file"
          name="photo"
          accept=".png, .jpg, .jpeg, .gif"
          placeholder={'Изображение магазина'}
          onChange={ handleFileChange }
        />
      </Form.Item>

      <Form.Item label="labelName" name="labelName">
        <Input
          type="text"
          placeholder={updateForm.labelName}
          value={updateForm.labelName}
          onChange={(e) => setUpdateForm({ ...updateForm, labelName: e.target.value })}
        />
      </Form.Item>

      <Form.Item label="address" name="loaddressgo">
        <Input
          type="text"
          placeholder={updateForm.address}
          value={updateForm.address}
          onChange={(e) => setUpdateForm({ ...updateForm, address: e.target.value })}
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

export default updateShopForm;
