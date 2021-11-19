import React, {useEffect, useState } from 'react';

function Scraper(path:any) {
  const [getMessage, setGetMessage] = useState({});
    var axios = require("axios");

  useEffect( () => {
      axios.get('Zaz-on-ira-lyrics').then((response:any) => {
        console.log(response)
        setGetMessage(response)
      }).catch((error:any) => {
        console.log(error)
      });
  }, [axios])
  return (
    <div>
          <h3>{getMessage}</h3>
    </div>
  );
};
export default Scraper;