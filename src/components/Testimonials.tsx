import React, { useState } from 'react';
import { motion } from 'framer-motion';

// 用户评价数据
const testimonials = [
  {
    id: 1,
    name: "佐藤 美和子",
    avatar: "/images/7dceef2c.png",
    rating: 5,
    text: "Baometi Proを使い始めてから3ヶ月、歯医者さんに「プラークがほとんどなく、すばらしい」と言われました！ブラッシングモードもいくつかあって、毎日の歯磨きが楽しくなりました。",
    date: "2023年10月15日"
  },
  {
    id: 2,
    name: "鈴木 健太",
    avatar: "/images/daf4e50b.png",
    rating: 5,
    text: "以前使っていた電動歯ブラシよりもずっと静かで、バッテリーの持ちも驚くほど良いです。1回充電で1ヶ月以上使えて、旅行にも便利です。ブラシヘッドの感触も優しくて気に入っています。",
    date: "2023年9月22日"
  },
  {
    id: 3,
    name: "田中 裕子",
    avatar: "/images/c543cda8.png",
    rating: 4,
    text: "子供用のBaometi Kidsを買ってみました。音声ガイドがあるので、子供も楽しく2分間ちゃんとブラッシングできるようになりました。以前は嫌がっていた歯磨きが今では楽しみにしています。",
    date: "2023年8月30日"
  },
  {
    id: 4,
    name: "中村 亮太",
    avatar: "/images/33d2370f.png",
    rating: 5,
    text: "デンタルクリニックで勧められて購入しました。歯茎の出血が減り、口内のトラブルも減少しました。価格は少し高めですが、健康への投資として十分価値があると思います。",
    date: "2023年11月5日"
  }
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  // 下一个评价
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  // 上一个评价
  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* 标题部分 */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">お客様の声</h2>
          <p className="text-lg text-text-secondary">
            Baometiを実際に使用しているお客様からのフィードバックです。
          </p>
        </motion.div>
        
        {/* 评价轮播 */}
        <div className="relative max-w-4xl mx-auto">
          {/* 评价内容 */}
          <motion.div 
            className="bg-gray-50 rounded-3xl p-8 md:p-12 shadow-lg"
            key={currentTestimonial}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* 评价文本 */}
            <div className="mb-8">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
              <p className="text-lg md:text-xl text-text-primary italic">
                "{testimonials[currentTestimonial].text}"
              </p>
            </div>
            
            {/* 用户信息 */}
            <div className="flex items-center gap-4">
              <img 
                src={testimonials[currentTestimonial].avatar} 
                alt={testimonials[currentTestimonial].name}
                className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md"
              />
              <div>
                <h4 className="font-bold text-text-primary">{testimonials[currentTestimonial].name}</h4>
                <p className="text-sm text-text-secondary">{testimonials[currentTestimonial].date}</p>
              </div>
            </div>
          </motion.div>
          
          {/* 导航按钮 */}
          <button 
            onClick={prevTestimonial}
            className="absolute top-1/2 -left-4 md:-left-8 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-text-primary hover:bg-primary hover:text-white transition-colors duration-300 z-10"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute top-1/2 -right-4 md:-right-8 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-text-primary hover:bg-primary hover:text-white transition-colors duration-300 z-10"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
          
          {/* 指示器 */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentTestimonial === index ? 'bg-primary w-8' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* 统计数据 */}
        <motion.div 
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {[
            { value: "100,000+", label: "満足顧客" },
            { value: "4.9/5", label: "平均評価" },
            { value: "98%", label: "再購入率" },
            { value: "5年", label: "平均使用期間" }
          ].map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-md">
              <p className="text-3xl font-bold text-primary mb-2">{stat.value}</p>
              <p className="text-text-secondary">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;