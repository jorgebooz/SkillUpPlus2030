import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/forms/Input';
import { Styles } from '@/constants/Styles';
import { Colors } from '@/constants/Colors';

export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({ 
    name: '', email: '', password: '', confirmPassword: '' 
  });

  const navigation = useNavigation<any>(); 

  const validateForm = () => {
    const newErrors = { name: '', email: '', password: '', confirmPassword: '' };
    
    if (!name.trim()) newErrors.name = 'Nome é obrigatório';
    if (!email.trim()) newErrors.email = 'Email é obrigatório';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email inválido';
    if (!password) newErrors.password = 'Senha é obrigatória';
    else if (password.length < 6) newErrors.password = 'Senha deve ter pelo menos 6 caracteres';
    if (password !== confirmPassword) newErrors.confirmPassword = 'Senhas não conferem';
    
    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
  };

  const handleRegister = async () => {
    if (!validateForm()) return;
    
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('Login');
    }, 1500);
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <ScrollView 
      style={[Styles.container, { paddingHorizontal: 24 }]}
      contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
    >
      <View style={{ alignItems: 'center', marginBottom: 48 }}>
        <Text style={[Styles.textTitle, { color: Colors.primary.yellow }]}>
          Criar Conta
        </Text>
        <Text style={[Styles.textBody, { marginTop: 8, textAlign: 'center' }]}>
          Junte-se ao futuro do trabalho
        </Text>
      </View>

      <View style={{ width: '100%' }}>
        <Input
          label="Nome Completo"
          placeholder="Seu nome completo"
          value={name}
          onChangeText={setName}
          error={errors.name}
        />
        
        <Input
          label="Email"
          placeholder="seu@email.com"
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

        <Input
          label="Confirmar Senha"
          placeholder="Digite novamente sua senha"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          error={errors.confirmPassword}
        />

        <Button
          title="Cadastrar"
          onPress={handleRegister}
          loading={loading}
          variant="primary"
        />

        <View style={{ alignItems: 'center', marginTop: 24 }}>
          <Text style={Styles.textCaption}>
            Já tem conta? 
            <Text 
              style={{ color: Colors.primary.yellow, fontWeight: '600' }}
              onPress={handleLogin}
            >
              {' '}Fazer Login
            </Text>
          </Text>
        </View>
      </View>

      <View style={{ marginTop: 48, alignItems: 'center' }}>
        <Text style={[Styles.textCaption, { textAlign: 'center' }]}>
          Ao cadastrar, você concorda com nossos{'\n'}
          Termos de Uso e Política de Privacidade
        </Text>
      </View>
    </ScrollView>
  );
}