import React from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import { Styles } from '@/constants/Styles';
import { Colors } from '@/constants/Colors';
import { Card } from '@/components/ui/Card';

type Course = {
  id: string;
  title: string;
  category: string;
  progress: number;
  duration: string;
};

const coursesData: Course[] = [
  {
    id: '1',
    title: 'Introdução à IA',
    category: 'Tecnologia',
    progress: 75,
    duration: '4h',
  },
  {
    id: '2',
    title: 'Soft Skills para Liderança',
    category: 'Desenvolvimento Pessoal',
    progress: 30,
    duration: '6h',
  },
  {
    id: '3',
    title: 'Sustentabilidade Corporativa',
    category: 'Meio Ambiente',
    progress: 0,
    duration: '3h',
  },
  {
    id: '4',
    title: 'Análise de Dados com Python',
    category: 'Tecnologia',
    progress: 100,
    duration: '8h',
  },
];

type CourseItemProps = {
  item: Course;
};

const CourseItem: React.FC<CourseItemProps> = ({ item }) => (
  <Card style={{ marginBottom: 16 }}>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
      <View style={{ flex: 1 }}>
        <Text style={[Styles.textSubtitle, { color: Colors.primary.aqua }]}>
          {item.title}
        </Text>
        <Text style={[Styles.textCaption, { marginTop: 4 }]}>
          {item.category} • {item.duration}
        </Text>
        
        <View style={{ marginTop: 12 }}>
          <View style={{ 
            flexDirection: 'row', 
            justifyContent: 'space-between', 
            marginBottom: 4 
          }}>
            <Text style={Styles.textCaption}>Progresso</Text>
            <Text style={Styles.textCaption}>{item.progress}%</Text>
          </View>
          <View style={{
            height: 6,
            backgroundColor: Colors.secondary.grayLight,
            borderRadius: 3,
            overflow: 'hidden',
          }}>
            <View style={{
              height: '100%',
              backgroundColor: item.progress === 100 ? Colors.semantic.success : Colors.primary.aqua,
              width: `${item.progress}%`,
              borderRadius: 3,
            }} />
          </View>
        </View>
      </View>
    </View>
  </Card>
);

export default function CoursesScreen() {
  const renderCourseItem = ({ item }: { item: Course }) => (
    <CourseItem item={item} />
  );

  return (
    <ScrollView style={Styles.container}>
      <View style={{ padding: 24 }}>
        <Text style={[Styles.textTitle, { color: Colors.primary.yellow }]}>
          Cursos Disponíveis
        </Text>
        <Text style={[Styles.textBody, { marginTop: 8, marginBottom: 24 }]}>
          Desenvolva as habilidades do futuro
        </Text>

        <FlatList
          data={coursesData}
          renderItem={renderCourseItem}
          keyExtractor={(item: Course) => item.id}
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </ScrollView>
  );
}