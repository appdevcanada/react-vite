//custom hook for localStorage
import { useState, useEffect } from "react";

function getStorageValue(key, defaultValue) {
  // getting stored value if exists and client side
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem(key);
    const initial = JSON.parse(saved);
    return initial || defaultValue;
  }
}

export default function useLocalStorage(key, initial) {
  const [val, setVal] = useState(() => {
    return getStorageValue(key, initial);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(val));
  }, [val, key]);

  return [val, setVal];
}
