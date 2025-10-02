'use client';

import { useState } from 'react';
import { getSiteContent } from '@/lib/contentService';

export default function ContentManager({ onContentUpdate }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleRefreshContent = async () => {
        setIsLoading(true);

        try {
            const content = await getSiteContent();

            if (onContentUpdate) {
                onContentUpdate(content);
            }

            alert('콘텐츠가 새로고침되었습니다.');
        } catch (error) {
            console.error('콘텐츠 새로고침 실패:', error);
            alert('콘텐츠 새로고침에 실패했습니다.');
        } finally {
            setIsLoading(false);
        }
    };

    if (!isOpen) {
        return (
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-20 right-4 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-colors z-50"
                title="콘텐츠 관리자 패널 열기"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
            </button>
        );
    }

    return (
        <div className="fixed bottom-4 right-4 bg-white border border-gray-200 rounded-lg shadow-xl w-80 z-50">
            {/* 헤더 */}
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">콘텐츠 관리</h3>
                <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-400 hover:text-gray-600"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            {/* 콘텐츠 */}
            <div className="p-4">
                <div className="space-y-4">
                    <div className="text-sm text-gray-600">
                        로컬 데이터를 사용하여 콘텐츠를 표시합니다.
                    </div>

                    {/* 콘텐츠 새로고침 버튼 */}
                    <button
                        onClick={handleRefreshContent}
                        disabled={isLoading}
                        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isLoading ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                새로고침 중...
                            </>
                        ) : (
                            <>
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                                콘텐츠 새로고침
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
