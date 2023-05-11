const Table = ({ data, path, handleDelete, handleUpdate, enable = false }) => {
  const columns = Object.keys(data[0]);

  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column}>{column}</th>
          ))}
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {columns.map((column) => (
              <td key={column}>
                {Array.isArray(row[column])
                  ? row[column].join(", ")
                  : row[column]}
              </td>
            ))}
            <td>
              <a href={`/${path}/${row.id}`}>Details</a>

              {enable && (
                <div style={{ display: "inline" }}>
                  <button
                    onClick={() => {
                      handleUpdate(row);
                    }}
                  >
                    Update
                  </button>
                  <button
                    onClick={() => {
                      handleDelete(row.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
