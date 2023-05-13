import { createContext, useState } from "react";

// create context
export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const initialEquipments = [
    {
      id: 1,
      name: "Equipment 1",
      // price: "1000",
      // description: "This is a description",
      // availability: "Available",
    },
    {
      id: 2,
      name: "Equipment 2",
      // price: "1000",
      // description: "This is a description",
      // availability: "Available",
    },
    {
      id: 3,
      name: "Equipment 3",
      // price: "1000",
      // description: "This is a description",
      // availability: "Available",
    },
    {
      id: 4,
      name: "Equipment 4",
      // price: "1000",
      // description: "This is a description",
      // availability: "Available",
    },
  ];

  const initialCustomer = [
    {
      id: 1,
      name: "Customer 1",
      phone: "1331",
      // adress: "This is an adress",
      // phoneNo: "1234567890",
      equipments: ["Equipment 1", "Equipment 1"],
    },
    {
      id: 2,
      name: "Customer 2",
      phone: "31313",
      equipments: ["Equipment 3, Equipment 4"],
    },
    {
      id: 3,
      name: "Customer 3",
      phone: "133131",
      equipments: ["Equipment 2"],
    },
    {
      id: 4,
      name: "Customer 4",
      phone: "3131",
      equipments: ["Equipment 1", "Equipment 2", "Equipment 3", "Equipment 4"],
    },
  ];

  const [equipments, setEquipments] = useState(initialEquipments);
  const [customers, setCustomers] = useState(initialCustomer);

  const addCustomer = (customer) => {
    const existingCustomer = customers.findIndex((c) => c.id === customer.id);

    if (existingCustomer !== -1) {
      const updateCus = [...customers];
      updateCus[existingCustomer] = customer;
      setCustomers(updateCus);
    } else {
      setCustomers([...customers, customer]);
    }
  };

  const deleteCustomer = (id) => {
    setCustomers(customers.filter((c) => c.id !== id));
  };

  const setCustomer = (id) => {
    return customers.filter((c) => c.id === id);
  };

  const addEquipment = (equipment) => {
    const existingEquipment = equipments.findIndex(
      (e) => e.id === equipment.id
    );

    if (existingEquipment !== -1) {
      const updatedEquipment = [...equipments];
      updatedEquipment[existingEquipment] = equipment;
      setEquipments(updatedEquipment);
    } else {
      setEquipments([...equipments, equipment]);
    }
  };

  const deleteEquipment = (id) => {
    setEquipments(equipments.filter((e) => e.id !== id));
  };

  const setEquipment = (id) => {
    return equipments.filter((e) => e.id === id);
  };

  const contextValues = {
    equipments,
    customers,
    addEquipment,
    deleteEquipment,
    setEquipment,
    addCustomer,
    deleteCustomer,
    setCustomer,
  };

  return <Context.Provider value={contextValues}>{children}</Context.Provider>;
};
