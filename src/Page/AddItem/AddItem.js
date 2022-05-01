import React, { useState } from 'react';
import './AddItem.css'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

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

    // const handleUserSignIn =(e)=>{
    //     e.preventDefault();

    //     const data = {};

        // const url = `http://localhost:5000/item`;
        //     fetch(url, {
        //       method: "POST",
        //       headers: {
        //         "content-type": "application/json",
        //       },
        //       body: JSON.stringify(data),
        //     })
        //       .then((res) => res.json())
        //       .then((result) => {
        //         console.log(result);
        //       })
        //       .catch((error) => {
        //         console.error("Error:", error);
        // });
        // const name = e.target.name.value;
        // const quantity = e.target.quantity.value;
        // const description = e.target.description.value;
        // const price = e.target.price.value;
        // const img = e.target.img.value;
        // setNewItem(name, quantity, description, price, img);
    // }


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
              {/* <Link to="/manage">
                <input className="px-5 py-2" type="submit" value="ADD ITEM" />
              </Link> */}
            </div>
          </form>
        </div>
      </div>
    );
};

export default AddItem;