import { Colors } from './Colors';
import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
  // Containers
  container: {
    flex: 1,
    backgroundColor: Colors.primary.white,
  },
  
  // Textos
  textTitle: {
    color: Colors.primary.gray,
    fontSize: 24,
    fontWeight: 'bold',
  },
  textSubtitle: {
    color: Colors.primary.gray,
    fontSize: 18,
    fontWeight: '600',
  },
  textBody: {
    color: Colors.primary.gray,
    fontSize: 16,
  },
  textCaption: {
    color: Colors.secondary.grayMedium,
    fontSize: 14,
  },
  textHighlight: {
    color: Colors.primary.yellow, // TEXTOS DESTACADOS EM AMARELO
    fontSize: 16,
    fontWeight: '600',
  },
  textButton: {
    color: Colors.primary.white, // Texto branco em botões azuis
    fontSize: 16,
    fontWeight: '600',
  },
  
  // Botões - AGORA AZUIS
  buttonPrimary: {
    backgroundColor: Colors.primary.aqua, // BOTÕES AZUIS
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonSecondary: {
    backgroundColor: Colors.primary.yellow, // BOTÕES SECUNDÁRIOS AMARELOS
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  
  // Cards
  card: {
    backgroundColor: Colors.primary.white,
    borderRadius: 12,
    padding: 16,
    shadowColor: Colors.primary.gray,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  
  // Inputs - CINZA CLARO
  input: {
    backgroundColor: Colors.secondary.grayLight, // FORMS EM CINZA CLARO
    borderColor: Colors.secondary.grayBorder,
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    color: Colors.primary.gray,
  },
});