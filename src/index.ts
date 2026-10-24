import { registerRoot, Composition } from 'remotion';
import React from 'react';

export const MyVideo: React.FC = () => {
  return (
    <div style={{
      flex: 1,
      backgroundColor: '#1e1e2e',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
      height: '100%'
    }}>
      <h1 style={{ color: '#ffffff', fontSize: 80, fontFamily: 'sans-serif' }}>
        Ujian Video AI Remotion 🎉
      </h1>
    </div>
  );
};

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="VideoTest"
      component={MyVideo}
      durationInFrames={150}
      fps={30}
      width={1080}
      height={1920}
    />
  );
};

registerRoot(RemotionRoot);
