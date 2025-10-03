'use client';

import { useState, useEffect } from 'react';
import { useDataStore } from '@/lib/dataStore';
import { useLanguage } from '@/contexts/LanguageContext';

export default function SuccessStoriesSection() {
    const { siteContent, successStories } = useDataStore();
    const { currentLanguage } = useLanguage();
    const content = siteContent || {};
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const loadSuccessStories = async () => {
            try {
                setLoading(false);
            } catch (error) {
                console.error('성공 사례 로드 실패:', error);
                setLoading(false);
            }
        };
        
        loadSuccessStories();
    }, [currentLanguage]);

    if (loading) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600">성공 사례를 불러오는 중...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            {/* 페이지 헤더 */}
            <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                            {content.success_stories?.title || '성공 사례'}
                        </h1>
                        <p className="mt-4 text-xl text-green-100">
                            {content.success_stories?.subtitle || 'HGE Creator와 함께한 게임들의 놀라운 성공 스토리를 확인해보세요.'}
                        </p>
                    </div>
                </div>
            </div>

            {/* 통계 섹션 */}
            <div className="bg-gray-50 py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">
                            {content.success_stories?.stats_title || '협업 성과'}
                        </h2>
                        <p className="mt-4 text-lg text-gray-600">
                            {content.success_stories?.stats_subtitle || '숫자로 보는 HGE Creator의 성과'}
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="bg-white rounded-lg shadow-md p-6 text-center">
                            <div className="text-3xl font-bold text-green-600 mb-2">94%</div>
                            <div className="text-lg font-medium text-gray-900 mb-1">
                                {content.success_stories?.stats_success_rate_label || '평균 프로젝트 성공률'}
                            </div>
                            <div className="text-sm text-gray-600">
                                {content.success_stories?.stats_success_rate_desc || '대부분의 프로젝트가 성공적으로 완료됩니다'}
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6 text-center">
                            <div className="text-3xl font-bold text-blue-600 mb-2">4.8/5</div>
                            <div className="text-lg font-medium text-gray-900 mb-1">
                                {content.success_stories?.stats_satisfaction_label || '평균 만족도'}
                            </div>
                            <div className="text-sm text-gray-600">
                                {content.success_stories?.stats_satisfaction_desc || '높은 고객 만족도를 자랑합니다'}
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6 text-center">
                            <div className="text-3xl font-bold text-purple-600 mb-2">87%</div>
                            <div className="text-lg font-medium text-gray-900 mb-1">
                                {content.success_stories?.stats_repeat_rate_label || '재협업률'}
                            </div>
                            <div className="text-sm text-gray-600">
                                {content.success_stories?.stats_repeat_rate_desc || '한번 협업한 파트너들이 다시 찾습니다'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 성공 사례 목록 */}
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900">{content.success_stories?.cases_title || '주요 성공 사례'}</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        {content.success_stories?.cases_subtitle || '다양한 장르의 게임들이 어떻게 성공을 이뤄냈는지 살펴보세요.'}
                    </p>
                </div>

                {successStories && successStories.length === 0 ? (
                    <div className="text-center py-12">
                        <div className="text-gray-400 text-6xl mb-4">📊</div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">성공 사례가 없습니다</h3>
                        <p className="text-gray-600">아직 등록된 성공 사례가 없습니다.</p>
                    </div>
                ) : (
                    <div className="space-y-16">
                        {successStories && successStories.map((story, index) => (
                            <div key={story.id} className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                                <div className={`lg:grid lg:grid-cols-2 lg:gap-8 ${index % 2 === 0 ? '' : 'lg:grid-flow-row-dense'}`}>
                                    {/* 이미지 */}
                                    <div className={`relative h-64 lg:h-full ${index % 2 === 0 ? '' : 'lg:col-start-2'}`}>
                                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                                            <div className="text-white text-center">
                                                <div className="text-6xl mb-4">🎮</div>
                                                <div className="text-xl font-bold">{story.gameTitle}</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 내용 */}
                                    <div className={`p-8 ${index % 2 === 0 ? '' : 'lg:col-start-1'}`}>
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                                                {story.collaborationType}
                                            </span>
                                            <span className="text-sm text-gray-500">{story.date}</span>
                                        </div>
                                        
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{story.title}</h3>
                                        
                                        <p className="text-gray-600 mb-6">{story.description}</p>
                                        
                                        <div className="mb-6">
                                            <h4 className="text-lg font-semibold text-gray-900 mb-3">
                                                {content.success_stories?.main_results_title || '주요 성과'}
                                            </h4>
                                            <ul className="space-y-2">
                                                {(Array.isArray(story.results) ? story.results : []).map((result, resultIndex) => (
                                                    <li key={resultIndex} className="flex items-center text-sm text-gray-600">
                                                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                        </svg>
                                                        {result}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        
                                        <div className="mb-6">
                                            <h4 className="text-lg font-semibold text-gray-900 mb-3">
                                                {content.success_stories?.participating_creators_title || '참여 크리에이터'}
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {(Array.isArray(story.creators) ? story.creators : []).map((creator, creatorIndex) => (
                                                    <span key={creatorIndex} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                                                        {creator}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        
                                        <div className="bg-gray-50 rounded-lg p-4">
                                            <blockquote className="text-gray-700 italic mb-2">
                                                "{story.testimonial}"
                                            </blockquote>
                                            <cite className="text-sm text-gray-500">- {story.clientName}</cite>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* CTA 섹션 */}
            <div className="bg-green-600 py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white">
                        {content.success_stories?.cta_title || '다음 성공 사례의 주인공이 되어보세요'}
                    </h2>
                    <p className="mt-4 text-xl text-green-100">
                        {content.success_stories?.cta_subtitle || '여러분의 게임도 이런 성공을 거둘 수 있습니다. 지금 바로 시작하세요.'}
                    </p>
                    <div className="mt-8">
                        <a
                            href="/participate"
                            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-gray-50 transition-colors"
                        >
                            {content.success_stories?.cta_button || '협업 신청하기'}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}