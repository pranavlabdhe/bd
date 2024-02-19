import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import {  BsTwitter, BsGithub, } from 'react-icons/bs';
export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          {/* <div className='mt-5'>
            <Link
              to='/'
              className='self-center whitespace-nowrap text-lg sm:text-xl dark:text-white'
            >
              <span className='px-2 py-1  text-white'>
              Medium blog post
              </span>
            </Link>
          </div> */}
          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
            {/* <div>
              <Footer.Title title='About' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://www.100jsprojects.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  100 JS Projects
                </Footer.Link>
                <Footer.Link
                  href='/about'
                  target='_blank'
                  rel='noopener noreferrer'
                >
       Medium blog post
                </Footer.Link>
              </Footer.LinkGroup>
            </div> */}
            {/* <div>
              <Footer.Title title='Follow us' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href=''
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Github
                </Footer.Link>
                <Footer.Link href='#'>Discord</Footer.Link>
              </Footer.LinkGroup>
            </div> */}
            {/* <div>
              <Footer.Title title='Legal' />
              <Footer.LinkGroup col>
                <Footer.Link href='#'>Privacy Policy</Footer.Link>
                <Footer.Link href='#'>Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div> */}
          </div>
        </div>
        {/* <Footer.Divider /> */}
        <div className=''>
        <div className='footer_height '>
        <p className="cpy">Version: 1.0.0 </p>
        <p className="cpy">Copyright © 2024 Pranav Labdhe</p>
        </div>
          <div className="flex gap-6 sm:justify-center margin_top">
            <Footer.Icon href='#' icon={BsTwitter}/>
            <Footer.Icon href='' icon={BsGithub}/>

          </div>
        </div>
      </div>
    </Footer>
  );
}
