import { useContext } from "react";
import { DictionaryContext } from "../context/context";

function Definitions() {
  const data = useContext(DictionaryContext)[1];

  if (data.length === 0) return null; // If data is empty, don't render anything
  else {
    return (
      <>
        {/* Displaying the definition */}
        {/* {data.map((item) => (
        <div
          key={item.word}
          className="bg-light-pink rounded-[45px] p-7 my-5 mx-2"
        >
          <h1 className="text-lg font-bold">The Word You Searched</h1>
          <h2 className="text-5xl font-bold">{item.word}</h2>
          {item.meanings.map((meaning, index) => (
            <div key={index}>
              <h3 className="font-bold mt-3">{meaning.partOfSpeech}</h3>
              {meaning.definitions.slice(0, 4).map((def, index) => (
                <div className="text-text" key={index}>
                  <p className="mt-1">{def.definition}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      ))} */}

        <div className="bg-light-pink rounded-[45px] p-7 my-5 mx-2">
          <h1 className="text-lg font-bold">The word you Searched</h1>
          <h2 className="text-5xl font-bold">{data[0].word}</h2>
          {data[0].meanings.map((meaning, index) => (
            <div key={index}>
              <h3 className="font-bold mt-3">{meaning.partOfSpeech}</h3>
              {meaning.definitions.slice(0, 4).map((def, index) => (
                <div className="text-text" key={index}>
                  <p>{def.definition}</p>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Displaying the definition */}
        {/* {data.map((item) => {
        console.log("Item:", item);
        if (item.meanings.length > 0) {
          console.log("Meaning:", item.meanings[0]);
          return (
            <div
              key={item.word}
              className="bg-light-pink rounded-[45px] p-7 my-5 mx-2"
            >
              <h1 className="text-lg font-bold">The Word You Searched</h1>
              <h2 className="text-5xl font-bold">{item.word}</h2>
              <div>
                <h3 className="font-bold mt-3">
                  {item.meanings[0].partOfSpeech}
                </h3>
                {item.meanings[0].definitions.slice(0, 4).map((def, index) => (
                  <div className="text-text" key={index}>
                    <p className="mt-1">{def.definition}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        }
        return null; // If meanings array is empty, don't render anything
      })} */}
      </>
    );
  }
}

export default Definitions;
