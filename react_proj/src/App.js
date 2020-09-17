import React from 'react';
import useAxios from "axios-hooks";
import { Alert } from "@material-ui/lab";

import "./App.css";

const API_HOST = process.env.REACT_APP_API_HOST;

function App() {
  const [{ data: postList, loading, error }, refetch] = useAxios(`${API_HOST}/posts/`);

  return (
    <div className="App">
      <h1>Gallery with Azure Functions</h1>
      <p>API_HOST: {API_HOST}</p>

      {loading && (
        <Alert variant="filled" severity="info">
          Now Loading ...
        </Alert>
      )}
      {error && (
        <Alert variant="filled" severity="error">
          {JSON.stringify(error)}
        </Alert>
      )}

      {postList && (
        <div className="post-list">
          {postList.map(({ id, photo, message, created_at }) => (
            <div key={id} className="post">
              <img src={photo} alt={`post#${id}`} className="photo" />
              <div className="message">{message} <small>{created_at}</small></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
