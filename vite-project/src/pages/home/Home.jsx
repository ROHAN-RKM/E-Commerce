import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import Mycontext from "../../context/data/Mycontext";
import Herosection from "../../herosection/Herosection";
import Filter from "../../components/filter/Filter";
import Productcard from "../../components/productcard/Productcard";
import Testimonial from "../../components/testimonial/Testimonial";
import Track from "../../components/track/Track";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Layout>
      <Herosection />
      <Filter />
      <Productcard />
      <div className="flex justify-center -mt-10 mb-4">
        <Link to={"/allproducts"}>
          <button className=" bg-gray-300 px-5 py-2 rounded-xl">
            See more
          </button>
        </Link>
      </div>
      <Track />
      <Testimonial />
    </Layout>
  );
}

export default Home;
