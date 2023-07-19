import { ButtonHTMLAttributes, FC } from 'react';
import styles from './customBtn.module.css';

interface ButtonProps {
  title: string;
  className?: 'gray' | string; // 'gray' className applies gray background to button
  transparent?: boolean;
  width?: boolean;
}

export const CustomBtn: FC<ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>> = ({
  title,
  type = 'button',
  transparent,
  className = '',
  width,
  ...props
}) => {
  return (
    <button
      style={width ? { width: '100%' } : {}}
      {...props}
      className={[
        styles.button,
        className,
        className === 'gray' ? styles.grayBtn : '',
        transparent && styles.transparent,
      ].join(' ')}
      {...{ type }}>
      {title}
    </button>
  );
};
