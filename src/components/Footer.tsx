import React from 'react';

const Footer = () => {
  // 导航链接
  const navLinks = [
    {
      title: "製品",
      links: ["Baometi Pro", "Baometi Lite", "Baometi Kids", "交換用ブラシヘッド", "アクセサリー"]
    },
    {
      title: "会社",
      links: ["会社概要", "ミッション", "チーム", "採用情報", "ニュース"]
    },
    {
      title: "サポート",
      links: ["FAQ", "お問い合わせ", "ユーザーガイド", "保証ポリシー", "修理サービス"]
    },
    {
      title: "法律",
      links: ["プライバシーポリシー", "利用規約", "返品ポリシー", "配送情報", "知的財産"]
    }
  ];

  // 社交媒体图标
  const socialIcons = [
    <i key="facebook" className="fab fa-facebook-f"></i>,
    <i key="twitter" className="fab fa-twitter"></i>,
    <i key="instagram" className="fab fa-instagram"></i>,
    <i key="youtube" className="fab fa-youtube"></i>,
    <i key="linkedin" className="fab fa-linkedin-in"></i>
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* 品牌信息 */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Baometi</h2>
            <p className="text-gray-400 mb-6 max-w-md">
              Baometiは、革命的な電動歯ブラシを通じて、人々の口腔健康と美しい笑顔をサポートしています。最先端の技術とデザインを融合させた製品で、毎日の歯磨きを快適な体験に変えます。
            </p>
            <div className="flex gap-4">
              {socialIcons.map((icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* 导航链接 */}
          {navLinks.map((group, groupIndex) => (
            <div key={groupIndex}>
              <h3 className="text-lg font-semibold mb-4">{group.title}</h3>
              <ul className="space-y-2">
                {group.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* 支付方式 */}
        <div className="py-6 border-t border-gray-800 mb-6">
          <p className="text-gray-400 mb-4">対応決済方法</p>
          <div className="flex gap-4 flex-wrap">
            {["VISA", "Mastercard", "JCB", "PayPal", "Apple Pay", "Google Pay"].map((payment, index) => (
              <div 
                key={index}
                className="w-16 h-10 bg-gray-800 rounded flex items-center justify-center text-gray-300"
              >
                {payment}
              </div>
            ))}
          </div>
        </div>
        
        {/* 版权信息 */}
        <div className="pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Baometi. 全著作権所有。
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;