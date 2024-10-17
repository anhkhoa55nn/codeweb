import React from 'react';
import { logo } from '../assets';
import Presale from './presale';

const MainContent = () => {

    const tokenomicsData = [
        { category: 'Seed', tokens: '2,000,000', percentage: '1.00%' },
        { category: 'Private', tokens: '7,260,000', percentage: '3.63%' },
        { category: 'Presale', tokens: '14,000,000', percentage: '7.00%' },
        { category: 'Public', tokens: '6,000,000', percentage: '3.00%' },
        { category: 'KOLs', tokens: '4,000,000', percentage: '2.00%' },
        { category: 'Team', tokens: '4,000,000', percentage: '2.00%' },
        { category: 'Advisor', tokens: '6,000,000', percentage: '3.00%' },
        { category: 'Liquidity/MM', tokens: '18,000,000', percentage: '9.00%' },
        { category: 'Ecosystem', tokens: '16,000,000', percentage: '8.00%' },
        { category: 'Marketing', tokens: '54,740,000', percentage: '27.37%' },
        { category: 'Airdrop', tokens: '58,000,000', percentage: '29.00%' },
        { category: 'Stake', tokens: '10,000,000', percentage: '5.00%' },
    ];

    return (

        <div>
            <Presale />
            <div  id='tokenomics' className="flex flex-col items-center justify-center min-h-screen py-10">
                {/* Header */}
                <h2 className="text-4xl font-bold mb-8 text-center">TOKENOMICS</h2>

                {/* Tokenomics Info */}
                <div className="w-full md:w-3/4 bg-[#F7EEDD] border-2 border-black rounded-xl p-6">
                    <table className="min-w-full text-center border-collapse">
                        <thead>
                            <tr className="bg-blue-300">
                                <th className="py-2 px-4 border border-black">Category</th>
                                <th className="py-2 px-4 border border-black">Total Tokens</th>
                                <th className="py-2 px-4 border border-black">% of Total Supply</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tokenomicsData.map((item, index) => (
                                <tr key={index} className="bg-white even:bg-blue-50">
                                    <td className="py-2 px-4 border border-black">{item.category}</td>
                                    <td className="py-2 px-4 border border-black">{item.tokens}</td>
                                    <td className="py-2 px-4 border border-black">{item.percentage}</td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr className="bg-blue-300 font-bold">
                                <td className="py-2 px-4 border border-black">Overall</td>
                                <td className="py-2 px-4 border border-black">200,000,000</td>
                                <td className="py-2 px-4 border border-black">100.00%</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>

    );
}

export default MainContent;
