import ContactForm from '@/components/ContactForm';

export default function ParticipatePage() {
    const participationTypes = [
        {
            title: '게임 개발사',
            description: '인디 게임을 개발하는 회사나 개인 개발자',
            features: [
                '크리에이터 매칭 서비스',
                '협업 프로세스 관리',
                '마케팅 전략 수립',
                '성과 분석 및 보고'
            ],
            icon: '🎮'
        },
        {
            title: '크리에이터',
            description: '다양한 분야의 콘텐츠 크리에이터',
            features: [
                '게임 협업 기회 제공',
                '정당한 보상 보장',
                '포트폴리오 관리',
                '전문성 개발 지원'
            ],
            icon: '🎨'
        }
    ];

    const requirements = [
        {
            category: '게임 개발사',
            items: [
                '개발 중이거나 출시 예정인 게임 보유',
                '협업에 대한 명확한 목표와 예산',
                '크리에이터와의 소통 의지',
                '게임 관련 자료 제공 가능'
            ]
        },
        {
            category: '크리에이터',
            items: [
                '해당 분야 1년 이상 경력',
                '포트폴리오 또는 활동 실적',
                '정기적인 콘텐츠 제작 능력',
                '게임에 대한 관심과 이해'
            ]
        }
    ];

    const process = [
        {
            step: 1,
            title: '신청서 제출',
            description: '아래 양식을 통해 협업 신청서를 제출해주세요.'
        },
        {
            step: 2,
            title: '검토 및 상담',
            description: '2-3일 내에 전담 매니저가 연락드려 상세 상담을 진행합니다.'
        },
        {
            step: 3,
            title: '매칭 및 협의',
            description: '적합한 크리에이터를 매칭하고 협업 조건을 협의합니다.'
        },
        {
            step: 4,
            title: '협업 시작',
            description: '계약 체결 후 본격적인 협업을 시작합니다.'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* 페이지 헤더 */}
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                            협업 참여하기
                        </h1>
                        <p className="mt-4 text-xl text-purple-100">
                            HGE Creator와 함께 게임 업계의 새로운 성공 스토리를 만들어가세요.
                        </p>
                    </div>
                </div>
            </div>

            {/* 참여 대상 */}
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900">참여 대상</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        다양한 형태의 협업 파트너를 찾고 있습니다.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    {participationTypes.map((type, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
                            <div className="text-center mb-6">
                                <div className="text-6xl mb-4">{type.icon}</div>
                                <h3 className="text-2xl font-bold text-gray-900">{type.title}</h3>
                                <p className="mt-2 text-gray-600">{type.description}</p>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-gray-900 mb-4">제공 서비스</h4>
                                <ul className="space-y-2">
                                    {type.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-start">
                                            <svg className="h-5 w-5 text-purple-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 참여 요건 */}
            <div className="bg-white py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">참여 요건</h2>
                        <p className="mt-4 text-lg text-gray-600">
                            성공적인 협업을 위한 기본 요건들입니다.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                        {requirements.map((requirement, index) => (
                            <div key={index} className="bg-gray-50 rounded-lg p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{requirement.category}</h3>
                                <ul className="space-y-2">
                                    {requirement.items.map((item, itemIndex) => (
                                        <li key={itemIndex} className="flex items-start">
                                            <svg className="h-5 w-5 text-indigo-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 참여 프로세스 */}
            <div className="bg-gray-50 py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">참여 프로세스</h2>
                        <p className="mt-4 text-lg text-gray-600">
                            간단한 4단계로 협업을 시작할 수 있습니다.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {process.map((step, index) => (
                            <div key={step.step} className="text-center">
                                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-purple-600 text-white text-xl font-bold mb-4">
                                    {step.step}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                                <p className="text-gray-600">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 협업 신청 폼 */}
            <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900">협업 신청</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        아래 양식을 작성하여 협업을 신청해주세요.
                        2-3일 내에 전담 매니저가 연락드리겠습니다.
                    </p>
                </div>

                <ContactForm />
            </div>

            {/* FAQ 섹션 */}
            <div className="bg-white py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">자주 묻는 질문</h2>
                    </div>

                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                        <div className="bg-gray-50 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                협업 비용은 어떻게 결정되나요?
                            </h3>
                            <p className="text-gray-600">
                                프로젝트 규모, 협업 유형, 기간 등을 종합적으로 고려하여 결정됩니다.
                                상담을 통해 예산에 맞는 최적의 방안을 제안해드립니다.
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                협업 기간은 얼마나 걸리나요?
                            </h3>
                            <p className="text-gray-600">
                                협업 유형에 따라 다르지만, 일반적으로 2주~3개월 정도 소요됩니다.
                                프로젝트 특성에 맞는 일정을 협의하여 진행합니다.
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                작은 인디 게임도 협업이 가능한가요?
                            </h3>
                            <p className="text-gray-600">
                                물론입니다. 게임 규모와 예산에 맞는 다양한 협업 옵션을 제공합니다.
                                작은 프로젝트도 성공적인 협업이 가능합니다.
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                해외 게임도 협업 대상인가요?
                            </h3>
                            <p className="text-gray-600">
                                네, 해외 게임 회사와의 협업도 가능합니다.
                                글로벌 마케팅 경험이 있는 크리에이터들과 매칭해드립니다.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 연락처 정보 */}
            <div className="bg-purple-600 py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white">
                        더 궁금한 점이 있으신가요?
                    </h2>
                    <p className="mt-4 text-xl text-purple-100">
                        언제든 연락주세요. 전문 상담원이 도움을 드리겠습니다.
                    </p>
                    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                        <div className="text-purple-100">
                            <div className="text-lg font-semibold">이메일</div>
                            <div>contact@hgecreator.com</div>
                        </div>
                        <div className="text-purple-100">
                            <div className="text-lg font-semibold">전화</div>
                            <div>02-1234-5678</div>
                        </div>
                        <div className="text-purple-100">
                            <div className="text-lg font-semibold">운영시간</div>
                            <div>평일 09:00 - 18:00</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
