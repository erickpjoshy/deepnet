import React from 'react';
import { useState, useEffect } from 'react';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';
import axios from '../../utilities/customAxios';
import { useNavigate } from 'react-router-dom';
const Items = () => {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const getCategories = async () => {
    const result = await axios.get('/category');
    setCategories(result.data);
  };
  useEffect(() => {
    getCategories();
  }, []);

  const [items, setItems] = useState({
    name: '',
    category: '',
    price: 0,
    varients: '',
  });
  const onChange = (e, key) => {
    const { value } = e.target;
    setItems(prevItems => ({
      ...prevItems,
      [key]: value,
    }));
  };
  const onClick = async () => {
    const response = await axios.post('/item', items);
    navigate('/');
  };
  console.log(items);
  return (
    <div className="">
      <div className="bg-black py-4 h-full">
        <div className="container mx-auto p-2">
          <h1 className="text-white text-4xl font-semibold text-center mt-6">
            ADD MENU
          </h1>
          <div className="py-6">
            <label className="text-white text-xl">Category</label>
            <Select
              options={categories}
              placeHolder="select category"
              value={items.category}
              onChange={e => {
                onChange(e, 'category');
              }}
            />
          </div>
          <div className="py-6">
            <label className="text-white text-xl">Name</label>
            <Input
              onChange={e => {
                onChange(e, 'name');
              }}
            />
          </div>
          <div className="py-6">
            <label className="text-white text-xl">Price</label>
            <Input
              onChange={e => {
                onChange(e, 'price');
              }}
              type="number"
            />
          </div>
          <div className="py-6">
            <label className="text-white text-xl">Varients</label>
            <Input
              onChange={e => {
                onChange(e, 'varients');
              }}
            />
          </div>
          <div className="py-6 flex justify-end">
            <Button onClick={onClick}>ADD</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
