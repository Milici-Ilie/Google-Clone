"use client";

import { useEffect, useState } from "react";

export default function CountryLookup() {
  const [country, setCountry] = useState("United States"); //🦶🦶[FOOTER CONTENT]🦶🦶 when the user has some problem and the IP doesn't work there will be displayed the 'United States'
  useEffect(() => {
    fetch(
      `https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setCountry(data.country));
  }, []);
  return <div>{country}</div>;
}
