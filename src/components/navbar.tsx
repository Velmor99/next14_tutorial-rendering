// "use client";
// import { useState } from "react";
import { NavLinks } from "./nav-links";
import { NavSearch } from "./nav-search";

// if use client is declared in the navbar component shouldn't that be the only component running client side?
// well this is common missconception, when you add use client to a component it not only makes that component a client component
// but also affects every child component tree bellow it. In our scenario navLinkd and navSearch become client components as well
// think of use client as a boundary once crossed every subsequent component in the tree operates on the client side this is a reason
// we see navLinkd and navSearch executed client side

// therefore the recommended practice is to please client components as low as possible ideally making them leaf components.
// In our example we can reve the Navbar back to being a server component and convert navSearch to be the client component
// since it's the only one requiring state.
export const Navbar = () => {
  console.log("Navbar rendered");

  // const [search, setSearch] = useState("");
  return (
    <div>
      <NavLinks />
      <NavSearch />
    </div>
  );
};
