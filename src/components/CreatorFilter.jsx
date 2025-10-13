'use client';

import { useState } from 'react';
import { useDataStore } from '@/lib/dataStore';

export default function CreatorFilter({ onFilterChange, totalCount, filteredCount, allActivities = [] }) {
    const { siteContent } = useDataStore();
    const creatorsContent = siteContent?.creators || {};
    
    const [filter, setFilter] = useState({});
    const [searchTerm, setSearchTerm] = useState('');

    const handleActivityChange = (activity) => {
        const newFilter = { ...filter, activity };
        setFilter(newFilter);
        onFilterChange(newFilter);
    };


    const handleSearchChange = (term) => {
        setSearchTerm(term);
        const newFilter = { ...filter, searchTerm: term };
        setFilter(newFilter);
        onFilterChange(newFilter);
    };

    const clearFilters = () => {
        const newFilter = {};
        setFilter(newFilter);
        setSearchTerm('');
        onFilterChange(newFilter);
    };

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                {/* 검색 */}
                <div className="flex-1 max-w-md">
                    <label htmlFor="search" className="sr-only">
                        {creatorsContent.search_label || '크리에이터 검색'}
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input
                            id="search"
                            type="text"
                            value={searchTerm}
                            onChange={(e) => handleSearchChange(e.target.value)}
                            placeholder={creatorsContent.search_placeholder || "크리에이터 이름이나 전문 분야로 검색..."}
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                </div>

                {/* 필터 옵션들 */}
                <div className="flex flex-wrap gap-4">
                    {/* 활동 분야 필터 */}
                    <div>
                        <label htmlFor="activity" className="block text-sm font-medium text-gray-700 mb-1">
                            {creatorsContent.activity_label || '활동 분야'}
                        </label>
                        <select
                            id="activity"
                            value={filter.activity || ''}
                            onChange={(e) => handleActivityChange(e.target.value || undefined)}
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        >
                            <option value="">{creatorsContent.category_all || '전체'}</option>
                            {allActivities.map((activity) => (
                                <option key={activity} value={activity}>
                                    {activity}
                                </option>
                            ))}
                        </select>
                    </div>


                    {/* 필터 초기화 */}
                    <div className="flex items-end">
                        <button
                            onClick={clearFilters}
                            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            {creatorsContent.reset_button || '초기화'}
                        </button>
                    </div>
                </div>
            </div>

            {/* 결과 카운트 */}
            <div className="mt-4 text-sm text-gray-600">
                {creatorsContent.results_count?.replace('{total}', totalCount).replace('{filtered}', filteredCount) || `총 ${totalCount}명 중 ${filteredCount}명의 크리에이터가 검색되었습니다.`}
            </div>
        </div>
    );
}
