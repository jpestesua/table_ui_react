import { Person } from "@/models/personModel";

interface TableRowProps {
  person: Person;
}

/**
 * Single row in the table
 */
const TableRow = ({ person }: TableRowProps) => {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{person.firstName}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{person.lastName}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{person.professionalTitle}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{person.birthDate}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{person.company}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{person.email}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{person.phone}</td>
    </tr>
  );
};

export default TableRow;
