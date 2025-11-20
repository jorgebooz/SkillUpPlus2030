import React from 'react';
import { TextInput, View, Text } from 'react-native';
import { Styles } from '@/constants/Styles';
import { Colors } from '@/constants/Colors';

interface InputProps {
  label?: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  error?: string;
}

export const Input = ({ 
  label, 
  placeholder, 
  value, 
  onChangeText, 
  secureTextEntry = false,
  error 
}: InputProps) => {
  return (
    <View style={{ marginBottom: 16, width: '100%' }}>
      {label && (
        <Text style={[Styles.textBody, { marginBottom: 8, fontWeight: '600' }]}>
          {label}
        </Text>
      )}
      <TextInput
        style={[
          Styles.input,
          error && { borderColor: Colors.semantic.error }
        ]}
        placeholder={placeholder}
        placeholderTextColor={Colors.secondary.grayMedium}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
      {error && (
        <Text style={{ 
          color: Colors.semantic.error, 
          fontSize: 12, 
          marginTop: 4 
        }}>
          {error}
        </Text>
      )}
    </View>
  );
};