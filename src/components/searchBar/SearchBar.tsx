import styles from "./searchBar.module.scss";
import { useState } from "react";

import {AiOutlineSearch} from 'react-icons/Ai';
const Search = ({ handleChangeName }) => {
  const [input, setInput] = useState("");
  const [focus, setFocusValue]= useState(true);

  const submitHandler = (value:string) => {
    setInput(value)
    setTimeout(() => {
      handleChangeName(value);
    }, 1000);
  };

  const handleFocus = (event) => {
    event.preventDefault();
    const focusValue = event.target.value;
    console.log("Should be focus value", focusValue);
    setFocusValue(focusValue);
  };

  return (
    <>
      <section>

        <form  className={styles.container}>
          <span className={styles.icon}>
          
          </span>
          <input
            type="text"
            value={input}
            onChange={(e) => submitHandler(e.target.value)}
            onFocus={handleFocus}
            placeholder= "Search for a country..."
            
          />
          
         
        
        </form>
      </section>
    </>
  );
};


export default Search;
