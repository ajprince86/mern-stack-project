import Nav from "./Nav";
import Footer from "./Footer";
//Explained 2:45

const Layout = (props) => {
  return (
    <div>
      <h5>Track your hard work</h5>
      <Nav />
      <br />
      {props.children}
      {/* Bring of Children of that component, which is "Welcome to the Health app" */}
      <Footer />
    </div>
  );
};

export default Layout;
