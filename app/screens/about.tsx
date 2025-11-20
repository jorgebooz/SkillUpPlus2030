import React from 'react';
import { View, Text, ScrollView, Linking } from 'react-native';
import { Styles } from '@/constants/Styles';
import { Colors } from '@/constants/Colors';
import { Card } from '@/components/ui/Card';

export default function AboutScreen() {
  return (
    <ScrollView style={Styles.container}>
      <View style={{ padding: 24 }}>
        <Text style={[Styles.textTitle, { color: Colors.primary.yellow }]}>
          Sobre o SkillUpPlus
        </Text>

        <Card style={{ marginTop: 24 }}>
          <Text style={[Styles.textSubtitle, { color: Colors.primary.aqua, marginBottom: 12 }]}>
            🚀 Nossa Missão
          </Text>
          <Text style={Styles.textBody}>
            O SkillUpPlus 2030+ foi criado para preparar trabalhadores e estudantes 
            para as transformações do mercado de trabalho, oferecendo trilhas de 
            aprendizado em áreas emergentes como IA, sustentabilidade e soft skills.
          </Text>
        </Card>

        <Card style={{ marginTop: 16 }}>
          <Text style={[Styles.textSubtitle, { color: Colors.primary.aqua, marginBottom: 12 }]}>
            🌍 ODS da ONU
          </Text>
          <Text style={Styles.textBody}>
            Nosso app está alinhado com os Objetivos de Desenvolvimento Sustentável 
            da ONU, especialmente:
          </Text>
          <Text style={[Styles.textBody, { marginTop: 8 }]}>
            • ODS 4 - Educação de Qualidade{'\n'}
            • ODS 8 - Trabalho Decente{'\n'}
            • ODS 9 - Inovação{'\n'}
            • ODS 10 - Redução de Desigualdades
          </Text>
        </Card>

        <Card style={{ marginTop: 16 }}>
          <Text style={[Styles.textSubtitle, { color: Colors.primary.aqua, marginBottom: 12 }]}>
            📞 Contato
          </Text>
          <Text style={Styles.textBody}>
            Email: contato@skillupplus.com{'\n'}
            Site: www.skillupplus.com{'\n'}
            LinkedIn: /skillupplus
          </Text>
        </Card>

        <Card style={{ marginTop: 16 }}>
          <Text style={[Styles.textSubtitle, { color: Colors.primary.aqua, marginBottom: 12 }]}>
            👥 Desenvolvimento
          </Text>
          <Text style={Styles.textBody}>
            Desenvolvido com React Native e TypeScript{'\n'}
            Design System próprio{'\n'}
            Navegação híbrida (Stack + Tabs + Drawer)
          </Text>
        </Card>
      </View>
    </ScrollView>
  );
}