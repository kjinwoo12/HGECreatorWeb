'use client';

import { useState } from 'react';
import { creatorCategories } from '@/data/creators';

export default function CreatorFilter({ onFilterChange, totalCount, filteredCount }) {
    const [filter, setFilter] = useState({});
    const [searchTerm, setSearchTerm] = useState('');

    const handleCategoryChange = (category) => {
        const newFilter = { ...filter, category };
        setFilter(newFilter);
        onFilterChange(newFilter);
    };

    const handleAvailabilityChange = (isAvailable) => {
        const newFilter = { ...filter, isAvailable };
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
                        크리에이터 검색
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
                            placeholder="크리에이터 이름이나 전문 분야로 검색..."
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                </div>

                {/* 필터 옵션들 */}
                <div className="flex flex-wrap gap-4">
                    {/* 카테고리 필터 */}
                    <div>
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                            카테고리
                        </label>
                        <select
                            id="category"
                            value={filter.category || ''}
                            onChange={(e) => handleCategoryChange(e.target.value || undefined)}
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        >
                            <option value="">전체</option>
                            {creatorCategories.map((category) => (
                                <option key={category.value} value={category.value}>
                                    {category.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* 가용성 필터 */}
                    <div>
                        <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-1">
                            협업 가능성
                        </label>
                        <select
                            id="availability"
                            value={filter.isAvailable === undefined ? '' : filter.isAvailable.toString()}
                            onChange={(e) => {
                                const value = e.target.value;
                                handleAvailabilityChange(value === '' ? undefined : value === 'true');
                            }}
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        >
                            <option value="">전체</option>
                            <option value="true">협업 가능</option>
                            <option value="false">협업 불가</option>
                        </select>
                    </div>

                    {/* 필터 초기화 */}
                    <div className="flex items-end">
                        <button
                            onClick={clearFilters}
                            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            초기화
                        </button>
                    </div>
                </div>
            </div>

            {/* 결과 카운트 */}
            <div className="mt-4 text-sm text-gray-600">
                총 {totalCount}명 중 {filteredCount}명의 크리에이터가 검색되었습니다.
            </div>
        </div>
    );
}
