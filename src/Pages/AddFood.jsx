import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";

const AddFood = () => {
  const { user } = use(AuthContext);
  // console.log(user);

  const handleAddFood = (e) => {
    e.preventDefault();
    const donator_name = user.displayName;
    const donator_image = user.photoURL;
    const donator_email = user.email;
    const food_name = e.target.foodName.value;
    const food_image = e.target.photo.value;
    const food_quantity = e.target.foodQuantity.value;
    const pickup_location = e.target.pickupLocation.value;
    const expire_date = e.target.expireDate.value;
    const notes = e.target.notes.value;
    const food_status = "Available";

    const newFood = {
      donator_name,
      donator_image,
      donator_email,
      food_name,
      food_image,
      food_quantity,
      pickup_location,
      expire_date,
      notes,
      food_status,
    };
    fetch("http://localhost:3000/addFoods", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newFood),
    })
      .then((res) => res.json)
      .then((data) => {
        console.log(data);
        e.target.reset();

        Swal.fire({
          title: "Food Added",
          icon: "success",
          draggable: true,
        });
      });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-2xl my-10">
      <h2 className="text-2xl font-bold text-center mb-5 text-primary">
        Add New Food
      </h2>

      <form onSubmit={handleAddFood} className="space-y-4">
        <input
          type="text"
          name="foodName"
          placeholder="Food Name"
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          name="photo"
          placeholder="Photo"
          className="input input-bordered w-full"
          required
        />

        <input
          type="text"
          name="foodQuantity"
          placeholder="Food Quantity (e.g., Serves 2 people)"
          className="input input-bordered w-full"
          required
        />

        <input
          type="text"
          name="pickupLocation"
          placeholder="Pickup Location"
          className="input input-bordered w-full"
          required
        />

        <input
          type="date"
          name="expireDate"
          className="input input-bordered w-full"
          required
        />

        <textarea
          name="notes"
          placeholder="Additional Notes"
          className="textarea textarea-bordered w-full"
          required
        ></textarea>

        {/* Auto-filled donator info */}
        <div className="bg-gray-50 p-3 flex gap-5 items-center rounded-md">
          <div className="h-10 w-10 rounded-full border border-purple-600">
            <img className="rounded-full" src={user?.photoURL} alt="User" />
          </div>
          <div>
            <p className="text-sm">
              <strong>Donator:</strong> {user?.displayName}
            </p>
            <p className="text-sm">
              <strong>Email:</strong> {user?.email}
            </p>
          </div>
        </div>
        <button className="btn btn-primary w-full">Add Food</button>

        {/* <button type="submit" className="btn btn-primary w-full" disabled={loading}>
          {loading ? "Adding..." : "Add Food"}
        </button> */}
      </form>
    </div>
  );
};

export default AddFood;
