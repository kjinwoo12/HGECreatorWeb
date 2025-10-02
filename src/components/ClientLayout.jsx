'use client';

import { useState, useEffect } from 'react';
import { dataStore } from '@/lib/dataStore';
import LoadingScreen from './LoadingScreen';
import Header from './Header';
import Footer from './Footer';

export default function ClientLayout({ children }) {
    const [isLoading, setIsLoading] = useState(true);
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [loadingMessage, setLoadingMessage] = useState('데이터를 준비하는 중');

    useEffect(() => {
        async function initializeApp() {
            try {
                // 로딩 메시지 및 진행률 업데이트
                const updateProgress = (progress, message) => {
                    setLoadingProgress(progress);
                    setLoadingMessage(message);
                };

                // 단계별 로딩
                updateProgress(10, '크리에이터 데이터 로딩 중');
                await new Promise(resolve => setTimeout(resolve, 300)); // 시각적 효과를 위한 약간의 딜레이

                updateProgress(30, '성공 사례 데이터 로딩 중');
                await new Promise(resolve => setTimeout(resolve, 300));

                updateProgress(50, '사이트 콘텐츠 로딩 중');
                await new Promise(resolve => setTimeout(resolve, 300));

                updateProgress(70, '모든 데이터 로딩 중');
                
                // 실제 데이터 로딩
                await dataStore.loadAllData();

                updateProgress(90, '초기화 완료');
                await new Promise(resolve => setTimeout(resolve, 500));

                updateProgress(100, '로딩 완료');
                await new Promise(resolve => setTimeout(resolve, 300));

                setIsLoading(false);
            } catch (error) {
                console.error('앱 초기화 실패:', error);
                // 에러가 발생해도 앱을 표시 (기본 데이터 사용)
                setLoadingProgress(100);
                setLoadingMessage('기본 데이터로 시작');
                await new Promise(resolve => setTimeout(resolve, 500));
                setIsLoading(false);
            }
        }

        initializeApp();
    }, []);

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
