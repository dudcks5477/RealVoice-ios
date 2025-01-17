import messaging from '@react-native-firebase/messaging';

const subscribeToTopic = async (topic) => {
    try {
        await messaging().subscribeToTopic(topic);
        console.log(`Successfully subscribed to topic: ${topic}`);
    } catch (error) {
        console.error(`Failed to subscribe to topic: ${topic}`, error);
    }
};

const unsubscribeFromTopic = async (topic) => {
    try {
        await messaging().unsubscribeFromTopic(topic);
        console.log(`Successfully unsubscribed from topic: ${topic}`);
    } catch (error) {
        console.error(`Failed to unsubscribe from topic: ${topic}`, error);
    }
};

export default {
    subscribeToTopic,
    unsubscribeFromTopic,
};
