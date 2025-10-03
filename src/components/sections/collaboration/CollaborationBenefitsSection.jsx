export default function CollaborationBenefitsSection({ content, benefits }) {
    return (
        <div className="bg-gray-50 py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900">{content?.benefits_title || '협업 혜택'}</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        {content?.benefits_subtitle || 'HGE Creator와의 협업으로 얻을 수 있는 다양한 혜택들입니다.'}
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
    );
}
