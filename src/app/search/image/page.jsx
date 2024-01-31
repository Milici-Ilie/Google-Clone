//🧧🧧[GOOGLE API FETCHING]🧧🧧

import ImageSearchResults from "@/components/ImageSearchResults";
import Link from "next/link";

export default async function ImageSearchPage({ searchParams }) {
  // 🧧🧧[GOOGLE API FETCHING]🧧🧧 this {searchParams} give us the posibility to fecth data from the google API
  const startIndex = searchParams.start || "1"; //📃📃[PAGINATION]📃📃 we need this for pagination, also check the API link from bellow📃📃[PAGINATION]📃📃
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}'}&searchType=image&start=${startIndex}`
  ); //📃📃[PAGINATION]📃📃 here we added at the end of the link this '...&start=${startIndex} 📃📃[PAGINATION]📃📃'
  if (!response.ok) throw new Error("Something went wrong!"); //🌋🌋[HANDLING ERRORS]🌋🌋 🌋🌋[HANDLING ERRORS]🌋🌋
  const data = await response.json();
  const results = data.items;

  //🌋🌋[HANDLING ERRORS]🌋🌋 👇 here we are handling the error for non-existing words 'sfaoijfoirenjnlse'
  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">
          No results found for {searchParams.searchTerm}
        </h1>
        <p className="text-lg">
          Try searching the web or images for something else{" "}
          <Link href="/" className="text-blue-500">
            Home
          </Link>
        </p>
      </div>
    );
  }
  return <div>{results && <ImageSearchResults results={data} />}</div>; //🧧🧧[GOOGLE API FETCHING]🧧🧧
}
