'use client';

export default function ParticipateApplicationSection({ content }) {
    return (
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">{content?.form_title || 'Error'}</h2>
                <p className="mt-4 text-lg text-gray-600">
                    {content?.form_subtitle || 'Error'}
                </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
                <div className="text-center">
                    <div className="text-6xl mb-6">📝</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {content?.application_title || 'Error'}
                    </h3>
                    <p className="text-gray-600 mb-8">
                        {content?.application_description || 'Error'}
                    </p>
                    
                    <a
                        href="https://forms.gle/ooW3U4iBNaSUhKtY8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
                    >
                        <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        {content?.application_button || 'Error'}
                    </a>
                    
                    <div className="mt-6 text-sm text-gray-500">
                        <p>{content?.application_note || 'Error'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
