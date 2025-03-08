import { Link } from 'react-router-dom';
import { getImageUrl } from './GetImageUrl';

export default function PostCard({ post }) {
  return (
    <div className="overflow-hidden rounded-lg bg-white/90 dark:bg-gray-900/60 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/70 transition-all duration-300 h-96 flex flex-col shadow-lg hover:shadow-purple-500/20 hover:shadow-xl">
      <Link to={`/post/${post.slug}`} className="block overflow-hidden h-52 relative">
        <img
          src={getImageUrl(post?.image)}
          alt={post.title}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-2 left-2">
          <span className="text-xs font-medium px-2 py-1 bg-purple-600/80 text-white rounded-full">
            {post.category}
          </span>
        </div>
      </Link>
      
      <div className="p-4 flex flex-col flex-1 justify-between">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2 line-clamp-2 hover:text-purple-600 dark:hover:text-purple-300 transition-colors">
          {post.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 mb-4">
          {/* Clean up the content to remove HTML tags */}
          {post.excerpt || (post.content ? post.content.replace(/<[^>]*>/g, '').substring(0, 100) + '...' : '...')}
        </p>
        
        <div className="mt-auto">
          <Link
            to={`/post/${post.slug}`}
            className="w-full inline-block text-center text-sm py-2 rounded-md border border-purple-500 text-purple-700 dark:text-purple-300 hover:bg-purple-600 hover:text-white transition-all duration-300"
          >
            Read article
          </Link>
        </div>
      </div>
    </div>
  );
}