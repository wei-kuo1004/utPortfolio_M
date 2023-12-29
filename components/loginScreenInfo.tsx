import { router } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import React, { useState } from 'react';
import { Alert } from 'react-native';
import { YStack, Image, H6 } from 'tamagui';

import LoginCheck from './loginCheck'; // 假設 LoginCheck 位於同一目錄

//順序
//1.先檢查secureStore是否已經有token(如果沒有走235,如果有走45)
//2.將loginInfo.Account和loginInfo.Password 打過去後端驗證
//3.得到回傳的JWT token，儲存 JWT Token 到 SecureStore
//4.從secureStore取得JWT token
//5.轉跳至首頁 router.push('/(tabs)/');

async function authenticateUser(account: string, password: string): Promise<string | null> {
  //if (account === 'demo' && password === 'password') {
  //  return 'your_jwt_token';
  //}

  return null;
}

export default function LoginScreenInfo({ path }: { path: string }) {
  const [loginInfo, setLoginInfo] = useState({
    Account: "",
    Password: "",
    IsRemberMe: true,
  });
  const [isChecked, setChecked] = useState(false);

  const handleLogin = async () => {
    const token = await authenticateUser(loginInfo.Account, loginInfo.Password);
    if (token) {
      // 儲存 JWT Token 到 SecureStore
      await SecureStore.setItemAsync('userToken', token);
      // 導航到 (tabs) 頁面
      router.push('/(tabs)/');
    } else {
      // 處理登錄失敗的情況
      console.log('登錄失敗');
      Alert.alert('登錄失敗', '帳號或密碼錯誤'); // 顯示警告框
    }
  };

  return (
    <YStack>
      <YStack alignItems="center" marginHorizontal="$6" space="$3">
        <Image
          source={{ uri: 'https://line.pcbut.com.tw/images/LineGPT_logo.png' }}
          width="90%"
          height="20%"
        />
        <H6>輸入以下資訊登入您的帳戶</H6>
        <LoginCheck
          size="$3"
          loginInfo={loginInfo}
          setLoginInfo={setLoginInfo}
          isChecked={isChecked}
          setChecked={setChecked}
          onLogin={handleLogin}
        />
      </YStack>
    </YStack>
  );
}