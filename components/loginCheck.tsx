import Checkbox from 'expo-checkbox';
import React from 'react';
import { YStack, XStack, Button, Input, Text } from 'tamagui';

interface LoginCheckProps {
  size: any; // 根據 Tamagui 的定義替換為合適的類型
  loginInfo: { Account: string; Password: string; IsRemberMe: boolean };
  setLoginInfo: React.Dispatch<
    React.SetStateAction<{ Account: string; Password: string; IsRemberMe: boolean }>
  >;
  isChecked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
  onLogin: () => void;
}

function LoginCheck(props: LoginCheckProps) {
  const { size, loginInfo, setLoginInfo, isChecked, setChecked, onLogin } = props;

  return (
    <YStack space="$4">
      <XStack alignItems="center" space="$2" width={300}>
        <Input
          flex={1}
          size={size}
          placeholder="帳號"
          value={loginInfo.Account}
          onChangeText={(text) => setLoginInfo({ ...loginInfo, Account: text })}
        />
      </XStack>
      <XStack alignItems="center" space="$2" width={300}>
        <Input
          flex={1}
          size={size}
          placeholder="密碼"
          secureTextEntry
          value={loginInfo.Password}
          onChangeText={(text) => setLoginInfo({ ...loginInfo, Password: text })}
        />
      </XStack>
      <XStack alignItems="center" space="$2" width={300}>
        <Button theme="active" flex={1} backgroundColor="#969697" color="#FFFFFF" onPress={onLogin}>
          登入
        </Button>
      </XStack>
      <XStack alignItems="center" space="$2" width={300}>
        <Checkbox
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#000000' : undefined}
        />
        <Text>記住此帳號</Text>
      </XStack>
    </YStack>
  );
}

export default LoginCheck;
