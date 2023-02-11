import styles from './searchBar.module.scss';
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/Ai';

const Search = ({ handleChangeName }) => {
  const [input, setInput] = useState('');
  const [focus, setFocusValue] = useState(false);

  const submitHandler = (value: string) => {
    value ? setFocusValue(true) : setFocusValue(false);
    setInput(value);
    setTimeout(() => {
      handleChangeName(value);
    }, 1000);
  };

  const handleBlur = (event) => {
    event.preventDefault();
    setFocusValue(false);
  };

  return (
    <>
      <section>
        <form className={styles.container}>
          {focus ? (
            <AiOutlineSearch className={styles.animateIcon} />
          ) : (
            <AiOutlineSearch className={styles.icon} />
          )}

          <input
            type='text'
            value={input}
            onChange={(e) => submitHandler(e.target.value)}
            onBlur={handleBlur}
            placeholder=' Search for a country...'
          />
        </form>
      </section>
    </>
  );
};

export default Search;
