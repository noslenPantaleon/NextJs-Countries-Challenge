import styles from './navbar.module.scss';
import { CiDark } from 'react-icons/ci';
import { BsSun } from 'react-icons/bs';
import React from 'react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const { resolvedTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTheme('light');
  }, [setTheme]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header>
      <nav className={styles.container}>
        <div className={styles.layout}>
          <h2>Where in the world?</h2>

          <button
            className={styles.darkModeButton}
            onClick={() =>
              setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
            }
          >
            {theme === 'dark' ? (
              <>
                <CiDark size={30} />
                <h4>Dark Mode</h4>
              </>
            ) : (
              <>
                <BsSun size={30} />
                <h4>Light Mode</h4>
              </>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
