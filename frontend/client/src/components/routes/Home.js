import Layout from "../shared/Layout";
import image from "../images/workout_4.avif";
import "../css/home.css";

const Home = () => {
  return (
    <Layout>
      <p>Welcome to the Health App</p>
      <p>
        Helping you reach your workout goals <br /> one day at a time
      </p>

      <img className="home" src={image} alt="pic" />
    </Layout>
  );
};

export default Home;