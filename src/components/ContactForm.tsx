'use client';

import { useState } from 'react';

interface FormData {
    companyName: string;
    contactName: string;
    email: string;
    phone: string;
    gameTitle: string;
    gameGenre: string;
    targetLaunch: string;
    collaborationType: string[];
    budget: string;
    description: string;
    additionalInfo: string;
}

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        companyName: '',
        contactName: '',
        email: '',
        phone: '',
        gameTitle: '',
        gameGenre: '',
        targetLaunch: '',
        collaborationType: [],
        budget: '',
        description: '',
        additionalInfo: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const collaborationTypes = [
        { id: 'streaming', label: '스트리밍 협업', description: '게임 플레이 방송, 리뷰 영상' },
        { id: 'illustration', label: '일러스트', description: '팬아트, 프로모션 이미지' },
        { id: 'voice-acting', label: '성우', description: '캐릭터 더빙, 나레이션' },
        { id: 'event-coordination', label: '이벤트 기획', description: '런칭 이벤트, 컨벤션 참여' },
        { id: 'content-creation', label: '콘텐츠 제작', description: '영상 콘텐츠, 소셜미디어' },
        { id: 'marketing', label: '마케팅', description: '홍보 전략, 커뮤니티 관리' }
    ];

    const gameGenres = [
        'RPG', 'Action', 'Adventure', 'Puzzle', 'Strategy', 'Simulation',
        'Sports', 'Racing', 'Shooter', 'Platform', 'Fighting', 'Horror', '기타'
    ];

    const budgetRanges = [
        '100만원 미만',
        '100만원 - 300만원',
        '300만원 - 500만원',
        '500만원 - 1,000만원',
        '1,000만원 이상',
        '협의 후 결정'
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleCollaborationTypeChange = (typeId: string) => {
        setFormData(prev => ({
            ...prev,
            collaborationType: prev.collaborationType.includes(typeId)
                ? prev.collaborationType.filter(id => id !== typeId)
                : [...prev.collaborationType, typeId]
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // 실제 구현에서는 API 엔드포인트로 데이터를 전송
            console.log('Form Data:', formData);

            // 시뮬레이션을 위한 지연
            await new Promise(resolve => setTimeout(resolve, 2000));

            setSubmitStatus('success');
            setFormData({
                companyName: '',
                contactName: '',
                email: '',
                phone: '',
                gameTitle: '',
                gameGenre: '',
                targetLaunch: '',
                collaborationType: [],
                budget: '',
                description: '',
                additionalInfo: ''
            });
        } catch (error) {
            setSubmitStatus('error');
            console.error('Form submission error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitStatus === 'success') {
        return (
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8 text-center">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                    <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                    협업 신청이 완료되었습니다!
                </h3>
                <p className="text-gray-600 mb-6">
                    2-3일 내에 전담 매니저가 연락드릴 예정입니다.
                    더 궁금한 사항이 있으시면 언제든 문의해주세요.
                </p>
                <button
                    onClick={() => setSubmitStatus('idle')}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-indigo-100 hover:bg-indigo-200 transition-colors"
                >
                    새로운 신청서 작성
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
            <div className="space-y-6">
                {/* 기본 정보 */}
                <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">기본 정보</h3>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                                회사명 *
                            </label>
                            <input
                                type="text"
                                name="companyName"
                                id="companyName"
                                required
                                value={formData.companyName}
                                onChange={handleInputChange}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="contactName" className="block text-sm font-medium text-gray-700">
                                담당자명 *
                            </label>
                            <input
                                type="text"
                                name="contactName"
                                id="contactName"
                                required
                                value={formData.contactName}
                                onChange={handleInputChange}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                이메일 *
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                required
                                value={formData.email}
                                onChange={handleInputChange}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                연락처 *
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                required
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>
                    </div>
                </div>

                {/* 게임 정보 */}
                <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">게임 정보</h3>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="gameTitle" className="block text-sm font-medium text-gray-700">
                                게임 제목 *
                            </label>
                            <input
                                type="text"
                                name="gameTitle"
                                id="gameTitle"
                                required
                                value={formData.gameTitle}
                                onChange={handleInputChange}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="gameGenre" className="block text-sm font-medium text-gray-700">
                                게임 장르 *
                            </label>
                            <select
                                name="gameGenre"
                                id="gameGenre"
                                required
                                value={formData.gameGenre}
                                onChange={handleInputChange}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            >
                                <option value="">장르를 선택하세요</option>
                                {gameGenres.map((genre) => (
                                    <option key={genre} value={genre}>{genre}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label htmlFor="targetLaunch" className="block text-sm font-medium text-gray-700">
                                예상 출시일
                            </label>
                            <input
                                type="month"
                                name="targetLaunch"
                                id="targetLaunch"
                                value={formData.targetLaunch}
                                onChange={handleInputChange}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="budget" className="block text-sm font-medium text-gray-700">
                                협업 예산
                            </label>
                            <select
                                name="budget"
                                id="budget"
                                value={formData.budget}
                                onChange={handleInputChange}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            >
                                <option value="">예산 범위를 선택하세요</option>
                                {budgetRanges.map((range) => (
                                    <option key={range} value={range}>{range}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* 협업 유형 */}
                <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">원하는 협업 유형 *</h3>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {collaborationTypes.map((type) => (
                            <div key={type.id} className="relative">
                                <label className="flex items-start p-4 border border-gray-200 rounded-lg cursor-pointer hover:border-indigo-300">
                                    <input
                                        type="checkbox"
                                        checked={formData.collaborationType.includes(type.id)}
                                        onChange={() => handleCollaborationTypeChange(type.id)}
                                        className="mt-1 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                    />
                                    <div className="ml-3">
                                        <div className="text-sm font-medium text-gray-900">{type.label}</div>
                                        <div className="text-sm text-gray-500">{type.description}</div>
                                    </div>
                                </label>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 상세 설명 */}
                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                        게임 및 협업 상세 설명 *
                    </label>
                    <textarea
                        name="description"
                        id="description"
                        rows={4}
                        required
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="게임의 특징, 타겟 오디언스, 원하는 협업 방향 등을 자세히 설명해주세요."
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>

                {/* 추가 정보 */}
                <div>
                    <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700">
                        추가 요청사항
                    </label>
                    <textarea
                        name="additionalInfo"
                        id="additionalInfo"
                        rows={3}
                        value={formData.additionalInfo}
                        onChange={handleInputChange}
                        placeholder="특별한 요청사항이나 질문이 있다면 작성해주세요."
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>

                {/* 제출 버튼 */}
                <div className="pt-6">
                    <button
                        type="submit"
                        disabled={isSubmitting || formData.collaborationType.length === 0}
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                처리 중...
                            </>
                        ) : (
                            '협업 신청하기'
                        )}
                    </button>
                </div>

                {submitStatus === 'error' && (
                    <div className="rounded-md bg-red-50 p-4">
                        <div className="flex">
                            <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                            <div className="ml-3">
                                <h3 className="text-sm font-medium text-red-800">
                                    신청 처리 중 오류가 발생했습니다.
                                </h3>
                                <div className="mt-2 text-sm text-red-700">
                                    <p>잠시 후 다시 시도하거나 직접 연락해주세요.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </form>
    );
}
