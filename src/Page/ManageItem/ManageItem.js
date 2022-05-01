import React  from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useItems from '../hooks/useItems';
import './ManageItem.css'

const ManageItem = () => {
    const [items, setItems] = useItems();
 
  const handleDelete = (id) => {
    //    const [items, setItems] = useItems();

    const proceed = window.confirm("Are you sure that you want to delete ?");

    if (proceed) {
      const url = `http://localhost:5000/item/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remainig = items.filter((item) => item._id !== id);
          setItems(remainig);
        });
    }
  };

  return (
    <div className="mt-5 text-center w-50 mx-auto">
      <Link to="/additem">
        <Button
          className="text-center w-50 mx-auto align-x-axis mb-5"
          variant="outline-dark"
        >
         GO TO ADD ITEM SECTION
        </Button>
      </Link>

      <h2>Manage Your Item Here </h2>
      {items.map((item) => (
        <div key={item._id} className="w-100">
          <div className="back-card-dtyle2 mb-4">
            <div>
              <img src={item.img} alt="" srcset="" />
              <div>
                <h3>{item.name}</h3>
                <h6>DESCRIPTION : {item.description}</h6>
                <h6>Quantity:{item.quantity}</h6>
                <h4>Price: ${item.price} per unit</h4>
                <h5>Supplier: {item.supplier}</h5>
                <Button
                  onClick={() => handleDelete(item._id)}
                  className="w-100 text-center mt-3"
                  variant="outline-dark"
                >
                  Delete
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManageItem;