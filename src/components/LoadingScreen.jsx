'use client';

import { useState, useEffect } from 'react';

export default function LoadingScreen({ progress = 0, message = '데이터를 불러오는 중...' }) {
    const [dots, setDots] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            setDots(prev => {
                if (prev.length >= 3) return '';
                return prev + '.';
            });
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex items-center justify-center z-50">
            {/* 배경 패턴 */}
            <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%239C92AC' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>

            <div className="relative text-center text-white max-w-md px-6">
                {/* 로고 */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold mb-2">HGE Creator</h1>
                    <p className="text-indigo-200 text-lg">게임 크리에이터 플랫폼</p>
                </div>

                {/* 로딩 애니메이션 */}
                <div className="mb-8">
                    <div className="relative w-32 h-32 mx-auto mb-6">
                        {/* 외부 원 */}
                        <div className="absolute inset-0 border-4 border-white/20 rounded-full"></div>
                        
                        {/* 회전하는 원 */}
                        <div className="absolute inset-0 border-4 border-transparent border-t-yellow-400 border-r-pink-400 rounded-full animate-spin"></div>
                        
                        {/* 내부 원 */}
                        <div className="absolute inset-4 border-2 border-white/30 rounded-full">
                            <div className="absolute inset-2 bg-white/10 rounded-full flex items-center justify-center">
                                <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full animate-pulse"></div>
                            </div>
                        </div>
                    </div>

                    {/* 진행률 바 */}
                    <div className="w-full bg-white/20 rounded-full h-2 mb-4">
                        <div 
                            className="bg-gradient-to-r from-yellow-400 to-pink-400 h-2 rounded-full transition-all duration-500 ease-out"
                            style={{ width: `${Math.max(10, progress)}%` }}
                        ></div>
                    </div>

                    {/* 진행률 텍스트 */}
                    <div className="text-white/80 text-sm mb-2">
                        {Math.round(progress)}% 완료
                    </div>
                </div>

                {/* 로딩 메시지 */}
                <div className="text-center">
                    <p className="text-lg mb-2">{message}{dots}</p>
                    <p className="text-indigo-200 text-sm">
                        잠시만 기다려주세요
                    </p>
                </div>

                {/* 하단 로딩 인디케이터 */}
                <div className="mt-8 flex justify-center space-x-2">
                    {[0, 1, 2].map((i) => (
                        <div
                            key={i}
                            className="w-2 h-2 bg-white/60 rounded-full animate-pulse"
                            style={{
                                animationDelay: `${i * 0.2}s`,
                                animationDuration: '1s'
                            }}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
}
