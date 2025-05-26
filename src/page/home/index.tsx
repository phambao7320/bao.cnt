import { DefaultLayout } from "@/components/layouts";
import Banner from "@/components/ui/banner";
import FeaturedProduct from "@/components/ui/featured-products";
import NewsLetter from "@/components/ui/new-letters";
import PopularProducts from "@/components/ui/popular-products";
import SliderBanner from "@/components/ui/slider-banner";
import React from "react";

const Home = () => {
  return (
    <DefaultLayout>
      <SliderBanner />
      <PopularProducts />
      <FeaturedProduct />
      <Banner />
      <NewsLetter />
    </DefaultLayout>
  );
};

export default Home;
