import React from 'react';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      icon: <i className="fas fa-magic text-3xl"></i>,
      title: "超音波技術",
      description: "40,000回/分の超音波振動で、歯の表面だけでなく、歯と歯の間や歯茎の隙間まで徹底的に清潔にします。",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <i className="fas fa-sliders-h text-3xl"></i>,
      title: "複数のブラッシングモード",
      description: "通常、磨耗防止、歯茎ケア、美白、デリケートの5つのモードを搭載。あなたのニーズに合わせて選択できます。",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <i className="fas fa-clock text-3xl"></i>,
      title: "スマートタイマー",
      description: "2分間の最適ブラッシング時間をガイドし、30秒ごとにパルスで通知して、口腔内を4つのエリアに分けて均一にブラッシングします。",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <i className="fas fa-battery-full text-3xl"></i>,
      title: "長持ちバッテリー",
      description: "充電1回で最大45日間使用可能。USB誘導充電方式で、旅行先でも簡単に充電できます。",
      color: "from-amber-500 to-amber-600"
    },
    {
      icon: <i className="fas fa-tint-slash text-3xl"></i>,
      title: "完全防水",
      description: "IPX7相当の防水性能を備えているため、お風呂でも使用可能。洗浄も簡単で衛生的に保てます。",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: <i className="fas fa-leaf text-3xl"></i>,
      title: "環境にやさしい",
      description: "本体は長寿命設計で、ブラシヘッドのみを交換するだけで何年も使用できます。プラスチックの使用量を最小限に抑えています。",
      color: "from-emerald-500 to-emerald-600"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* 标题部分 */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Baometi の革新的な技術</h2>
          <p className="text-lg text-text-secondary">
            私たちの電動歯ブラシは最新の技術を取り入れ、従来の歯ブラシでは実現できない清潔感と快適さを提供します。
          </p>
        </motion.div>
        
        {/* 特性网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5 }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} text-white flex items-center justify-center mb-6 shadow-md`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">{feature.title}</h3>
              <p className="text-text-secondary">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        
        {/* 技术比较 */}
        <motion.div 
          className="mt-24 bg-white rounded-3xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex flex-col lg:flex-row">
            {/* 左侧文字 */}
            <div className="lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-6">
                なぜBaometiを選ぶのか？
              </h3>
              <div className="space-y-6">
                {[
                  { 
                    title: "徹底的な清掃力", 
                    description: "超音波技術により、プラークや汚れを効率的に除去します。" 
                  },
                  { 
                    title: "歯茎の健康維持", 
                    description: "適切な振動と圧力で、歯茎を刺激し、血行を促進します。" 
                  },
                  { 
                    title: "長期的な経済性", 
                    description: "高品質な材料を使用しているため、長寿命で、交換部品も経済的です。" 
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex gap-4"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="mt-1 text-primary">
                      <i className="fas fa-check-circle"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-1">{item.title}</h4>
                      <p className="text-text-secondary">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* 右侧图表 */}
            <div className="lg:w-1/2 bg-blue-50 p-8 md:p-12 lg:p-16 flex items-center justify-center">
              <div className="w-full max-w-md">
                <h4 className="text-xl font-bold text-text-primary mb-6 text-center">
                  Baometi vs 通常の電動歯ブラシ
                </h4>
                <div className="space-y-6">
                  {[
                    { label: "清掃効率", baometi: 95, regular: 75 },
                    { label: "バッテリー持続時間", baometi: 90, regular: 60 },
                    { label: "静音性", baometi: 85, regular: 65 },
                    { label: "耐久性", baometi: 90, regular: 70 },
                    { label: "使いやすさ", baometi: 88, regular: 72 }
                  ].map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{item.label}</span>
                        <span>{item.baometi}%</span>
                      </div>
                      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-primary rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.baometi}%` }}
                          transition={{ duration: 1, delay: index * 0.2 + 0.3 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;