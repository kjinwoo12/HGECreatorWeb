'use client';

export default function ParticipateHeaderSection({ content }) {
    return (
        <div className="bg-indigo-600 text-white">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                        {content?.title || 'Error'}
                    </h1>
                    <p className="mt-4 text-xl text-indigo-100">
                        {content?.subtitle || 'Error'}
                    </p>
                </div>
            </div>
        </div>
    );
}
