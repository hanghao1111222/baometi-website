import React from 'react';
// 用户评价类型定义
export interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  date: string;
}

// 用户评价数据
export const testimonials: Testimonial[] = [
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