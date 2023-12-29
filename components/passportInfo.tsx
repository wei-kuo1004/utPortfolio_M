import { router } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import { useEffect, useState } from 'react';

const PassportInfo = () => {
  const [isReady, setIsReady] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const authenticate = async () => {
      // 從 SecureStore 獲取 JWT Token
      const token = await SecureStore.getItemAsync('userToken');
      if (!token) {
        // 如果沒有 Token，認為用戶未登錄
        return false;
      }
      return await verifyToken(token);
    };

    // 檢查用戶的認證狀態
    authenticate().then((authenticated) => {
      setIsLoggedIn(authenticated);
      setIsReady(true);
    });
  }, []);

  useEffect(() => {
    // 當組件準備就緒，根據用戶登錄狀態進行導航
    if (isReady) {
      if (isLoggedIn) {
        // router.push('/(tabs)/');
      } else {
        // router.push('/login');
      }
    }
  }, [isReady, isLoggedIn]); // 依賴於 isReady 和 isLoggedIn 狀態

  // 驗證 Token 的函數
  const verifyToken = async (token: string) => {
    try {
      const response = await fetch('YOUR_API_URL', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          // 添加其他必要的 headers
        },
        // 如果需要，添加 body
      });

      if (response.ok) {
        const data = await response.json();
        // 根據回應來判斷 Token 是否有效
        return data.isValid; // 假設回應中包含 isValid 屬性
      }
    } catch (error) {
      console.error('Token 驗證失敗:', error);
    }
    return false;
  };

  return null;
};

export default PassportInfo;
