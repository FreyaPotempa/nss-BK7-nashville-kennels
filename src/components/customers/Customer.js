

export const Customer = ({customer}) => {

    return <>
    <header key={`customer-${customer.id}`}><h3>{customer.name}</h3></header>
    <div>{customer.address}</div>
    </>
}