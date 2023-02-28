import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { CustomerContext } from "../customers/CustomerProvider"
import { LocationContext } from "../location/LocationProvider"
import { AnimalContext } from "./AnimalProvider"



export const AnimalForm = () => {
    const navigate = useNavigate()
    const { addAnimal, updateAnimal, getAnimalById } = useContext(AnimalContext)
    const { locations, getLocations } = useContext(LocationContext)
    const { customers, getCustomers } = useContext(CustomerContext)

    //for edit, hold on to state of animal in this view
    const [animal, setAnimal] = useState({
        name: "",
        breed: "",
        locationId: 0,
        customerId: 0
    })
    const [isLoading, setIsLoading] = useState(true)
    const { animalId } = useParams()


    useEffect(() => {
        getCustomers().then(getLocations)
    }, [])

    //will handle input changes for updated state, will cause a re-render and update the view
    const handleInput = (event) => {
        const newAnimal = {...animal}
        newAnimal[event.target.id] = event.target.value
        setAnimal(newAnimal)
    }

    const handleClickSaveAnimal = (event) => {
        const locationId = parseInt(animal.locationId)
        const customerId = parseInt(animal.customerId)

        if (locationId === 0 || customerId === 0) {
            window.alert('Please select a location and a customer')
        } else {
          //setIsLoading(true)
          if(animalId){
            //PUT request
            updateAnimal({
              id: animal.id,
              name: animal.name,
              breed: animal.breed,
              locationId: parseInt(animal.locationId),
              customerId: parseInt(animal.customerId)
            })
            .then(() => navigate(`/animals/detail/${animal.id}`))
          } else {
            //POST
            const newAnimal = {
                name: animal.name,
                breed: animal.breed,
                locationId: locationId,
                customerId: customerId
            }
            addAnimal(newAnimal)
            .then(() => {})
            navigate("/animals")
        }
      }
    }

    useEffect(() => {
      getCustomers().then(getLocations).then(() => {
        if (animalId){
          getAnimalById(animalId)
          .then(animal => {
            setAnimal(animal)
            setIsLoading(false)
          })
        } else {
          setIsLoading(false)
        }
      })
    }, [])

    return (
        <form className="animalForm">
          <h2 className="animalForm__title">New Animal</h2>
          <fieldset>
            <div className="form-group">
              <label htmlFor="name">Animal name:</label>
              <input type="text" id="name" name="name" required autoFocus className="form-control" placeholder="Animal name" defaultValue={animal.name} onChange={handleInput} />
            </div>
          </fieldset>
          <fieldset>
            <div className="form-group">
              <label htmlFor="name">Animal breed:</label>
              <input type="text" id="breed" required autoFocus className="form-control" placeholder="Animal breed" defaultValue={animal.breed} onChange={handleInput} />
            </div>
          </fieldset>
          <fieldset>
            <div className="form-group">
              <label htmlFor="location">Assign to location: </label>
              <select name="locationId" id="locationId" className="form-control" defaultValue={animal.locationId} onChange={handleInput}>
                <option value="0">Select a location</option>
                {locations.map(l => (
                  <option key={l.id} value={l.id}>
                    {l.name}
                  </option>
                ))}
              </select>
            </div>
          </fieldset>
          <fieldset>
            <div className="form-group">
              <label htmlFor="customerId">Customer: </label>
              <select name="customer" id="customerId" className="form-control" value={animal.customerId} onChange={handleInput}>
                <option value="0">Select a customer</option>
                {customers.map(c => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
          </fieldset>
          <button type="button" className
    
    ="btn btn-primary" onClick={handleClickSaveAnimal}>
            {animalId ? <>Save Animal</> : <>Add Animal</>}
              </button>
        </form>
      )
    
    
}