import Table from "../components/Table";
import { useContext, useState } from "react";
import { Context } from "../context/Context";

const Customers = ({ equipments, customers }) => {
  const { addCustomer, deleteCustomer } = useContext(Context);

  const [data, setData] = useState({
    id: "",
    name: "",
    phone: "",
    equipments: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.id && data.name && data.phone) {
      addCustomer({
        id: data.id,
        name: data.name,
        phone: data.phone,
        equipments: data.equipments,
      });

      setData({
        id: "",
        name: "",
        phone: "",
        equipments: [],
      });
    }
  };

  const handleDelete = (id) => {
    deleteCustomer(id);
  };

  const handleUpdate = (data) => {
    setData(data);
  };

  const handleCheckboxChange = (cusName, isChecked) => {
    if (isChecked) {
      setData((prevData) => ({
        ...prevData,
        equipments: [...prevData.equipments, cusName],
      }));
    } else {
      setData((prevData) => ({
        ...prevData,
        equipments: prevData.equipments.filter((name) => name !== cusName),
      }));
    }
  };
  return (
    <div>
      <h1>Customers</h1>
      <div>
        {customers.length > 0 && (
          <Table
            data={customers}
            path={"customerDetails"}
            enable
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
        )}
        <div>
          <div style={{ marginTop: "30px" }}>
            <h2>ADD Customer</h2>
            <div>
              <form onSubmit={handleSubmit}>
                <label>ID : </label>
                <input
                  value={data.id}
                  disabled={data.id ? true : false}
                  onChange={(e) => {
                    setData({ ...data, id: e.target.value });
                  }}
                  type="number"
                ></input>

                <label>Name : </label>
                <input
                  value={data.name}
                  onChange={(e) => {
                    setData({ ...data, name: e.target.value });
                  }}
                  type="text"
                ></input>

                <label>phone number : </label>
                <input
                  value={data.phone}
                  onChange={(e) => {
                    setData({ ...data, phone: e.target.value });
                  }}
                  type="text"
                ></input>
                {equipments.length > 0 && (
                  <div style={{ display: "flex", marginTop: "10px" }}>
                    <label>Select Equipments : </label>
                    {equipments.map((eq) => (
                      <div style={{ marginRight: "20px" }}>
                        <input
                          value={eq.name}
                          type="checkbox"
                          checked={data.equipments.includes(eq.name)}
                          onChange={(e) =>
                            handleCheckboxChange(eq.name, e.target.checked)
                          }
                        />
                        <label>{eq.name}</label>
                      </div>
                    ))}
                  </div>
                )}
                <button>SUBMIT</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
