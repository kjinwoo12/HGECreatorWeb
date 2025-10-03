'use client';

import { useState, useEffect } from 'react';
import { useDataStore } from '@/lib/dataStore';
import { useLanguage } from '@/contexts/LanguageContext';
import SuccessStoriesHeaderSection from '@/components/sections/success-stories/SuccessStoriesHeaderSection';
import SuccessStoriesStatsSection from '@/components/sections/success-stories/SuccessStoriesStatsSection';
import SuccessStoriesCasesSection from '@/components/sections/success-stories/SuccessStoriesCasesSection';
import SuccessStoriesCTASection from '@/components/sections/success-stories/SuccessStoriesCTASection';

export default function SuccessStoriesPage() {
    const { siteContent, successStories, isLoaded, isLoading, error } = useDataStore();
    const { currentLanguage } = useLanguage();
    const content = siteContent?.success_stories || {};
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const loadSuccessStories = async () => {
            try {
                console.log('🔄 성공 사례 페이지 로딩 시작');
                console.log('📊 현재 데이터 상태:', { isLoaded, isLoading, error });
                console.log('📈 성공 사례 데이터:', successStories);
                
                // 데이터가 로드되었거나 로딩이 완료되면 로딩 상태 해제
                if (isLoaded || !isLoading) {
                    await new Promise(resolve => setTimeout(resolve, 300));
                    setLoading(false);
                }
            } catch (error) {
                console.error('❌ 성공 사례 로드 실패:', error);
                setLoading(false);
            }
        };
        
        loadSuccessStories();
    }, [currentLanguage, isLoaded, isLoading]);

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

    // 에러 처리
    if (error) {
        console.error('❌ 성공 사례 페이지 에러:', error);
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="text-center">
                    <div className="text-red-500 text-6xl mb-4">⚠️</div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">데이터 로딩 오류</h2>
                    <p className="text-gray-600 mb-4">성공 사례 데이터를 불러오는 중 문제가 발생했습니다.</p>
                    <button 
                        onClick={() => window.location.reload()} 
                        className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                    >
                        페이지 새로고침
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <SuccessStoriesHeaderSection content={content} />
            <SuccessStoriesStatsSection content={content} />
            <SuccessStoriesCasesSection content={content} successStories={successStories} />
            <SuccessStoriesCTASection content={content} />
        </div>
    );
}