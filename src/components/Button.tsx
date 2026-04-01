import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  icon
}) => {
  // 根据变体获取样式
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-primary hover:bg-primary-dark text-white shadow-lg hover:shadow-xl';
      case 'secondary':
        return 'bg-white hover:bg-gray-50 text-text-primary border border-gray-200 shadow-md hover:shadow-lg';
      case 'ghost':
        return 'bg-transparent hover:bg-gray-100 text-text-primary';
      default:
        return 'bg-primary hover:bg-primary-dark text-white shadow-lg hover:shadow-xl';
    }
  };

  // 根据大小获取样式
  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return 'px-4 py-2 text-sm';
      case 'md':
        return 'px-6 py-3 text-base';
      case 'lg':
        return 'px-8 py-4 text-lg';
      default:
        return 'px-6 py-3 text-base';
    }
  };

  return (
    <motion.button
      className={`rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 ${getVariantStyles()} ${getSizeStyles()} ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon && <span>{icon}</span>}
      {children}
    </motion.button>
  );
};

export default Button;