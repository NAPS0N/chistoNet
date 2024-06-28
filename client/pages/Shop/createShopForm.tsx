import React, { useState } from 'react';
import { Form, Input, Button, Upload } from 'antd';
import { useAppDispatch } from '../../src/App/redux/store';
import { ShopType, ShopTypeUpdate } from './ShopType';
import { CreatShop, updateFormShop } from '../../src/App/redux/slicers/ShopSlice';
import { PlusOutlined } from '@ant-design/icons';

function CreateShopForm({ setOpen }: { setOpen: React.Dispatch<React.SetStateAction<boolean>> }): JSX.Element {
  const [createForm, setCreateForm] = useState<ShopType>({
    userId: null,
    labelName: '',
    logo: '',
    address: '',
    photo: '',
    description: '',
    lax: '',
    lon: '',
    phoneNumber: '',
  });

  const dispatch = useAppDispatch();


  const createShop = async () => {
  
    console.log(122212222, createForm);
    
    await dispatch(CreatShop(createForm)).catch(console.log);
    
    setOpen(false)
  };

  return (
    <Form style={{ width: '360px', padding: '8% 0 0', margin: 'auto' }} onFinish={createShop}>
      <h3>Создание магазина</h3>
      <br/>

      <Form.Item label="Фотография" name="photo">
        <Input
          type="text"
          placeholder={createForm.photo}
          value={createForm.labelName}
          onChange={(e) => setCreateForm({ ...createForm, photo: e.target.value })}
        />
      </Form.Item>


      <Form.Item label="Название" name="labelName">
        <Input
          type="text"
          placeholder={createForm.labelName}
          value={createForm.labelName}
          onChange={(e) => setCreateForm({ ...createForm, labelName: e.target.value })}
        />
      </Form.Item>

      <Form.Item label="Логотип" name="logo">
        <Input
          type="text"
          placeholder={createForm.logo}
          value={createForm.logo}
          onChange={(e) => setCreateForm({ ...createForm, logo: e.target.value })}
        />
      </Form.Item>

      <Form.Item label="Адрес" name="address">
        <Input
          type="text"
          placeholder={createForm.address}
          value={createForm.address}
          onChange={(e) => setCreateForm({ ...createForm, address: e.target.value })}
        />
      </Form.Item>

      <Form.Item label="О Комании" name="description">
        <Input
          type="text"
          placeholder={createForm.description}
          value={createForm.address}
          onChange={(e) => setCreateForm({ ...createForm, description: e.target.value })}
        />
      </Form.Item>

      <Form.Item label="Телефон" name="phoneNumber">
        <Input
          type="text"
          placeholder={createForm.phoneNumber}
          value={createForm.phoneNumber}
          onChange={(e) => setCreateForm({ ...createForm, phoneNumber: e.target.value })}
        />
      </Form.Item>

      <Form.Item>
        <Button style={{ background: '#468866' }} type="primary" htmlType="submit">
          Создать
        </Button>
      </Form.Item>
    </Form>
  );
}

export default CreateShopForm;
