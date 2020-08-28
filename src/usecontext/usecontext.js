import React, { createContext, useState, useEffect } from "react";
export const UserContext = createContext();
// This context provider is passed to any component requiring the context
export const UserProvider = ({ children }) => {
  const [gojek, setGojek] = useState({
    message: "",
    jasa: "",
    rp: 0,
  });
  const [payment, setPayment] = useState("");
  const [pilihan, setPilihan] = useState({ kelabu: true, fee: 0 });
  return (
    <UserContext.Provider
      value={{
        gojek,
        payment,
        pilihan,
        setGojek,
        setPayment,
        setPilihan,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
