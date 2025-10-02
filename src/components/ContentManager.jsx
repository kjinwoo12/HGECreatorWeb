'use client';

import { useState } from 'react';
import { clearContentCache, getSiteContent } from '@/lib/contentService';

export default function ContentManager({ onContentUpdate }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [lastSync, setLastSync] = useState(null);
    const [syncStatus, setSyncStatus] = useState(null);
    const [activeTab, setActiveTab] = useState('content');

    const handleSyncContent = async () => {
        setIsLoading(true);
        setSyncStatus(null);

        try {
            clearContentCache();
            const content = await getSiteContent();

            if (onContentUpdate) {
                onContentUpdate(content);
            }

            setLastSync(new Date());
            setSyncStatus('success');
        } catch (error) {
            console.error('콘텐츠 동기화 실패:', error);
            setSyncStatus('error');
        } finally {
            setIsLoading(false);
        }
    };

    const handleClearCache = () => {
        clearContentCache();
        setLastSync(null);
        setSyncStatus(null);
        alert('콘텐츠 캐시가 삭제되었습니다. 다음 페이지 로드 시 새로운 데이터를 가져옵니다.');
    };

    const copyContentSheetTemplate = () => {
        const templateUrl = 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy';
        navigator.clipboard.writeText(templateUrl);
        alert('콘텐츠 관리 시트 템플릿 URL이 복사되었습니다!');
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
        <div className="fixed bottom-4 right-4 bg-white border border-gray-200 rounded-lg shadow-xl w-96 z-50 max-h-[80vh] overflow-hidden flex flex-col">
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

            {/* 탭 네비게이션 */}
            <div className="flex border-b border-gray-200">
                <button
                    onClick={() => setActiveTab('content')}
                    className={`px-4 py-2 text-sm font-medium ${activeTab === 'content'
                        ? 'text-green-600 border-b-2 border-green-600'
                        : 'text-gray-500 hover:text-gray-700'
                        }`}
                >
                    콘텐츠 동기화
                </button>
                <button
                    onClick={() => setActiveTab('guide')}
                    className={`px-4 py-2 text-sm font-medium ${activeTab === 'guide'
                        ? 'text-green-600 border-b-2 border-green-600'
                        : 'text-gray-500 hover:text-gray-700'
                        }`}
                >
                    설정 가이드
                </button>
                <button
                    onClick={() => setActiveTab('status')}
                    className={`px-4 py-2 text-sm font-medium ${activeTab === 'status'
                        ? 'text-green-600 border-b-2 border-green-600'
                        : 'text-gray-500 hover:text-gray-700'
                        }`}
                >
                    시스템 상태
                </button>
            </div>

            {/* 탭 콘텐츠 */}
            <div className="p-4 overflow-y-auto flex-1">
                {activeTab === 'content' && (
                    <div className="space-y-4">
                        {/* 동기화 상태 */}
                        <div className="text-sm">
                            <div className="text-gray-600">마지막 동기화:</div>
                            <div className="font-medium">
                                {lastSync ? lastSync.toLocaleString('ko-KR') : '없음'}
                            </div>
                            {syncStatus && (
                                <div className={`mt-1 text-xs ${syncStatus === 'success' ? 'text-green-600' : 'text-red-600'
                                    }`}>
                                    {syncStatus === 'success' ? '✅ 성공' : '❌ 실패'}
                                </div>
                            )}
                        </div>

                        {/* 콘텐츠 동기화 버튼 */}
                        <button
                            onClick={handleSyncContent}
                            disabled={isLoading}
                            className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    동기화 중...
                                </>
                            ) : (
                                <>
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                    </svg>
                                    콘텐츠 동기화
                                </>
                            )}
                        </button>

                        {/* 캐시 삭제 버튼 */}
                        <button
                            onClick={handleClearCache}
                            className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                        >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            캐시 삭제
                        </button>

                        {/* 콘텐츠 시트 템플릿 */}
                        <button
                            onClick={copyContentSheetTemplate}
                            className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                        >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            콘텐츠 시트 템플릿
                        </button>
                    </div>
                )}

                {activeTab === 'guide' && (
                    <div className="space-y-4 text-sm">
                        <div>
                            <h4 className="font-medium text-gray-900 mb-2">콘텐츠 관리 시트 구조</h4>
                            <div className="bg-gray-50 p-3 rounded text-xs">
                                <div className="font-mono">
                                    <div>Content 시트:</div>
                                    <div className="ml-2">Section | Key | Value | Type</div>
                                    <div className="ml-2">hero | title | 제목 텍스트 | string</div>
                                    <div className="ml-2">hero | description | 설명 텍스트 | string</div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-medium text-gray-900 mb-2">환경 변수 설정</h4>
                            <div className="bg-gray-50 p-3 rounded text-xs">
                                <div className="font-mono">
                                    NEXT_PUBLIC_CONTENT_SHEETS_SPREADSHEET_ID<br />
                                    NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-medium text-gray-900 mb-2">지원되는 데이터 타입</h4>
                            <ul className="text-xs space-y-1 text-gray-600">
                                <li>• string: 일반 텍스트</li>
                                <li>• number: 숫자</li>
                                <li>• boolean: true/false</li>
                                <li>• array: 쉼표로 구분된 목록</li>
                                <li>• json: JSON 객체</li>
                            </ul>
                        </div>
                    </div>
                )}

                {activeTab === 'status' && (
                    <div className="space-y-4">
                        <div>
                            <h4 className="font-medium text-gray-900 mb-2">시스템 상태</h4>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span>콘텐츠 시트 ID:</span>
                                    <span className={process.env.NEXT_PUBLIC_CONTENT_SHEETS_SPREADSHEET_ID ? 'text-green-600' : 'text-red-600'}>
                                        {process.env.NEXT_PUBLIC_CONTENT_SHEETS_SPREADSHEET_ID ? '✅ 설정됨' : '❌ 미설정'}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span>API 키:</span>
                                    <span className={process.env.NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY ? 'text-green-600' : 'text-red-600'}>
                                        {process.env.NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY ? '✅ 설정됨' : '❌ 미설정'}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span>캐시 상태:</span>
                                    <span className="text-blue-600">
                                        {typeof window !== 'undefined' && localStorage.getItem('site-content-cache') ? '📦 캐시됨' : '🔄 없음'}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-medium text-gray-900 mb-2">관리 가능한 콘텐츠</h4>
                            <ul className="text-xs space-y-1 text-gray-600">
                                <li>• 메인 페이지 히어로 섹션</li>
                                <li>• 핵심 가치 및 통계</li>
                                <li>• 네비게이션 메뉴</li>
                                <li>• 푸터 정보</li>
                                <li>• 각 페이지별 제목 및 설명</li>
                                <li>• 버튼 텍스트 및 링크</li>
                                <li>• 연락처 정보</li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
