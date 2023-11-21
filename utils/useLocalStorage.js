import { useEffect, useState } from "react";

const useLocalStorage = (key) => {
  const localStorageValue = localStorage.getItem(key);

  const [getLocalStorage, setLocalStorageValue] = useState(() => {
    return localStorageValue ? JSON.parse(localStorageValue) : null;
  });

  useEffect(() => {
    if (localStorageValue) {
      setLocalStorageValue(JSON.parse(localStorageValue));
    } else {
      setLocalStorageValue(null);
    }
  }, [localStorageValue]);

  const setLocalStorage = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
    setLocalStorageValue(value);
  };

  const clearLocalStorage = () => {
    localStorage.clear();
    setLocalStorageValue(null);
  };

  return [getLocalStorage, setLocalStorage, clearLocalStorage];
};

export default useLocalStorage;
