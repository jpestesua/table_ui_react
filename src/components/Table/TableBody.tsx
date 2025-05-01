import TableRow from "./TableRow";
import { Person } from "@/models/personModel";

interface TableBodyProps {
  data: Person[];
}

/**
 * Table body component rendering each row
 */
const TableBody = ({ data }: TableBodyProps) => {
  return (
    <tbody className="bg-white divide-y divide-gray-200">
      {data.map((person) => (
        <TableRow key={person._id || person.email} person={person} />
      ))}
    </tbody>
  );
};

export default TableBody;
