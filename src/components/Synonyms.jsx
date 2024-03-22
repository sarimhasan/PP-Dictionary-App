import { useContext } from "react";
import { DictionaryContext } from "../context/context";

function Synonyms() {
  const data = useContext(DictionaryContext)[1];

  return (
    <>
      {data.map((item) =>
        item.meanings.map((synonym, index) => (
          <div className="my-2" key={index}>
            <ul>
              {synonym.synonyms.map((syn, idx) => (
                <li key={idx}>- {syn}</li>
              ))}
            </ul>
          </div>
        ))
      )}
    </>
  );
}

export default Synonyms;
