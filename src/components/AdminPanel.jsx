'use client';

import { useState } from 'react';
import { useDataStore } from '@/lib/dataStore';
// TypeScript import removed

export default function AdminPanel({ onDataUpdate }) {
    const { siteContent } = useDataStore();
    const adminContent = siteContent?.admin || {};
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [lastSync, setLastSync] = useState(null);
    const [syncStatus, setSyncStatus] = useState(null);

    const handleSyncData = async () => {
        setIsLoading(true);
        setSyncStatus(null);

        try {
            clearCreatorsCache();
            const creators = await getCreatorsFromSheets();

            if (onDataUpdate) {
                onDataUpdate(creators);
            }

            setLastSync(new Date());
            setSyncStatus('success');
        } catch (error) {
            console.error('데이터 동기화 실패:', error);
            setSyncStatus('error');
        } finally {
            setIsLoading(false);
        }
    };

    const handleClearCache = () => {
        clearCreatorsCache();
        setLastSync(null);
        setSyncStatus(null);
        alert(adminContent.cache_cleared || '캐시가 삭제되었습니다. 다음 페이지 로드 시 새로운 데이터를 가져옵니다.');
    };

    const copyTemplateUrl = () => {
        const templateUrl = 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy';
        navigator.clipboard.writeText(templateUrl);
        alert(adminContent.template_copied || '구글 시트 템플릿 URL이 복사되었습니다!');
    };

    if (!isOpen) {
        return (
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-4 right-4 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-colors z-50"
                title={adminContent.open_panel || "관리자 패널 열기"}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            </button>
        );
    }

    return (
        <div className="fixed bottom-4 right-4 bg-white border border-gray-200 rounded-lg shadow-xl p-6 w-80 z-50">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900">{adminContent.panel_title || '관리자 패널'}</h3>
                <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-400 hover:text-gray-600"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <div className="space-y-4">
                {/* 동기화 상태 */}
                <div className="text-sm">
                    <div className="text-gray-600">{adminContent.last_sync || '마지막 동기화'}:</div>
                    <div className="font-medium">
                        {lastSync ? lastSync.toLocaleString('ko-KR') : (adminContent.no_sync || '없음')}
                    </div>
                    {syncStatus && (
                        <div className={`mt-1 text-xs ${syncStatus === 'success' ? 'text-green-600' : 'text-red-600'
                            }`}>
                            {syncStatus === 'success' ? `✅ ${adminContent.sync_success || '성공'}` : `❌ ${adminContent.sync_failed || '실패'}`}
                        </div>
                    )}
                </div>

                {/* 데이터 동기화 버튼 */}
                <button
                    onClick={handleSyncData}
                    disabled={isLoading}
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isLoading ? (
                        <>
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            {adminContent.sync_processing || '동기화 중...'}
                        </>
                    ) : (
                        <>
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                            {adminContent.sync_button || '데이터 동기화'}
                        </>
                    )}
                </button>

                {/* 캐시 삭제 버튼 */}
                <button
                    onClick={handleClearCache}
                    className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    {adminContent.clear_cache || '캐시 삭제'}
                </button>

                {/* 구글 시트 템플릿 복사 */}
                <button
                    onClick={copyTemplateUrl}
                    className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    {adminContent.copy_template || '시트 템플릿 복사'}
                </button>

                {/* 설정 가이드 링크 */}
                <div className="text-xs text-gray-500 text-center">
                    {adminContent.setup_guide || '구글 시트 설정이 필요하신가요?'}
                    <br />
                    <a
                        href="/GOOGLE_SHEETS_SETUP.md"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:text-indigo-500 underline"
                    >
                        {adminContent.view_guide || '설정 가이드 보기'}
                    </a>
                </div>

                {/* 환경 변수 상태 */}
                <div className="text-xs text-gray-500 border-t pt-2">
                    <div>{adminContent.api_key || 'API 키'}: {process.env.NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY ? `✅ ${adminContent.configured || '설정됨'}` : `❌ ${adminContent.not_configured || '미설정'}`}</div>
                    <div>{adminContent.sheet_id || '시트 ID'}: {process.env.NEXT_PUBLIC_GOOGLE_SHEETS_SPREADSHEET_ID ? `✅ ${adminContent.configured || '설정됨'}` : `❌ ${adminContent.not_configured || '미설정'}`}</div>
                </div>
            </div>
        </div>
    );
}
