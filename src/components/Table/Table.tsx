import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import { Person } from "@/models/personModel";

interface TableProps {
  data: Person[];
  onSort: (field: keyof Person) => void;
  sortField: keyof Person | null;
  sortDirection: "asc" | "desc";
}

/**
 * Main Table component that renders header and body
 */
const Table = ({ data, onSort, sortField, sortDirection }: TableProps) => {
  return (
    <div className="overflow-x-auto rounded-lg shadow">
      <table className="min-w-full divide-y divide-gray-200">
        <TableHeader onSort={onSort} sortField={sortField} sortDirection={sortDirection} />
        <TableBody data={data} />
      </table>
    </div>
  );
};

export default Table;

