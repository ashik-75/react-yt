import { users } from "./data";

function Users() {
  return (
    <div className="divide-y">
      {users.map((user) => (
        <div
          key={user.id}
          className="flex gap-5 px-5 py-3 items-start hover:bg-zinc-100 cursor-pointer"
        >
          <div className="h-10 w-10 rounded-full overflow-hidden">
            <img
              src={user.image}
              className="object-cover h-full w-full"
              alt=""
            />
          </div>

          <div>
            <h5 className="font-medium text-sm">{user.name}</h5>
            <p className="text-sm font-medium text-gray-500">{user.position}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Users;
