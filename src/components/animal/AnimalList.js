import React, { useContext, useEffect, useState } from "react";
import { AnimalContext } from "./AnimalProvider";
import "./Animal.css";
import { Animal } from "./Animal";
import { Link, useNavigate } from "react-router-dom";

export const AnimalList = () => {
  const navigate = useNavigate();

  // This state changes when `getAnimals()` is invoked below
  const { animals, getAnimals, searchTerms } = useContext(AnimalContext);
  const [filteredAnimals, setFiltered] = useState([]);

  //useEffect - reach out to the world for something
  useEffect(() => {
    getAnimals();
  }, []);

  useEffect(() => {
    if (searchTerms !== "") {
      const subset = animals.filter((animal) =>
        animal.name.toLowerCase().includes(searchTerms)
      );
      setFiltered(subset);
    } else {
      setFiltered(animals);
    }
  }, [searchTerms, animals]);

  return (
    <section className="animals">
      <h2>Animals</h2>
      <button type="button" onClick={() => navigate("/animals/create")}>
        Make Reservation
      </button>
      <div className="animals">
        {filteredAnimals.map((animal) => (
          <div key={`animalList--${animal.id}`}>
            <Link to={`/animals/detail/${animal.id}`}>{animal.name}</Link>
          </div>
        ))}
      </div>
    </section>
  );
};
