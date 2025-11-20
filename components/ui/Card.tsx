import React from 'react';
import { View, ViewStyle } from 'react-native';
import { Styles } from '@/constants/Styles';
import { Colors } from '@/constants/Colors';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'highlight';
  style?: ViewStyle;
}

export const Card = ({ children, variant = 'default', style }: CardProps) => {
  return (
    <View style={[
      Styles.card,
      variant === 'highlight' && { 
        backgroundColor: Colors.secondary.yellowLight,
        borderLeftWidth: 4,
        borderLeftColor: Colors.primary.yellow
      },
      style
    ]}>
      {children}
    </View>
  );
};