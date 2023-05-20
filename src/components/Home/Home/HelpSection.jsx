import { FaFacebook, FaInstagram,  FaPinterest  } from 'react-icons/fa';

const HelpSection = () => {
  return (
    <div className='grid grid-cols-3 gap-4 my-4 '>
      <div className="col-span-2  bg-pink-100 px-8 rounded-lg">
        <h1 className='text-center text-2xl my-4 font-semibold'>Find Us On</h1>
        <div className='grid grid-cols-3 gap-4 '>
          <div className=''><FaFacebook style={{ fontSize: '7rem',color: '' }}/><p>Facebook</p></div>
          <div><FaInstagram style={{
            fontSize: '7rem', color: '' }} />
          </div>
          <div className='text-center'><FaPinterest style={{ fontSize: '7rem', color: '' }} />
            <p className='
          '></p></div>
        </div>
      </div>
      <div className=" bg-indigo-100 rounded-lg">
      <h1 className='text-center text-2xl my-4 font-semibold'>You are getting 15% off! Order before</h1>
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max mx-8 my-4">
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":15}}></span>
    </span>
    days
  </div> 
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":10}}></span>
    </span>
    hours
  </div> 
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":24}}></span>
    </span>
    min
  </div> 
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":53}}></span>
    </span>
    sec
  </div>
</div>
  </div>
    </div>
  );
};

export default HelpSection;