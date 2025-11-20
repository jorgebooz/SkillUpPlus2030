import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Button } from '@/components/ui/Button';
import { Styles } from '@/constants/Styles';
import { Colors } from '@/constants/Colors';
import { Card } from '@/components/ui/Card';
import { useUser } from '@/contexts/UserContext';

// Dados mockados do usuário (fallback)
const defaultUserData = {
  firstName: 'João',
  lastName: 'Silva',
  email: 'joao.silva@email.com',
  interests: ['IA & Machine Learning', 'Sustentabilidade', 'Liderança', 'Análise de Dados'],
  stats: {
    completedCourses: 5,
    studyTime: '12h',
    progress: 65
  }
};

export default function ProfileScreen() {
  const { userData } = useUser();
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  
  // Pegar dados do usuário dos parâmetros da rota
  const { firstName, lastName, email, interests, stats } = userData;

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  const getInitials = () => {
    return `${firstName[0]}${lastName[0]}`.toUpperCase();
  };

  return (
    <ScrollView style={Styles.container} showsVerticalScrollIndicator={false}>
      <View style={{ padding: 24 }}>
        <Text style={[Styles.textTitle, { color: Colors.primary.yellow }]}>
          Meu Perfil
        </Text>

        {/* Informações do usuário */}
        <Card style={{ marginTop: 24, alignItems: 'center' }}>
          <View style={{
            width: 80,
            height: 80,
            borderRadius: 40,
            backgroundColor: Colors.primary.aqua,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 16,
          }}>
            <Text style={[Styles.textTitle, { color: Colors.primary.white }]}>
              {getInitials()}
            </Text>
          </View>
          
          <Text style={[Styles.textSubtitle, { color: Colors.primary.aqua }]}>
            {firstName} {lastName}
          </Text>
          <Text style={[Styles.textCaption, { marginTop: 4 }]}>
            {email}
          </Text>
        </Card>

        {/* Estatísticas */}
        <Card style={{ marginTop: 16 }}>
          <Text style={[Styles.textSubtitle, { marginBottom: 16 }]}>
            📊 Minhas Estatísticas
          </Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{ alignItems: 'center' }}>
              <Text style={[Styles.textTitle, { color: Colors.primary.aqua }]}>
                {stats.completedCourses}
              </Text>
              <Text style={Styles.textCaption}>Cursos</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text style={[Styles.textTitle, { color: Colors.primary.aqua }]}>
                {stats.studyTime}
              </Text>
              <Text style={Styles.textCaption}>Estudadas</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text style={[Styles.textTitle, { color: Colors.primary.aqua }]}>
                {stats.progress}%
              </Text>
              <Text style={Styles.textCaption}>Progresso</Text>
            </View>
          </View>
        </Card>

        {/* Áreas de interesse */}
        <Card style={{ marginTop: 16 }}>
          <Text style={[Styles.textSubtitle, { marginBottom: 12 }]}>
            🎯 Áreas de Interesse
          </Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
            {interests.map((interest: string, index: number) => (
              <View
                key={index}
                style={{
                  backgroundColor: Colors.secondary.aquaLight,
                  paddingHorizontal: 12,
                  paddingVertical: 6,
                  borderRadius: 16,
                }}
              >
                <Text style={[Styles.textCaption, { color: Colors.primary.aqua }]}>
                  {interest}
                </Text>
              </View>
            ))}
          </View>
        </Card>

        {/* Configurações */}
        <Card style={{ marginTop: 16 }}>
          <Text style={[Styles.textSubtitle, { marginBottom: 12 }]}>
            ⚙️ Configurações
          </Text>
          <Text style={[Styles.textBody, { marginBottom: 8 }]}>
            🔔 Notificações
          </Text>
          <Text style={[Styles.textBody, { marginBottom: 8 }]}>
            🌐 Idioma
          </Text>
          <Text style={Styles.textBody}>
            🆘 Ajuda & Suporte
          </Text>
        </Card>

        {/* Botão de logout */}
        <Button
          title="Sair da Conta"
          onPress={handleLogout}
          variant="primary"
          style={{ marginTop: 32 }}
        />
      </View>
    </ScrollView>
  );
}