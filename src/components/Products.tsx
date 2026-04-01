import React, { useState } from "react";
import { motion } from "framer-motion";

const products = [{
    id: "T2",
    name: "Baometi T2",
    subtitle: "高級モデル",
    price: "¥29990",
    image: "/images/7beacaf3.png",

    features: [
        "40,000回/分の超音波振動",
        "6つのブラッシングモード",
        "スマートタイマー機能",
        "誘導充電式（45日間持続）",
        "8本の交換用ブラシヘッド",
        "IPX7防水設計"
    ],

    colors: ["#1e40af", "#0369a1", "#64748b", "#ffffff"]
}, {
    id: "LRT1",
    name: "Baometi LRT1",
    subtitle: "スタンダードモデル",
    price: "¥29990",
    image: "/images/93285b5b.png",

    features: [
        "30,000回/分の超音波振動",
        "12つのブラッシングモード",
        "2分間タイマー機能",
        "USB充電式（30日間持続）",
        "8本の交換用ブラシヘッド",
        "IPX7防水設計"
    ],

    colors: ["#0891b2", "#f97316", "#8b5cf6", "#06b6d4"]
}, {
    id: 3,
    name: "Baometi Kids",
    subtitle: "子供用モデル",
    price: "¥1,980",
    image: "/images/68960508.png",

    features: [
        "20,000回/分の超音波振動（子供用）",
        "2つのブラッシングモード",
        "楽しい音声ガイド（3種類）",
        "USB充電式（25日間持続）",
        "3本の交換用ブラシヘッド（小さめ）",
        "IPX7防水設計",
        "おしゃれなデザイン"
    ],

    colors: ["#ec4899", "#f59e0b", "#3b82f6", "#10b981"]
}];

const Products = () => {
    const [activeProduct, setActiveProduct] = useState(0);

    return (
        <section id="products" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                {}
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-16"
                    initial={{
                        opacity: 0,
                        y: 20
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        duration: 0.7
                    }}
                    viewport={{
                        once: true,
                        margin: "-100px"
                    }}>
                    <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Baometi 製品ラインアップ</h2>
                    <p className="text-lg text-text-secondary">あなたのニーズに合った電動歯ブラシを見つけてください。全製品には1年間の保証が付いています。
                                                                                                                                                                                                          </p>
                </motion.div>
                {}
                <div className="flex justify-center mb-10">
                    <div className="bg-gray-50 p-1 rounded-full inline-flex">
                        {products.map((product, index) => <></>)}
                    </div>
                </div>
                {}
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {}
                    <motion.div
                        className="lg:w-1/2 relative"
                        key={`image-${activeProduct}`}
                        initial={{
                            opacity: 0,
                            x: -20
                        }}
                        animate={{
                            opacity: 1,
                            x: 0
                        }}
                        transition={{
                            duration: 0.5
                        }}>
                        <div className="relative w-full h-[400px] md:h-[500px]">
                            <img
                                src="/images/2f3de882.jpg"
                                alt={products[activeProduct].name}
                                className="absolute inset-0 w-full h-full object-contain" />
                            <div
                                className="absolute -bottom-6 -right-6 bg-primary text-white px-6 py-3 rounded-2xl shadow-lg text-sm font-medium"
                                style={{
                                    color: "#0A0A0A",
                                    fontSize: "12px"
                                }}>UPC：607605241779</div>
                        </div>
                    </motion.div>
                    {}
                    <motion.div
                        className="lg:w-1/2 space-y-6"
                        key={`content-${activeProduct}`}
                        initial={{
                            opacity: 0,
                            x: 20
                        }}
                        animate={{
                            opacity: 1,
                            x: 0
                        }}
                        transition={{
                            duration: 0.5,
                            delay: 0.2
                        }}>
                        <div>
                            <h3
                                className="text-3xl font-bold text-text-primary"
                                style={{
                                    backgroundColor: "#FFFFFF",
                                    color: "#FFFFFF"
                                }}>{products[activeProduct].name}</h3>
                            <p className="text-primary font-medium">{products[activeProduct].subtitle}</p>
                            <p
                                className="text-2xl font-bold text-text-primary mt-2"
                                style={{
                                    fontFamily: "\"Noto Sans SC\", sans-serif"
                                }}>{products[activeProduct].price}</p>
                        </div>
                        <div>
                            <h4 className="text-sm font-medium text-text-secondary mb-2">主な特徴</h4>
                            <ul className="space-y-3">
                                {products[activeProduct].features.map((feature, index) => <motion.li
                                    key={index}
                                    className="flex items-start gap-2"
                                    initial={{
                                        opacity: 0,
                                        x: 10
                                    }}
                                    animate={{
                                        opacity: 1,
                                        x: 0
                                    }}
                                    transition={{
                                        delay: 0.1 * index + 0.3
                                    }}>
                                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                                    <span className="text-text-secondary">{feature}</span>
                                </motion.li>)}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-sm font-medium text-text-secondary mb-2">カラーオプション</h4>
                            <div className="flex gap-2">
                                {products[activeProduct].colors.map((color, index) => <motion.div
                                    key={index}
                                    className={`w-8 h-8 rounded-full border-2 cursor-pointer transition-transform ${index === 0 ? "border-primary scale-110" : "border-transparent hover:scale-110"}`}
                                    style={{
                                        backgroundColor: color
                                    }}
                                    whileHover={{
                                        scale: 1.1
                                    }}
                                    whileTap={{
                                        scale: 0.9
                                    }} />)}
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <motion.button
                                className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                                whileHover={{
                                    scale: 1.05
                                }}
                                whileTap={{
                                    scale: 0.95
                                }}>
                                <span
                                    style={{
                                        backgroundColor: "#FFFFFF",
                                        color: "#0A0A0A"
                                    }}>購入する</span>
                                <i
                                    className="fas fa-shopping-cart"
                                    style={{
                                        backgroundColor: "#FDE68A"
                                    }}></i>
                            </motion.button>
                            <motion.button
                                className="bg-white border border-gray-200 hover:bg-gray-50 text-text-primary px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 flex items-center justify-center gap-2"
                                whileHover={{
                                    scale: 1.05
                                }}
                                whileTap={{
                                    scale: 0.95
                                }}>
                                <></>
                                <span>ASIN:B0FGDGPC53</span>
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
                {}
                <motion.div
                    className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
                    initial={{
                        opacity: 0,
                        y: 20
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        duration: 0.7,
                        delay: 0.3
                    }}
                    viewport={{
                        once: true,
                        margin: "-100px"
                    }}>
                    {[{
                        icon: <i className="fas fa-shield-alt text-2xl"></i>,
                        title: "1年間保証",
                        description: "全製品に1年間の製造不良保証を提供しています。"
                    }, {
                        icon: <i className="fas fa-truck text-2xl"></i>,
                        title: "送料無料",
                        description: "全国一律送料無料。ご注文から3-5営業日でお届けします。"
                    }, {
                        icon: <i className="fas fa-undo text-2xl"></i>,
                        title: "返品保証",
                        description: "30日以内であれば、未使用の状態であれば返品可能です。"
                    }].map(
                        (item, index) => <div key={index} className="bg-gray-50 rounded-2xl p-6 text-center">
                            <div
                                className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-md text-primary mb-4">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-text-primary mb-2">{item.title}</h3>
                            <p className="text-text-secondary">{item.description}</p>
                        </div>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default Products;