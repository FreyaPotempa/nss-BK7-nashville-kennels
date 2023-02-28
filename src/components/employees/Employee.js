import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { EmployeeContext } from "./EmployeeProvider"



export const Employee = () => {
    const { employees } = useContext(EmployeeContext)
    const { employeeId } = useParams()
    const [ employee, setEmployee] = useState({
        location: {} })


    useEffect(() => {
        const thisEmployee = employees.find(e => e.id === parseInt(employeeId))
        setEmployee(thisEmployee)
    },[employeeId])

    if (employees.length === 0) {
        return null
    }
    return (
        <section className="employee" key={`employee__${employee.id}`}>
            <h3 className="employee__name">{employee.name}</h3>
            <div className="employee__location">Location: {employee.location.name}</div>
        </section>
    )

}


//ORIGINAL COMPONENT
// export const Employee = ({ employee }) => {
//     return <>
//     <header className="employee_header" key={`employee-${employee.id}`}><h2>{employee.name}</h2></header>
//     <div>{employee?.location?.name}</div>
//     </>
// }