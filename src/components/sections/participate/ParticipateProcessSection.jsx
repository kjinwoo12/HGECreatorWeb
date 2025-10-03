'use client';

export default function ParticipateProcessSection({ content, process }) {
    return (
        <div className="bg-gray-50 py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900">{content?.process_title || '참여 프로세스'}</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        {content?.process_subtitle || '간단한 4단계로 협업을 시작할 수 있습니다.'}
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
    );
}
