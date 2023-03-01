import { useContext, useEffect } from "react";
import { Customer } from "./Customer";
import { CustomerContext } from "./CustomerProvider";

export const CustomerList = () => {
  const { customers, getCustomers } = useContext(CustomerContext);

  useEffect(() => {
    getCustomers();
  }, []);

  return (
    <section className="customers flex flex-col m-4">
      <h2>Customers</h2>
      {customers.map((customer) => {
        return (
          <Customer key={`customerList--${customer.id}`} customer={customer} />
        );
      })}
    </section>
  );
};
