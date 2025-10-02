'use client';

import { useState, useMemo, useEffect } from 'react';
import CreatorCard from '@/components/CreatorCard';
import CreatorFilter from '@/components/CreatorFilter';
import AdminPanel from '@/components/AdminPanel';
import { sampleCreators } from '@/data/creators';
import { getCreatorsFromSheets, clearCreatorsCache } from '@/lib/googleSheets';

export default function CreatorsPage() {
    const [filter, setFilter] = useState({});
    const [creators, setCreators] = useState(sampleCreators);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // 구글 시트에서 데이터 로드
    useEffect(() => {
        async function loadCreators() {
            try {
                setIsLoading(true);
                setError(null);
                const sheetsCreators = await getCreatorsFromSheets();
                setCreators(sheetsCreators);
            } catch (err) {
                console.error('크리에이터 데이터 로드 실패:', err);
                setError('데이터를 불러오는 중 오류가 발생했습니다.');
                setCreators(sampleCreators); // 백업 데이터 사용
            } finally {
                setIsLoading(false);
            }
        }

        loadCreators();
    }, []);

    // 데이터 새로고침 함수
    const refreshData = async () => {
        clearCreatorsCache();
        setIsLoading(true);
        try {
            const sheetsCreators = await getCreatorsFromSheets();
            setCreators(sheetsCreators);
            setError(null);
        } catch (err) {
            console.error('데이터 새로고침 실패:', err);
            setError('데이터를 새로고침하는 중 오류가 발생했습니다.');
        } finally {
            setIsLoading(false);
        }
    };

    // 필터링된 크리에이터 목록
    const filteredCreators = useMemo(() => {
        return creators.filter((creator) => {
            // 카테고리 필터
            if (filter.category && creator.category !== filter.category) {
                return false;
            }

            // 가용성 필터
            if (filter.isAvailable !== undefined && creator.isAvailable !== filter.isAvailable) {
                return false;
            }

            // 검색어 필터
            if (filter.searchTerm) {
                const searchTerm = filter.searchTerm.toLowerCase();
                const matchesName = creator.name.toLowerCase().includes(searchTerm);
                const matchesDescription = creator.description.toLowerCase().includes(searchTerm);
                const matchesSpecialties = creator.specialties.some(specialty =>
                    specialty.toLowerCase().includes(searchTerm)
                );
                const matchesTags = creator.tags.some(tag =>
                    tag.toLowerCase().includes(searchTerm)
                );

                if (!matchesName && !matchesDescription && !matchesSpecialties && !matchesTags) {
                    return false;
                }
            }

            return true;
        });
    }, [filter, creators]);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* 페이지 헤더 */}
            <div className="bg-white border-b border-gray-200">
                <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            크리에이터 둘러보기
                        </h1>
                        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                            다양한 분야의 전문 크리에이터들을 만나보세요.
                            여러분의 게임에 완벽한 파트너를 찾을 수 있습니다.
                        </p>
                    </div>
                </div>
            </div>

            {/* 메인 콘텐츠 */}
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                {/* 필터 */}
                <CreatorFilter
                    onFilterChange={setFilter}
                    totalCount={creators.length}
                    filteredCount={filteredCreators.length}
                />

                {/* 데이터 새로고침 버튼 */}
                <div className="mb-6 flex justify-between items-center">
                    <div className="text-sm text-gray-600">
                        {error && (
                            <div className="text-red-600 bg-red-50 px-3 py-2 rounded-md">
                                ⚠️ {error}
                            </div>
                        )}
                    </div>
                    <button
                        onClick={refreshData}
                        disabled={isLoading}
                        className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isLoading ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                로딩 중...
                            </>
                        ) : (
                            <>
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                                데이터 새로고침
                            </>
                        )}
                    </button>
                </div>

                {/* 크리에이터 그리드 */}
                {filteredCreators.length > 0 ? (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {filteredCreators.map((creator) => (
                            <CreatorCard key={creator.id} creator={creator} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <h3 className="mt-2 text-sm font-medium text-gray-900">검색 결과가 없습니다</h3>
                        <p className="mt-1 text-sm text-gray-500">
                            다른 검색어나 필터 조건을 시도해보세요.
                        </p>
                        <div className="mt-6">
                            <button
                                onClick={() => setFilter({})}
                                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                모든 필터 제거
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* 협업 문의 CTA */}
            <div className="bg-indigo-50 border-t border-indigo-100">
                <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-gray-900">
                            마음에 드는 크리에이터를 찾으셨나요?
                        </h2>
                        <p className="mt-2 text-lg text-gray-600">
                            지금 바로 협업을 시작해보세요. 전문 매니저가 도와드리겠습니다.
                        </p>
                        <div className="mt-6">
                            <a
                                href="/participate"
                                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                협업 문의하기
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* 관리자 패널 */}
            <AdminPanel onDataUpdate={setCreators} />
        </div>
    );
}
