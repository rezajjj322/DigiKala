import Banner from "../components/banner/Banner";
import Header from "../components/header/Header";
import MainCategories from "../components/mainCategories/MainCategories";

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <Banner />
        <MainCategories />
      </main>
    </div>
  );
};

export default Home;
