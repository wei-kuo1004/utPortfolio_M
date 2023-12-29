import LoginScreenInfo from 'components/loginScreenInfo';
import { YStack, H2, Separator, Theme } from 'tamagui';

export default function loginScreen() {
  return (
    <Theme name="light">
      <YStack flex={1} alignItems="center" justifyContent="center">
        <LoginScreenInfo path="app/(tabs)/index.tsx" />
        <Separator />
      </YStack>
    </Theme>
  );
}
