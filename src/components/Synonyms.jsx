import { useContext } from "react";
import { DictionaryContext } from "../context/context";

function Synonyms() {
  const data = useContext(DictionaryContext)[1];

  return (
    <>
      {data.map((item) =>
        item.meanings.map((synonym, index) => (
          <div
            className="bg-light-pink rounded-[45px] p-4 my-5 mx-2"
            key={index}
          >
            <h1 className="flex justify-center text-[28px] font-bold mb-1">
              Synonyms
            </h1>
            <ul>
              {synonym.synonyms.map((syn, idx) => (
                <li key={idx} className="flex justify-center text-text">
                  {syn}
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </>
  );
}

export default Synonyms;
