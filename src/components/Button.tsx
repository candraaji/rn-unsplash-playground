import {useMemo} from 'react';
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {APP_COLOR} from '../config/AppStyles';

interface IButtonProps extends TouchableOpacityProps {
  variant?: 'filled' | 'outlined' | 'ghost';
  isLoading?: boolean;
  bgColor?: string;
  children: React.ReactNode;
}

const Button: React.FC<Readonly<IButtonProps>> = ({
  variant = 'filled',
  children,
  className: _className = '',
  disabled = false,
  isLoading = false,
  bgColor = '#40C1AC',
  ...rest
}) => {
  const classNameVariant = useMemo(
    () => getClassNameVariant(variant, bgColor),
    [variant],
  );
  const getClassNameChildrenColorVariant = useMemo(
    () => getClassNameChildren(variant),
    [variant],
  );

  const defaultClassName = 'w-full py-[10.5px] rounded';
  const colorClassNameDisable = (disabled || isLoading) && 'bg-[#D8DCDE]';

  const className = [
    defaultClassName,
    classNameVariant,
    colorClassNameDisable,
    _className,
  ].join(' ');

  const getChildren = (): string | React.ReactNode => {
    if (isLoading) {
      return <ActivityIndicator color={APP_COLOR.PRIMARY} size={24} />;
    } else {
      return typeof children === 'string' ? (
        <Text
          className={`text-center text-base font-bold ${getClassNameChildrenColorVariant}`}>
          {children}
        </Text>
      ) : (
        children
      );
    }
  };

  return (
    <TouchableOpacity
      className={className}
      disabled={isLoading || disabled}
      {...rest}>
      {getChildren()}
    </TouchableOpacity>
  );
};

const getClassNameVariant = (
  variant: 'filled' | 'outlined' | 'ghost',
  bgColor: string,
) => {
  switch (variant) {
    case 'filled':
      return `bg-[${bgColor}]`;
    case 'outlined':
      return `border border-[${bgColor}]`;
    case 'ghost':
      return 'bg-transparent';
    default:
      return '';
  }
};

const getClassNameChildren = (variant: 'filled' | 'outlined' | 'ghost') => {
  switch (variant) {
    case 'filled':
      return 'text-white';
    case 'outlined':
      return 'text-[#68737D]';
    case 'ghost':
      return 'text-[#68737D]';
    default:
      return '';
  }
};

export default Button;
