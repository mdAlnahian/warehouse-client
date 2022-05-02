import React from 'react';
import './AddItem.css'
import { useForm } from "react-hook-form";


const AddItem = () => {

       const { register, handleSubmit } = useForm();
       const onSubmit = (data) =>{
         console.log(data);

         const url = `http://localhost:5000/item`;
            fetch(url, {
            method: "POST",
            headers: {
               "content-type": "application/json",
           },
              body: JSON.stringify(data),
            })
            .then((res) => res.json())
            .then((result) => {
                 console.log(result);
            })

       };

    return (
      <div>
        <h1 className="text-center mt-4 mb-4">Hello from ADD ITEM</h1>
        <div className="form-container2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-group mb-3">
              <input
                placeholder="Product Name"
                {...register("name", { required: true })}
              />
            </div>
            <div className="input-group mb-3">
              <input
                placeholder="Product Description"
                {...register("description", { required: true })}
              />
            </div>
            <div className="input-group mb-3">
              <input
                placeholder="Product Quantity"
                type="number"
                {...register("quantity", { required: true })}
              />
            </div>
            <div className="input-group mb-3">
              <input
                placeholder="Product Price"
                type="number"
                {...register("price", { required: true })}
              />
            </div>
            <div className="input-group mb-3">
              <input
                placeholder="Product Image URL"
                type="text"
                {...register("img", { required: true })}
              />
            </div>
            <div className="input-group mb-3">
              <input
                placeholder="Product Supplier"
                type="text"
                {...register("supplier", { required: true })}
              />
            </div>
            <div className="mb-4">
              <input className="px-5 py-2" type="submit" value="ADD ITEM" />
            </div>
          </form>
        </div>
      </div>
    );
};

export default AddItem;