import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Styles } from '@/constants/Styles';
import { Colors } from '@/constants/Colors';
import { Card } from '@/components/ui/Card';

export default function ProgressScreen() {
  const skills = [
    { name: 'Inteligência Artificial', level: 75 },
    { name: 'Análise de Dados', level: 60 },
    { name: 'Liderança', level: 45 },
    { name: 'Sustentabilidade', level: 30 },
    { name: 'Programação', level: 80 },
  ];

  return (
    <ScrollView style={Styles.container}>
      <View style={{ padding: 24 }}>
        <Text style={[Styles.textTitle, { color: Colors.primary.yellow }]}>
          Meu Progresso
        </Text>
        <Text style={[Styles.textBody, { marginTop: 8, marginBottom: 32 }]}>
          Acompanhe seu desenvolvimento
        </Text>

        {/* Estatísticas */}
        <Card style={{ marginBottom: 24 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{ alignItems: 'center' }}>
              <Text style={[Styles.textTitle, { color: Colors.primary.aqua }]}>5</Text>
              <Text style={Styles.textCaption}>Cursos</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text style={[Styles.textTitle, { color: Colors.primary.aqua }]}>12h</Text>
              <Text style={Styles.textCaption}>Estudadas</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text style={[Styles.textTitle, { color: Colors.primary.aqua }]}>65%</Text>
              <Text style={Styles.textCaption}>Completos</Text>
            </View>
          </View>
        </Card>

        {/* Habilidades */}
        <Text style={[Styles.textSubtitle, { marginBottom: 16 }]}>
          Suas Habilidades
        </Text>
        
        {skills.map((skill, index) => (
          <Card key={index} style={{ marginBottom: 12 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 }}>
              <Text style={Styles.textBody}>{skill.name}</Text>
              <Text style={Styles.textCaption}>{skill.level}%</Text>
            </View>
            <View style={{
              height: 6,
              backgroundColor: Colors.secondary.grayLight,
              borderRadius: 3,
              overflow: 'hidden',
            }}>
              <View style={{
                height: '100%',
                backgroundColor: Colors.primary.aqua,
                width: `${skill.level}%`,
                borderRadius: 3,
              }} />
            </View>
          </Card>
        ))}
      </View>
    </ScrollView>
  );
}