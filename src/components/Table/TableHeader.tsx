import { Person } from "@/models/personModel";

interface TableHeaderProps {
  onSort: (field: keyof Person) => void;
  sortField: keyof Person | null;
  sortDirection: "asc" | "desc";
}

/**
 * Table header component with sortable columns
 */
const TableHeader = ({ onSort, sortField, sortDirection }: TableHeaderProps) => {
  const columns: { key: keyof Person; label: string }[] = [
    { key: "firstName", label: "Name" },
    { key: "lastName", label: "Last Name" },
    { key: "professionalTitle", label: "Title" },
    { key: "birthDate", label: "Birth Date" },
    { key: "company", label: "Company" },
    { key: "email", label: "Email" },
    { key: "phone", label: "Phone" },
  ];

  const renderSortIcon = (field: keyof Person) => {
    if (sortField !== field) return <span className="opacity-30 ml-1">◇</span>;
    return (
      <span className="ml-1">
        {sortDirection === "asc" ? "▲" : "▼"}
      </span>
    );
  };

  return (
    <thead className="bg-gray-50">
      <tr>
        {columns.map((col) => (
          <th
            key={col.key}
            onClick={() => onSort(col.key)}
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer select-none"
          >
            {col.label}
            {renderSortIcon(col.key)}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
