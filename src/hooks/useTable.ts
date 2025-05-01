import { useState, useEffect } from "react";
import { Person } from "@/models/personModel";
import { getPeople } from "@/services/peopleService";

/**
 * Hook to manage people table state
 */
export const useTable = () => {
  const [data, setData] = useState<Person[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [keyword, setKeyword] = useState<string>("");
  const [sortField, setSortField] = useState<keyof Person | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    fetchData();
  }, [keyword, sortField, sortDirection]);

  const fetchData = async () => {
    setLoading(true);
    const result = await getPeople({
      keyword,
      sortBy: sortField ?? undefined,
      sortDirection
    });
    setData(result);
    setLoading(false);
  };

  const handleSort = (field: keyof Person) => {
    if (sortField === field) {
      setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  return {
    data,
    loading,
    keyword,
    setKeyword,
    sortField,
    sortDirection,
    handleSort
  };
};
