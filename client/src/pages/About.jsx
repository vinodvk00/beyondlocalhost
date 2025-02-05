export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About beyondlocalhost.space
          </h1>
          <div className='text-md text-text flex flex-col gap-6'>
          <p>
              Welcome to <strong>BeyondLocalhost.Space</strong>! This is my personal platform where I showcase my work, projects, and learnings.
              I am Vinod, a passionate developer exploring various aspects of web development, cybersecurity, and software engineering.
            </p>
            <p>
              Here, you'll find articles, and insights on topics ranging from programming to security operations. My goal is to
              share knowledge, document my learning journey, and engage with like-minded individuals.
            </p>
            <p>
              Feel free to explore, leave comments, and share your thoughts. Let's build a community where we can learn and grow together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
