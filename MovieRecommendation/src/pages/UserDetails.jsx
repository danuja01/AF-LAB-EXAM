import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../context/Context";

const UserDetails = ({ movies }) => {
  const { setUser } = useContext(Context);
  const { id } = useParams();
  const [data, setData] = useState(null);

  const [recommends, setRecommends] = useState([]);

  const generateRandomNumbers = () => {
    const randomNums = [];
    while (randomNums.length < 3) {
      const randomNumber = Math.floor(Math.random() * movies.length);
      if (!randomNums.includes(randomNumber)) {
        randomNums.push(randomNumber);
      }
    }
    setRecommends(randomNums);
  };

  useEffect(() => {
    const fetchData = async () => {
      console.log("id", id);
      const data = await setUser(parseInt(id));
      setData(data);
    };

    fetchData();
    generateRandomNumbers();
  }, [id, setUser]);

  return (
    <>
      <h1>Movie Details</h1>

      {data && (
        <div>
          <h2>Book Id: {data[0].id}</h2>
          <h2>Book Name: {data[0].name}</h2>
          <h2>Author: {data[0].email}</h2>
          <h2>Favourite Movies : {data[0].favouriteMovies.join(", ")}</h2>
        </div>
      )}

      <div style={{ marginTop: "2rem" }}>
        <h3>Recommended Movies</h3>
        {
          <ol>
            {recommends.map((r) => (
              <li key={r}>{movies[r].name}</li>
            ))}
          </ol>
        }
      </div>
    </>
  );
};

export default UserDetails;
