import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';
import { YStack, Paragraph, Separator, Theme } from 'tamagui';

import EditScreenInfo from '../components/editScreenInfo';

export default function ModalScreen() {
  return (
    <Theme name="light">
      <YStack flex={1} alignItems="center" justifyContent="center">
        <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        <Paragraph>嗨嗨嗨</Paragraph>
        <Separator />
        <EditScreenInfo path="app/modal.tsx" />
        <Paragraph>"嗨嗨嗨"</Paragraph>
      </YStack>
    </Theme>
  );
}
