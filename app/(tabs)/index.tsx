import { YStack, H2, Separator, Theme } from 'tamagui';

import EditScreenInfo from '../../components/editScreenInfo';
import PassportInfo from '../../components/passportInfo'; // 導入 PassportInfo 組件

export default function TabOneScreen() {
  return (
    <Theme name="light">
      <YStack flex={1} alignItems="center" justifyContent="center">
        <H2>主頁(放EIP)</H2>
        <Separator />
        <EditScreenInfo path="app/(tabs)/index.tsx" />
        {/* <PassportInfo /> */}
      </YStack>
    </Theme>
  );
}
