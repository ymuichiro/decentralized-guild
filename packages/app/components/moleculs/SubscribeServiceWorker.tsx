import { userApi } from '@/services/InitOas';
import type { DefaultUser } from 'next-auth';
import React from 'react';

declare global {
  interface Window {
    workbox: any;
  }
}

// 購読中止ボタンは管理画面へ
// 購読再開ボタンも同様

function base64ToUint8Array(base64: string): Uint8Array {
  const padding = '='.repeat((4 - (base64.length % 4)) % 4);
  const b64 = (base64 + padding).replace(/-/g, '+').replace(/_/g, '/');

  const rawData = window.atob(b64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

export default function SubscribeServiceWorker(props: { user: DefaultUser }): JSX.Element {
  React.useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator && window.workbox !== undefined) {
      navigator.serviceWorker.ready.then(async (registration) => {
        const currentSubscription = await registration.pushManager.getSubscription();
        if (!currentSubscription) {
          const subscription = await registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: base64ToUint8Array(process.env.NEXT_PUBLIC_WEB_PUSH_PUBLIC_KEY),
          });
          await userApi.postUserPush({ userId: props.user.id, webPush: subscription });
        }
      });
    }
  }, []);

  return <div />;
}
