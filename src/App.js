import React from 'react';
import ProfileCard from './ProfileCard';
import avatar from "../src/assets/girl avatar.jpg"

const App = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#f0f0f0' }}>
    <ProfileCard 
      name="Jane Doe" 
      title="Software Engineer" 
      avatar={avatar}
    />
  </div>
);

export default App;