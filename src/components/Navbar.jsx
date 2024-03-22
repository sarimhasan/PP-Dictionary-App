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
    <form onSubmit={handleSubmit}>
      <input
        className="border-2 border-black"
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        placeholder="Enter a word"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default Navbar;
