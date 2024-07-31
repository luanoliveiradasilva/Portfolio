import Git from '/assets/img/git.svg';
import Linkedin from '/assets/img/linkedin.svg';

const Footer = () => {
  return (
    <>

      <div className='w-auto h-auto mt-20 bg-purple text-white'>

        <div className="h-auto w-auto flex justify-center items-center px-[5rem] py-5 border-b">
          <div className='justify-start flex items-start text-center w-1/2  h-auto'>
            Connect with me on social media:
          </div>
          <div className='flex justify-end w-1/2 h-auto gap-4'>
            <div className="h-10 w-10 bg-white justify-center flex items-center rounded-full shadow-custom cursor-pointer">

              <a href="https://github.com/luanoliveiradasilva" target="_blank" className='cursor-pointer'>
                <img className='h-7 w-7' src={Git} alt="Git" />
              </a>


            </div>

            <div className="h-10 w-10 bg-white justify-center flex items-center rounded-full shadow-custom cursor-pointer">
              <a href="https://www.linkedin.com/in/luan-nascimento-oliveira/" target="_blank" className='cursor-pointer'>
                <img className='h-5 w-5' src={Linkedin} alt="Linkedin" />
              </a>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-3 gap-4 p-9 '>
          <div className='text-center justify-center items-center'>
            LUAN NASCIMENTO OLIVEIRA
            <p> A growing Developer.</p>
          </div>

          <div className='text-center justify-center items-center'>
            USEFUL LINKS
            <p>Home</p>
            <p>About</p>
            <p>Skills</p>
            <p>Projects</p>
          </div>

          <div className='text-center justify-center items-center'>
            CONTACT
            <p>luanoliveira1107@gmail.com</p>
            <p>+351 910882158</p>
          </div>

        </div>

        <div className='text-center justify-center items-center p-4 bg-purple-black '>
          © 2024 Copyright: Designed and built by Luan Nascimento Oliveira
        </div>

      </div>

    </>
  );
};

export default Footer;
