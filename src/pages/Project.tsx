import ArrowUp from '/assets/icons/Arrow Up.svg';
import ArrowDown from '/assets/icons/Arrow Down.svg';
import Tc from "/assets/img/projects/TC 1.svg";
import challenger from "/assets/img/projects/challenger.svg";
import watcher from "/assets/img/projects/watcher.svg";


const Project = () => {

  const projects = [
    {
      image: Tc,
      gitLink: 'https://github.com/luanoliveiradasilva/ProjectGame',
      itchLink: '',
      unityLink: ''
    },
    {
      image: challenger,
      gitLink: 'https://github.com/luanoliveiradasilva/UnityChallengeRun/tree/main',
      itchLink: '',
      unityLink: 'https://play.unity.com/pt/games/44854b48-ec14-4458-a1a4-e2a09daed367/unity-mini-challenge'
    },
    {
      image: watcher,
      gitLink: '',
      itchLink: 'https://thefourgameteers.itch.io/the-watcher',
      unityLink: ''
    },
  ];

  return (
    <>
      <div className='animate-appear animPage'>
        <div className="w-full h-[600px] mt-20">
          <div className="w-full">
            <h1 className="text-5xl">Projects</h1>
            <p className='text-sm w-auto h-auto pt-4'>
              Things I’ve built so far
            </p>

            <div className="flex flex-wrap justify-center pt-20 px-32 gap-4">
              {projects.map((project, index) => (
                <div key={index} className="relative w-80 h-80 transition duration-500 hover:scale-105 flex justify-center items-center">
                  <img src={project.image} alt={`Image ${index}`} className="w-full h-full object-cover" />

                  <div className="absolute inset-0 flex justify-center items-center transition-opacity duration-500 opacity-0 hover:opacity-100 bg-gray-800 bg-opacity-80">
                    <div className="text-white text-center p-4 flex flex-col justify-center items-center h-full w-full">
                      <a
                        href={project.gitLink === '' ? '' : project.gitLink}
                        target='_blank' className="block mb-2 text-lg font-semibold hover:text-gray-200 cursor-pointer"
                      >
                        {project.gitLink === '' ? '' : 'View on GitHub'}
                      </a>
                      <a
                        href={project.itchLink === '' ? '' : project.itchLink}
                        target='_blank' className="text-lg font-semibold hover:text-gray-200 cursor-pointer"
                      >
                        {project.itchLink === '' ? '' : 'View on Itch.io'}
                      </a>
                      <a
                        href={project.unityLink === '' ? '' : project.unityLink}
                        target='_blank' className="text-lg font-semibold hover:text-gray-200 cursor-pointer"
                      >
                        {project.unityLink === '' ? '' : 'View on Unity Play'}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
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

export default Project;
