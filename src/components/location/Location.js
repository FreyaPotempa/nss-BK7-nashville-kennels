import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { LocationContext } from "./LocationProvider"


export const Location = () => {
    const { locations } = useContext(LocationContext)
    const { locationId } = useParams()
    const [location, setLocation] = useState({
        employees: [],
        animals: []
    })

    useEffect(() => {
        const thisLocation = locations.find(l => l.id === parseInt(locationId))
        setLocation(thisLocation)
    }, [locationId])

    if (locations.length === 0) {
        return null
    }
    return (
        <section className="location" key={`location__${location.id}`}>
            <h3 className="location__name">{location.name}</h3>
            <div className="location__address">{location.address}</div>
            <div>Employees:</div>
            <ul className="location__employees">          
                {
                    location.employees.map(le => <li key={`locationemployee_${le.id}`}>{le.name}</li>)
                } 
            </ul>
            <div>Animals:</div>
            <ul className="location__animals">
                {
                    location.animals.map(la => <li key={`locationanimal_${la.id}`}>{la.name}</li>)
                }
            </ul>
        </section>
    )



}




//ORIGINAL COMPONENT
// export const Location = ({name, address }) => {


//     return <div>
//         <header className="location_header"><div>{name}</div></header>
//         <div>{address}</div>
//     </div>
// }