'use client';

import { useState, useEffect } from 'react';
import { useDataStore } from '@/lib/dataStore';
import { LanguageProvider, useLanguage } from '@/contexts/LanguageContext';
import LoadingScreen from './LoadingScreen';
import Header from './Header';
import Footer from './Footer';

// 데이터 로딩을 담당하는 내부 컴포넌트
function AppContent({ children }) {
    const [isLoading, setIsLoading] = useState(true);
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [loadingMessage, setLoadingMessage] = useState('언어 설정 중');
    const { loadAllData, siteContent } = useDataStore();
    const { isLanguageInitialized } = useLanguage();
    const loadingContent = siteContent?.loading || {};

    useEffect(() => {
        async function initializeApp() {
            if (!isLanguageInitialized) {
                setLoadingMessage(loadingContent.language_setting || '언어 설정 중');
                setLoadingProgress(10);
                return;
            }

            try {
                // 로딩 메시지 및 진행률 업데이트
                const updateProgress = (progress, message) => {
                    setLoadingProgress(progress);
                    setLoadingMessage(message);
                };

                // 단계별 로딩
                updateProgress(30, loadingContent.creators_loading || '크리에이터 데이터 로딩 중');
                await new Promise(resolve => setTimeout(resolve, 300));

                updateProgress(50, loadingContent.success_stories_loading || '성공 사례 데이터 로딩 중');
                await new Promise(resolve => setTimeout(resolve, 300));

                updateProgress(70, loadingContent.all_data_loading || '모든 데이터 로딩 중');
                
                // 실제 데이터 로딩
                await loadAllData();

                updateProgress(90, loadingContent.initialization_complete || '초기화 완료');
                await new Promise(resolve => setTimeout(resolve, 500));

                updateProgress(100, loadingContent.loading_complete || '로딩 완료');
                await new Promise(resolve => setTimeout(resolve, 300));

                setIsLoading(false);
            } catch (error) {
                console.error('앱 초기화 실패:', error);
                // 에러가 발생해도 앱을 표시 (기본 데이터 사용)
                setLoadingProgress(100);
                setLoadingMessage(loadingContent.default_data_start || '기본 데이터로 시작');
                await new Promise(resolve => setTimeout(resolve, 500));
                setIsLoading(false);
            }
        }

        initializeApp();
    }, [loadAllData, isLanguageInitialized]);

    if (isLoading) {
        return (
            <LoadingScreen 
                progress={loadingProgress} 
                message={loadingMessage}
            />
        );
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default function ClientLayout({ children }) {
    return (
        <LanguageProvider>
            <AppContent>
                {children}
            </AppContent>
        </LanguageProvider>
    );
}
