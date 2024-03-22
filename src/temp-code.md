```jsx
{
  /* Mapping meanings */
}
{
  data.map((item) => (
    <div key={item.word}>
      {item.meanings.map((meaning, index) => (
        <div key={index}>
          <h2>{meaning.partOfSpeech}</h2>
          {/* Mapping definitions */}
          {meaning.definitions.map((definition, index) => (
            <div key={index}>
              {definition.definition && <p>{definition.definition}</p>}
            </div>
          ))}
        </div>
      ))}
    </div>
  ));
}
```

```jsx
{
  /* Mapping meanings */
}
{
  data.map((item) => (
    <div key={item.word}>
      {item.meanings.map((meaning, index) => (
        <div key={index}>
          <h2>{meaning.partOfSpeech}</h2>
          {/* Render synonyms */}
          {meaning.definitions.some(
            (definition) => definition.synonyms.length > 0
          ) && (
            <div>
              <strong>Synonyms:</strong>
              <ul>
                {meaning.definitions.map(
                  (definition, index) =>
                    definition.synonyms.length > 0 && (
                      <li key={index}>
                        {definition.synonyms.map((synonym, idx) => (
                          <span key={idx}>{synonym}</span>
                        ))}
                      </li>
                    )
                )}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  ));
}
```
