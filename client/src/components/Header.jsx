import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between mb-4 items-center mt-5">
      <Link to="/" className="text-2xl font-bold text-gray-900">
        Travella
      </Link>
      <nav className="flex gap-4 text-gray-900">
        <Link to="/signin">Sign In</Link>
        <Link to="/signup">Sign Up</Link>
      </nav>
    </header>
  );
};

export default Header;
