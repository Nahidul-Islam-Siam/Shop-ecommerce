import Banner from "@/component/Banner";
import Categories from "@/component/Categories";
import Feature from "@/component/Feature";
import InstagramFeed from "@/component/InstagramFeed";
import LatestArticles from "@/component/LatestArticles";
import Newslater from "@/component/Newslater";
import PromoSection from "@/component/Promosectiom";
import ShopCollection from "@/component/shopCollection";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" min-h-screen">
      <Banner></Banner>
      <Feature></Feature>
      <Categories></Categories>
      <PromoSection></PromoSection>
      <ShopCollection></ShopCollection>
      <LatestArticles></LatestArticles>
      <Newslater></Newslater>
      <InstagramFeed></InstagramFeed>
    </div>
  );
}
