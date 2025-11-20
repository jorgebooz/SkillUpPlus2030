import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, ViewStyle, TextStyle } from 'react-native';
import { Styles } from '@/constants/Styles';
import { Colors } from '@/constants/Colors';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  loading?: boolean;
  disabled?: boolean;
  style?: ViewStyle;
}

export const Button: React.FC<ButtonProps> = ({ 
  title, 
  onPress, 
  variant = 'primary', 
  loading = false, 
  disabled = false,
  style 
}) => {
  const getButtonStyle = (): ViewStyle => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: Colors.primary.aqua,
          borderWidth: 0,
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          borderWidth: 2,
          borderColor: Colors.primary.aqua,
        };
      default:
        return {
          backgroundColor: Colors.primary.aqua,
          borderWidth: 0,
        };
    }
  };

  const getTextStyle = (): TextStyle => {
    if (variant === 'outline') {
      return { color: Colors.primary.aqua };
    }
    return { color: Colors.primary.white };
  };

  return (
    <TouchableOpacity
      style={[
        Styles.buttonPrimary,
        getButtonStyle(),
        disabled && { opacity: 0.6 },
        { width: '100%' },
        style
      ]}
      onPress={onPress}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator color={getTextStyle().color} />
      ) : (
        <Text style={[Styles.textButton, getTextStyle()]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};