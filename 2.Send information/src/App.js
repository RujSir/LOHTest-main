import "./App.css";
import ComponentLv1 from "./component/ComponentLV1";
import React, { useEffect, useState } from "react";

function App() {
  const [dataList_nav, setDataList_nav] = useState([]);
  const [dataList_web, setDataList_web] = useState([]);

  const [page, setPage] = useState({action:"home"})

  useEffect(() => {
    navigations();
    web_categories();
  }, []);
  const navigations = async () => {
    fetch("http://localhost:5000/navigations")
      .then((response) => response.json())
      .then((data) => {
        return setDataList_nav(data);
      })
      .catch((error) => console.error("Error:", error));
  };
  const web_categories = async () => {
    fetch("http://localhost:5000/web_categories")
      .then((response) => response.json())
      .then((data) => {
        return setDataList_web(data);
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="App">
      <div className="topnav">
        <a className="ComponentLv1" onClick={()=>setPage({action:"ComponentLv1"})}>
          ComponentLv1
        </a>
        <a href="#ComponentLv2"  onClick={()=>setPage({action:"ComponentLv2"})}>ComponentLv2</a>
        <a href="#ComponentLv3"  onClick={()=>setPage({action:"ComponentLv3"})}>ComponentLv3</a>
      </div>
      
      <ComponentLv1 dataList_nav={dataList_nav} dataList_web={dataList_web} page={page} setPage={setPage} />
    </div>
  );
}

export default App;
