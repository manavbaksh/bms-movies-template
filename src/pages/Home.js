import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Main from "../components/main/Main";

function Home() {
  const [data, setData] = useState([]);
  const [timer, updateTimer] = useState(); //timer to implement debouncing

  // Fetching data from api based on input or language selected
  async function fetchData(inputEvent, language = "") {
    try {
      let inputText = inputEvent?.target.value || "";
      let response = await fetch(
        "https://in.bmscdn.com/m6/static/interview-mock/data.json"
      );
      //check for response else retry
      if (response.ok) {
        let apiData = await response.json();
        let arrayData = Object.entries(apiData.moviesData);
        // filter data based on language
        if (language && language !== "Language") {
          arrayData = arrayData.filter(
            (item) => item[1].EventLanguage == language
          );
        }
        //filter data based on input
        let filteredData = inputText
          ? arrayData.filter((item) =>
              item[1].EventTitle.toLowerCase().includes(inputText.toLowerCase())
            )
          : arrayData;
        setData(filteredData);
      } else {
        throw new Error("Request not completed");
      }
    } catch (err) {
      console.log(err + ":retrying...");
      fetchData(null, null);
    }
  }

  //debouncing the result based on search input
  function getData(e) {
    if (timer) clearTimeout(timer);
    const timeout = setTimeout(() => {
      fetchData(e);
    }, 800);
    updateTimer(timeout);
  }

  //fetch data based on language selected
  function getSelectedLanguage(e) {
    let selectedLanguage = e.target.value;
    fetchData(null, selectedLanguage);
  }

  //fetch data and populate page for first time
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="Home">
      <Header getData={getData} getSelectedLanguage={getSelectedLanguage} />
      <Main data={data} />
    </div>
  );
}

export default Home;
