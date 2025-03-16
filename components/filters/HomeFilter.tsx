"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { formUrlQuery, removeKeysUrlQuery } from "@/lib/urls";

const homeFilters = [
  { name: "React", value: "react" },
  { name: "Node.js", value: "node.js" },
  { name: "Python", value: "python" },
  { name: "JavaScript", value: "javascript" },
  { name: "Next.js", value: "next.js" },
  // { name: "Newest", value: "newest" },
  // { name: "Popular", value: "popular" },
  // { name: "Unanwered", value: "unanwered" },
  // { name: "Recommended", value: "recommended" },
];

const HomeFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const filterParams = searchParams.get("filter");
  const [activeFilter, setActiveFilter] = useState(filterParams || "");

  const handleFilterClick = (filter: string) => {
    let newUrl = "";
    if (filter === activeFilter) {
      setActiveFilter("");
      newUrl = removeKeysUrlQuery({
        params: searchParams.toString(),
        keysToRemove: ["filter"],
      });
    } else {
      setActiveFilter(filter);
      newUrl = formUrlQuery({ params: searchParams.toString(), key: "filter", value: filter.toLowerCase() });
    }
    router.push(newUrl, { scroll: false });
  };

  return (
    <div className="mt-10 hidden flex-wrap gap-2 sm:flex">
      {homeFilters?.map((filter) => (
        <Button
          onClick={() => handleFilterClick(filter.value)}
          className={cn(
            `body-medium rounded-lg px-6 py-3 capitalize shadow-none transition-all`,
            activeFilter === filter.value
              ? "bg-primary-100 text-primary-500 dark:!bg-dark-400 dark:!text-primary-500 hover:!bg-primary-100 dark:hover:!bg-dark-400"
              : "background-light800_dark300 text-light-500 hover:!bg-light-700 dark:hover:!bg-dark-200"
          )}
          key={filter.name}
        >
          {filter.name}
        </Button>
      ))}
    </div>
  );
};

export default HomeFilter;
