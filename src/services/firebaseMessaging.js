import messaging from '@react-native-firebase/messaging';
import {Alert} from 'react-native';

/**
 * 포그라운드 알림 처리
 */
export const handleForegroundMessage = () => {
    messaging().onMessage(async (remoteMessage) => {
        try {
            console.log('Foreground message received:', remoteMessage);

            const title = remoteMessage.notification?.title || 'No Title';
            const body = remoteMessage.notification?.body || 'No Body';

            if (title && body) {
                Alert.alert(title, body);
            } else {
                console.error('Notification data missing title or body');
            }
        } catch (error) {
            console.error('Error handling foreground message:', error);
        }
    });
};

/**
 * 백그라운드에서 알림 클릭 시 처리
 */
export const handleBackgroundNotification = () => {
    messaging().onNotificationOpenedApp((remoteMessage) => {
        console.log('Notification opened from background:', remoteMessage);
        // 필요에 따라 알림 데이터를 처리하는 추가 로직
    });
};

/**
 * 앱 종료 상태에서 알림 클릭 시 처리
 */
export const handleQuitStateNotification = async () => {
    console.log("Checking initial notification...");
    const remoteMessage = await messaging().getInitialNotification();
    if (remoteMessage) {
        console.log('Notification caused app to open from quit state:', remoteMessage);
        // 알림 데이터를 기반으로 추가 작업
    } else {
        console.log("No notification caused app to open.");
    }
};

/**
 * FCM 초기화 및 알림 핸들러 설정
 */
export const initializeFCM = async () => {
    handleForegroundMessage();
    handleBackgroundNotification();
    handleQuitStateNotification();

    // FCM 토큰 가져오기
    try {
        const token = await messaging().getToken();
        console.log('Your FCM Token:', token);
    } catch (error) {
        console.error('Failed to fetch FCM Token:', error);
    }
};

// 토픽 구독
export const subscribeToTopic = async (topic) => {
    try {
        await messaging().subscribeToTopic(topic);
        console.log(`Successfully subscribed to topic: ${topic}`);
    } catch (error) {
        console.error(`Failed to subscribe to topic: ${topic}`, error);
    }
};

// 토픽 구독 해제
export const unsubscribeFromTopic = async (topic) => {
    try {
        await messaging().unsubscribeFromTopic(topic);
        console.log(`Successfully unsubscribed from topic: ${topic}`);
    } catch (error) {
        console.error(`Failed to unsubscribe from topic: ${topic}`, error);
    }
};

// 모든 FCM 핸들러 클린업
export const cleanupFCM = () => {
    return () => {
        messaging().onMessage(() => {});
        messaging().onNotificationOpenedApp(() => {});
    }
};
