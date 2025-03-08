import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import SignUp from './pages/SignUp';
import Header from './components/Header';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute';
import CreatePost from './pages/CreatePost';
import UpdatePost from './pages/UpdatePost';
import PostPage from './pages/PostPage';
import ScrollToTop from './components/ScrollToTop';
import Search from './pages/Search';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen relative">
        {/* Header with higher z-index */}
        <div className="sticky top-0 z-30">
          <Header />
        </div>
        
        {/* Main content */}
        <main className="flex-grow relative">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/sign-in' element={<SignIn />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/search' element={<Search />} />
            <Route element={<PrivateRoute />}>
              <Route path='/dashboard' element={<Dashboard />} />
            </Route>
            <Route element={<OnlyAdminPrivateRoute />}>
              <Route path='/create-post' element={<CreatePost />} />
              <Route path='/update-post/:postId' element={<UpdatePost />} />
            </Route>
            <Route path='/projects' element={<Projects />} />
            <Route path='/post/:postSlug' element={<PostPage />} />
          </Routes>
        </main>
        
        {/* Footer with higher z-index */}
        <div className="relative z-30">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}