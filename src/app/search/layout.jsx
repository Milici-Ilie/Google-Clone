import SearchHeader from "@/components/SearchHeader";
import "./../globals.css";

//🔍🔍[SEARCH IMAGE]🔍🔍
export default function layout({ children }) {
  return (
    <div>
      <SearchHeader />
      {children}
    </div>
  );
}
