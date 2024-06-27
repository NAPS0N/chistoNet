import React, { useState } from 'react';
import { Form, Input, Button, Upload } from 'antd';
import { useAppDispatch } from '../../src/App/redux/store';
import { ShopType, ShopTypeUpdate } from './ShopType';
import { updateFormShop } from '../../src/App/redux/slicers/ShopSlice';
import { PlusOutlined } from '@ant-design/icons';

function UpdateShopForm({ setOpen }: { setOpen: React.Dispatch<React.SetStateAction<boolean>> }): JSX.Element {
  const [updateForm, setUpdateForm] = useState<ShopType>({
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


  // const normFile = (e: any) => {
  //   if (Array.isArray(e)) {
  //     return e;
  //   }
  //   return e?.fileList;
  // };

  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files && e.target.files.length > 0) {
  //     setUpdateForm({ ...updateForm, photo: e.target.files[0] });
  //   }
  // };

  const updateShop = async () => {
    await dispatch(updateFormShop(updateForm)).catch(console.log);
    setOpen(false)
  };

  return (
    <Form style={{ width: '360px', padding: '8% 0 0', margin: 'auto' }} onFinish={updateShop}>
      <h3>Форма обновления информации о Магазине</h3>
      <br/>

      {/* <Form.Item label="photo" name="photo">
        <Input
          type="file"
          name="photo"
          enctype="multipart/form-data"
          accept=".png, .jpg, .jpeg, .gif"
          placeholder={'Изображение магазина'}
          onChange={handleFileChange}
        />
      </Form.Item> */}

      {/* <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
          <Upload action="/upload.do" listType="picture-card">
            <button style={{ border: 0, background: 'none' }} type="button">
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </button>
          </Upload>
          </Form.Item> */}



      <Form.Item label="Фотография" name="photo">
        <Input
          type="text"
          placeholder={updateForm.photo}
          value={updateForm.labelName}
          onChange={(e) => setUpdateForm({ ...updateForm, photo: e.target.value })}
        />
      </Form.Item>


      <Form.Item label="Название" name="labelName">
        <Input
          type="text"
          placeholder={updateForm.labelName}
          value={updateForm.labelName}
          onChange={(e) => setUpdateForm({ ...updateForm, labelName: e.target.value })}
        />
      </Form.Item>

      <Form.Item label="Адрес" name="address">
        <Input
          type="text"
          placeholder={updateForm.address}
          value={updateForm.address}
          onChange={(e) => setUpdateForm({ ...updateForm, address: e.target.value })}
        />
      </Form.Item>

      <Form.Item label="О Комании" name="description">
        <Input
          type="text"
          placeholder={updateForm.description}
          value={updateForm.address}
          onChange={(e) => setUpdateForm({ ...updateForm, description: e.target.value })}
        />
      </Form.Item>

      <Form.Item label="Телефон" name="phoneNumber">
        <Input
          type="text"
          placeholder={updateForm.phoneNumber}
          value={updateForm.phoneNumber}
          onChange={(e) => setUpdateForm({ ...updateForm, phoneNumber: e.target.value })}
        />
      </Form.Item>

      <Form.Item>
        <Button style={{ background: '#468866' }} type="primary" htmlType="submit" onClick={()=>void updateShop()}>
          Изменить
        </Button>
      </Form.Item>
    </Form>
  );
}

export default UpdateShopForm;
