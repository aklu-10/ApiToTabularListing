import { useState, useEffect } from "react";
import { DEFAULT_URL, DEFAULT_ENDPOINT } from "./constants";
import { getResource } from "./api";
import TabularListing from "./Components/TabularListing/TabularListing"
import Input from "./Components/Input/Input"
import Button from "./Components/Button/Button"

import './App.css';

const App = () => {

  const [list, setList] = useState([]); // state for api data
  const [inputApi, setInputApi] = useState('');

  useEffect(()=>
  {
    getResource(DEFAULT_URL, DEFAULT_ENDPOINT)
    .then(res=>Array.isArray(res) ? setList(res) : setList(res[Object.keys(res)[0]]))
  },[])

  return (
    
    <div className="wrapper">

      <div className="featuresContainer">
        <Input type={"text"} placeHolder={"Enter api here ..."} setList={setList} setInputApi={setInputApi} inputApi={inputApi}/> {/* Taking Api as input (default api is also provided) */}
        
        {
          list.length!=0 &&
        <Button formData={list[0]}/> // Post Request
        }

      </div>

      <TabularListing tableData={list}/> {/*Api data binding */}

    </div>
  )

}

export default App