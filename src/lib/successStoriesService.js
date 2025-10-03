import { parseCSV } from './csvParser';
import { getCsvPath } from './pathUtils';

class SuccessStoriesService {
    constructor() {
        this.currentLanguage = 'ko';
        this.cache = {};
    }

    setLanguage(language) {
        this.currentLanguage = language;
    }

    getCsvPath() {
        return getCsvPath('success-stories.csv', this.currentLanguage);
    }

    async getAllSuccessStories() {
        try {
            // 캐시 확인
            if (this.cache[this.currentLanguage]) {
                return this.cache[this.currentLanguage];
            }

            // 언어별 CSV 파일에서 데이터 로드
            const csvPath = this.getCsvPath();
            const response = await fetch(csvPath);
            const csvText = await response.text();
            const stories = parseCSV(csvText);
            
            // CSV 데이터를 성공 사례 객체로 변환
            const result = stories.map(row => ({
                id: parseInt(row.id),
                title: row.title,
                gameTitle: row.gameTitle,
                company: row.company,
                collaborationType: row.collaborationType,
                description: row.description,
                results: row.results.split(';'),
                creators: row.creators.split(';'),
                image: row.image,
                date: row.date,
                testimonial: row.testimonial,
                clientName: row.clientName
            }));

            // 캐시에 저장
            this.cache[this.currentLanguage] = result;
            return result;
        } catch (error) {
            console.error('성공 사례 데이터 로드 실패:', error);
            return [];
        }
    }

    async getSuccessStoryById(id) {
        const stories = await this.getAllSuccessStories();
        return stories.find(story => story.id === id);
    }

    async getFeaturedSuccessStories(limit = 3) {
        const stories = await this.getAllSuccessStories();
        return stories.filter(story => story.featured).slice(0, limit);
    }

    async getSuccessStoriesByCategory(category) {
        const stories = await this.getAllSuccessStories();
        if (!category || category === 'all') {
            return stories;
        }
        return stories.filter(story => story.category === category);
    }

    async getSuccessStoriesByGameTitle(gameTitle) {
        const stories = await this.getAllSuccessStories();
        return stories.filter(story => 
            story.gameTitle.toLowerCase().includes(gameTitle.toLowerCase())
        );
    }
}

// 싱글톤 인스턴스
export const successStoriesService = new SuccessStoriesService();

// 편의 함수들
export async function getAllSuccessStories(language = 'ko') {
    successStoriesService.setLanguage(language);
    return await successStoriesService.getAllSuccessStories();
}

export async function getSuccessStoryById(id, language = 'ko') {
    successStoriesService.setLanguage(language);
    return await successStoriesService.getSuccessStoryById(id);
}

export async function getFeaturedSuccessStories(limit = 3, language = 'ko') {
    successStoriesService.setLanguage(language);
    return await successStoriesService.getFeaturedSuccessStories(limit);
}

export async function getSuccessStoriesByCategory(category, language = 'ko') {
    successStoriesService.setLanguage(language);
    return await successStoriesService.getSuccessStoriesByCategory(category);
}

export async function getSuccessStoriesByGameTitle(gameTitle, language = 'ko') {
    successStoriesService.setLanguage(language);
    return await successStoriesService.getSuccessStoriesByGameTitle(gameTitle);
}