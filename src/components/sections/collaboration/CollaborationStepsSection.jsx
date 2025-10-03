export default function CollaborationStepsSection({ content, steps }) {
    return (
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900">{content?.process_title || '5단계 협업 프로세스'}</h2>
                <p className="mt-4 text-lg text-gray-600">
                    {content?.process_subtitle || '간단한 등록부터 성과 분석까지, 모든 과정을 체계적으로 관리합니다.'}
                </p>
            </div>

            <div className="space-y-12">
                {steps.map((step, index) => (
                    <div key={step.step} className="relative">
                        <div className={`lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center ${index % 2 === 0 ? '' : 'lg:grid-flow-row-dense'}`}>
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
    );
}
