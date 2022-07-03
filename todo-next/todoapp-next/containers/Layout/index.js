import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="container xl:max-w-screen-lg mx-auto">
        {children}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
