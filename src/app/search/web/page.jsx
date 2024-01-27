//🧧🧧[GOOGLE API FETCHING]🧧🧧

import Link from "next/link";

export default async function WebSearchPage({ searchParams }) {
  // 🧧🧧[GOOGLE API FETCHING]🧧🧧 this {searchParams} give us the posibility to fecth data from the google API
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`
  );
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
  return (
    <div>{results && results.map((result) => <h1>{result.title}</h1>)}</div>
  );
}
