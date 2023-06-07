import { Outlet } from "react-router";
import Header from "./Header";

const Layout = () => {
  return (
    <div>
      <main className=" p-3 max-w-3xl my-0 mx-auto">
        <Header />
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
