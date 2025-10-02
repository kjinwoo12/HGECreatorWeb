import Image from 'next/image';

export default function CreatorCard({ creator }) {
    const getCategoryColor = (category) => {
        const colors = {
            'streaming': 'bg-purple-100 text-purple-800',
            'illustration': 'bg-pink-100 text-pink-800',
            'voice-acting': 'bg-blue-100 text-blue-800',
            'event-coordination': 'bg-green-100 text-green-800',
            'content-creation': 'bg-yellow-100 text-yellow-800',
            'marketing': 'bg-indigo-100 text-indigo-800',
        };
        return colors[category] || 'bg-gray-100 text-gray-800';
    };

    const getCategoryLabel = (category) => {
        const labels = {
            'streaming': '스트리밍',
            'illustration': '일러스트',
            'voice-acting': '성우',
            'event-coordination': '이벤트',
            'content-creation': '콘텐츠',
            'marketing': '마케팅',
        };
        return labels[category] || category;
    };

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
            {/* 프로필 이미지 */}
            <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200">
                {creator.profileImage ? (
                    <Image
                        src={creator.profileImage}
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
                        {creator.isAvailable ? '협업 가능' : '협업 불가'}
                    </span>
                </div>
            </div>

            {/* 카드 내용 */}
            <div className="p-6">
                {/* 이름과 카테고리 */}
                <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900 truncate pr-2">
                        {creator.name}
                    </h3>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(creator.category)}`}>
                        {getCategoryLabel(creator.category)}
                    </span>
                </div>

                {/* 설명 */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {creator.description}
                </p>

                {/* 전문 분야 */}
                <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">전문 분야</h4>
                    <div className="flex flex-wrap gap-1">
                        {creator.specialties.slice(0, 3).map((specialty, index) => (
                            <span
                                key={index}
                                className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-800"
                            >
                                {specialty}
                            </span>
                        ))}
                        {creator.specialties.length > 3 && (
                            <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-800">
                                +{creator.specialties.length - 3}
                            </span>
                        )}
                    </div>
                </div>

                {/* 소셜 링크 */}
                <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                        {creator.socialLinks.youtube && (
                            <a
                                href={creator.socialLinks.youtube}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-red-500 transition-colors"
                            >
                                <span className="sr-only">YouTube</span>
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                            </a>
                        )}
                        {creator.socialLinks.twitch && (
                            <a
                                href={creator.socialLinks.twitch}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-purple-500 transition-colors"
                            >
                                <span className="sr-only">Twitch</span>
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z" />
                                </svg>
                            </a>
                        )}
                        {creator.socialLinks.twitter && (
                            <a
                                href={creator.socialLinks.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-blue-500 transition-colors"
                            >
                                <span className="sr-only">Twitter</span>
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                </svg>
                            </a>
                        )}
                        {creator.socialLinks.instagram && (
                            <a
                                href={creator.socialLinks.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-pink-500 transition-colors"
                            >
                                <span className="sr-only">Instagram</span>
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.315 0-.595-.122-.807-.315-.21-.21-.315-.49-.315-.807s.105-.595.315-.807c.21-.21.49-.315.807-.315s.595.105.807.315c.21.21.315.49.315.807s-.105.595-.315.807c-.21.193-.49.315-.807.315z" />
                                </svg>
                            </a>
                        )}
                    </div>

                    <button className="text-indigo-600 hover:text-indigo-500 text-sm font-medium">
                        상세 보기
                    </button>
                </div>
            </div>
        </div>
    );
}
