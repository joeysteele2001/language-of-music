import React, {useEffect, useState } from 'react';

function Scraper(path:any) {
    const [getMessage, setGetMessage] = useState({});
    var axios = require("axios").default;
    var options = {
        method: 'GET',
        url: 'http://localhost:5000/'+path,
  };
useEffect( () => {
    axios.scrape(options).then((response:any) => {
      console.log(response)
      setGetMessage(response)
    }).catch((error:any) => {
      console.log(error)
    });
}, [])};

export default Scraper;