'use client';

export default function ParticipateTargetSection({ content, participationTypes }) {
    return (
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900">{content?.target_title || 'Error'}</h2>
                <p className="mt-4 text-lg text-gray-600">
                    {content?.target_subtitle || 'Error'}
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
                            <h4 className="text-lg font-semibold text-gray-900 mb-4">{content?.target_services_title || 'Error'}</h4>
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
    );
}
