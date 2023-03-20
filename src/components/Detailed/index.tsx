import { Mail, Phone } from "lucide-react";
import { users } from "../MiddleBar/data";
import Profile from "./Profile";

function Detailed() {
  return (
    <div>
      <div className=" relative h-[220px] w-full bg-[url('/blog-3.jpg')] bg-cover bg-center">
        <img
          src="/man.jpg"
          alt=""
          className="w-24 h-24 sm:h-32 sm:w-32 translate-y-[50%] translate-x-[25%] object-cover object-center border-4 rounded-full bottom-0 absolute"
        />
      </div>

      <div className="p-5 flex gap-x-5 justify-end">
        <button className="flex shadow-sm items-center gap-x-2 border py-1 px-3 rounded border-gray-300">
          <Mail className="h-4 w-4 text-gray-500" />
          <span className="font-bold text-sm text-gray-600">Message</span>
        </button>
        <button className="flex shadow-sm items-center gap-x-2 border py-1 px-3 rounded border-gray-300">
          <Phone className="h-4 w-4 text-gray-500" />
          <span className="font-bold text-sm text-gray-600">Call</span>
        </button>
      </div>

      <div>
        {/* person name */}
        <h1 className="px-5 text-2xl font-bold text-gray-700 font-poppins">
          Blake Alexander
        </h1>

        {/* copy within a minute after just see */}
        <div className="border-b font-medium text-gray-500 text-sm">
          <ul className="flex flex-wrap">
            <li className="p-5 hover:border-b-2 cursor-pointer mr-2 hover:text-gray-700">
              <a href="#">Profile</a>
            </li>
            <li className="p-5 text-gray-700 hover:border-b-2 cursor-pointer mr-2 border-b-2 border-pink-600">
              <a href="#">Calendar</a>
            </li>
            <li className="p-5 hover:border-b-2 cursor-pointer mr-2 hover:text-gray-700">
              <a href="#">Recognition</a>
            </li>
          </ul>
        </div>

        <Profile />

        {/* about */}

        <div className="px-5 space-y-3 font-medium text-gray-500 text-sm">
          <h6>About</h6>
          <p>
            Velit laboriosam impedit et maxime laudantium quo illum doloribus
            maiores non, placeat totam mollitia nesciunt accusamus numquam esse!
            Tempora corporis quas asperiores. Reiciendis!
          </p>
        </div>

        <div className="px-5 pt-5 font-medium text-gray-500 text-sm">
          <h6>Team members</h6>

          <div className="grid my-5 grid-cols-1 sm:grid-cols-2 gap-5">
            {users.slice(0, 4).map((user) => (
              <div
                className="p-3 md:p-5 border rounded-lg flex gap-5"
                key={user.id}
              >
                <div>
                  <img
                    src={user.image}
                    className="rounded-full w-10 h-10 object-cover object-center"
                    alt=""
                  />
                </div>

                <div>
                  <h6 className="font-bold">{user.name}</h6>
                  <p>{user.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detailed;
