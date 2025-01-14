import React, {createContext, useState} from 'react';
import axios from 'axios';
import RNFetchBlob from 'rn-fetch-blob';
import {Buffer} from 'buffer';

export const RecordingContext = createContext();

export const RecordingProvider = ({children}) => {
  const [recordings, setRecordings] = useState([]);
  
  // userUuid를 사용하여 녹음 데이터를 가져오는 함수
  const fetchRecordingByUUID = async (userUuid) => {
    if (!userUuid) {
      console.error('userUuid가 제공되지 않았습니다.');
      return;
    }

    try {
      const response = await axios.get(`https://realvoice.shop/play/${userUuid}`, {
        responseType: 'arraybuffer',
      });
      const base64Data = Buffer.from(new Uint8Array(response.data)).toString('base64');
      const filePath = `${RNFetchBlob.fs.dirs.DocumentDir}/${userUuid}.mp3`;
      await RNFetchBlob.fs.writeFile(filePath, base64Data, 'base64');
      console.log('저장된 파일 경로:', filePath);
      setRecordings([{ audioUri: `file://${filePath}` }]);
    } catch (error) {
      console.error('녹음 데이터를 가져오지 못했습니다:', error);
    }
  };

  const addRecording = recording => {
    setRecordings(prevRecordings => [...prevRecordings, recording]);
  };

  return (
    <RecordingContext.Provider value={{recordings, fetchRecordingByUUID, addRecording}}>
      {children}
    </RecordingContext.Provider>
  );
};
