import { getResource } from '../../api';
import { DEFAULT_URL, DEFAULT_ENDPOINT } from '../../constants';
import './Input.css';

const Input = ({type, placeHolder, setList}) => {

  let inputApi = '';

  function getData()
  {
    let baseURL = inputApi ? inputApi : DEFAULT_URL;
    let endpoint = inputApi ? '' : DEFAULT_ENDPOINT; 

    getResource(baseURL, endpoint)
    .then(res=>setList( Array.isArray(res) ? res : res[Object.keys(res)[0]]))
    .catch(console.log)
  } 

  function debounce(func, delay)
  {
    let timer;
    return function()
    {
      clearTimeout(timer);
      timer = setTimeout(()=>
      {
        func();
      },delay)
    }
  } 

  let betterGetData = debounce(getData, 1500)
  
  function handleChange(e)
  {
    inputApi= e.target.value;
    betterGetData();
  }

  return (
    
    <input type={type} placeholder={placeHolder} onChange={handleChange}/>

  )
}

export default Input