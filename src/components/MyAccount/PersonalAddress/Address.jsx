import React, { useState } from "react";
import { Link } from "react-router-dom";

const Address = () => {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      title: "Default Address",
      name: "shreya saraf",
      street: "south delhi",
      zipCode: "110045",
      city: "Delhi",
      country: "India",
    },
    {
      id: 2,
      title: "Address-1",
      name: "shreya saraf",
      street: "south delhi",
      zipCode: "110045",
      city: "Delhi",
      country: "India",
    },
    {
      id: 3,
      title: "Address-2",
      name: "shreya saraf",
      street: "south delhi",
      zipCode: "110045",
      city: "Delhi",
      country: "India",
    },
  ]);

  const deleteAddress = (id) => {
    const updatedAddresses = addresses.filter((address) => address.id !== id);
    setAddresses(updatedAddresses);
    alert("Address deleted successfully!");
  };

  return (
    <div className="container">
      <div className="sign-up-head" style={{ margin: "2vw" }}>
        <h1>Your Address</h1>
      </div>
      <div className="row">
        {addresses.map((address) => (
          <div className="col-md-4" key={address.id}>
            <div className="card address-card">
              <div className="address-content">
                <h4>{address.title}</h4>
                <p>{address.name}</p>
                <p>{address.street}</p>
                <p>{address.zipCode}</p>
                <p>{address.city}</p>
                <p>{address.country}</p>
                <div>
                  <Link to="/updateaddress" className="address-btn">
                    Update
                  </Link>
                  <button
                    className="address-btn"
                    onClick={() => deleteAddress(address.id)}
                    style={{ marginLeft: "10px" }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="address-create-link">
        <Link to="/newaddress" className="address-link"> + Create New Address</Link>
      </div>
    </div>
  );
};

export default Address;
