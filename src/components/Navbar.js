import React from "react";

export default function Navbar({ selectedTab, setSelectedTab }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const menuItems = [
      {
          id:1,
          label: 'About'
      },
      {
          id:2,
          label: 'Work'
      },
      {
        id:3,
        label: 'Contact Me'
    },
    {
        id:4,
        label: 'Resume'
    }
  ];
  console.log(selectedTab)
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-emerald-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="#pablo"
            >
              Alexander Brandon
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                {
                    menuItems.map(item => (
                        <li className="nav-item" onClick={() => setSelectedTab(item.id)}>
                        <a
                          className={"px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75" + (selectedTab === item.id ? ' text-white' : ' text-black')}
                          href="#pablo"
                        >
                          <i className={"fab fa-facebook-square text-lg leading-lg opacity-75" + (selectedTab === item.id ? ' text-white' : ' text-black')}></i><span className="ml-2">{item.label}</span>
                        </a>
                      </li>
                    ))
                }
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
