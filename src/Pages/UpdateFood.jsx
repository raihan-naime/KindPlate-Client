import React, { use } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";

const UpdateFood = () => {
  const food = useLoaderData();
  const { user } = use(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate()

  const handleUpdateFood = (e) => {
    e.preventDefault();
    const form = e.target;
    const donator_name = user.displayName;
    const donator_image = user.photoURL;
    const donator_email = user.email;
    const food_name = form.foodName.value;
    const food_image = form.photo.value;
    const food_quantity = form.foodQuantity.value;
    const pickup_location = form.pickupLocation.value;
    const expire_date = form.expireDate.value;
    const notes = form.notes.value;
    const food_status = form.food_status.value;

    const updatedFood = {
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
    // console.log(updatedFood);
    // /update-food/:id
    // console.log('clicked');

    fetch(`http://localhost:3000/update-food/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedFood),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        navigate('/manage-my-foods')
        Swal.fire({
          title: "Data Saved",
          icon: "success",
          draggable: true,
        });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  //   const handleUpdateFood = (e) => {
  //     e.preventDefault();
  //     const form = e.target;

  //     const updatedFood = {
  //       food_name: form.foodName.value,
  //       food_image: form.photo.value,
  //       food_quantity: form.foodQuantity.value,
  //       pickup_location: form.pickupLocation.value,
  //       expire_date: form.expireDate.value,
  //       notes: form.notes.value,
  //       food_status: form.food_status.value,
  //     };

  //     fetch(`http://localhost:3000/update-food/${id}`, {
  //       method: "PUT",
  //       headers: { "content-type": "application/json" },
  //       body: JSON.stringify(updatedFood),
  //     })
  //       .then((res) => res.json())
  //       .then(() => {
  //         Swal.fire({
  //           title: "Updated Successfully!",
  //           icon: "success",
  //           draggable: true,
  //         });
  //         navigate("/manage-my-foods");
  //       })
  //       .catch((err) => console.error("Error updating food:", err));
  //   };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-2xl my-10">
      <h2 className="text-2xl font-bold text-center mb-5 text-primary">
        Update Food Info
      </h2>

      <form onSubmit={handleUpdateFood} className="space-y-4">
        <label htmlFor="foodName">Food Name</label>
        <input
          type="text"
          name="foodName"
          defaultValue={food.food_name}
          placeholder="Food Name"
          className="input input-bordered w-full"
        />
        <label htmlFor="photo">Photo URL</label>
        <input
          type="text"
          name="photo"
          defaultValue={food.food_image}
          placeholder="Photo URL"
          className="input input-bordered w-full"
        />
        <label htmlFor="foodQuantity">Food Quantity</label>
        <input
          type="text"
          name="foodQuantity"
          defaultValue={food.food_quantity}
          placeholder="Food Quantity"
          className="input input-bordered w-full"
        />
        <label htmlFor="pickupLocation">Pickup Location</label>
        <input
          type="text"
          name="pickupLocation"
          defaultValue={food.pickup_location}
          placeholder="Pickup Location"
          className="input input-bordered w-full"
        />
        <label htmlFor="expireDate">Expired Date</label>
        <input
          type="date"
          name="expireDate"
          defaultValue={food.expire_date}
          className="input input-bordered w-full"
        />
        <label htmlFor="notes">Notes</label>
        <textarea
          name="notes"
          defaultValue={food.notes}
          placeholder="Additional Notes"
          className="textarea textarea-bordered w-full"
        ></textarea>

        <select
          name="food_status"
          defaultValue={food.food_status}
          className="select select-bordered w-full"
        >
          <option value="Available">Available</option>
          <option value="Delivered">Delivered</option>
          <option value="Pending">Pending</option>
        </select>

        <button className="btn btn-primary w-full">Update Food</button>
      </form>
    </div>
  );
};

export default UpdateFood;
