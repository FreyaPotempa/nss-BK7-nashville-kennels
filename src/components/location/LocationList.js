import { Fragment, useContext } from "react"
import { LocationContext } from "./LocationProvider"
import { useEffect } from "react"
import { Location } from "./Location"
import { Link, useNavigate } from "react-router-dom"

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
      <div className="locations">
        {
        locations.map(location => <div key={`locationList--${location.id}`}>
          <Link to={`/locations/detail/${location.id}`}>
            {location.name}
          </Link></div>
    )
    }
    </div>
    </article>
    </>
}