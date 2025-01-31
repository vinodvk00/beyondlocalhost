import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble, BsLinkedin } from 'react-icons/bs';
export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-indigo-500'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5'>
            <Link
              to='/'
              className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'
            >
              <span className='px-2 py-1 bg-gradient-to-r to-indigo-500 via-purple-500 from-slate-700 rounded-lg text-white'>
                beyondlocalhost.
              </span>
              Space
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
              <Footer.Title title='About' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='/about'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  beyondlocalhost.space
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='connect' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://github.com/vinodvk00'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Github
                </Footer.Link>
                {/* <Footer.Link href='#'>Discord</Footer.Link> */}
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Legal' />
              <Footer.LinkGroup col>
                <Footer.Link href='#'>Privacy Policy</Footer.Link>
                <Footer.Link href='#'>Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright
            href='#'
            by="beyondlocalhost"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            {/* <Footer.Icon href='#' icon={BsFacebook} /> */}
            {/* <Footer.Icon href='#' icon={BsInstagram} /> */}
            {/* <Footer.Icon href='#' icon={BsTwitter} /> */}
            <Footer.Icon href='https://github.com/vinodvk00' icon={BsGithub} />
            <Footer.Icon href='https://www.linkedin.com/in/iamvinod00/' icon={BsLinkedin} />
            {/* <Footer.Icon href='#' icon={BsDribbble} /> */}

          </div>
        </div>
      </div>
    </Footer>
  );
}
