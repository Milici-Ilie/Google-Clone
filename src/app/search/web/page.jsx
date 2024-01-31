// //🧧🧧[GOOGLE API FETCHING]🧧🧧

// import WebSearchResult from "@/components/WebSearchResult";
// import Link from "next/link";
// import { Suspense } from "react";

// export default async function WebSearchPage({ searchParams }) {
//   // 🧧🧧[GOOGLE API FETCHING]🧧🧧 this {searchParams} give us the posibility to fecth data from the google API
//   const startIndex = searchParams.start || "1"; //📃📃[PAGINATION]📃📃 📃📃[PAGINATION]📃📃
//   await new Promise((resolve) => setTimeout(resolve, 1000)); //🔃🔃[LOADING EFFECT]🔃🔃 this is how we create the effect of a loading, here we are creating only the loading effect, we keep the application on "await" for 4s/4000 in our case
//   const response = await fetch(
//     `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&start=${startIndex}`
//   ); //📃📃[PAGINATION]📃📃 here we added at the end of the link this '...&start=${startIndex}
//   if (!response.ok) throw new Error("Something went wrong!"); //🌋🌋[HANDLING ERRORS]🌋🌋 🌋🌋[HANDLING ERRORS]🌋🌋
//   const data = await response.json();
//   const results = data.items;

//   //🌋🌋[HANDLING ERRORS]🌋🌋 👇 here we are handling the error for non-existing words 'sfaoijfoirenjnlse'
//   if (!results) {
//     return (
//       <Suspense>
//         <div className="flex flex-col justify-center items-center pt-10">
//           <h1 className="text-3xl mb-4">
//             No results found for {searchParams.searchTerm}
//           </h1>
//           <p className="text-lg">
//             Try searching the web or images for something else{" "}
//             <Link href="/" className="text-blue-500">
//               Home
//             </Link>
//           </p>
//         </div>
//       </Suspense>
//     );
//   }
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <div>{results && <WebSearchResult results={data} />}</div>
//     </Suspense>
//   ); //🧧🧧[GOOGLE API FETCHING]🧧🧧
// }

import WebSearchResult from "@/components/WebSearchResult";
import Link from "next/link";

export default async function WebSearchPage({ searchParams }) {
  const startIndex = searchParams.start || "1";
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}'}&start=${startIndex}`
  );
  if (!response.ok) throw new Error("Something went wrong");
  const data = await response.json();
  const results = data.items;

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

  return <div>{results && <WebSearchResult results={data} />}</div>;
}
