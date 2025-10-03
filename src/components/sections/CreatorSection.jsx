'use client';

import { useState, useMemo } from 'react';
import CreatorCard from '@/components/CreatorCard';
import CreatorFilter from '@/components/CreatorFilter';
import { useDataStore } from '@/lib/dataStore';

export default function CreatorSection() {
    const [filter, setFilter] = useState({});
    
    // useDataStore 훅으로 반응형 데이터 가져오기
    const { creators, siteContent } = useDataStore();
    const creatorsContent = siteContent?.creators || {};

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
                const matchesSpecialties = creator.specialties?.some(specialty =>
                    specialty.toLowerCase().includes(searchTerm)
                );
                const matchesTags = creator.tags?.some(tag =>
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
                            {creatorsContent.page_title || '크리에이터 둘러보기'}
                        </h1>
                        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                            {creatorsContent.page_subtitle || '다양한 분야의 전문 크리에이터들을 만나보세요.'}
                            <br />
                            {creatorsContent.page_description || '여러분의 게임에 완벽한 파트너를 찾을 수 있습니다.'}
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
                        <h3 className="mt-2 text-sm font-medium text-gray-900">{creatorsContent.no_results_title || '검색 결과가 없습니다'}</h3>
                        <p className="mt-1 text-sm text-gray-500">
                            {creatorsContent.no_results_message || '다른 검색어나 필터 조건을 시도해보세요.'}
                        </p>
                        <div className="mt-6">
                            <button
                                onClick={() => setFilter({})}
                                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                {creatorsContent.clear_filters || '모든 필터 제거'}
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
                            {creatorsContent.cta_title || '마음에 드는 크리에이터를 찾으셨나요?'}
                        </h2>
                        <p className="mt-2 text-lg text-gray-600">
                            {creatorsContent.cta_subtitle || '지금 바로 협업을 시작해보세요. 전문 매니저가 도와드리겠습니다.'}
                        </p>
                        <div className="mt-6">
                            <a
                                href="/participate"
                                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                {creatorsContent.cta_button || '협업 문의하기'}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
