import { dataStore } from './dataStore';

class CreatorsService {
    async getAllCreators() {
        // 데이터 스토어에서 크리에이터 데이터 가져오기
        return dataStore.getCreators();
    }

    async getCreatorById(id) {
        const creators = await this.getAllCreators();
        return creators.find(creator => creator.id === id);
    }

    async getCreatorsByCategory(category) {
        const creators = await this.getAllCreators();
        if (!category || category === 'all') {
            return creators;
        }
        return creators.filter(creator => creator.category === category);
    }

    async searchCreators(query) {
        const creators = await this.getAllCreators();
        if (!query) return creators;

        const searchTerm = query.toLowerCase();
        return creators.filter(creator =>
            creator.name.toLowerCase().includes(searchTerm) ||
            creator.description.toLowerCase().includes(searchTerm) ||
            creator.specialties.some(specialty => specialty.toLowerCase().includes(searchTerm)) ||
            creator.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
    }

    async getAvailableCreators() {
        const creators = await this.getAllCreators();
        return creators.filter(creator => creator.isAvailable);
    }
}

// 싱글톤 인스턴스
export const creatorsService = new CreatorsService();

// 편의 함수들
export async function getAllCreators() {
    return await creatorsService.getAllCreators();
}

export async function getCreatorById(id) {
    return await creatorsService.getCreatorById(id);
}

export async function getCreatorsByCategory(category) {
    return await creatorsService.getCreatorsByCategory(category);
}

export async function searchCreators(query) {
    return await creatorsService.searchCreators(query);
}

export async function getAvailableCreators() {
    return await creatorsService.getAvailableCreators();
}