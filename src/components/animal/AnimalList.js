import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import "./Animal.css"
import { Animal } from "./Animal"
import { useNavigate } from "react-router-dom"

export const AnimalList = () => {
  const navigate = useNavigate()

  // This state changes when `getAnimals()` is invoked below
  const { animals, getAnimals } = useContext(AnimalContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
    getAnimals()
  }, [])


  return (
    <section className="animals">
      <h2>Animals</h2>
      <button type="button" onClick={
        () => navigate("/animals/create")
      }>
        Add Animal
      </button>
      {
        animals.map(animal => {
          return <Animal 
          animal={animal} />
        })
      }
    </section>
  )
}