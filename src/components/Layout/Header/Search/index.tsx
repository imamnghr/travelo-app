import Image from "next/image";
import searchLogo from "public/assets/icons/search-icon.svg"

const Search = () => {
  return (
    <form className="flex items-center ml-8">

    <input
      type="text"
      placeholder="Kategori      |     Lokasi"
      className="border border-gray-50 px-4 py-3 rounded-1-md text-sm text-gray-50"
      />
    <Image
      src = {searchLogo}
      alt="search logo"
      width="24"
      height="24"
      />
      </form>
  );
};

export default Search;
