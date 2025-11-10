import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link } from "react-router";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import Loader from "../Components/Loader";

const ManageMyFoods = () => {
  const { user } = use(AuthContext);
  const [myFoods, setMyFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/manage-my-foods?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyFoods(data);
        setLoading(false);
      })
      .catch((error) => {
        toast.error(error);
        setLoading(false);
      });
  }, [user]);

  if (loading) {
    return (
      <div className="h-[70vh] flex justify-center items-center">
        <Loader></Loader>
      </div>
      
    );
  }
  //   console.log(myFoods);
  //   /delete-food/:id

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/delete-food/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            const newFoodItems = myFoods.filter((food) => food._id !== id);
            setMyFoods(newFoodItems);
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          })
          .catch((error) => {
            Swal.fire({
              title: "Error!",
              text: "Something went wrong.",
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <div className="p-5">
      <h2 className="text-3xl font-bold text-center mb-5 text-primary">
        Manage My Foods
      </h2>

      {myFoods.length === 0 ? (
        <p className="text-center text-gray-500">
          You haven’t added any food yet.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table text-center w-full border">
            <thead className="text-center">
              <tr className="bg-base-200">
                <th>Image</th>
                <th>Food Name</th>
                <th>Quantity</th>
                <th>Pickup Location</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {myFoods.map((food) => (
                <tr key={food._id}>
                  <td>
                    <img
                      src={food.food_image}
                      alt={food.food_name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                  </td>
                  <td>{food.food_name}</td>
                  <td>{food.food_quantity}</td>
                  <td>{food.pickup_location}</td>
                  <td className="flex   gap-2">
                    <Link
                      to={`/update-food/${food._id}`}
                      className="btn btn-sm btn-primary"
                    >
                      Update
                    </Link>
                    <button
                      onClick={() => handleDelete(food._id)}
                      className="btn btn-sm btn-error"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ManageMyFoods;
