import { useEffect } from 'react';
import './App.css';
import { LoadingPosts } from './LoadingPosts';

import { PostsUser } from './PostsUser';

function App() {

  useEffect(() => {
    document.title = "Userlist with Avatars";  
  }, []);

  return (
    <div className="container p-4 bg-rose-700 mt-10">
        <PostsUser />
        <LoadingPosts />
    </div>
  );
}

export default App;
