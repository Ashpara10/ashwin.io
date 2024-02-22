import React, { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Eye } from "lucide-react";

const Views = ({ slug }: { slug: string }) => {
  const [views, setViews] = useState<number | null>();
  useEffect(() => {
    const unsub = onSnapshot(doc(db, "posts", slug), (doc) => {
      setViews(doc.data()?.views as number);
    });
    return () => unsub();
  }, []);
  return (
    <span className="flex items-center justify-center gap-x-1">
      <Eye /> {views}
    </span>
  );
};

export default Views;
