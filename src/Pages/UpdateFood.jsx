import React, { use } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";

const UpdateFood = () => {
  const food = useLoaderData();

  const { user } = use(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();

  // console.log('food-', food);

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

    fetch(`https://kind-server-plate.vercel.app/update-food/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedFood),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        navigate("/manage-my-foods");
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

  //     fetch(`https://kind-server-plate.vercel.app/update-food/${id}`, {
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
      <h2 className="text-3xl font-bold text-center my-5 text-[#3E3F29]">
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

        <button className="flex w-full justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-500 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group">
          
          Update Food
          <svg
              class="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
              viewBox="0 0 16 19"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                class="fill-gray-800 group-hover:fill-gray-800"
              ></path>
            </svg>
          </button>
      </form>
    </div>
  );
};

export default UpdateFood;
