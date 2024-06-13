import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaTrashAlt, FaUsers } from "react-icons/fa";

const Users = () => {
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],

    queryFn: async () => {
      const res = await fetch(`http://localhost:6001/users`);
      return res.json();
    },
  });
  console.log(users);

  return (
    <div>
      <div className="flex items-center justify-between m-4">
        <h5>All Users</h5>
        <h5>Total Users: {users.length}</h5>
      </div>

      {/*start table */}
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra md:w-[870px]">
            {/* head */}
            <thead className="text-white rounded-lg bg-orange">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.role === "admin" ? (
                      "Admin"
                    ) : (
                      <button className="text-white bg-indigo-500 btn btn-xs btn-circle">
                        {" "}
                        <FaUsers />
                      </button>
                    )}
                  </td>
                  <td>
                    <button className="text-white bg-orange btn btn-xs">
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/*end table */}
    </div>
  );
};

export default Users;
