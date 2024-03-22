import { useContext } from "react";
import { DictionaryContext } from "../context/context";

function Definitions() {
  const data = useContext(DictionaryContext)[1];

  return (
    <>
      {/* Displaying the definition */}
      {data.map((item) => (
        <div key={item.word}>
          <h1>{item.word}</h1>
          {item.meanings.map((meaning, index) => (
            <div className="my-2" key={index}>
              <h2>{meaning.partOfSpeech}</h2>
              {meaning.definitions.slice(0, 4).map((def, index) => (
                <div key={index}>
                  <p>{def.definition}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </>
  );
}

export default Definitions;
