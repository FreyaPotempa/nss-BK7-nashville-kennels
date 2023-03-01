import { Fragment } from "react"


export const Customer = ({customer}) => {

    return <div className="border-solid border-2 border-sky-500">
    <header key={`customer-${customer.id}`}><h3 className="font-bold text-slate-800">{customer.name}</h3></header>
    <div>{customer.address}</div>
    </div>
}