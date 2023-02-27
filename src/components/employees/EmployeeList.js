import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Employee } from "./Employee"
import { EmployeeContext } from "./EmployeeProvider"



export const EmployeeList = () => {
    const navigate = useNavigate()
    const {employees, getEmployees } = useContext(EmployeeContext)

    useEffect(() => {
        getEmployees()
    },[])

    return (
        <section className="employees">
                  <button type="button" onClick={
        () => navigate("/employees/create")
      }>
        Add Employee
      </button>
            {
                employees.map(employee => {
                    return <Employee 
                    employee={employee} />
                })
            }
        </section>
    )
}