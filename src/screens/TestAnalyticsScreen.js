import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import analytics from '@react-native-firebase/analytics';


const TestAnalyticsScreen = () => {
    const logTestEvent = async () => {
        try {
            await analytics().logEvent('test_event', {
                test_param: 'test_value',
            });
            console.log('Test event logged');
        } catch (error) {
            console.error('Failed to log test event:', error);
        }
    };

    return (
        <View style={styles.container}>
          <Button title="Log Test Event" onPress={logTestEvent} />
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
});

export default TestAnalyticsScreen;