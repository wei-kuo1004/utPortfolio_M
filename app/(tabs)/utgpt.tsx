import { YStack, H2, Separator, Theme } from 'tamagui';

import EditScreenInfo from '../../components/editScreenInfo';

export default function TabFourScreen() {
  return (
    <Theme name="light">
      <YStack flex={1} alignItems="center" justifyContent="center">
        <H2>各種GPT功能(放UT-GPT)</H2>
        <Separator />
        <EditScreenInfo path="app/(tabs)/index.tsx" />
      </YStack>
    </Theme>
  );
}
