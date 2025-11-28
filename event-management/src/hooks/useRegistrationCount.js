import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export const useRegistrationCount = () => {
  const [count, setCount] = useState(0);

  const fetchCount = async () => {
    const querySnapshot = await getDocs(collection(db, "eventRegistrations"));
    setCount(querySnapshot.size);   // ✅ total documents
  };

  useEffect(() => {
    fetchCount();
  }, []);

  return count;
};
