export default function CoreValuesSection({ content }) {
    const coreValues = [
        {
            title: content?.core_values_value1_title || '상호 성장',
            description: content?.core_values_value1_description || '개발자와 크리에이터가 함께 성장할 수 있는 환경을 만듭니다'
        },
        {
            title: content?.core_values_value2_title || '창의적 협업',
            description: content?.core_values_value2_description || '다양한 분야의 전문가들이 창의적으로 협업할 수 있도록 지원합니다'
        },
        {
            title: content?.core_values_value3_title || '투명한 소통',
            description: content?.core_values_value3_description || '명확하고 투명한 소통을 통해 신뢰할 수 있는 관계를 구축합니다'
        },
        {
            title: content?.core_values_value4_title || '지속가능한 생태계',
            description: content?.core_values_value4_description || '장기적으로 지속가능한 게임 크리에이터 생태계를 구축합니다'
        }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        {content?.core_values_title || '우리의 핵심 가치'}
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        {content?.core_values_subtitle || 'HGE Creator가 추구하는 가치를 소개합니다.'}
                    </p>
                </div>
                <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {coreValues.map((value, index) => (
                        <div key={index} className="text-center">
                            <h3 className="mt-4 text-xl font-semibold text-gray-900">{value.title}</h3>
                            <p className="mt-2 text-gray-600">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
