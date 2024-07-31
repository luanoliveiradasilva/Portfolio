import menuData from '../assets/data/menu.json';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <>
      <div className='w-auto h-auto justify-between items-center flex'>
        <span className='w-auto h-auto text-5xl font-serif'>
          Luan N Oliveira
        </span>

        <nav>
          <ul className='text-base gap-6 w-auto flex justify-center items-center'>
            {menuData.menu.map((item, index) => (
              <li key={item.link} className={`${index === 0 ? ' focus:text-purple' : ''} hover:text-purple`}>
                <Link to={item.name} smooth={true} duration={500} className='cursor-pointer'>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

      </div>
    </>
  );
};

export default Header;
