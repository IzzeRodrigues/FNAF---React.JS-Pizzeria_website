import animatronics from '../assets/images/anima.png'
import banner from '../assets/images/banner_final.jpg'
import paper1 from '../assets/images/paper1.png'
import paper2 from '../assets/images/paper2.png'
import paper3 from '../assets/images/paper3.png'


const Content = () => {
    return(
        <div className='flex flex-col items-center'>
           
            <div className=' flex justify-evenly mt-[32rem] md:mt-[12rem] w-full'>
                <div>
                    <img className='h-[20rem] mt-[5rem]' src={paper2}/>
                </div>
                <div className='ms-[9rem] mt-12'>
                    <img className='' src={animatronics}/>
                </div>
                <div className='flex'>
                    <img className='h-[20rem] mb-12' src={paper1}/>
                    <img className='h-[20rem] mt-12' src={paper3}/>
                </div>
            </div>
                <div className=' flex items-center  flex-col'>
                    <p className='font-medium text-3xl'>Temos novidades saindo do forno</p>
                    <p className='flex mt-5'>As delícias da <p className='font-medium'>&nbsp;Freddy Fazbear's&nbsp;</p>estão a apenas um pedido de distância. Faça o seu pedido hoje!</p>
                </div>
                <div className='w-full justify-center flex'>
                    <img className='w-7/12  mt-8 rounded-lg' src={banner}/>
                </div>
                

        </div>
    );
};
export default Content;
