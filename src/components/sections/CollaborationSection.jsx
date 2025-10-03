'use client';

import { useDataStore } from '@/lib/dataStore';

export default function CollaborationSection() {
    const { siteContent } = useDataStore();
    const content = siteContent;
    const collaborationSteps = [
        {
            step: 1,
            title: '프로젝트 등록',
            description: '게임 정보와 필요한 크리에이터 유형을 등록해주세요.',
            details: [
                '게임 장르, 타겟 오디언스, 출시 일정 등 기본 정보 제공',
                '필요한 협업 유형 선택 (스트리밍, 일러스트, 성우, 이벤트 등)',
                '예산 범위와 협업 기간 설정'
            ]
        },
        {
            step: 2,
            title: '크리에이터 매칭',
            description: '프로젝트에 적합한 크리에이터를 추천해드립니다.',
            details: [
                'AI 기반 매칭 시스템으로 최적의 크리에이터 선별',
                '포트폴리오, 경험, 가용성을 종합적으로 고려',
                '3-5명의 후보 크리에이터 프로필 제공'
            ]
        },
        {
            step: 3,
            title: '협업 협의',
            description: '선택한 크리에이터와 구체적인 협업 내용을 협의합니다.',
            details: [
                '협업 범위, 일정, 보상 등 세부 사항 논의',
                '계약서 작성 및 법적 검토 지원',
                '프로젝트 킥오프 미팅 주선'
            ]
        },
        {
            step: 4,
            title: '협업 진행',
            description: '전담 매니저가 협업 과정을 관리하고 지원합니다.',
            details: [
                '정기적인 진행 상황 점검 및 보고',
                '이슈 발생 시 신속한 중재 및 해결',
                '품질 관리 및 피드백 조율'
            ]
        },
        {
            step: 5,
            title: '결과 평가',
            description: '협업 결과를 평가하고 향후 협업을 위한 피드백을 수집합니다.',
            details: [
                '협업 성과 측정 및 분석',
                '양방향 피드백 수집 및 개선점 도출',
                '성공 사례 등록 및 홍보 지원'
            ]
        }
    ];

    const benefits = [
        {
            title: '서브컬처 게임 강화',
            description: '전문 크리에이터와의 협업을 통해 게임의 서브컬처적 매력을 극대화합니다.',
            icon: '🎮'
        },
        {
            title: '홍보 효과 증대',
            description: '크리에이터의 팬층을 활용한 자연스러운 게임 홍보가 가능합니다.',
            icon: '📢'
        },
        {
            title: '컨벤션 연계',
            description: '국내외 게임 컨벤션과 연계한 오프라인 홍보 기회를 제공합니다.',
            icon: '🏟️'
        },
        {
            title: '코스플레이 이벤트',
            description: '게임 캐릭터 코스플레이를 통한 팬 참여형 마케팅을 지원합니다.',
            icon: '👗'
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* 페이지 헤더 */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                            {content.collaboration?.title || '협업 프로세스'}
                        </h1>
                        <p className="mt-4 text-xl text-indigo-100">
                            {content.collaboration?.subtitle || '체계적이고 전문적인 협업 프로세스로 성공적인 게임 홍보를 지원합니다.'}
                        </p>
                    </div>
                </div>
            </div>

            {/* 협업 단계 */}
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900">{content.collaboration?.process_title || '5단계 협업 프로세스'}</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        {content.collaboration?.process_subtitle || '간단한 등록부터 성과 분석까지, 모든 과정을 체계적으로 관리합니다.'}
                    </p>
                </div>

                <div className="space-y-12">
                    {collaborationSteps.map((step, index) => (
                        <div key={step.step} className="relative">

                            <div className={`lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center ${index % 2 === 0 ? '' : 'lg:grid-flow-row-dense'
                                }`}>
                                {/* 단계 번호와 제목 */}
                                <div className={`${index % 2 === 0 ? '' : 'lg:col-start-2'}`}>
                                    <div className="flex items-center mb-4">
                                        <div className="flex items-center justify-center w-16 h-16 bg-indigo-600 text-white rounded-full text-xl font-bold">
                                            {step.step}
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                                        </div>
                                    </div>
                                    <p className="text-lg text-gray-600 mb-6">{step.description}</p>
                                    <ul className="space-y-2">
                                        {step.details.map((detail, detailIndex) => (
                                            <li key={detailIndex} className="flex items-start">
                                                <svg className="h-5 w-5 text-indigo-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span className="text-gray-600">{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* 일러스트 영역 */}
                                <div className={`mt-8 lg:mt-0 ${index % 2 === 0 ? 'lg:col-start-2' : 'lg:col-start-1'}`}>
                                    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-8 h-64 flex items-center justify-center">
                                        <div className="text-6xl">
                                            {index === 0 && '📝'}
                                            {index === 1 && '🤝'}
                                            {index === 2 && '💬'}
                                            {index === 3 && '🚀'}
                                            {index === 4 && '📊'}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 협업 혜택 */}
            <div className="bg-gray-50 py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">{content.collaboration?.benefits_title || '협업 혜택'}</h2>
                        <p className="mt-4 text-lg text-gray-600">
                            {content.collaboration?.benefits_subtitle || 'HGE Creator와의 협업으로 얻을 수 있는 다양한 혜택들입니다.'}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
                                <div className="text-4xl mb-4">{benefit.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                                <p className="text-gray-600">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA 섹션 */}
            <div className="bg-indigo-600 py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white">
                        {content.collaboration?.cta_title || '지금 바로 협업을 시작하세요'}
                    </h2>
                    <p className="mt-4 text-xl text-indigo-100">
                        {content.collaboration?.cta_subtitle || '전문적인 협업 프로세스로 여러분의 게임을 성공으로 이끌어드리겠습니다.'}
                    </p>
                    <div className="mt-8">
                        <a
                            href="/participate"
                            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 transition-colors"
                        >
                            {content.collaboration?.cta_button || '협업 신청하기'}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
