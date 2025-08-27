"use client";
import Image from "next/image";
import HomeHeaderSection from "./homepage/home/page";
import FlashSaleSection from "./homepage/flashsales/page";
import CategorySection from "./homepage/category/page";
import BestSellingSection from "./homepage/best selling/page";
import ExploreProducts from "./homepage/products/page";
import NewArrival from "./homepage/new arrival/page";



export default function Home() {
  return (
    <div>
    <HomeHeaderSection/>
    <FlashSaleSection/>
    <CategorySection/>
    <BestSellingSection/>
    <ExploreProducts/>
    <NewArrival/>
   

    </div>
  );
}
