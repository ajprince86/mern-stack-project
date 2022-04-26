import Layout from "../shared/Layout";
import image from "../images/workout_4.avif";
import "../css/home.css";

const Home = () => {
  return (
    <Layout>
      <h1 className="new-font">Welcome to the WORKit App</h1>
      <p className="initial">
        Helping you reach your workout goals <br /> one day at a time
      </p>
      {/* <div>
        <p className="new-font">Just sitting here</p>
      </div> */}
      <img className="home" src={image} alt="pic" />
    </Layout>
  );
};

export default Home;
