// import { useState } from 'react'
import { useEffect, useState } from 'react';
import '../../App.css'

function ConfirmPage() {
    const [tableEntries, setTableEntries] = useState<any[]>([]);

    const getTableData = async () => {
        const response = await fetch("/api/forms")

        if (response.ok) {
            const data = await response.json();
            setTableEntries(data);

        }

    }

    useEffect(() => {
        getTableData();
    }, [])

    return (
  <main className="w-screen h-screen flex justify-center items-center">
    <div className="bg-amber-50 rounded-2xl w-1/2 h-[55vh] shadow-2xl flex flex-col">
      <div className="flex justify-center bg-red-600 text-white text-2xl rounded-t-2xl py-2 flex-none">
        Ohio LIS Form Registrations
      </div>

      <div className="flex-1 min-h-0">
        <div className="overflow-x-auto overflow-y-auto h-full rounded-b-xl">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-700 sticky top-0">
              <tr>
                <th className="text-left font-medium px-4 py-2">Name</th>
                <th className="text-left font-medium px-4 py-2">Age</th>
                <th className="text-left font-medium px-4 py-2">Title</th>
                <th className="text-left font-medium px-4 py-2">Hometown</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {tableEntries.map((r, i) => (
                <tr key={`${r.name}-${i}`} className="odd:bg-white even:bg-gray-50">
                  <td className="px-4 py-2">{r.name}</td>
                  <td className="px-4 py-2">{r.age ?? ''}</td>
                  <td className="px-4 py-2">{r.title}</td>
                  <td className="px-4 py-2">{r.hometown ?? ''}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </main>
    )
}

export default ConfirmPage;
