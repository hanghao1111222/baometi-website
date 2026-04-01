import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 模拟表单提交
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // 重置表单
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      // 5秒后重置成功状态
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* 标题部分 */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">お問い合わせ</h2>
          <p className="text-lg text-text-secondary">
            製品に関するご質問やご意見がございましたら、お気軽にお問い合わせください。
          </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* 联系表单 */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              {submitSuccess ? (
                <motion.div 
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className="fas fa-check text-3xl text-green-500"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-text-primary mb-2">送信完了</h3>
                  <p className="text-text-secondary">
                    お問い合わせありがとうございます。当社からの返信をお待ちください。
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-text-secondary mb-2 text-sm font-medium">
                      お名前
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors duration-300"
                      placeholder="お名前を入力してください"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-text-secondary mb-2 text-sm font-medium">
                      メールアドレス
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors duration-300"
                      placeholder="メールアドレスを入力してください"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-text-secondary mb-2 text-sm font-medium">
                      お問い合わせ内容
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors duration-300 resize-none"
                      placeholder="お問い合わせ内容を入力してください"
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-dark text-white py-3 px-6 rounded-xl font-medium transition-colors duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <i className="fas fa-circle-notch fa-spin"></i>
                        <span>送信中...</span>
                      </>
                    ) : (
                      <>
                        <span>送信する</span>
                        <i className="fas fa-paper-plane"></i>
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
          
          {/* 联系信息 */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="space-y-8">
              {/* FAQ */}
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-text-primary mb-6">よくある質問</h3>
                <div className="space-y-4">
                  {[
                    {
                      question: "ブラシヘッドの交換はどのくらいの頻度で行えばよいですか？",
                      answer: "通常、3ヶ月ごとにブラシヘッドを交換することをおすすめします。ブラシの毛が毛羽立ってきたら、早めに交換するようにしてください。"
                    },
                    {
                      question: "充電にはどのくらい時間がかかりますか？",
                      answer: "完全に放電した状態からの満充電には約3時間かかります。充電状態は本体のLEDインジケーターで確認できます。"
                    },
                    {
                      question: "国際保証はありますか？",
                      answer: "はい、Baometi製品は1年間の国際保証が付いています。ただし、異なる地域での電圧仕様にご注意ください。"
                    }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="border-b border-gray-100 pb-4 last:border-0 last:pb-0"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <button className="flex justify-between items-center w-full text-left">
                        <h4 className="font-semibold text-text-primary">{item.question}</h4>
                        <i className="fas fa-chevron-down text-primary"></i>
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* 联系信息 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { 
                    icon: <i className="fas fa-map-marker-alt"></i>, 
                    title: "住所", 
                    content: "東京都千代田区丸の内1-1-1" 
                  },
                  { 
                    icon: <i className="fas fa-phone"></i>, 
                    title: "電話番号", 
                    content: "03-1234-5678" 
                  },
                  { 
                    icon: <i className="fas fa-envelope"></i>, 
                    title: "メールアドレス", 
                    content: "info@baometi.jp" 
                  },
                  { 
                    icon: <i className="fas fa-clock"></i>, 
                    title: "営業時間", 
                    content: "月 - 金: 9:00 - 18:00" 
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-md"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-primary mb-4">
                      {item.icon}
                    </div>
                    <h4 className="font-medium text-text-secondary mb-2 text-sm">{item.title}</h4>
                    <p className="font-semibold text-text-primary">{item.content}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* 订阅 */}
        <motion.div 
          className="mt-20 bg-primary/5 rounded-3xl p-8 md:p-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
            Baometi の最新情報をお届けします
          </h3>
          <p className="text-text-secondary max-w-2xl mx-auto mb-8">
            新製品の発表や特別キャンペーンなど、最新情報をお届けします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="メールアドレスを入力"
              className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
            />
            <motion.button
              className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-xl font-medium transition-colors duration-300 whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              購読する
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>);
};

export default Contact;