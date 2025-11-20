import React from 'react';
import { View, Text, ScrollView, Switch } from 'react-native';
import { Styles } from '@/constants/Styles';
import { Colors } from '@/constants/Colors';
import { Card } from '@/components/ui/Card';

export default function SettingsScreen() {
  const [notifications, setNotifications] = React.useState(true);
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <ScrollView style={Styles.container}>
      <View style={{ padding: 24 }}>
        <Text style={[Styles.textTitle, { color: Colors.primary.yellow }]}>
          Configurações
        </Text>

        <Card style={{ marginTop: 24 }}>
          <Text style={[Styles.textSubtitle, { marginBottom: 16 }]}>
            Preferências
          </Text>
          
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 12 }}>
            <Text style={Styles.textBody}>Notificações</Text>
            <Switch
              value={notifications}
              onValueChange={setNotifications}
              trackColor={{ false: Colors.secondary.grayLight, true: Colors.primary.aqua }}
              thumbColor={Colors.primary.white}
            />
          </View>
          
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 12 }}>
            <Text style={Styles.textBody}>Modo Escuro</Text>
            <Switch
              value={darkMode}
              onValueChange={setDarkMode}
              trackColor={{ false: Colors.secondary.grayLight, true: Colors.primary.aqua }}
              thumbColor={Colors.primary.white}
            />
          </View>
        </Card>

        <Card style={{ marginTop: 16 }}>
          <Text style={[Styles.textSubtitle, { marginBottom: 16 }]}>
            Privacidade
          </Text>
          <Text style={[Styles.textBody, { paddingVertical: 12 }]}>
            Política de Privacidade
          </Text>
          <Text style={[Styles.textBody, { paddingVertical: 12 }]}>
            Termos de Uso
          </Text>
        </Card>

        <Card style={{ marginTop: 16 }}>
          <Text style={[Styles.textSubtitle, { marginBottom: 16 }]}>
            Suporte
          </Text>
          <Text style={[Styles.textBody, { paddingVertical: 12 }]}>
            Central de Ajuda
          </Text>
          <Text style={[Styles.textBody, { paddingVertical: 12 }]}>
            Reportar Problema
          </Text>
          <Text style={[Styles.textBody, { paddingVertical: 12 }]}>
            Versão 1.0.0
          </Text>
        </Card>
      </View>
    </ScrollView>
  );
}