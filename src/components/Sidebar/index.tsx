import { ExternalLink, Film, Home, Play, Podcast, Trophy } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    id: 1,
    title: "home",
    icon: Home,
  },
  {
    id: 2,
    title: "tech",
    icon: ExternalLink,
  },
  {
    id: 3,
    title: "sport",
    icon: Trophy,
  },
  {
    id: 4,
    title: "movies",
    icon: Film,
  },
  {
    id: 5,
    title: "podcast",
    icon: Podcast,
  },
  {
    id: 6,
    title: "cricket",
    icon: Play,
  },
  {
    id: 7,
    title: "football",
    icon: Trophy,
  },
  {
    id: 5,
    title: "podcast",
    icon: Podcast,
  },
  {
    id: 8,
    title: "games",
    icon: Podcast,
  },
  {
    id: 5,
    title: "podcast",
    icon: Podcast,
  },
  {
    id: 9,
    title: "entertainment",
    icon: Podcast,
  },
  {
    id: 10,
    title: "travel",
    icon: Podcast,
  },
  {
    id: 11,
    title: "war",
    icon: Podcast,
  },
  {
    id: 12,
    title: "racing",
    icon: Podcast,
  },
  {
    id: 13,
    title: "olympics",
    icon: Podcast,
  },
  {
    id: 14,
    title: "world cup",
    icon: Podcast,
  },
  {
    id: 15,
    title: "soccer ",
    icon: Podcast,
  },
];

function Sidebar() {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState("home");

  return (
    <div className="sm:col-span-2 border-r hidden sm:block">
      <div className="sm:fixed pl-5 pt-5 left-0 top-[83px] w-[317px] z-50 h-[calc(100vh-83px)]  space-y-5 scrollbar-hide bg-zinc-100 overflow-y-scroll">
        {categories.map((category) => {
          const { icon: Icon, title, id } = category;
          return (
            <button
              key={id}
              onClick={() => {
                navigate(`/?q=${title}`);
                setActiveMenu(title);
              }}
              className={`flex items-center gap-3 rounded hover:bg-gray-200 py-2 px-4 cursor-pointer ${
                title === activeMenu && "bg-slate-200"
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="capitalize">{title}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
