import { Person } from "@/models/personModel";
import peopleDataJson from "@/assets/mocks/peopleData.json";

const peopleData = peopleDataJson as Person[];

/**
 * Fetches people data with optional filtering and sorting, simulating an API delay.
 * 
 * @param params Optional parameters for keyword filtering and sorting
 * @param params.keyword Text to filter people by any field (case insensitive)
 * @param params.sortBy Field of the Person to sort the results by
 * @param params.sortDirection Direction of sorting: 'asc' or 'desc'
 * @returns A Promise resolving to a list of people matching the filter and sort criteria
 */
export const getPeople = async (params?: {
  keyword?: string;
  sortBy?: keyof Person;
  sortDirection?: "asc" | "desc";
}): Promise<Person[]> => {
  const { keyword = "", sortBy, sortDirection = "asc" } = params || {};

  return new Promise((resolve) => {
    setTimeout(() => {
      let result = [...peopleData];

      // Filter by keyword if provided
      if (keyword.trim()) {
        result = result.filter((person) =>
          Object.values(person).some((value) =>
            String(value).toLowerCase().includes(keyword.toLowerCase())
          )
        );
      }

      // Sort by specified field if provided
      if (sortBy) {
        result.sort((a, b) => {
          const aValue = String(a[sortBy] ?? "").toLowerCase();
          const bValue = String(b[sortBy] ?? "").toLowerCase();

          if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
          if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
          return 0;
        });
      }

      resolve(result);
    }, 500); // Simulate 500ms API delay
  });
};
