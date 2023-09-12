"use client";
import React, { useEffect } from "react";
import useSWR from "swr";

async function fetcher(args: string) {
  const res = await fetch(args);

  return res.json();
}
const ViewCounter = ({ slug }: { slug: string }) => {
  const { data: views, isLoading } = useSWR(`/api/${slug}/view`, fetcher);
  const viewcount = views?.data?.count;
  useEffect(() => {
    const resgiterViewCount = async (slug: string, count: number) => {
      fetch(`/api/${slug}/view`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          count: count,
        }),
      });
    };
    resgiterViewCount(slug, viewcount);
  }, [slug, viewcount]);
  return <div>ViewCounter:{isLoading ? "loading..." : viewcount} </div>;
};

export default ViewCounter;
