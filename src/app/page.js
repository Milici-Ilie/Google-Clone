import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <div className="flex flex-col items-center mt-24">
        {/* 👃👃[BODY CONTENT]👃👃 */}
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Google_logo_%282010-2013%29.svg/811px-Google_logo_%282010-2013%29.svg.png"
          alt="Google logo"
          width={300}
          height={100}
          priority
          style={{ width: "auto" }}
        />
        <HomeSearch />
      </div>
    </>
  ); //🤕🤕[HOME HEADER]🤕🤕 including the Header in the Home page
}
