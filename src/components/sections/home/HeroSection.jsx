import Link from 'next/link';

export default function HeroSection({ content, statistics }) {
    // 기본값 설정 (fallback용)
    const defaultContent = {
        title: "HGE Creator",
        subtitle: "HGE Creator Network",
        description: "인디 게임 개발자와 크리에이터를 연결하는 플랫폼입니다. 함께 성장하고 더 나은 게임 문화를 만들어가세요.",
        primary_button: "크리에이터 찾기",
        secondary_button: "협업 시작하기"
    };
    
    // props로 받은 content를 우선 사용, 없으면 기본값 사용
    const homeContent = content ? { ...defaultContent, ...content } : defaultContent;

    // statistics props를 그대로 사용 (언어별 콘텐츠)
    const statsContent = statistics || {};
    
    return (
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white">
            {/* 배경 패턴 */}
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute inset-0 opacity-40" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%239C92AC' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>

            <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
                <div className="text-center">
                    {/* 메인 타이틀 */}
                    <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                        <span className="block">{homeContent.subtitle}</span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
                            {homeContent.title}
                        </span>
                    </h1>

                    {/* 서브 타이틀 */}
                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300 sm:text-xl">
                        {homeContent.description}
                    </p>

                    {/* 통계 */}
                    <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                            <div className="text-3xl font-bold text-yellow-400">
                                {statsContent?.statistics_creators_value || homeContent?.statistics_creators_value || '150+'}
                            </div>
                            <div className="text-sm text-gray-300 mt-1">
                                {statsContent?.statistics_creators_label || homeContent?.statistics_creators_label || '등록된 크리에이터'}
                            </div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                            <div className="text-3xl font-bold text-pink-400">
                                {statsContent?.statistics_projects_value || homeContent?.statistics_projects_value || '80+'}
                            </div>
                            <div className="text-sm text-gray-300 mt-1">
                                {statsContent?.statistics_projects_label || homeContent?.statistics_projects_label || '성공한 협업 프로젝트'}
                            </div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                            <div className="text-3xl font-bold text-blue-400">
                                {statsContent?.statistics_companies_value || homeContent?.statistics_companies_value || '45+'}
                            </div>
                            <div className="text-sm text-gray-300 mt-1">
                                {statsContent?.statistics_companies_label || homeContent?.statistics_companies_label || '파트너 게임 회사'}
                            </div>
                        </div>
                    </div>

                    {/* CTA 버튼 */}
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/creators"
                            className="rounded-full bg-white px-8 py-3 text-lg font-semibold text-gray-900 shadow-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
                        >
                            {homeContent.primary_button}
                        </Link>
                        <Link
                            href="/participate"
                            className="rounded-full border-2 border-white px-8 py-3 text-lg font-semibold text-white hover:bg-white hover:text-gray-900 transition-all duration-200"
                        >
                            {homeContent.secondary_button}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
