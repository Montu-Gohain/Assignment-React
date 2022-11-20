import './App.css';
import { Posts } from './Posts';
import { LoadingPosts } from './LoadingPosts';
import CardProfile from './CardProfile';

import { PostsUser } from './PostsUser';
// import { users } from './user.json';

function App() {
  return (
    <div className="container p-4 bg-rose-700 mt-10">
        {/* <Posts /> */} 
        <PostsUser />
        {/* <LoadingPosts /> */}
    </div>
  );
}

export default App;
