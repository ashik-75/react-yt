type InfoType = {
  id: number;
  title: string;
  description: string;
};
function Info({ title, description }: InfoType) {
  return (
    <div className="font-medium">
      <h6 className="text-gray-500">{title}</h6>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

const data: InfoType[] = [
  {
    id: 1,
    title: "Phone",
    description: "(555) 123-4567",
  },
  {
    id: 2,
    title: "Email",
    description: "alex@gmail.com",
  },
  {
    id: 3,
    title: "Title",
    description: "Senior Frontend Developer",
  },
  {
    id: 4,
    title: "Team",
    description: "Product Development",
  },
  {
    id: 5,
    title: "Location",
    description: "Sab Francisco",
  },
  {
    id: 6,
    title: "Sits",
    description: "Oasis",
  },
  {
    id: 7,
    title: "Salary",
    description: "$120,000",
  },
  {
    id: 8,
    title: "Birthday",
    description: "June 8, 1990",
  },
];

function Profile() {
  return (
    <div className="grid grid-cols-2 text-sm p-5 gap-5">
      {data.map((info) => (
        <Info key={info.id} {...info} />
      ))}
    </div>
  );
}

export default Profile;
