import {
  CalendarRange,
  Cog,
  FolderSearch,
  Home,
  LayoutGrid,
  Map,
  Megaphone,
  Users,
} from "lucide-react";

function ListItem({ title, Icon }: { title: string; Icon: any }) {
  return (
    <div className="flex gap-x-2 items-center hover:bg-zinc-300 cursor-pointer px-4 py-1.5 rounded">
      <Icon className="text-gray-500 h-5 w-5" />
      <span className="text-sm text-gray-700">{title}</span>
    </div>
  );
}

function Sidebar() {
  return (
    <div>
      <div className="px-8 pt-5">
        <img src="/xing.png" className="h-8 w-8" alt="" />
      </div>
      <div className="space-y-4 p-5">
        <ListItem Icon={Home} title="Dashboard" />
        <ListItem Icon={CalendarRange} title="Calendar" />
        <ListItem Icon={Users} title="Teams" />
        <ListItem Icon={FolderSearch} title="Directory" />
        <ListItem Icon={Megaphone} title="Announcement" />
        <ListItem Icon={Map} title="Office Map" />
      </div>

      <div className="space-y-4 border-t border-zinc-200 p-5">
        <ListItem Icon={LayoutGrid} title="Apps" />
        <ListItem Icon={Cog} title="Settings" />
      </div>
    </div>
  );
}

export default Sidebar;
