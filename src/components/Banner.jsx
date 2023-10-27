import { useState, useRef } from 'react';
import banner from '../assets/images/banner_pizza.jpg';
import { FaBeer } from 'react-icons/fa';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {BiTargetLock} from 'react-icons/bi'


const Banner = () => {
  return (
    <div className=''>
      <div className='grid'>
        <div className="mt-24">
          <img className='w-full' src={banner} />
        </div>
        <div className="absolute overflow-hidden z-0 md:mt-40 mt-52 justify-self-center flex justify-center w-full ">
          {/* <Carousel className='flex justify-self-center shadow-lg overflow-hidden rounded-2xl mt-15 h-72 bg-black'> */}
          <Carousel showStatus={false} className='w-5/12 h-[25rem]'
            renderArrowPrev={(clickHandler) => {
              return (
                <div
                  className={`top-[10rem] bottom-0 left-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 h-12 cursor-pointer z-20 absolute`}
                  onClick={clickHandler}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
                  </svg>
                </div>
              );
            }}
            renderArrowNext={(clickHandler) => {
              return (
                <div
                  className={`top-[10rem] bottom-0 right-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 h-12 cursor-pointer z-20 absolute`}
                  onClick={clickHandler}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
              );
            }}
          >
            <div className='flex justify-center h-[24rem]'>
              <div className='bg-white  my-[0.5rem] md:w-[45rem] w-[25rem] md:h-[21.6rem] rounded-xl shadow-lg chica'>
                <div className='pt-10 ps-[4rem]'>
                  <p className='text-2xl font-semibold w-6/12 text-left'>Peça sua pizza em casa ou retire na loja mais próxima</p>
                  <p className='pt-5 text-md text-gray-600 text-left w-8/12'>Informe seu endereço para encontrarmos a pizza mais próxima de você</p>
                  <label class="relative flex justify-self-start">
                    <input class="placeholder:text-slate-400 location bg-white rounded-full px-8 py-3 md:w-[35rem] w-[20rem]  shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] border focus:outline-none focus:ring-red focus:border-red-300  sm:text-md mt-8" placeholder="informe seu endereço com detalhes!" />
                  </label>
                </div>
                  <p className='text-red-700 underline mt-6 underline-offset-1'><a  className='flex justify-center items-center'><BiTargetLock/> Usar minha localização atual</a></p>
              </div>
            </div>
            <div className='flex justify-center h-[24rem]'>
              <div className='bg-white my-[0.5rem] md:w-[45rem] w-[25rem] rounded-xl shadow-lg md:h-[21.6rem] freddy flex '>
                <div className='pt-[4rem] md:ps-[14rem]'>
                  <p className='text-2xl font-semibold text-left w-10/12'>Você já pensou em dar ao seu filho a melhor festa de aniversário?</p>
                  <p className='pt-5 text-md text-gray-600 text-left w-10/12'>Com a banda do Freddy você pode! Entre em contato, agende sua festa e Aproveite!</p>
                  <button className=' px-6 py-2 mt-9 rounded-full bg-red-700 text-white font-semibold flex justify-self-start'>Agende Já!</button>
                </div>
              </div>
            </div>
            <div className='flex justify-center h-[24rem]'>
              <div className='bg-white my-[0.5rem] md:w-[45rem] w-[25rem] rounded-xl shadow-lg md:h-[21.6rem] bonnie flex'>
                <div className='pt-[4rem] p-10'>
                  <div className='flex flex-col items-end w-8/12'>
                    <p className='text-2xl font-semibold text-right'>Já pensou em não precisar dividir um brinquedo em sua festa?</p>
                    <p className='pt-5 text-md text-gray-600 text-right'>Alugue seu animatronic para sua festa particular, dentro da sua casa, bem pertinho de você!</p>
                    <button className=' px-6 py-2 mt-9 rounded-full bg-red-700 text-white font-semibold'>Preços Acessíveis!</button>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>

      </div>
    </div>
  );
};
export default Banner;
