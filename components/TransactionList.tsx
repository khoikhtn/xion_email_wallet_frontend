'use client';

import React, { useEffect, useState } from 'react';
import { getTransactions } from '../lib/api';

interface Transaction {
  number: number;
  transaction: string;
}

export default function TransactionList() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [,setLoading] = useState(true);
  const [,setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const data = await getTransactions();
        const formattedData = data.transactions.map((transaction: string, index: number) => ({
          number: index + 1,
          transaction,
        }));
        setTransactions(formattedData);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);
  
  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Transaction History</h2>
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-200 text-gray-800">
            <th className="border border-gray-300 px-4 py-2">Number</th>
            <th className="border border-gray-300 px-4 py-2">Transaction Hash</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((item) => (
            <tr key={item.number} className="text-gray-700">
              <td className="border border-gray-300 px-4 py-2 text-center">{item.number}</td>
              <td className="border border-gray-300 px-4 py-2">{item.transaction}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
