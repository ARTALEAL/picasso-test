import { Route, Routes } from 'react-router-dom';
import PostsList from '../PostList/PostsList';
import './App.css';
import Post from '../Post/Post';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="*" element={<PostsList />}></Route>
        <Route path="/post/:id" element={<Post />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
