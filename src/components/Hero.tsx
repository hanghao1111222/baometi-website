import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section
            className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-b from-blue-50 to-white overflow-hidden relative">
            {}
            <div
                className="absolute -top-20 -right-20 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
            <div
                className="absolute top-40 -left-20 w-64 h-64 bg-green-100 rounded-full opacity-20 blur-3xl"></div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {}
                    <motion.div
                        className="lg:w-1/2 space-y-6 text-center lg:text-left"
                        initial={{
                            opacity: 0,
                            y: 20
                        }}
                        animate={{
                            opacity: 1,
                            y: 0
                        }}
                        transition={{
                            duration: 0.7
                        }}>
                        <motion.div
                            initial={{
                                opacity: 0
                            }}
                            animate={{
                                opacity: 1
                            }}
                            transition={{
                                delay: 0.3,
                                duration: 0.7
                            }}
                            className="inline-block bg-blue-100 text-primary px-4 py-1 rounded-full text-sm font-medium">口腔ケア革命
                                                                                                                                                                                    </motion.div>
                        <motion.h1
                            initial={{
                                opacity: 0,
                                y: 20
                            }}
                            animate={{
                                opacity: 1,
                                y: 0
                            }}
                            transition={{
                                delay: 0.5,
                                duration: 0.7
                            }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight">Baometi 電動歯ブラシ<br />
                            <span className="text-primary">美しい歯</span>を日常に
                                                                                                                                                                                    </motion.h1>
                        <motion.p
                            initial={{
                                opacity: 0,
                                y: 20
                            }}
                            animate={{
                                opacity: 1,
                                y: 0
                            }}
                            transition={{
                                delay: 0.7,
                                duration: 0.7
                            }}
                            className="text-lg md:text-xl text-text-secondary max-w-lg mx-auto lg:mx-0">最先端の技術で徹底的にケアし、健康で美しい笑顔を実現します。毎日の歯磨きを新たな体験に変えましょう。
                                                                                                                                                                                    </motion.p>
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 20
                            }}
                            animate={{
                                opacity: 1,
                                y: 0
                            }}
                            transition={{
                                delay: 0.9,
                                duration: 0.7
                            }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-4">
                            <button
                                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                                <span
                                    style={{
                                        backgroundColor: "#FFFFFF",
                                        color: "#0A0A0A"
                                    }}>￥:29,990</span>
                                <i className="fas fa-arrow-right"></i>
                            </button>
                            <button
                                className="bg-white border border-gray-200 hover:bg-gray-50 text-text-primary px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 flex items-center justify-center gap-2">
                                <i className="fas fa-play-circle text-primary"></i>
                                <span>製品紹介動画</span>
                            </button>
                        </motion.div>
                        <motion.div
                            initial={{
                                opacity: 0
                            }}
                            animate={{
                                opacity: 1
                            }}
                            transition={{
                                delay: 1.1,
                                duration: 0.7
                            }}
                            className="flex items-center gap-6 justify-center lg:justify-start mt-8">
                            <div className="flex items-center gap-2">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3, 4].map(i => <img
                                        key={i}
                                        src={`/images/e7c0f702.png`}
                                        alt={`Customer ${i}`}
                                        className="w-8 h-8 rounded-full border-2 border-white" />)}
                                </div>
                                <span className="text-sm text-text-secondary">+3,000人の満足</span>
                            </div>
                            <div className="flex items-center gap-1">
                                {[1, 2, 3, 4, 5].map(i => <i key={i} className="fas fa-star text-yellow-400"></i>)}
                                <span className="ml-1 text-sm font-medium">4.9/5</span>
                            </div>
                        </motion.div>
                    </motion.div>
                    {}
                    <motion.div
                        className="lg:w-1/2 relative"
                        initial={{
                            opacity: 0,
                            scale: 0.9
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1
                        }}
                        transition={{
                            delay: 0.5,
                            duration: 0.8
                        }}>
                        <div className="relative w-full h-[400px] md:h-[500px]">
                            {}
                            <img
                                src="/images/8726007e.jpg"
                                alt="Baometi 電動歯ブラシ"
                                className="absolute inset-0 w-full h-full object-contain z-10" />
                            {}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl transform rotate-3 scale-105 opacity-10"
                                animate={{
                                    rotate: [3, 5, 3],
                                    scale: [1.05, 1.07, 1.05]
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }} />
                            {}
                            <motion.div
                                className="absolute top-4 left-4 bg-white rounded-lg p-3 shadow-lg z-20"
                                initial={{
                                    opacity: 0,
                                    x: -20
                                }}
                                animate={{
                                    opacity: 1,
                                    x: 0
                                }}
                                transition={{
                                    delay: 1.2,
                                    duration: 0.5
                                }}>
                                <div className="flex items-center gap-2">
                                    <div className="bg-blue-100 p-2 rounded-full">
                                        <i className="fas fa-bolt text-primary"></i>
                                    </div>
                                    <div>
                                        <p className="text-xs text-text-secondary">高性能モーター</p>
                                        <p className="text-sm font-medium">40,000回/分</p>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                className="absolute bottom-4 right-4 bg-white rounded-lg p-3 shadow-lg z-20"
                                initial={{
                                    opacity: 0,
                                    x: 20
                                }}
                                animate={{
                                    opacity: 1,
                                    x: 0
                                }}
                                transition={{
                                    delay: 1.4,
                                    duration: 0.5
                                }}>
                                <div className="flex items-center gap-2">
                                    <></>
                                    <div>
                                        <p className="text-xs text-text-secondary">UPC:607602423604</p>
                                        <p className="text-sm font-medium">ASIN:B0FC2V9CPQ</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
                {}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 20
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        delay: 1.6,
                        duration: 0.7
                    }}
                    className="mt-20 pt-6 border-t border-gray-100">
                    <p className="text-center text-sm text-text-secondary mb-6">信頼されるパートナー</p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
                        {["DENTAL", "ORAL CARE", "HEALTH", "TECH", "LIFESTYLE"].map((brand, index) => <div
                            key={index}
                            className="text-gray-500 font-semibold uppercase tracking-wider text-sm">
                            {brand}
                        </div>)}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;