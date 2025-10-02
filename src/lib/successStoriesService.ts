import { CollaborationCase } from '@/types/creator';
import { mockSuccessStories, successStatistics } from '@/data/successStories';

class SuccessStoriesService {
    async getAllSuccessStories(): Promise<CollaborationCase[]> {
        // 실제 환경에서는 API 호출이나 데이터베이스 조회
        // 현재는 목 데이터 반환
        return mockSuccessStories;
    }

    async getSuccessStoryById(id: string): Promise<CollaborationCase | null> {
        const story = mockSuccessStories.find(story => story.id === id);
        return story || null;
    }

    async getFeaturedSuccessStories(limit: number = 3): Promise<CollaborationCase[]> {
        // 최신 순으로 정렬하여 상위 N개 반환
        return mockSuccessStories
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
            .slice(0, limit);
    }

    async getSuccessStoriesByCategory(category: string): Promise<CollaborationCase[]> {
        return mockSuccessStories.filter(story =>
            story.creators.some(creator => creator.category === category)
        );
    }

    async getSuccessStoriesByGameTitle(gameTitle: string): Promise<CollaborationCase[]> {
        return mockSuccessStories.filter(story =>
            story.gameTitle.toLowerCase().includes(gameTitle.toLowerCase())
        );
    }

    getStatistics() {
        return successStatistics;
    }

    async searchSuccessStories(query: string): Promise<CollaborationCase[]> {
        const lowerQuery = query.toLowerCase();
        return mockSuccessStories.filter(story =>
            story.title.toLowerCase().includes(lowerQuery) ||
            story.description.toLowerCase().includes(lowerQuery) ||
            story.gameTitle.toLowerCase().includes(lowerQuery) ||
            story.gameCompany.toLowerCase().includes(lowerQuery) ||
            story.collaborationType.toLowerCase().includes(lowerQuery)
        );
    }

    async getRandomSuccessStories(count: number = 3): Promise<CollaborationCase[]> {
        const shuffled = [...mockSuccessStories].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }
}

// 싱글톤 인스턴스
export const successStoriesService = new SuccessStoriesService();

// 편의 함수들
export async function getAllSuccessStories(): Promise<CollaborationCase[]> {
    return await successStoriesService.getAllSuccessStories();
}

export async function getSuccessStoryById(id: string): Promise<CollaborationCase | null> {
    return await successStoriesService.getSuccessStoryById(id);
}

export async function getFeaturedSuccessStories(limit?: number): Promise<CollaborationCase[]> {
    return await successStoriesService.getFeaturedSuccessStories(limit);
}

export function getSuccessStatistics() {
    return successStoriesService.getStatistics();
}
