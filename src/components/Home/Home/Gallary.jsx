
import photo1 from '../../../assets/photo1.webp'
import photo2 from '../../../assets/photo2.webp'
import photo3 from '../../../assets/photo3.webp'
import photo4 from '../../../assets/photo4.webp'
import photo5 from '../../../assets/photo5.webp'
import photo6 from '../../../assets/photo6.webp'
const Gallary = () => {
  return (
    <div className="mt-4">
      <h1 className="text-center font-extrabold text-5xl ">Gellary </h1>
      <p className='text-2xl text-center font-semibold'>You can find our popular product here</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
        <div className=""><img className=" h-50 lg:h-80 rounded-xl" src={photo1} alt="" /></div>
  <div className=""><img className=" h-50 lg:h-80 rounded-xl" src={photo2} alt="" /></div>
  <div className=""><img  className=" h-50 lg:h-80 rounded-xl" src={photo3} alt="" /></div>
        <div className=""><img className="h-50 lg:h-80 rounded-xl" src={photo4} alt="" /></div>
        <div className="..."><img className="h-50 lg:h-80 rounded-xl" src={photo5} alt="" /></div>
  <div className=""><img className="h-50 lg:h-80 rounded-xl" src={photo6} alt="" /></div>

</div>
    </div>
  );
};

export default Gallary;