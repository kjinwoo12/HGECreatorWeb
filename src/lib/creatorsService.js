// TypeScript import removed
import { sampleCreators, creatorCategories } from '@/data/creators';

class CreatorsService {
    async getAllCreators() {
        // 실제 환경에서는 API 호출이나 데이터베이스 조회
        // 현재는 목 데이터 반환
        return sampleCreators;
    }

    async getCreatorById(id) {
        const creator = sampleCreators.find(creator => creator.id === id);
        return creator || null;
    }

    async getFilteredCreators(filter) {
        let filteredCreators = [...sampleCreators];

        // 카테고리 필터
        if (filter.category) {
            filteredCreators = filteredCreators.filter(creator =>
                creator.category === filter.category
            );
        }

        // 가용성 필터
        if (filter.isAvailable !== undefined) {
            filteredCreators = filteredCreators.filter(creator =>
                creator.isAvailable === filter.isAvailable
            );
        }

        // 검색어 필터
        if (filter.searchTerm) {
            const searchTerm = filter.searchTerm.toLowerCase();
            filteredCreators = filteredCreators.filter(creator =>
                creator.name.toLowerCase().includes(searchTerm) ||
                creator.description.toLowerCase().includes(searchTerm) ||
                creator.specialties.some(specialty =>
                    specialty.toLowerCase().includes(searchTerm)
                ) ||
                creator.tags.some(tag =>
                    tag.toLowerCase().includes(searchTerm)
                )
            );
        }

        // 태그 필터
        if (filter.tags && filter.tags.length > 0) {
            filteredCreators = filteredCreators.filter(creator =>
                filter.tags!.some(filterTag =>
                    creator.tags.some(creatorTag =>
                        creatorTag.toLowerCase().includes(filterTag.toLowerCase())
                    )
                )
            );
        }

        return filteredCreators;
    }

    async getCreatorsByCategory(category) {
        return sampleCreators.filter(creator => creator.category === category);
    }

    async getFeaturedCreators(limit = 6) {
        // 가용한 크리에이터 중에서 무작위로 선택
        const availableCreators = sampleCreators.filter(creator => creator.isAvailable);
        const shuffled = availableCreators.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, limit);
    }

    async searchCreators(query) {
        const lowerQuery = query.toLowerCase();
        return sampleCreators.filter(creator =>
            creator.name.toLowerCase().includes(lowerQuery) ||
            creator.description.toLowerCase().includes(lowerQuery) ||
            creator.specialties.some(specialty =>
                specialty.toLowerCase().includes(lowerQuery)
            ) ||
            creator.tags.some(tag =>
                tag.toLowerCase().includes(lowerQuery)
            )
        );
    }

    getCreatorCategories() {
        return creatorCategories;
    }

    getCreatorStats() {
        const totalCreators = sampleCreators.length;
        const availableCreators = sampleCreators.filter(c => c.isAvailable).length;
        const categoryStats = creatorCategories.map(category => ({
            category: category.value,
            label: category.label,
            count: sampleCreators.filter(c => c.category === category.value).length
        }));

        return {
            total: totalCreators,
            available: availableCreators,
            unavailable: totalCreators - availableCreators,
            byCategory: categoryStats
        };
    }

    async getRecommendedCreators(creatorId, limit = 3) {
        const creator = await this.getCreatorById(creatorId);
        if (!creator) return [];

        // 같은 카테고리의 다른 크리에이터들을 추천
        const sameCategory = sampleCreators.filter(c =>
            c.category === creator.category &&
            c.id !== creatorId &&
            c.isAvailable
        );

        // 비슷한 태그를 가진 크리에이터들도 추가
        const similarTags = sampleCreators.filter(c =>
            c.id !== creatorId &&
            c.isAvailable &&
            c.tags.some(tag => creator.tags.includes(tag))
        );

        // 중복 제거 및 섞기
        const combined = [...new Set([...sameCategory, ...similarTags])];
        const shuffled = combined.sort(() => 0.5 - Math.random());

        return shuffled.slice(0, limit);
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

export async function getFilteredCreators(filter) {
    return await creatorsService.getFilteredCreators(filter);
}

export async function getFeaturedCreators(limit) {
    return await creatorsService.getFeaturedCreators(limit);
}

export function getCreatorCategories() {
    return creatorsService.getCreatorCategories();
}

export function getCreatorStats() {
    return creatorsService.getCreatorStats();
}
