import { YStack, H2, Separator, Theme } from 'tamagui';

import EditScreenInfo from '../../components/edit-screen-info';

export default function TabOneScreen() {
  return (
    <Theme name="light">
      <YStack flex={1} alignItems="center" justifyContent="center">
        <H2>主頁(放EIP)</H2>
        <Separator />
        <EditScreenInfo path="app/(tabs)/index.tsx" />
      </YStack>
    </Theme>
  );
}
