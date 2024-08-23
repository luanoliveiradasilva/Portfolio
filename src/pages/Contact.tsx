import ArrowUp from '/assets/icons/Arrow Up.svg';

const Contact = () => {
  return (
    <>
      <div className='animate-appear animPage'>
        <div className="w-full h-[600px] mt-20">
          <div className="w-full">
            <h1 className="text-5xl">Contact<span className="text-purple">me</ span>
            </h1>
            <p className='text-sm w-auto h-auto pt-4'>
              Things I’ve built so far
            </p>
          </div>

          <div className="w-auto h-3/4 text-5xl justify-center items-center flex text-center">
            For any questions please mail me:
            luanoliveira1107@gmail.com
          </div>


          <div className='justify-end items-center flex gap-2'>
            <div>Scroll</div>

            <img src={ArrowUp} />

          </div>

        </div>
      </div>
    </>
  );
};

export default Contact;
