import React from 'react';
import { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import axios from '../../utilities/customAxios';
import { useNavigate } from 'react-router-dom';
const Category = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState({ name: '' });
  const onChange = (e, key) => {
    const { value } = e.target;
    setItems(prevItems => ({
      ...prevItems,
      [key]: value,
    }));
  };
  const onClick = async () => {
    const response = await axios.post('/category', items);
    navigate('/');
  };
  console.log(items);
  return (
    <div className="">
      <div
        className="bg-black py-4 h-full"
        style={{ height: 'calc(100vh - 12vh)' }}
      >
        <div className="container mx-auto p-2">
          <h1 className="text-white text-4xl font-semibold text-center mt-6">
            ADD CATEGORY
          </h1>
          <div className="py-6">
            <label className="text-white text-xl">Name</label>
            <Input
              onChange={e => {
                onChange(e, 'name');
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

export default Category;
