import Image from 'next/image';
import { useState } from 'react';
import { useDataStore } from '@/lib/dataStore';
import CreatorModal from './CreatorModal';
import { getImagePath } from '@/lib/pathUtils';

export default function CreatorCard({ creator }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { siteContent } = useDataStore();
    const creatorCardContent = siteContent?.creator_card || {};
    
    const getActivityColor = (index) => {
        const colors = [
            'bg-purple-100 text-purple-800',
            'bg-pink-100 text-pink-800',
            'bg-blue-100 text-blue-800',
            'bg-green-100 text-green-800',
            'bg-yellow-100 text-yellow-800',
            'bg-indigo-100 text-indigo-800',
            'bg-red-100 text-red-800',
            'bg-orange-100 text-orange-800',
        ];
        return colors[index % colors.length];
    };

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
            {/* 프로필 이미지 */}
            <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200">
                {creator.profileImage ? (
                    <Image
                        src={getImagePath(creator.profileImage)}
                        alt={creator.name}
                        fill
                        className="object-cover"
                        onError={(e) => {
                            // 이미지 로드 실패 시 기본 아바타 표시
                            e.target.style.display = 'none';
                        }}
                    />
                ) : (
                    <div className="flex items-center justify-center h-full">
                        <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center">
                            <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        </div>
                    </div>
                )}

                {/* 가용성 배지 */}
                <div className="absolute top-4 right-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${creator.isAvailable
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                        }`}>
                        {creator.isAvailable ? (creatorCardContent.available || '협업 가능') : (creatorCardContent.unavailable || '협업 불가')}
                    </span>
                </div>
            </div>

            {/* 카드 내용 */}
            <div className="p-6">
                {/* 이름 */}
                <div className="mb-3">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {creator.name}
                    </h3>
                    {/* 활동 분야 */}
                    {creator.activities && creator.activities.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                            {creator.activities.slice(0, 3).map((activity, index) => (
                                <span 
                                    key={index}
                                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getActivityColor(index)}`}
                                >
                                    {activity}
                                </span>
                            ))}
                            {creator.activities.length > 3 && (
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                    +{creator.activities.length - 3}
                                </span>
                            )}
                        </div>
                    )}
                </div>

                {/* 설명 */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {creator.description}
                </p>

                {/* 전문 분야 */}
                <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">{creatorCardContent.specialties_title || '전문 분야'}</h4>
                    <div className="flex flex-wrap gap-1">
                        {(creator.specialties || []).slice(0, 3).map((specialty, index) => (
                            <span
                                key={index}
                                className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-800"
                            >
                                {specialty}
                            </span>
                        ))}
                        {(creator.specialties || []).length > 3 && (
                            <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-800">
                                +{(creator.specialties || []).length - 3}
                            </span>
                        )}
                    </div>
                </div>

                {/* 상세 보기 버튼 */}
                <div className="flex justify-end">
                    <button 
                        onClick={() => setIsModalOpen(true)}
                        className="text-indigo-600 hover:text-indigo-500 text-sm font-medium transition-colors"
                    >
                        {creatorCardContent.view_details || '상세 보기'}
                    </button>
                </div>
            </div>

            {/* 크리에이터 상세 모달 */}
            <CreatorModal 
                creator={creator}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
}
