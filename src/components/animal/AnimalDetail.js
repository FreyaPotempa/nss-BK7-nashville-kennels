import { useContext, useEffect, useState } from "react"
import { useParams, useSearchParams, createSearchParams, useNavigate } from "react-router-dom"
import { AnimalContext } from "./AnimalProvider"


//USEMEMO look it up

export const AnimalDetail = () => {
    const navigate = useNavigate()
    const { animals, releaseAnimal } = useContext(AnimalContext)
    const { animalId } = useParams()
   //Feel like this is close to working. It does amend the url but it does not hold current state
   //https://www.peterbe.com/plog/usesearchparams-react-global-state-manager
    // const [searchParams, setSearchParams] = useSearchParams()
    const [animal, setAnimal] = useState({ 
        location: {}, 
        customer: {} })

        
    useEffect(() => {
            const thisAnimal = animals?.find(a => a.id === parseInt(animalId))
            setAnimal(thisAnimal)


    },[])

    console.log(animalId)
    console.log(animals)
    
    const handleRelease = () => {
        releaseAnimal(animal.id)
        .then(() => {
            navigate("/animals")
        })
    }
    // useEffect(() => {
    //     // setSearchParams(
    //     //     createSearchParams(animalId))
    // },[animalId, animals])

    if (animals.length === 0 ) {
        return null
    }
    return (
     
        <section className="animal" key={`animal__${animal.id}`}>
            <h3 className="animal__name">{animal?.name}</h3>
            <div className="animal__breed">{animal?.breed}</div>
            <div className="animal__location">Location:{animal?.location?.name}</div>
            <div className="animal__owner">Customer: {animal?.customer?.name}</div>
            <button onClick={() => {
    navigate(`/animals/edit/${animal.id}`)
}}>Edit</button>
<button onClick={handleRelease}>Release Animal</button>

        </section>
    )
}