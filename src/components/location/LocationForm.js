import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { LocationContext } from "./LocationProvider"


export const LocationForm = () => {
    const navigate = useNavigate()
    const { locations, getLocations, addLocation } = useContext(LocationContext)

    const [location, setLocation] = useState({
        name: "",
        address: ""
    })

    useEffect(() => {
        getLocations()
    }, [])

    const handleInput = (event) => {
        const newLocation = {...location}
        newLocation[event.target.id] = event.target.value
        setLocation(newLocation)
    }

    const handleClickSaveLocation = (event) => {
            const newLocation = {
                name: location.name,
                address: location.address
            }
            addLocation(newLocation)
            .then(() => {})
            navigate("/locations")
    }

    return (
        <form className="locationForm">
            <h2 className="locationForm__title">New Location</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Location name:</label>
                    <input type="text" id="name" required autoFocus className="form-control" placeholder="location name" value={location.name} onChange={handleInput} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="address">Location Address:</label>
                    <input type="text" id="address" required autoFocus className="form-control" placeholder="location address" value={location.address} onChange={handleInput} />
                </div>
            </fieldset>
            <button type="button" className="btn btn-primary" onClick={handleClickSaveLocation}>Save Location</button>
        </form>


    )
}