import { YStack, H2, Separator, Theme } from 'tamagui';

import EditScreenInfo from '../../components/editScreenInfo';

export default function TabTwoScreen() {
  return (
    <Theme name="light">
      <YStack flex={1} alignItems="center" justifyContent="center">
        <H2>聊天室畫面(放lineGPT)</H2>
        <Separator />
        <EditScreenInfo path="app/(tabs)/index.tsx" />
      </YStack>
    </Theme>
  );
}
