import { useState, useEffect } from "react";

export default function useLocaleStorage(initialValue: any, key: string) {
  const getValue = () => {
    const value = localStorage.getItem(key);

    if (value) {
      return JSON.parse(value);
    }

    return initialValue;
  };

  const [value, setValue]: any = useState(getValue);

  useEffect(() => {
    const stringValue = JSON.stringify(value);

    localStorage.setItem(key, stringValue);
  }, [value]);

  return { value, setValue };
}
