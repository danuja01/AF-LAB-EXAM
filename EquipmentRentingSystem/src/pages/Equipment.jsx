import { useState } from "react";
import Table from "../components/Table";
import { useContext } from "react";
import { Context } from "../context/Context";

const Equipments = ({ equipments }) => {
  const { addEquipment, deleteEquipment } = useContext(Context);

  const [data, setData] = useState({
    id: "",
    name: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.id && data.name) {
      addEquipment({
        id: data.id,
        name: data.name,
      });

      setData({
        id: "",
        name: "",
      });
    }
  };

  const handleDelete = (id) => {
    deleteEquipment(id);
  };

  const handleUpdate = (data) => {
    setData({
      id: data.id,
      name: data.name,
    });
  };

  return (
    <>
      <h1>Equipments</h1>

      <div style={{ display: "flex", gap: "5rem" }}>
        {equipments && (
          <Table
            data={equipments}
            path={"equipmentDetails"}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
            enable
          />
        )}
        <div>
          <h2>Add Equipment</h2>
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

            <label>Equipment Name : </label>
            <input
              value={data.name}
              onChange={(e) => {
                setData({ ...data, name: e.target.value });
              }}
              type="text"
            ></input>

            <button>SUBMIT</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Equipments;
