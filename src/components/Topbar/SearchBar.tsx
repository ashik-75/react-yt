import { Dialog, Transition } from "@headlessui/react";
import { Search } from "lucide-react";
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [search, setSearch] = useState("");

  // mobile search bar
  const [show, setShow] = useState(false);

  const handleOpen = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  // end of mobile search bar

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/?q=${search}`);
    setShow(false);
    setSearch("");
  };
  return (
    <>
      <button onClick={handleOpen} className="sm:hidden">
        <Search className="h-5 w-5" />
      </button>

      {/* mobile search bar with transition */}
      <Transition appear show={show} as={Fragment}>
        <Dialog as="div" className="relative z-[99]" onClose={handleClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-start justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <form onSubmit={handleSubmit} className="flex justify-center">
                    <input
                      className="px-4 w-full py-2 outline-none border rounded"
                      type="search"
                      placeholder="search..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />

                    <button
                      className="border rounded hover:opacity-75 px-4 bg-black text-white font-medium ml-4"
                      type="submit"
                    >
                      <Search className="h-5 w-5" />
                    </button>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      {/*end of mobile search bar with transition */}

      {/* tab and desktop search bar */}
      <div className="hidden sm:block">
        <form onSubmit={handleSubmit} className="flex justify-center">
          <input
            className="px-4 w-full py-2 outline-none border rounded"
            type="search"
            placeholder="search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button
            className="border rounded hover:opacity-75 px-4 bg-black text-white font-medium ml-4"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </>
  );
}

export default SearchBar;
