import { Fragment, useContext } from "react"
import { LocationContext } from "./LocationProvider"
import { useEffect } from "react"
import { Location } from "./Location"
import { useNavigate } from "react-router-dom"

export const LocationList = () => {
    const navigate = useNavigate()
    const { locations, getLocations } = useContext(LocationContext)

    useEffect(() => {
        getLocations()
    }, [])

    return <>
    <article className="locations">
        <h2>List of Locations</h2>
        <button type="button" onClick={
        () => navigate("/locations/create")
      }>
        Add Location
      </button>
        {
        locations.map(location => {
            return <Location key={`location-${location.id}`}
            name={location.name}
            address={location.address}
           />
        })
    }
    </article>
    </>
}