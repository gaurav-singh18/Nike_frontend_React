import headerLogo from "../assets/images/header-logo.svg";
//import { hamburger } from "../assets/icons/hamburger.svg";
import { navLinks } from "../constants/index.js";

const Nav = () => (
  <header className="padding-x py-8 absolute z-10 w-full">
    <nav className="flex justify-between items-center max-container">
      <a href="/">
        <img src={headerLogo} alt="logo" width={300} height={29} />
      </a>
    </nav>
    <ul className="flex flex-1 justify-center items center gap-16 max-lg:hidden">
      {navLinks.map((item) => (
        <li key={item.label}>
          <a
            href={item.href}
            className="fonts-montserrat leading-normal text-lg text-slate-gray"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  </header>
);

export default Nav;
