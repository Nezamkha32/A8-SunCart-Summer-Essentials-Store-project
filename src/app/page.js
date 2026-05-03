import Image from "next/image";
import Banner from "@/components/Banner";
import TopGenerations from "@/components/TopGenerations";
import TopBrands from "@/components/TopBrands";
import SummerCareTips from "@/components/SummerCareTips";

export default function Home() {
  return (
    <div>
      <Banner/>
      <TopGenerations/>
      <SummerCareTips/>
      <TopBrands/>
    </div>
  );
}
