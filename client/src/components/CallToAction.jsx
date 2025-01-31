import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-indigo-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Check out my github
            </h2>
            <p className='text-gray-500 my-2'>
                Explore my projects, contributions, and more!
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://github.com/vinodvk00" target='_blank' rel='noopener noreferrer'>
                    vinodvk00
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://www.zbw-mediatalk.eu/wp-content/uploads/2015/09/github-cover.jpg" />
        </div>
    </div>
  )
}