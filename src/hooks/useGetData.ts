import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";

const useGetData = <T>(collectionName: string) => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const collectionRef = collection(db, collectionName);

  useEffect(() => {
    const getData = async () => {
      onSnapshot(collectionRef, (snapshot) => {
        setData(
          snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          })) as T[]
        );
        setLoading(false);
      });
    };
    getData();
  }, []);

  return { data, loading };
};

export default useGetData;
