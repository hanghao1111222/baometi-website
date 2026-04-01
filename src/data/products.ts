import React from 'react';
// 产品数据类型定义
export interface Product {
  id: number;
  name: string;
  subtitle: string;
  price: number;
  image: string;
  features: string[];
  colors: string[];
  description: string;
  bestSeller?: boolean;
  new?: boolean;
}

// 产品数据
export const products: Product[] = [
  {
    id: 1,
    name: "T2",
    subtitle: "高級モデル",
    price: 29990,
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=portrait_4_3&prompt=premium%20electric%20toothbrush%20with%20multiple%20brush%20heads%20in%20luxury%20packaging&sign=e441e5910c9cac28cdf3d0c6e7d16347",
    description: "Baometi T2は、当社の最上級モデルです。40,000回/分の超音波振動と5つのブラッシングモードを搭載し、あらゆるニーズに応えます。スマートタイマー機能で最適なブラッシング時間をガイドし、充電1回で45日間使用可能な長持ちバッテリーを搭載しています。",
    features: [
      "40,000回/分の超音波振動",
      "6つのブラッシングモード",
      "スマートタイマー機能",
      "誘導充電式（45日間持続）",
      "8本の交換用ブラシヘッド",
      "IPX7防水設計"
    ],
    colors: ["#1e40af", "#0369a1", "#64748b", "#ffffff"],
    bestSeller: true
  },
  {
    id: 2,
    name: "LRT1",
    subtitle: "スタンダードモデル",
    price: 29990,
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=portrait_4_3&prompt=modern%20electric%20toothbrush%20in%20minimalist%20design&sign=1d510c2f1ca37fb392a02cdc52573668",
    description: "Baometi LRT1は、バランスの取れたスタンダードモデルです。30,000回/分の超音波振動と3つのブラッシングモードを備え、日常の口腔ケアに最適です。USB充電式で、充電1回で30日間使用可能です。",
    features: [
      "30,000回/分の超音波振動",
      "12つのブラッシングモード",
      "2分間タイマー機能",
      "USB充電式（30日間持続）",
      "8本の交換用ブラシヘッド",
      "IPX7防水設計"
    ],
    colors: ["#0891b2", "#f97316", "#8b5cf6", "#06b6d4"]
  },
  {
    id: 3,
    name: "Baometi Kids",
    subtitle: "子供用モデル",
    price: 1980,
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=portrait_4_3&prompt=colorful%20electric%20toothbrush%20for%20kids%20with%20cartoon%20design&sign=05e5b89771a39f194acbacc7b7aa9582",
    description: "Baometi Kidsは、子供向けに特別に設計されたモデルです。子供に適した20,000回/分の超音波振動と楽しい音声ガイドで、子供が歯磨きを楽しめるようになります。小さな口にフィットするブラシヘッドを搭載しています。",
    features: [
      "20,000回/分の超音波振動（子供用）",
      "2つのブラッシングモード",
      "楽しい音声ガイド（3種類）",
      "USB充電式（25日間持続）",
      "3本の交換用ブラシヘッド（小さめ）",
      "IPX7防水設計",
      "おしゃれなデザイン"
    ],
    colors: ["#ec4899", "#f59e0b", "#3b82f6", "#10b981"],
    new: true
  }
];

// 获取产品详情
export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

// 获取最も人気のある产品
export const getBestSeller = (): Product | undefined => {
  return products.find(product => product.bestSeller);
};

// 获取新制品
export const getNewArrivals = (): Product[] => {
  return products.filter(product => product.new);
};