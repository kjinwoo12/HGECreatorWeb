'use client';

import { useState, useEffect } from 'react';
import { fetchCSV } from './csvParser';
import { mockSiteContent } from '@/data/siteContent';
import { sampleCreators } from '@/data/creators';
import { mockSuccessStories } from '@/data/successStories';

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

    // 모든 CSV 파일 로딩
    async loadAllData() {
        if (this.data.isLoaded || this.data.isLoading) {
            return this.data;
        }

        this.data.isLoading = true;
        this.data.error = null;
        this.notify();

        try {
            console.log('📊 CSV 데이터 로딩 시작...');

            // 병렬로 모든 CSV 파일 로딩
            const [creatorsData, successStoriesData, siteContentData] = await Promise.allSettled([
                this.loadCreators(),
                this.loadSuccessStories(),
                this.loadSiteContent()
            ]);

            // 결과 처리
            this.data.creators = creatorsData.status === 'fulfilled' 
                ? creatorsData.value 
                : sampleCreators;

            this.data.successStories = successStoriesData.status === 'fulfilled' 
                ? successStoriesData.value 
                : mockSuccessStories;

            this.data.siteContent = siteContentData.status === 'fulfilled' 
                ? siteContentData.value 
                : mockSiteContent;

            this.data.isLoaded = true;
            console.log('✅ 모든 CSV 데이터 로딩 완료!');

        } catch (error) {
            console.error('❌ 데이터 로딩 실패:', error);
            this.data.error = error;
            
            // 에러 시 기본 데이터 사용
            this.data.creators = sampleCreators;
            this.data.successStories = mockSuccessStories;
            this.data.siteContent = mockSiteContent;
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
        const csvData = await this.loadCsvData('/data/creators.csv');
        return csvData.length > 0 ? csvData : sampleCreators;
    }

    async loadSuccessStories() {
        const csvData = await this.loadCsvData('/data/success-stories.csv');
        return csvData.length > 0 ? csvData : mockSuccessStories;
    }

    async loadSiteContent() {
        const csvData = await this.loadCsvData('/data/site-content.csv');
        
        if (csvData.length === 0) {
            return mockSiteContent;
        }
        
        // CSV 데이터를 사이트 콘텐츠 형식으로 변환
        const content = { ...mockSiteContent };
        csvData.forEach(row => {
            if (row.section && row.key && row.value) {
                if (!content[row.section]) {
                    content[row.section] = {};
                }
                
                // statistics 섹션은 특별 처리 (value와 label 구조)
                if (row.section === 'statistics' && row.label) {
                    content[row.section][row.key] = {
                        value: row.value,
                        label: row.label
                    };
                } else {
                    content[row.section][row.key] = row.value;
                }
            }
        });
        
        return content;
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
}

// 싱글톤 인스턴스
export const dataStore = new DataStore();

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
        getSiteContent: () => dataStore.getSiteContent()
    };
}
