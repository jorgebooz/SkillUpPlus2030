import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Styles } from '@/constants/Styles';
import { Colors } from '@/constants/Colors';
import { Card } from '@/components/ui/Card';

// Dados mockados
const quickStats = [
  { label: 'Cursos Ativos', value: '3', color: Colors.primary.aqua },
  { label: 'Horas Estudadas', value: '12h', color: Colors.primary.yellow },
  { label: 'Progresso Geral', value: '65%', color: Colors.semantic.success },
];

const recentCourses = [
  { id: '1', title: 'Introdução à IA', progress: 75, lastAccess: '2 dias atrás' },
  { id: '2', title: 'Soft Skills', progress: 30, lastAccess: '1 semana atrás' },
  { id: '3', title: 'Sustentabilidade', progress: 0, lastAccess: 'Hoje' },
];

const featuredCourses = [
  { id: '4', title: 'Análise de Dados com Python', category: 'Tecnologia', duration: '8h' },
  { id: '5', title: 'Liderança 4.0', category: 'Gestão', duration: '6h' },
  { id: '6', title: 'ESG na Prática', category: 'Sustentabilidade', duration: '4h' },
];

export default function DashboardScreen() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  
  // Pegar dados do usuário dos parâmetros da rota
  const userData = route.params?.user || { firstName: 'Estudante' };

  return (
    <ScrollView style={Styles.container} showsVerticalScrollIndicator={false}>
      <View style={{ padding: 24 }}>
        {/* Cabeçalho */}
        <View style={{ marginBottom: 32 }}>
          <Text style={[Styles.textTitle, { color: Colors.primary.yellow }]}>
            Olá, {userData.firstName}!
          </Text>
          <Text style={[Styles.textBody, { marginTop: 8 }]}>
            Sua jornada de requalificação está {''}
            <Text style={{ color: Colors.primary.aqua, fontWeight: '600' }}>
              65% completa
            </Text>
          </Text>
        </View>

        {/* Estatísticas Rápidas */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 32 }}>
          {quickStats.map((stat, index) => (
            <View 
              key={index}
              style={{
                backgroundColor: Colors.primary.white,
                padding: 16,
                borderRadius: 12,
                alignItems: 'center',
                flex: 1,
                marginHorizontal: 4,
                shadowColor: Colors.primary.gray,
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
                elevation: 2,
              }}
            >
              <Text style={[Styles.textTitle, { color: stat.color }]}>
                {stat.value}
              </Text>
              <Text style={[Styles.textCaption, { textAlign: 'center', marginTop: 4 }]}>
                {stat.label}
              </Text>
            </View>
          ))}
        </View>

        {/* Continue de Onde Parou */}
        <Card variant="highlight">
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <Text style={[Styles.textSubtitle, { color: Colors.primary.aqua }]}>
              📚 Continue Estudando
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Courses')}>
              <Text style={[Styles.textCaption, { color: Colors.primary.yellow }]}>
                Ver todos
              </Text>
            </TouchableOpacity>
          </View>
          
          {recentCourses.map((course) => (
            <TouchableOpacity 
              key={course.id}
              style={{
                paddingVertical: 12,
                borderBottomWidth: 1,
                borderBottomColor: Colors.secondary.grayLight,
              }}
              onPress={() => navigation.navigate('Courses')}
            >
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ flex: 1 }}>
                  <Text style={Styles.textBody} numberOfLines={1}>
                    {course.title}
                  </Text>
                  <Text style={[Styles.textCaption, { marginTop: 4 }]}>
                    Último acesso: {course.lastAccess}
                  </Text>
                </View>
                <View style={{ alignItems: 'flex-end' }}>
                  <Text style={[Styles.textCaption, { color: Colors.primary.aqua }]}>
                    {course.progress}%
                  </Text>
                  <View style={{
                    width: 60,
                    height: 4,
                    backgroundColor: Colors.secondary.grayLight,
                    borderRadius: 2,
                    marginTop: 4,
                    overflow: 'hidden',
                  }}>
                    <View style={{
                      height: '100%',
                      backgroundColor: course.progress === 0 ? Colors.secondary.grayMedium : Colors.primary.aqua,
                      width: `${course.progress}%`,
                      borderRadius: 2,
                    }} />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </Card>

        {/* Cursos em Destaque */}
        <Card style={{ marginTop: 24 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <Text style={[Styles.textSubtitle, { color: Colors.primary.aqua }]}>
              🎯 Recomendados para Você
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Courses')}>
              <Text style={[Styles.textCaption, { color: Colors.primary.yellow }]}>
                Explorar
              </Text>
            </TouchableOpacity>
          </View>
          
          {featuredCourses.map((course) => (
            <TouchableOpacity 
              key={course.id}
              style={{
                paddingVertical: 12,
                borderBottomWidth: 1,
                borderBottomColor: Colors.secondary.grayLight,
              }}
              onPress={() => navigation.navigate('Courses')}
            >
              <Text style={Styles.textBody}>{course.title}</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 4 }}>
                <Text style={[Styles.textCaption, { color: Colors.primary.aqua }]}>
                  {course.category}
                </Text>
                <Text style={Styles.textCaption}>{course.duration}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </Card>

        {/* Ações Rápidas */}
        <View style={{ marginTop: 32 }}>
          <Text style={[Styles.textSubtitle, { marginBottom: 16 }]}>
            ⚡ Ações Rápidas
          </Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
            <TouchableOpacity 
              style={{
                backgroundColor: Colors.primary.aqua,
                paddingHorizontal: 20,
                paddingVertical: 12,
                borderRadius: 8,
                flex: 1,
                minWidth: '45%',
                alignItems: 'center',
              }}
              onPress={() => navigation.navigate('Courses')}
            >
              <Text style={[Styles.textButton, { fontSize: 14 }]}>
                Buscar Cursos
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={{
                backgroundColor: Colors.primary.yellow,
                paddingHorizontal: 20,
                paddingVertical: 12,
                borderRadius: 8,
                flex: 1,
                minWidth: '45%',
                alignItems: 'center',
              }}
              onPress={() => navigation.navigate('Progress')}
            >
              <Text style={[Styles.textButton, { fontSize: 14, color: Colors.primary.gray }]}>
                Ver Progresso
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Meta do Dia */}
        <Card style={{ marginTop: 24 }}>
          <Text style={[Styles.textSubtitle, { color: Colors.primary.aqua, marginBottom: 8 }]}>
            🎯 Meta do Dia
          </Text>
          <Text style={Styles.textBody}>
            Complete 1 módulo de qualquer curso
          </Text>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 12,
            padding: 12,
            backgroundColor: Colors.secondary.yellowLight,
            borderRadius: 8,
          }}>
            <Text style={[Styles.textCaption, { color: Colors.primary.yellow }]}>
              ⭐ +50 pontos de experiência
            </Text>
          </View>
        </Card>
      </View>
    </ScrollView>
  );
}