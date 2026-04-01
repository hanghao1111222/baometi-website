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
    avatar: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=happy%20japanese%20woman%20with%20white%20teeth%20smiling&sign=13d810abaaefe1a2d9b79eda37be12c9",
    rating: 5,
    text: "Baometi Proを使い始めてから3ヶ月、歯医者さんに「プラークがほとんどなく、すばらしい」と言われました！ブラッシングモードもいくつかあって、毎日の歯磨きが楽しくなりました。",
    date: "2023年10月15日"
  },
  {
    id: 2,
    name: "鈴木 健太",
    avatar: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=happy%20japanese%20man%20with%20white%20teeth%20smiling&sign=8296c4e272856b8b06c81e5ee6062c9b",
    rating: 5,
    text: "以前使っていた電動歯ブラシよりもずっと静かで、バッテリーの持ちも驚くほど良いです。1回充電で1ヶ月以上使えて、旅行にも便利です。ブラシヘッドの感触も優しくて気に入っています。",
    date: "2023年9月22日"
  },
  {
    id: 3,
    name: "田中 裕子",
    avatar: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=japanese%20middle%20aged%20woman%20with%20smile&sign=507c5c8b32639a22f3c2b14bb7578e54",
    rating: 4,
    text: "子供用のBaometi Kidsを買ってみました。音声ガイドがあるので、子供も楽しく2分間ちゃんとブラッシングできるようになりました。以前は嫌がっていた歯磨きが今では楽しみにしています。",
    date: "2023年8月30日"
  },
  {
    id: 4,
    name: "中村 亮太",
    avatar: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=japanese%20young%20man%20with%20smile&sign=c28981b14597a5053033e03ed9818041",
    rating: 5,
    text: "デンタルクリニックで勧められて購入しました。歯茎の出血が減り、口内のトラブルも減少しました。価格は少し高めですが、健康への投資として十分価値があると思います。",
    date: "2023年11月5日"
  }
];