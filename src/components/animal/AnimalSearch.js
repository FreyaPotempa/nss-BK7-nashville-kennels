import { useContext } from "react";
import { AnimalContext } from "./AnimalProvider";

export const AnimalSearch = () => {
  const { setSearchTerms } = useContext(AnimalContext);

  return (
    <>
      Animal Search:
      <input
        type="text"
        className="input--wide"
        onKeyUp={(event) => setSearchTerms(event.target.value)}
        placeholder="Search for an animal..."
      />
    </>
  );
};
