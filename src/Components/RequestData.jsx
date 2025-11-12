import React, { useState } from "react";

const RequestData = ({ req }) => {

  const [accepted, setAccepted] = useState(false);
  const [reject, setReject] = useState(true);
  const [status, setStatus] = useState(req.status)

  const handleAcceptBtn = (id) => {
    console.log("clicked accepted btn", id);
    fetch(`http://localhost:3000/food-request-accept/${id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({status: 'Donated'})
    })
    .then(res => res.json())
    .then(data => {
        console.log(data.matchedCount);
        setAccepted(!accepted);
        if(data.matchedCount){
            setStatus('Accepted')
        }
    })
  };
  const handleRejectBtn = (id) => {
    console.log("clicked accepted btn", id);
    fetch(`http://localhost:3000/food-request-reject/${id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({status: 'Rejected'})
    })
    .then(res => res.json())
    .then(data => {
        console.log(data.matchedCount);
        setAccepted(!accepted);
        if(data.matchedCount){
            setStatus('Rejected')
        }
    })
  };

  return (
    <tr key={req._id} className="hover:bg-gray-50">
      <td className="flex items-center gap-2 py-2 px-2">
        <img
          src={req.photoURL}
          alt=""
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
        />
        <span className="truncate max-w-[100px] sm:max-w-none">
          {req.userName}
        </span>
      </td>
      <td className="hidden sm:table-cell">{req.location}</td>
      <td className="hidden md:table-cell">{req.reason}</td>
      <td className="hidden md:table-cell">{req.contact}</td>
      <td className="px-2 py-2">
        <span
          className={`px-2 py-1 rounded text-xs sm:text-sm ${
            req.status === "pending"
              ? "bg-yellow-200 text-yellow-800"
              : req.status === "Accepted"
              ? "bg-green-200 text-green-800"
              : "bg-red-200 text-red-800"
          }`}
        >
          {status}
        </span>
      </td>
      <td className="flex flex-col sm:flex-row gap-2 px-2 py-2">
        <button
          onClick={ ()=> handleAcceptBtn(req._id)}
          className="btn btn-xs sm:btn-sm btn-success"
        >
         Accept
        </button>
        <button onClick={() => handleRejectBtn(req._id)} className="btn btn-xs sm:btn-sm btn-error">
            {
                reject ? 'Reject' : 'Rejected'
            }
            
            </button>
      </td>
    </tr>
  );
};

export default RequestData;
