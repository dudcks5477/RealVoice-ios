const express = require('express');
const bodyParser = require('body-parser');
const { google } = require('googleapis');
const admin = require('firebase-admin');
const path = require('path');

// 서비스 계정 키 JSON 파일 경로
const serviceAccount = require('./config/serviceAccountKey.json');

// Firebase 초기화
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Express 서버 설정
const app = express();
app.use(bodyParser.json());

// JWT 클라이언트 생성 (토큰 생성용)
const jwtClient = new google.auth.JWT(
  serviceAccount.client_email,
  null,
  serviceAccount.private_key,
  ['https://www.googleapis.com/auth/firebase.messaging']
);

// Access Token 생성 함수
async function generateAccessToken() {
  try {
    const token = await jwtClient.authorize();
    console.log('Generated Access Token:', token.access_token);
    return token.access_token;
  } catch (error) {
    console.error('Error generating access token:', error);
    throw error;
  }
}

// 푸시 알림 API
app.post('/send-push', async (req, res) => {
  const { topic, title, body } = req.body;

  try {
    // Access Token 생성
    const accessToken = await generateAccessToken();

    // 메시지 작성
    const message = {
      message: {
        topic: topic,
        notification: {
          title: title,
          body: body,
        },
      },
    };

    // FCM API로 푸시 알림 전송
    const response = await fetch(
      `https://fcm.googleapis.com/v1/projects/${serviceAccount.project_id}/messages:send`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
      }
    );

    const responseData = await response.json();
    console.log('Notification sent successfully:', responseData);

    res.status(200).send({
      message: 'Notification sent successfully',
      response: responseData,
    });
  } catch (error) {
    console.error('Error sending notification:', error);
    res.status(500).send({
      error: 'Failed to send notification',
      details: error,
    });
  }
});

// 서버 시작
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Firebase server running on http://localhost:${PORT}`);
});
