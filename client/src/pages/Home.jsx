import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import { useSelector } from 'react-redux';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { theme } = useSelector((state) => state.theme);
  const isDarkMode = theme === 'dark';
  
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  
  return (
    <div className='min-h-screen overflow-x-hidden'>
      {/* Background style with theme-aware image */}
      <div 
        className='fixed inset-0 z-0 bg-cover bg-center bg-no-repeat' 
        style={{ 
          backgroundImage: isDarkMode 
            ? 'url("/images/space-bg.webp")' 
            : 'url("/images/light-space-bg.jpg")',
          filter: isDarkMode ? 'brightness(0.4)' : 'brightness(0.9)'
        }}
      >
        <div className={`absolute inset-0 ${
          isDarkMode 
            ? 'bg-black bg-opacity-70' 
            : 'bg-white bg-opacity-50 backdrop-blur-sm'
        }`}></div>
      </div>
      
      {/* Content with higher z-index */}
      <div className='relative z-10 px-4 sm:px-6 md:px-8 lg:px-12'>
        <div className='flex flex-col gap-6 py-24 md:py-28 px-3 max-w-6xl mx-auto text-center'>
          <h1 className='text-4xl font-bold lg:text-7xl text-gray-900 dark:text-white tracking-tight drop-shadow-md'>
            Welcome to <span className='text-purple-600 dark:text-purple-400'>BeyondLocalhost.Space</span>
          </h1>
          <p className='text-gray-800 dark:text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-sm'>
            My personal platform where I showcase my work, projects, and learnings in web development, 
            cybersecurity, and software engineering. I'm Vinod, a passionate developer exploring the 
            intersection of code and creativity.
          </p>
          <div className='mt-4 flex gap-4 justify-center'>
            <Link
              to='/search'
              className='px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-all duration-300 inline-block shadow-lg hover:shadow-xl'
            >
              Explore Articles
            </Link>
            <Link
              to='/projects'
              className='px-6 py-3 border border-purple-600 text-purple-600 dark:text-purple-400 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-all duration-300 inline-block shadow-lg hover:shadow-xl'
            >
              View Projects
            </Link>
          </div>
        </div>
        
        <div className='backdrop-blur-lg bg-white/90 dark:bg-purple-900/40 rounded-xl shadow-xl border border-purple-300/40 dark:border-purple-500/20 max-w-6xl mx-auto p-4 md:p-6'>
          <CallToAction />
        </div>

        {/* Recent Posts Section with improved grid */}
        <div className='max-w-6xl mx-auto mt-16 mb-16'>
          {posts && posts.length > 0 && (
            <div className='flex flex-col gap-8'>
              <h2 className='text-3xl font-bold text-center text-gray-900 dark:text-white mb-8 drop-shadow-sm'>Recent Posts</h2>
              
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {posts.map((post) => (
                  <PostCard key={post._id} post={post} />
                ))}
              </div>
              
              <div className='text-center mt-12 mb-8'>
                <Link
                  to={'/search'}
                  className='inline-flex items-center text-purple-700 dark:text-purple-400 hover:text-purple-900 dark:hover:text-purple-300 font-medium px-6 py-3 border border-purple-400 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-all duration-300 shadow-md'
                >
                  View all posts
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          )}
        </div>
        
        {/* Mission Statement */}
        <div className='max-w-6xl mx-auto mb-16 backdrop-blur-lg bg-white/80 dark:bg-purple-900/30 rounded-xl shadow-xl border border-purple-300/40 dark:border-purple-500/20 p-6 md:p-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
            <div>
              <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>Build & Learn Together</h2>
              <p className='text-gray-800 dark:text-gray-300 mb-4'>
                My goal is to share knowledge, document my learning journey, and engage with like-minded individuals 
                interested in programming, security operations, and web development.
              </p>
              <p className='text-gray-800 dark:text-gray-300'>
                Feel free to explore the articles, leave comments, and share your thoughts. 
              </p>
              <div className='mt-6'>
                <Link 
                  to='/about'
                  className='text-purple-600 dark:text-purple-400 font-medium hover:text-purple-800 dark:hover:text-purple-300 transition-colors duration-300'
                >
                  Learn more about me →
                </Link>
              </div>
            </div>
            <div className='bg-gradient-to-br from-purple-500/20 to-indigo-500/20 dark:from-purple-500/30 dark:to-indigo-500/30 p-6 rounded-xl border border-purple-300/30 dark:border-purple-500/30 shadow-lg'>
              <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-3'>Topics I Write About</h3>
              <ul className='grid grid-cols-2 gap-2'>
                <li className='flex items-center text-gray-800 dark:text-gray-300'>
                  <svg className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Web Development
                </li>
                <li className='flex items-center text-gray-800 dark:text-gray-300'>
                  <svg className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Cybersecurity
                </li>
                <li className='flex items-center text-gray-800 dark:text-gray-300'>
                  <svg className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Software Engineering
                </li>
                <li className='flex items-center text-gray-800 dark:text-gray-300'>
                  <svg className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Competitive programming
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}