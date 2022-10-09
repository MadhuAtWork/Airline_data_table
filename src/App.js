import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import Airline from "./components/Airline";

function App() {
  const [data, setdata] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [airline, setairline] = useState(true);

  const onChangeevent = () => {
    setairline(!airline)
  }

  const URL = 'https://jsonplaceholder.typicode.com/posts';

  useEffect(() => {
    axios.get(URL).then((response) => {
      setdata(response.data);
    });
  }, []);

  if (!data) return null;

  const usersPerPage = 20;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = data
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user) => {
      return (

        <table>
          <tbody>

            <tr>
              <td>{user.title}</td>
              <td>{user.body}</td>
              <td>
                <button onClick={onChangeevent}>click here</button>
              </td>
            </tr>
          </tbody>
        </table>

      );
    });

  const pageCount = Math.ceil(data.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="App">
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />

      <div>
        {airline ? "" : <Airline></Airline>}
      </div >
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>
              Total trips
            </th>
            <th>
              Airline
            </th>
          </tr>
        </tbody>
      </table>
      <div>
        {displayUsers}
      </div>

    </div>
  );
}

export default App;
