import { FaBeer } from 'react-icons/fa';
const CountDownSection = () => {
  return (
    <div className="bg-indigo-50">
 <div className="grid grid-cols-4 gap-4">
        <div className='w-50 h-50'><FaBeer /></div>
        <div>01</div>
        <div>01</div>
        <div>01</div>
        
      </div>
    
     
    </div>
  );
};

export default CountDownSection;