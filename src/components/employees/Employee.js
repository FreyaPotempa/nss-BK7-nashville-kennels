export const Employee = ({ employee }) => {
    return <>
    <header className="employee_header" key={`employee-${employee.id}`}><h2>{employee.name}</h2></header>
    <div>{employee?.location?.name}</div>
    </>
}