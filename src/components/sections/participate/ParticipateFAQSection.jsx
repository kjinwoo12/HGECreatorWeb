'use client';

export default function ParticipateFAQSection({ content }) {
    return (
        <div className="bg-white py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900">{content?.faq_title || 'Error'}</h2>
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <div className="bg-gray-50 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {content?.faq1_question || 'Error'}
                        </h3>
                        <p className="text-gray-600">
                            {content?.faq1_answer || 'Error'}
                        </p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {content?.faq2_question || 'Error'}
                        </h3>
                        <p className="text-gray-600">
                            {content?.faq2_answer || 'Error'}
                        </p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {content?.faq3_question || 'Error'}
                        </h3>
                        <p className="text-gray-600">
                            {content?.faq3_answer || 'Error'}
                        </p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {content?.faq4_question || 'Error?'}
                        </h3>
                        <p className="text-gray-600">
                            {content?.faq4_answer || 'Error'}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
