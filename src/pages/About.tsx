import Pin from '/assets/icons/Pin.svg';
import Calendar from '/assets/icons/Calendar.svg';
import ArrowUp from '/assets/icons/Arrow Up.svg';
import ArrowDown from '/assets/icons/Arrow Down.svg';

const About = () => {
  return (
    <>
      <div className='animate-appear animPage'>

        <div className="w-full h-auto mt-20">
          <div className="w-full flex justify-start items-start">
            <div className='text-center'>
              <h1 className="text-5xl">About <span className="text-purple">Me</ span>
              </h1>
              <p className='text-sm w-auto h-auto'>
                My Introduction
              </p>
            </div>
          </div>

          <div className="w-auto pl-64 pt-11 text-sm text-justify">
            <p>I have a degree in Systems Analysis and Development from Estácio de Sá, an MBA in Software Engineering from Impacta in Brazil
              and am currently studying Digital Games Development at the Polytechnic Institute of Maia in Portugal. I have a strong interest in
              technology and finding new, simple solutions that increase productivity and have a positive impact on people.
            </p>
          </div>

          <div className="grid grid-rows-1 grid-flow-col gap-16 justify-center items-center p-20">

            <div className="grid grid-rows-4 grid-flow-col gap-5 pt-2 text-sm">

              <h2 className="text-2xl mb-2"> Work Experience</h2>

              <div className='justify-start items-center flex flex-wrap'>
                <span className='w-48'>
                  Front-end developer
                </span>
                <span className='justify-start flex items-center gap-1 w-24'>
                  <img src={Pin} alt="Pin" className='w-3 h-3' />
                  Portugal
                </span>
                <span className='justify-start flex items-center gap-1 pr-4'>
                  <img src={Calendar} alt="Mask Group" className='w-3 h-3' />
                  02/2024 - 06/2024
                </span>
                <span className='w-full'>Lusoinfo II Multimédia S.A</span>
              </div>

              <div className='justify-start items-center flex flex-wrap'>
                <span className='w-48'>
                  Software engineer
                </span>
                <span className='justify-start flex items-center gap-1 w-24 '>
                  <img src={Pin} alt="Pin" className='w-3 h-3' />
                  Brazil
                </span>
                <span className='justify-start flex items-center gap-1 pr-4'>
                  <img src={Calendar} alt="Mask Group" className='w-3 h-3' />
                  09/2020 - 05/2023
                </span>
                <span className='w-full'>Itaú Unibanco</span>
              </div>

              <div className='justify-start items-center flex flex-wrap'>
                <span className='w-48'>
                  QA JR. Test Analyst
                </span>
                <span className='justify-start flex items-center gap-1 w-24'>
                  <img src={Pin} alt="Pin" className='w-3 h-3' />
                  Brazil
                </span>
                <span className='justify-start flex items-center gap-1 pr-4'>
                  <img src={Calendar} alt="Mask Group" className='w-3 h-3' />
                  02/2020 - 09/2020
                </span>
                <span className='w-full'>Itaú Unibanco</span>
              </div>

            </div>

            <div className="grid grid-rows-4 grid-flow-col gap-5 pt-2 text-sm">
              <h2 className="text-2xl mb-2"> Education</h2>
              <div className='justify-start items-center flex flex-wrap'>
                <span className='w-72'>
                  Multimedia production and digital games
                </span>
                <span className='justify-start flex items-center gap-1 w-24'>
                  <img src={Pin} alt="Pin" className='w-3 h-3' />
                  Portugal
                </span>
                <span className='justify-start flex items-center gap-1 pr-4'>
                  <img src={Calendar} alt="Mask Group" className='w-3 h-3' />
                  09/2022 - 09/2024
                </span>
                <span className='w-full'>Polytechnic Institute of Maia - IPMAIA</span>
              </div>

              <div className='justify-start items-center flex flex-wrap'>
                <span className='w-72'>
                  MBA in software engineering
                </span>
                <span className='justify-start flex items-center gap-1 w-24 '>
                  <img src={Pin} alt="Pin" className='w-3 h-3' />
                  Brazil
                </span>
                <span className='justify-start flex items-center gap-1 pr-4'>
                  <img src={Calendar} alt="Mask Group" className='w-3 h-3' />
                  03/2021 - 04/2022
                </span>
                <span className='w-full'>Impacta Tecnologia</span>
              </div>

              <div className='justify-start items-center flex flex-wrap'>
                <span className='w-72'>
                  Systems analysis and development
                </span>
                <span className='justify-start flex items-center gap-1 w-24'>
                  <img src={Pin} alt="Pin" className='w-3 h-3' />
                  Brazil
                </span>
                <span className='justify-start flex items-center gap-1 pr-4'>
                  <img src={Calendar} alt="Mask Group" className='w-3 h-3' />
                  01/2017 - 02/2019
                </span>
                <span className='w-full'>University Estácio de Sá</span>
              </div>

            </div>


          </div>

          <div className='justify-end flex items-center pt-11 gap-2'>
            <div>Scroll</div>
            <div className='space-y-1'>
              <img src={ArrowUp} />
              <img src={ArrowDown} />
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default About;
