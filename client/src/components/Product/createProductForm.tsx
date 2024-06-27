import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { useAppDispatch } from '../../../src/App/redux/store';
import { CreateProductType } from './ProductType';


import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


function CreateProductForm({ setOpen }: { setOpen: React.Dispatch<React.SetStateAction<boolean>> }): JSX.Element {
  const [createForm, setCreateForm] = useState<CreateProductType>({
    title: '',
    price: null,
    description: '',
    userId: null,
    categoryId: null,
    geo: '',
    ProductImgs:'',
  });

  // Category
  const [category, setCategory] = React.useState('');
  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };
// ==========

  const dispatch = useAppDispatch();


  const createProduct = async () => {
    await dispatch(CreatProduct(createForm)).catch(console.log);
    setOpen(false)
  };

  return (
    <Form style={{ width: '360px', padding: '8% 0 0', margin: 'auto' }} onFinish={createProduct}>
      <h3>Новое объявление</h3>
      <br/>

      <Form.Item label="Название" name="title">
        <Input
          type="text"
          placeholder={createForm.title}
          value={createForm.title}
          onChange={(e) => setCreateForm({ ...createForm, title: e.target.value })}
        />
      </Form.Item>


      <Form.Item label="Цена" name="price">
        <Input
          type="number"
          placeholder={createForm.price}
          value={createForm.price}
          onChange={(e) => setCreateForm({ ...createForm, price: +e.target.value })}
        />
      </Form.Item>

      <Form.Item label="Описание" name="description">
        <Input
          type="text"
          placeholder={createForm.description}
          value={createForm.description}
          onChange={(e) => setCreateForm({ ...createForm, description: e.target.value })}
        />
      </Form.Item>

      <Form.Item label="Адрес" name="geo">
        <Input
          type="text"
          placeholder={createForm.geo}
          value={createForm.geo}
          onChange={(e) => setCreateForm({ ...createForm, geo: e.target.value })}
        />
      </Form.Item>

      <Form.Item label="Изображение" name="ProductImgs">
        <Input
          type="text"
          placeholder={createForm.ProductImgs}
          value={createForm.ProductImgs}
          onChange={(e) => setCreateForm({ ...createForm, ProductImgs: e.target.value })}
        />
      </Form.Item>


      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Категория</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Категория"
          onChange={handleChange}
        >
          <MenuItem value={5}>Товары - Инвентарь</MenuItem>
          <MenuItem value={6}>Товары - Расходные Материалы</MenuItem>
          <MenuItem value={7}>Товары - Моющие Средства</MenuItem>
          <MenuItem value={2}>Оборудование - Пылесос</MenuItem>
     
          <MenuItem value={3}>Аренда</MenuItem>
          <MenuItem value={4}>Вакансии</MenuItem>

        </Select>
      </FormControl>
    </Box>
        <br/>
      <Form.Item>
        <Button style={{ background: '#468866' }} type="primary" htmlType="submit" onClick={()=>void createProduct()}>
          Создать
        </Button>
      </Form.Item>
    </Form>
  );
}

export default CreateProductForm;
