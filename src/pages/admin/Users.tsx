import { deleteDoc, doc } from "firebase/firestore";
import Helmet from "../../components/Helmet";
import useGetData from "../../hooks/useGetData";
import User from "../../interfaces/User";
import { Icon } from "@iconify/react";
import { db } from "../../firebase";
import { toast } from "react-toastify";

const Users = () => {
  const { data: users, loading } = useGetData<User>("users");

  const handleEdit = (userId: string) => {
    console.log(`Editing user with ID: ${userId}`);
  };

  const handleDelete = (userId: string) => {
    deleteDoc(doc(db, "users", userId));
    toast.success("Successfully deleted product!");
  };

  return (
    <Helmet title="Users">
      <section className="flex justify-center">
        <div className="container">
          <h2 className="text-2xl font-bold mb-4">Users</h2>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <table className="table w-full mt-3 text-center">
              <thead>
                <tr className="border-b">
                  <th>ID</th>
                  <th>Display Name</th>
                  <th>Email</th>
                  <th>Photo URL</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr
                    key={user.id}
                    className="hover:shadow-sm hover:bg-slate-1/20 border-b"
                  >
                    <td>{user.id}</td>
                    <td>{user.displayName}</td>
                    <td>{user.email}</td>
                    <td className="flex justify-center">
                      {user.photoURL ? (
                        <img
                          src={user.photoURL}
                          alt={`Photo of ${user.displayName}`}
                          className="w-8 h-8 rounded-full"
                        />
                      ) : (
                        "N/A"
                      )}
                    </td>
                    <td>
                      <button
                        className="text-blue-500 hover:text-blue-700 mr-2"
                        onClick={() => handleEdit(user.id)}
                      >
                        <Icon icon="material-symbols:edit-outline" />
                      </button>
                      <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => handleDelete(user.id)}
                      >
                        <Icon icon="material-symbols:delete-outline" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </section>
    </Helmet>
  );
};

export default Users;
