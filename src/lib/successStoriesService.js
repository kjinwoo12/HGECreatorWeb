import { sampleSuccessStories } from '@/data/successStories';

class SuccessStoriesService {
    async getAllSuccessStories() {
        // 로컬 샘플 데이터만 사용
        return sampleSuccessStories;
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
export async function getAllSuccessStories() {
    return await successStoriesService.getAllSuccessStories();
}

export async function getSuccessStoryById(id) {
    return await successStoriesService.getSuccessStoryById(id);
}

export async function getFeaturedSuccessStories(limit = 3) {
    return await successStoriesService.getFeaturedSuccessStories(limit);
}

export async function getSuccessStoriesByCategory(category) {
    return await successStoriesService.getSuccessStoriesByCategory(category);
}

export async function getSuccessStoriesByGameTitle(gameTitle) {
    return await successStoriesService.getSuccessStoriesByGameTitle(gameTitle);
}