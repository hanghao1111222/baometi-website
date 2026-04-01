import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import React from "react"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// 格式化价格
export function formatPrice(price: number): string {
  return `¥${price.toLocaleString('ja-JP')}`
}

// 滚动到指定元素
export function scrollToElement(elementId: string, offset: number = 0): void {
  const element = document.getElementById(elementId)
  if (element) {
    const yOffset = -offset
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}
