'use client';

import { useState, useEffect } from 'react';
import { fetchCSV } from './csvParser';
import { getCsvPath } from './pathUtils';
import { mockSiteContent } from '@/data/siteContent';

class DataStore {
    constructor() {
        this.data = {
            creators: [],
            successStories: [],
            siteContent: mockSiteContent,
            isLoaded: false,
            isLoading: false,
            error: null
        };
        this.listeners = [];
        this.currentLanguage = 'ko';
        this.languageCache = {}; // 언어별 캐시
        this.isLanguageSet = false; // 언어가 설정되었는지 확인
    }

    // 상태 변경 리스너 등록
    subscribe(listener) {
        this.listeners.push(listener);
        return () => {
            this.listeners = this.listeners.filter(l => l !== listener);
        };
    }

    // 상태 변경 알림
    notify() {
        this.listeners.forEach(listener => listener(this.data));
    }

    // 현재 데이터 반환
    getData() {
        return this.data;
    }

    // 초기 언어 설정 (LanguageContext에서 호출)
    async setInitialLanguage(langCode) {
        if (this.isLanguageSet) return;
        
        console.log(`🌐 초기 언어 설정: ${langCode}`);
        this.currentLanguage = langCode;
        this.isLanguageSet = true;
        
        // 해당 언어의 사이트 콘텐츠 로딩
        await this.loadSiteContentForCurrentLanguage();
    }

    // 현재 언어에 맞는 사이트 콘텐츠 로딩
    async loadSiteContentForCurrentLanguage() {
        try {
            const csvPath = this.getLanguageCsvPath(this.currentLanguage);
            const languageContent = await this.loadSiteContentForLanguage(csvPath);
            this.languageCache[this.currentLanguage] = languageContent;
            this.data.siteContent = languageContent;
            this.notify();
        } catch (error) {
            console.error(`❌ 언어 콘텐츠 로딩 실패: ${this.currentLanguage}`, error);
            this.data.siteContent = mockSiteContent;
            this.notify();
        }
    }

    // 모든 CSV 파일 로딩 (언어별 콘텐츠는 별도 로딩)
    async loadAllData() {
        if (this.data.isLoaded || this.data.isLoading) {
            return this.data;
        }

        this.data.isLoading = true;
        this.data.error = null;
        this.notify();

        try {
            console.log('📊 CSV 데이터 로딩 시작...');

            // 크리에이터와 성공 사례만 로딩 (언어별 콘텐츠는 별도)
            const [creatorsData, successStoriesData] = await Promise.allSettled([
                this.loadCreators(),
                this.loadSuccessStories()
            ]);

            // 결과 처리 (fallback 제거하여 로딩 문제를 명확하게 파악)
            this.data.creators = creatorsData.status === 'fulfilled' 
                ? creatorsData.value 
                : [];

            this.data.successStories = successStoriesData.status === 'fulfilled' 
                ? successStoriesData.value 
                : [];

            // 언어가 설정되어 있으면 해당 언어 콘텐츠 로딩
            if (this.isLanguageSet) {
                await this.loadSiteContentForCurrentLanguage();
            }

            this.data.isLoaded = true;
            console.log('✅ 모든 CSV 데이터 로딩 완료!');

        } catch (error) {
            console.error('❌ 데이터 로딩 실패:', error);
            this.data.error = error;
            
            // 에러 시 빈 배열 사용 (문제 파악을 위해 fallback 제거)
            this.data.creators = [];
            this.data.successStories = [];
            this.data.siteContent = this.languageCache[this.currentLanguage] || mockSiteContent;
            this.data.isLoaded = true;
        } finally {
            this.data.isLoading = false;
            this.notify();
        }

        return this.data;
    }

    async loadCsvData(csvPath) {
        try {
            const csvData = await fetchCSV(csvPath);
            console.log('✅ CSV 데이터 로딩 완료');
            return csvData;
        } catch (error) {
            console.warn('⚠️ CSV 로딩 실패, 기본 데이터 사용:', error.message);
            return [];
        }
    }

    async loadCreators() {
        const csvPath = this.getLanguageCsvPath(this.currentLanguage, 'creators.csv');
        console.log('🔍 크리에이터 CSV 경로:', csvPath, '언어:', this.currentLanguage);
        const csvData = await this.loadCsvData(csvPath);
        console.log('📊 크리에이터 CSV 데이터 개수:', csvData.length);
        return csvData.length > 0 ? csvData : [];
    }

    async loadSuccessStories() {
        try {
            // 언어별 CSV 파일 경로 설정
            const csvPath = getCsvPath('success-stories.csv', this.currentLanguage);
            console.log('🔍 성공 사례 CSV 경로:', csvPath);
            
            const csvData = await this.loadCsvData(csvPath);
            console.log('📊 성공 사례 CSV 데이터:', csvData);
            
            if (csvData.length > 0) {
                // CSV 데이터를 성공 사례 객체로 변환
                const successStories = csvData.map(row => ({
                    id: parseInt(row.id),
                    title: row.title,
                    gameTitle: row.gameTitle,
                    company: row.company,
                    collaborationType: row.collaborationType,
                    description: row.description,
                    results: Array.isArray(row.results) ? row.results : (row.results ? row.results.split(';') : []),
                    creators: Array.isArray(row.creators) ? row.creators : (row.creators ? row.creators.split(';') : []),
                    image: row.image,
                    date: row.date,
                    testimonial: row.testimonial,
                    clientName: row.clientName
                }));
                
                console.log('✅ 성공 사례 데이터 변환 완료:', successStories);
                return successStories;
            }
            
            console.log('⚠️ CSV 데이터가 없어서 기본 데이터 사용');
            return this.getDefaultSuccessStories();
        } catch (error) {
            console.error('❌ 성공 사례 로딩 실패:', error);
            return this.getDefaultSuccessStories();
        }
    }

    // 기본 성공 사례 데이터 반환 (fallback 제거)
    getDefaultSuccessStories() {
        return [];
    }


    // 개별 데이터 접근자
    getCreators() {
        return this.data.creators;
    }

    getSuccessStories() {
        return this.data.successStories;
    }

    getSiteContent() {
        return this.data.siteContent;
    }

    isDataLoaded() {
        return this.data.isLoaded;
    }

    isDataLoading() {
        return this.data.isLoading;
    }

    getError() {
        return this.data.error;
    }

    // 언어 변경 메서드
    async changeLanguage(langCode) {
        if (this.currentLanguage === langCode) return;

        this.currentLanguage = langCode;
        
        // 캐시에서 확인
        if (this.languageCache[langCode]) {
            this.data.siteContent = this.languageCache[langCode];
            this.notify();
            return;
        }

        // 새로운 언어 데이터 로딩
        await this.loadSiteContentForCurrentLanguage();
    }

    // 언어별 CSV 경로 반환
    getLanguageCsvPath(langCode, filename = 'site-content.csv') {
        return getCsvPath(filename, langCode);
    }

    // 특정 언어의 사이트 콘텐츠 로딩
    async loadSiteContentForLanguage(csvPath) {
        try {
            const csvData = await fetchCSV(csvPath);
            
            if (csvData.length === 0) {
                return mockSiteContent;
            }

            // CSV 데이터를 사이트 콘텐츠 형식으로 변환
            const content = { ...mockSiteContent };
            csvData.forEach(row => {
                if (row.page && row.key && row.value) {
                    if (!content[row.page]) {
                        content[row.page] = {};
                    }
                    
                    // statistics 페이지는 특별 처리 (value와 label 구조)
                    if (row.page === 'statistics' && row.label) {
                        content[row.page][row.key] = {
                            value: row.value,
                            label: row.label
                        };
                    } else {
                        content[row.page][row.key] = row.value;
                    }
                }
            });

            return content;
        } catch (error) {
            console.warn(`⚠️ 언어별 CSV 로딩 실패: ${csvPath}:`, error.message);
            return mockSiteContent;
        }
    }

    // 현재 언어 반환
    getCurrentLanguage() {
        return this.currentLanguage;
    }
}

// 싱글톤 인스턴스
export const dataStore = new DataStore();

// 글로벌 접근을 위해 window 객체에 등록 (언어 컨텍스트에서 사용)
if (typeof window !== 'undefined') {
    window.dataStore = dataStore;
}

// React Hook
export function useDataStore() {
    const [data, setData] = useState(dataStore.getData());

    useEffect(() => {
        const unsubscribe = dataStore.subscribe(setData);
        return unsubscribe;
    }, []);

    return {
        ...data,
        loadAllData: () => dataStore.loadAllData(),
        getCreators: () => dataStore.getCreators(),
        getSuccessStories: () => dataStore.getSuccessStories(),
        getSiteContent: () => dataStore.getSiteContent(),
        changeLanguage: (langCode) => dataStore.changeLanguage(langCode),
        getCurrentLanguage: () => dataStore.getCurrentLanguage()
    };
}
