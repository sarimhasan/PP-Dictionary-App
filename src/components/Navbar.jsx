import { useState, useContext } from "react";
import { DictionaryContext } from "../context/context";
import axios from "axios";

function Navbar() {
  const url = "https://api.dictionaryapi.dev/api/v2/entries/en_US/";

  const [word, setWord] = useState("");
  const setData = useContext(DictionaryContext)[0];

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.get(url + word);
      const data = response.data;
      // console.log(data);
      setData(data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  }

  return (
    <>
      <div className="logo font-bold text-[25px] mt-4 mb-1 flex justify-center md:mt-0">
        WORD
      </div>
      <form onSubmit={handleSubmit} className="flex justify-center mx-2">
        <input
          className="rounded-full bg-dark-pink text-background placeholder-background mr-[2px] px-2 w-[20rem] md:w-[30rem] lg:w-[35rem]"
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          placeholder="Search any word..."
        />
        <button
          type="submit"
          className=" rounded-full bg-dark-pink py-[7px] px-6 ml-[2px]"
        >
          Search
        </button>
      </form>
    </>
  );
}

export default Navbar;
