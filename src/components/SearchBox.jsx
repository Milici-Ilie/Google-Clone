"use client";
import { RxCross2 } from "react-icons/rx";
import { BsFillMicFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation"; //🦑🦑[SEARCH BOX FUNCTIONALITY]🦑🦑 this is how we get information from the URL

//🎧🎧[SEARCH HEADER]🎧🎧
//🦑🦑[SEARCH BOX FUNCTIONALITY]🦑🦑
export default function SearchBox() {
  const searchParams = useSearchParams(); //need it to take the information from the URL
  const router = useRouter();
  const searchTerm = searchParams.get("searchTerm"); //need it to take the information from the URL
  const [term, setTerm] = useState(searchTerm || "");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!term.trim()) return;
    router.push(`/search/web?searchTerm=${term}`);
  }; //this is how we sent our data from the Input Field to the URL/ data base

  return (
    <form
      onSubmit={handleSubmit}
      className="flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center"
    >
      <input
        type="text"
        className="w-full focus:outline-none"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      {/* onChange=.... will take the data that the user typed in the Input Field and sent it to the 'setTerm' that will sent it to 'term' nad than will be sent to the 'handleSubmit' function */}
      <RxCross2
        className="text-2xl text-gray-500 cursor-pointer sm:mr-2"
        onClick={() => setTerm("")}
        // 🦑🦑[SEARCH BOX FUNCTIONALITY]🦑🦑 'onClick' =... this is how we delete the text from the Input Field
      />
      <BsFillMicFill className="hidden sm:inline-flex text-4xl text-blue-500 border-l-2 border-gray-300 mr-3 pl-4" />
      <AiOutlineSearch
        className="text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer"
        onClick={handleSubmit}
      />
    </form>
  );
}
