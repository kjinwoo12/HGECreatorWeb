'use client';

export default function ParticipateApplicationSection({ content }) {
    return (
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">{content?.form_title || '협업 신청'}</h2>
                <p className="mt-4 text-lg text-gray-600">
                    {content?.form_subtitle || '아래 버튼을 클릭하여 구글 설문을 통해 협업을 신청해주세요. 2-3일 내에 전담 매니저가 연락드리겠습니다.'}
                </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
                <div className="text-center">
                    <div className="text-6xl mb-6">📝</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {content?.application_title || '협업 신청서 작성'}
                    </h3>
                    <p className="text-gray-600 mb-8">
                        {content?.application_description || '구글 설문 양식을 통해 간편하게 협업을 신청하실 수 있습니다.'}
                    </p>
                    
                    <a
                        href="https://forms.gle/your-google-form-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
                    >
                        <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        {content?.application_button || '협업 신청하기'}
                    </a>
                    
                    <div className="mt-6 text-sm text-gray-500">
                        <p>{content?.application_note || '새 창에서 구글 설문이 열립니다.'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
