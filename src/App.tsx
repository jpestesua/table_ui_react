import { useTable } from "@/hooks/useTable";
import Table from "@/components/Table/Table";

/**
 * App entry point rendering the table
 */
const App = () => {
  const { data, loading, keyword, setKeyword, sortField, sortDirection, handleSort } = useTable();

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">People Table</h1>

        <input
          type="text"
          placeholder="Search..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="mb-6 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {loading ? (
          <p>Loading...</p>
        ) : (
          <Table
            data={data}
            onSort={handleSort}
            sortField={sortField}
            sortDirection={sortDirection}
          />
        )}
      </div>
    </div>
  );
};

export default App;
