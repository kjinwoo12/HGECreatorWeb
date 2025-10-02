export interface Creator {
    id: string;
    name: string;
    category: CreatorCategory;
    description: string;
    profileImage: string;
    specialties: string[];
    socialLinks: {
        youtube?: string;
        twitch?: string;
        twitter?: string;
        instagram?: string;
        website?: string;
    };
    achievements: string[];
    collaborationHistory: string[];
    isAvailable: boolean;
    tags: string[];
}

export type CreatorCategory =
    | 'streaming'
    | 'illustration'
    | 'voice-acting'
    | 'event-coordination'
    | 'content-creation'
    | 'marketing';

export interface CreatorFilter {
    category?: CreatorCategory;
    searchTerm?: string;
    isAvailable?: boolean;
    tags?: string[];
}

export interface CollaborationCase {
    id: string;
    title: string;
    description: string;
    creators: Creator[];
    gameTitle: string;
    gameCompany: string;
    collaborationType: string;
    results: string[];
    images: string[];
    date: string;
}
