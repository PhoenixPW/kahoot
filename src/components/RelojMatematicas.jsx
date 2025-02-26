import { useEffect, useState } from 'react';

export const RelojMatematicas = () => {

    const [ dias, setDias ] = useState(0);
    const [ horas, setHoras ] = useState(0);
    const [ minutos, setMinutos ] = useState(0);
    const [ segundos, setSegundos ] = useState(0);

    const calcularTiempoRestante = () => {
     const fechaActual = new Date();
     const fechaConcurso = new Date('2025-11-01T00:00:00');

     // Calcular la diferencia en milisegundos
     const diferenciaEnMs = fechaConcurso - fechaActual;

     // Convertir la diferencia a unidades de tiempo
     const segundos = Math.floor((diferenciaEnMs / 1000) % 60);
     const minutos = Math.floor((diferenciaEnMs / (1000 * 60)) % 60);
     const horas = Math.floor((diferenciaEnMs / (1000 * 60 * 60)) % 24);
     const dias = Math.floor(diferenciaEnMs / (1000 * 60 * 60 * 24));
     setDias(dias);
     setHoras(horas);
     setMinutos(minutos);
     setSegundos(segundos);

     //console.log(`Faltan ${dias} días, ${horas} horas, ${minutos} minutos y ${segundos} segundos para el concurso.`);     
    }

    useEffect( () => {
     setInterval( () => {
        calcularTiempoRestante();
      }, 300
     )
    },[])

    return(
     <>
      <article className="flex gap-5 2xl:gap-16 h-full py-0 sm:py-1 justify-center items-center bg-black text-center sm:text-xl rounded-b-xl ">
 
       <div className="flex flex-col gap-3 text-white">
 
        <h4 class="text-sm 3xl:text-base">DÍAS</h4>
 
        <p className="text-[#EABE2E] text-3xl lg:text-2xl 2xl:text-4xl 3xl:text-5xl font-bold proportional-nums lining-nums">
          {dias}
        </p>
        
       </div>
 
       <div className="flex flex-col gap-3 text-white">
 
        <h4 class="text-sm 3xl:text-base">HORAS</h4>
 
        <p className="text-[#EABE2E] text-3xl lg:text-2xl 2xl:text-4xl 3xl:text-5xl font-bold proportional-nums lining-nums">
         {horas}
        </p>
        
       </div>
 
       <div className="flex flex-col gap-3 text-white">
 
        <h4 class="text-sm 3xl:text-base">MINUTOS</h4>
 
        <p className="text-[#EABE2E] text-3xl lg:text-2xl 2xl:text-4xl 3xl:text-5xl font-bold proportional-nums lining-nums">
         {minutos}
        </p>
        
       </div>
 
       <div className="flex flex-col gap-3 text-white">
 
        <h4 className="text-white text-sm 3xl:text-base">SEGUNDOS</h4>
 
        <p className="text-3xl lg:text-2xl 2xl:text-4xl 3xl:text-5xl text-[#EABE2E] font-bold proportional-nums lining-nums">
         {segundos}
        </p>
        
       </div>
 
 
 
      </article>

     </>
    );
}