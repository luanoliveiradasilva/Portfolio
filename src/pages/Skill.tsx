import ArrowUp from '/assets/icons/Arrow Up.svg';
import ArrowDown from '/assets/icons/Arrow Down.svg';
import loadIcons from "../utils/laodIcons";

const Skill = () => {

  return (
    <>
      <div className='animate-appear animPage'>
        <div className="w-full h-[600px] mt-20">
          <div className="w-full">
            <h1 className="text-5xl"><span className="text-purple">My</ span> skills
            </h1>
            <p className='text-sm w-auto h-auto pt-4'>
              Technologies I’ve been working with recently
            </p>

            <div className="flex flex-wrap justify-center pt-20 gap-16 px-32">
              {loadIcons.tech.map(item =>
                <img key={item} src={item} />
              )}

            </div>

          </div>

          <div className='justify-end flex items-center pt-12 gap-2'>
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

export default Skill;
