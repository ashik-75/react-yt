import { ExternalLink, Film, Home, Podcast, Trophy } from "lucide-react";
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
];

function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="col-span-2 space-y-3">
      {categories.map((category) => {
        const { icon: Icon, title, id } = category;
        return (
          <button
            onClick={() => navigate(`/?q=${title}`)}
            className="flex items-center gap-3 rounded hover:bg-gray-100 py-1 px-3 cursor-pointer"
          >
            <Icon className="h-5 w-5" />
            <span className="capitalize">{title}</span>
          </button>
        );
      })}
    </div>
  );
}

export default Sidebar;
