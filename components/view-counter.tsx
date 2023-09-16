"use client";
import { Eye, EyeIcon } from "lucide-react";
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
      await fetch(`/api/${slug}/view`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          views: viewcount,
        },
      });
    };
    resgiterViewCount(slug, viewcount);
  }, [slug]);

  return (
    <div className="flex space-x-2 gap-x-2">
      {isLoading ? "-----" : `${viewcount} views`}{" "}
    </div>
  );
};

export default ViewCounter;
