import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/forms/Input';
import { Styles } from '@/constants/Styles';
import { Colors } from '@/constants/Colors';
import { useUser } from '@/contexts/UserContext';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({ email: '', password: '' });
  
  const navigation = useNavigation<any>();
  const { setUserData } = useUser();
  // Função para extrair nome e sobrenome do email
  const extractNameFromEmail = (email: string) => {
    const [username] = email.split('@');
    const [firstName, ...lastNameParts] = username.split('.');
    const lastName = lastNameParts.join(' ') || 'Usuário';
    
    return {
      email,
      firstName: firstName.charAt(0).toUpperCase() + firstName.slice(1),
      lastName: lastName.charAt(0).toUpperCase() + lastName.slice(1),
      interests: ['IA & Machine Learning', 'Sustentabilidade', 'Liderança'],
      stats: {
        completedCourses: 3,
        studyTime: '8h',
        progress: 45
      }
    };
  };

  const validateForm = () => {
    const newErrors = { email: '', password: '' };
    
    if (!email) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email inválido';
    } else if (!email.includes('.')) {
      newErrors.email = 'Use o formato: nome.sobrenome@email.com';
    }
    
    if (!password) {
      newErrors.password = 'Senha é obrigatória';
    } else if (password.length < 6) {
      newErrors.password = 'Senha deve ter pelo menos 6 caracteres';
    }
    
    setErrors(newErrors);
    return !newErrors.email && !newErrors.password;
  };

    const handleLogin = async () => {
    if (!validateForm()) return;
    
    setLoading(true);
    
    const userData = extractNameFromEmail(email);
    setUserData(userData);
    
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('Main');
    }, 1500);
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <ScrollView 
      style={[Styles.container, { paddingHorizontal: 24 }]}
      contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
    >
      <View style={{ alignItems: 'center', marginBottom: 48 }}>
        <Text style={[Styles.textTitle, { color: Colors.primary.yellow }]}>
          SkillUpPlus 2030+
        </Text>
        <Text style={[Styles.textBody, { marginTop: 8, textAlign: 'center' }]}>
          Use: nome.sobrenome@email.com
        </Text>
      </View>

      <View style={{ width: '100%' }}>
        <Input
          label="Email"
          placeholder="nome.sobrenome@email.com"
          value={email}
          onChangeText={setEmail}
          error={errors.email}
        />
        
        <Input
          label="Senha"
          placeholder="Digite sua senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          error={errors.password}
        />

        <Button
          title="Entrar"
          onPress={handleLogin}
          loading={loading}
          variant="primary"
        />

        <View style={{ alignItems: 'center', marginTop: 24 }}>
          <Text style={Styles.textCaption}>
            Ainda não tem conta? 
            <Text 
              style={{ color: Colors.primary.yellow, fontWeight: '600' }}
              onPress={handleRegister}
            >
              {' '}Cadastre-se
            </Text>
          </Text>
        </View>
      </View>

      <View style={{ marginTop: 48, alignItems: 'center' }}>
        <Text style={[Styles.textCaption, { textAlign: 'center' }]}>
          Use o formato nome.sobrenome{'\n'}
          Exemplo: maria.silva@email.com
        </Text>
      </View>
    </ScrollView>
  );
}