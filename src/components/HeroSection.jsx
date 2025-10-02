import Link from 'next/link';

export default function HeroSection({ content, statistics }) {
    // 기본값 설정
    const heroContent = content || {
        title: "인디 게임과 크리에이터를 연결",
        subtitle: "인디 게임과",
        description: "260명의 다양한 크리에이터와 함께하는 인디 게임 생태계의 새로운 시작.",
        primaryButtonText: "크리에이터 둘러보기",
        primaryButtonLink: "/creators",
        secondaryButtonText: "협업 시작하기",
        secondaryButtonLink: "/participate"
    };

    const statsContent = statistics || {
        creators: { value: "260+", label: "등록된 크리에이터" },
        projects: { value: "150+", label: "성공한 협업 프로젝트" },
        companies: { value: "50+", label: "파트너 게임 회사" }
    };
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
                        <span className="block">{heroContent.subtitle}</span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
                            {heroContent.title.replace(heroContent.subtitle, '').trim()}
                        </span>
                    </h1>

                    {/* 서브 타이틀 */}
                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300 sm:text-xl">
                        {heroContent.description}
                    </p>

                    {/* 통계 */}
                    <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                            <div className="text-3xl font-bold text-yellow-400">{statsContent.creators.value}</div>
                            <div className="text-sm text-gray-300 mt-1">{statsContent.creators.label}</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                            <div className="text-3xl font-bold text-pink-400">{statsContent.projects.value}</div>
                            <div className="text-sm text-gray-300 mt-1">{statsContent.projects.label}</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                            <div className="text-3xl font-bold text-blue-400">{statsContent.companies.value}</div>
                            <div className="text-sm text-gray-300 mt-1">{statsContent.companies.label}</div>
                        </div>
                    </div>

                    {/* CTA 버튼 */}
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href={heroContent.primaryButtonLink}
                            className="rounded-full bg-white px-8 py-3 text-lg font-semibold text-gray-900 shadow-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
                        >
                            {heroContent.primaryButtonText}
                        </Link>
                        <Link
                            href={heroContent.secondaryButtonLink}
                            className="rounded-full border-2 border-white px-8 py-3 text-lg font-semibold text-white hover:bg-white hover:text-gray-900 transition-all duration-200"
                        >
                            {heroContent.secondaryButtonText}
                        </Link>
                    </div>
                </div>
            </div>

            {/* 하단 곡선 */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 120" className="w-full h-12 text-white fill-current">
                    <path d="M0,120 C240,40 480,40 720,80 C960,120 1200,120 1440,80 L1440,120 L0,120 Z"></path>
                </svg>
            </div>
        </section >
    );
}
