import { createContext, useState } from "react";
export const AppContext = createContext(null);

export default function ContextProvider(props) {
  const [input, setInput] = useState();
  const [worker_ar, setWorker_ar] = useState([]);
  const [worker_en, setWorker_en] = useState([]);
  const globalValue = {
    worker_ar,
    setWorker_ar,
    input,
    setInput,
    setWorker_en,
    worker_en,
  };
  return (
    <AppContext.Provider value={globalValue}>
      {props.children}
    </AppContext.Provider>
  );
}
