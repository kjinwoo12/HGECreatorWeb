'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useDataStore } from '@/lib/dataStore';
import { getImagePath } from '@/lib/pathUtils';

export default function CreatorModal({ creator, isOpen, onClose }) {
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

    // ESC 키로 모달 닫기
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            // 배경 스크롤 방지 제거 - 뒤쪽 콘텐츠가 보이도록 함
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen, onClose]);

    if (!isOpen || !creator) return null;

    // creator 객체의 필수 속성들이 존재하는지 확인
    if (!creator.name || !creator.description) {
        console.error('Creator object is missing required properties:', creator);
        return null;
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center animate-in fade-in duration-300">
            {/* 배경 오버레이 */}
            <div 
                className="absolute inset-0 bg-black animate-in fade-in duration-300"
                style={{ opacity: 0.6 }}
                onClick={onClose}
            ></div>

            {/* 모달 컨텐츠 */}
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-4 duration-300">
                {/* 닫기 버튼 */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
                >
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="flex flex-col lg:flex-row">
                    {/* 프로필 이미지 섹션 */}
                    <div className="lg:w-1/2 relative h-64 lg:h-auto">
                        <div className="relative h-full bg-gradient-to-br from-gray-100 to-gray-200">
                            {creator.profileImage ? (
                                <Image
                                    src={getImagePath(creator.profileImage)}
                                    alt={creator.name}
                                    fill
                                    className="object-cover"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                    }}
                                />
                            ) : (
                                <div className="flex items-center justify-center h-full">
                                    <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center">
                                        <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>

                    {/* 정보 섹션 */}
                    <div className="lg:w-1/2 p-8 overflow-y-auto max-h-[90vh] custom-scrollbar">
                        {/* 이름과 활동 분야 */}
                        <div className="mb-6">
                            <div className="mb-4">
                                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                                    {creator.name}
                                </h2>
                                {/* 활동 분야 */}
                                {creator.activities && creator.activities.length > 0 && (
                                    <div className="flex flex-wrap gap-2">
                                        {creator.activities.map((activity, index) => (
                                            <span 
                                                key={index}
                                                className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getActivityColor(index)}`}
                                            >
                                                {activity}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* 설명 */}
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                {creatorCardContent.about_title || '소개'}
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                {creator.description}
                            </p>
                        </div>

                        {/* 전문 분야 */}
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                {creatorCardContent.specialties_title || '전문 분야'}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {(creator.specialties || []).map((specialty, index) => (
                                    <span
                                        key={index}
                                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                                    >
                                        {specialty}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* 태그 */}
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                {creatorCardContent.tags_title || '태그'}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {(creator.tags || []).map((tag, index) => (
                                    <span
                                        key={index}
                                        className="inline-flex items-center px-2 py-1 rounded text-sm font-medium bg-gray-100 text-gray-700"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
