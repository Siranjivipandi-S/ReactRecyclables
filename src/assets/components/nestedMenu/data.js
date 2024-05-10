export const sidebar = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About",
    to: "about",
  },
  {
    label: "Service",
    to: "service",
    children: [
      {
        label: "Web Design",
        to: "web-design",
        children: [
          {
            label: "Front Design",
            to: "web-design",
          },
          {
            label: "Backend Design",
            to: "web-design",
          },
        ],
      },
      {
        label: "BackEnd",
        to: "backend",
      },
    ],
  },
  {
    label: "Contact",
    to: "contact",
    children: [
      {
        label: "Company",
        to: "company",
      },
      {
        label: "Personal",
        to: "personal",
      },
    ],
  },
];
export default sidebar;
