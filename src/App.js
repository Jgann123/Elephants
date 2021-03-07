import { useState, useEffect } from "react";
import "./App.css";
import db from "./firebase";
//import reactDom from "react-dom";
//import styled from 'styled-components';
import ElephantsGal from "./components/ElephantsGal";

function App() {
  const [Elephants, setElephants] = useState([]);

  const getElephants = () => {
    db.collection("Elephants").onSnapshot((snapshot) => {
      setElephants(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            image1: doc.data().image1,
            image22: doc.data().image22,
          };
        })
      );
    });
  };

  useEffect(() => {
    getElephants();
  }, []);

  console.log(Elephants);

  return (
    <div className="App">
      <ElephantsGal Elephants={Elephants} />
    </div>
  );
}

export default App;
