import StatusChip from "./StatusChip";

const ItemTable = ({ items }) => {
  return (
    <div className="overflow-x-auto rounded-lg">
      <table className="w-full">
        <thead className="bg-gray-50 border-b-2 border-gray-200">
          <tr>
            <th className="px-6 py-3 text-sm font-bold text-gray-500 text-left uppercase tracking-wider">Sl</th>
            <th className="px-6 py-3 text-sm font-bold text-gray-500 text-left uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-sm font-bold text-gray-500 text-left uppercase tracking-wider">Qty</th>
            <th className="px-6 py-3 text-sm font-bold text-gray-500 text-left uppercase tracking-wider">Status</th>
          </tr>
        </thead>

        <tbody className="bg-white divide-y divide-gray-200">
          {items.map((item) => (
            <tr>
              <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">{item.id + 1}</td>
              <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap text-left">{item.name}</td>
              <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap text-left">{item.quantity}</td>
              <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap"><StatusChip status={item.status}/></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemTable;
