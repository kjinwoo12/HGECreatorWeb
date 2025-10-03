'use client';

export default function ParticipateRequirementsSection({ content, requirements }) {
    return (
        <div className="bg-white py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900">{content?.requirements_title || '참여 요건'}</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        {content?.requirements_subtitle || '성공적인 협업을 위한 기본 요건들입니다.'}
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
    );
}
