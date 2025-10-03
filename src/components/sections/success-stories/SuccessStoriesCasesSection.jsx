'use client';

import { getImagePath } from '@/lib/pathUtils';

export default function SuccessStoriesCasesSection({ content, successStories }) {
    return (
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900">{content?.cases_title || '주요 성공 사례'}</h2>
                <p className="mt-4 text-lg text-gray-600">
                    {content?.cases_subtitle || '다양한 장르의 게임들이 어떻게 성공을 이뤄냈는지 살펴보세요.'}
                </p>
            </div>

            {successStories && successStories.length === 0 ? (
                <div className="text-center py-12">
                    <div className="text-gray-400 text-6xl mb-4">📊</div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">성공 사례가 없습니다</h3>
                    <p className="text-gray-600">아직 등록된 성공 사례가 없습니다.</p>
                </div>
            ) : (
                <div className="space-y-16">
                    {successStories && successStories.map((story, index) => (
                        <div key={story.id} className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                            <div className={`lg:grid lg:grid-cols-2 lg:gap-8 ${index % 2 === 0 ? '' : 'lg:grid-flow-row-dense'}`}>
                                {/* 이미지 */}
                                <div className={`relative h-64 lg:h-full ${index % 2 === 0 ? '' : 'lg:col-start-2'}`}>
                                    {story.image ? (
                                        <img 
                                            src={getImagePath(story.image)} 
                                            alt={story.gameTitle}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                // 이미지 로드 실패 시 플레이스홀더 표시
                                                e.target.style.display = 'none';
                                                e.target.nextElementSibling.style.display = 'flex';
                                            }}
                                        />
                                    ) : null}
                                    <div 
                                        className={`absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center ${story.image ? 'hidden' : 'flex'}`}
                                    >
                                        <div className="text-white text-center">
                                            <div className="text-6xl mb-4">🎮</div>
                                            <div className="text-xl font-bold">{story.gameTitle}</div>
                                        </div>
                                    </div>
                                </div>

                                {/* 내용 */}
                                <div className={`p-8 ${index % 2 === 0 ? '' : 'lg:col-start-1'}`}>
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                                            {story.collaborationType}
                                        </span>
                                        <span className="text-sm text-gray-500">{story.date}</span>
                                    </div>
                                    
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{story.title}</h3>
                                    
                                    <p className="text-gray-600 mb-6">{story.description}</p>
                                    
                                    <div className="mb-6">
                                        <h4 className="text-lg font-semibold text-gray-900 mb-3">
                                            {content?.main_results_title || '주요 성과'}
                                        </h4>
                                        <ul className="space-y-2">
                                            {(Array.isArray(story.results) ? story.results : []).map((result, resultIndex) => (
                                                <li key={resultIndex} className="flex items-center text-sm text-gray-600">
                                                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                    {result}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    
                                    <div className="mb-6">
                                        <h4 className="text-lg font-semibold text-gray-900 mb-3">
                                            {content?.participating_creators_title || '참여 크리에이터'}
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {(Array.isArray(story.creators) ? story.creators : []).map((creator, creatorIndex) => (
                                                <span key={creatorIndex} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                                                    {creator}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    <div className="bg-gray-50 rounded-lg p-4">
                                        <blockquote className="text-gray-700 italic mb-2">
                                            "{story.testimonial}"
                                        </blockquote>
                                        <cite className="text-sm text-gray-500">- {story.clientName}</cite>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
