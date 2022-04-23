import Nav from "./Nav";
import Footer from "./Footer";
//Explained 2:45

const Layout = (props) => {
  return (
    <div>
      <h3>Health App to help you reach your goals</h3>
      <Nav />
      {props.children}
      {/* Bring of Children of that component, which is "Welcome to the Health app" */}
      <Footer />
    </div>
  );
};

export default Layout;
