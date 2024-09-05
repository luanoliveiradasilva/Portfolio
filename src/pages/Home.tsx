import MaskGroup from '/assets/img/Mask group.svg';
import Git from '/assets/img/git.svg';
import Linkedin from '/assets/img/linkedin.svg';
import Arrow from '/assets/icons/Arrow Down.svg';
import CV from '/assets/img/CV.svg';
import docCv from '/assets/docs/CV - Luan Nascimento Oliveira.pdf';

const Home = () => {
  return (
    <>

      <div className='w-auto h-auto mt-20'>
        <div className='flex justify-between items-center'>
          <div className='w-auto h-auto space-y-[14px] pl-20'>
            <p className='text-5xl'>
              Hello, I’m <span className='text-purple'>Luan</span> Oliveira
            </p>
            <p className='text-purple text-sm w-auto h-auto'>
              Back end developer.
            </p>
            <p>
              Good experience with systems development, ranging from testing,
              <p>back-end development to front-end.</p>
            </p>
          </div>

          <div className="rounded-full h-80 w-80 flex bg-purple">
            <img src={MaskGroup} alt="Mask Group" />
          </div>
        </div>
        <div className='flex justify-start items-center w-auto h-auto gap-4'>
          <div className="h-16 w-16 bg-white justify-center flex items-center rounded-2xl shadow-custom cursor-pointer">
            <a href="https://github.com/luanoliveiradasilva" target="_blank" className='cursor-pointer'>
              <img src={Git} alt="Git" />
            </a>
          </div>

          <div className="h-16 w-16 bg-white justify-center flex items-center rounded-2xl shadow-custom cursor-pointer">
            <a href="https://www.linkedin.com/in/luan-nascimento-oliveira/" target="_blank" className='cursor-pointer'>
              <img src={Linkedin} alt="Linkedin" />
            </a>

          </div>

          <div className="h-16 w-16 bg-white justify-center flex items-center rounded-2xl shadow-custom cursor-pointer">
            <a href={docCv} download="CV - Luan Nascimento Oliveira.pdf" className='cursor-pointer'>
              <img src={CV} alt="Linkedin" />
            </a>

          </div>
        </div>

        <div className='justify-end flex pt-16 gap-2'>
          <div>Scroll</div>
          <img src={Arrow} />
        </div>

      </div>

    </>
  );
};

export default Home;
