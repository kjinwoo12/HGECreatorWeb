
export default function SuccessStoriesPage() {
    const successStories = [
        {
            id: 1,
            title: '픽셀 아트 RPG "몽환의 여행" 대성공',
            gameTitle: '몽환의 여행',
            company: '인디스튜디오 A',
            collaborationType: '스트리밍 + 일러스트',
            description: '인디 RPG 게임의 스트리밍 협업과 팬아트 캠페인을 통해 런칭 첫 달 10만 다운로드를 달성했습니다.',
            results: [
                '런칭 첫 달 10만 다운로드 달성',
                'YouTube 리뷰 영상 누적 조회수 50만회',
                '팬아트 이벤트 참여작 200개 이상',
                'Steam 평점 9.2/10 달성'
            ],
            creators: ['게임스트리머 김민수', '일러스트레이터 박지은'],
            image: '/success-stories/story1.jpg',
            date: '2024년 8월',
            testimonial: '크리에이터들의 진정성 있는 리뷰와 아름다운 팬아트 덕분에 게임이 많은 사랑을 받을 수 있었습니다.',
            clientName: '인디스튜디오 A 대표 이○○'
        },
        {
            id: 2,
            title: '모바일 퍼즐게임 "브레인 챌린지" 바이럴 성공',
            gameTitle: '브레인 챌린지',
            company: '모바일게임즈',
            collaborationType: '콘텐츠 제작 + 마케팅',
            description: '숏폼 콘텐츠와 소셜미디어 마케팅을 통해 단기간에 100만 다운로드를 돌파했습니다.',
            results: [
                '3개월 만에 100만 다운로드 돌파',
                'TikTok 챌린지 영상 1000만 조회수',
                'YouTube Shorts 누적 조회수 500만회',
                '일평균 활성 사용자 50% 증가'
            ],
            creators: ['콘텐츠 크리에이터 정다혜'],
            image: '/success-stories/story2.jpg',
            date: '2024년 6월',
            testimonial: '젊은 세대를 타겟으로 한 바이럴 마케팅이 예상보다 훨씬 큰 효과를 가져왔습니다.',
            clientName: '모바일게임즈 마케팅팀장 김○○'
        },
        {
            id: 3,
            title: '액션게임 "네온 나이트" 컨벤션 이벤트',
            gameTitle: '네온 나이트',
            company: '게임팩토리',
            collaborationType: '이벤트 기획 + 성우',
            description: '게임 컨벤션에서의 대규모 이벤트와 성우 더빙으로 브랜드 인지도를 크게 높였습니다.',
            results: [
                '게임 컨벤션 부스 방문객 1만명',
                '코스플레이 이벤트 참가자 500명',
                '성우 더빙 트레일러 조회수 200만회',
                '사전 예약 20만건 달성'
            ],
            creators: ['이벤트 기획자 최유진', '성우 이성민'],
            image: '/success-stories/story3.jpg',
            date: '2024년 9월',
            testimonial: '오프라인 이벤트의 파급력이 생각보다 컸고, 성우님의 전문적인 더빙이 게임 퀄리티를 한층 높여주었습니다.',
            clientName: '게임팩토리 개발팀장 박○○'
        }
    ];

    const stats = [
        { label: '총 협업 프로젝트', value: '150+', description: '성공적으로 완료된 협업 프로젝트' },
        { label: '평균 성과 향상', value: '300%', description: '협업 전 대비 평균 다운로드 증가율' },
        { label: '고객 만족도', value: '98%', description: '협업 완료 후 고객 만족도 조사 결과' },
        { label: '재협업률', value: '85%', description: '한 번 협업한 게임사의 재협업 비율' }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* 페이지 헤더 */}
            <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                            성공 사례
                        </h1>
                        <p className="mt-4 text-xl text-green-100">
                            HGE Creator와 함께한 게임들의 놀라운 성공 스토리를 확인해보세요.
                        </p>
                    </div>
                </div>
            </div>

            {/* 통계 섹션 */}
            <div className="bg-gray-50 py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">협업 성과</h2>
                        <p className="mt-4 text-lg text-gray-600">
                            숫자로 보는 HGE Creator의 협업 성과입니다.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
                                <div className="text-3xl font-bold text-indigo-600 mb-2">{stat.value}</div>
                                <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                                <div className="text-sm text-gray-600">{stat.description}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 성공 사례 목록 */}
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900">주요 성공 사례</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        다양한 장르의 게임들이 어떻게 성공을 이뤄냈는지 살펴보세요.
                    </p>
                </div>

                <div className="space-y-16">
                    {successStories.map((story, index) => (
                        <div key={story.id} className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                            <div className={`lg:grid lg:grid-cols-2 lg:gap-8 ${index % 2 === 0 ? '' : 'lg:grid-flow-row-dense'}`}>
                                {/* 이미지 */}
                                <div className={`relative h-64 lg:h-full ${index % 2 === 0 ? '' : 'lg:col-start-2'}`}>
                                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                                        <div className="text-white text-center">
                                            <div className="text-6xl mb-4">🎮</div>
                                            <div className="text-xl font-bold">{story.gameTitle}</div>
                                        </div>
                                    </div>
                                </div>

                                {/* 내용 */}
                                <div className={`p-8 ${index % 2 === 0 ? '' : 'lg:col-start-1'}`}>
                                    <div className="flex items-center mb-4">
                                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                                            {story.collaborationType}
                                        </span>
                                        <span className="ml-2 text-sm text-gray-500">{story.date}</span>
                                    </div>

                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{story.title}</h3>
                                    <div className="text-sm text-gray-600 mb-4">
                                        {story.company} · {story.gameTitle}
                                    </div>

                                    <p className="text-gray-700 mb-6">{story.description}</p>

                                    {/* 성과 */}
                                    <div className="mb-6">
                                        <h4 className="text-lg font-semibold text-gray-900 mb-3">주요 성과</h4>
                                        <ul className="space-y-2">
                                            {story.results.map((result, resultIndex) => (
                                                <li key={resultIndex} className="flex items-start">
                                                    <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                    </svg>
                                                    <span className="text-gray-700">{result}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* 참여 크리에이터 */}
                                    <div className="mb-6">
                                        <h4 className="text-lg font-semibold text-gray-900 mb-2">참여 크리에이터</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {story.creators.map((creator, creatorIndex) => (
                                                <span
                                                    key={creatorIndex}
                                                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                                                >
                                                    {creator}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* 고객 후기 */}
                                    <div className="bg-gray-50 rounded-lg p-4">
                                        <blockquote className="text-gray-700 italic mb-2">
                                            &ldquo;{story.testimonial}&rdquo;
                                        </blockquote>
                                        <cite className="text-sm text-gray-600 font-medium">- {story.clientName}</cite>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA 섹션 */}
            <div className="bg-green-600 py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white">
                        다음 성공 사례의 주인공이 되어보세요
                    </h2>
                    <p className="mt-4 text-xl text-green-100">
                        여러분의 게임도 이런 성공을 거둘 수 있습니다. 지금 바로 시작하세요.
                    </p>
                    <div className="mt-8">
                        <a
                            href="/participate"
                            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-gray-50 transition-colors"
                        >
                            협업 신청하기
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
