import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';

const DarkModeContext = createContext<boolean | null>(null);
const ToggleDarkModeContext = createContext<(() => void) | null>(null);

export function DarkModeProvider({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    updateDarkMode(!darkMode);
  };

  useEffect(() => {
    const isDark =
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(isDark);
    updateDarkMode(isDark);
  }, []);

  return (
    <ToggleDarkModeContext.Provider value={toggleDarkMode}>
      <DarkModeContext.Provider value={darkMode}>
        {children}
      </DarkModeContext.Provider>
    </ToggleDarkModeContext.Provider>
  );
}

function updateDarkMode(darkMode: boolean) {
  if (darkMode) {
    document.documentElement.classList.add('dark');
    document.documentElement.dataset.theme = 'dark';
    localStorage.theme = 'dark';
  } else {
    document.documentElement.classList.remove('dark');
    document.documentElement.dataset.theme = 'light';
    localStorage.theme = 'light';
  }
}

export const useToggleDarkMode = () => {
  const value = useContext(ToggleDarkModeContext);
  if (!value) {
    throw new Error('cannot find setDarkMode');
  }
  return value;
};

export const useDarkMode = () => useContext(DarkModeContext);
