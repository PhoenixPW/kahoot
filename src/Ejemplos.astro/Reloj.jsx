import { useEffect, useState } from 'react';

export const Reloj = ({versionMovil}) => {

    const [ dias, setDias ] = useState(0);
    const [ horas, setHoras ] = useState(0);
    const [ minutos, setMinutos ] = useState(0);
    const [ segundos, setSegundos ] = useState(0);

    const calcularTiempoRestante = () => {
     const fechaActual = new Date();
     const fechaConcurso = new Date('2025-03-12T11:00:00');

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
      <article class={`w-full ${versionMovil?"flex sm:hidden":"hidden sm:flex"} flex-col gap-16 h-full justify-center items-center py-8 bg-[#1618DF] text-center text-xl rounded-b-lg sm:rounded-bl-lg `}>
 
       <div class="text-white">
 
        <h4>DÍAS</h4>
 
        <p class="text-4xl font-bold proportional-nums lining-nums">
          {dias}
        </p>
        
       </div>
 
       <div class="text-white">
 
        <h4>HORAS</h4>
 
        <p class="text-4xl font-bold proportional-nums lining-nums">
         {horas}
        </p>
        
       </div>
 
       <div class="text-white">
 
        <h4>MINUTOS</h4>
 
        <p class="text-4xl font-bold proportional-nums lining-nums">
         {minutos}
        </p>
        
       </div>
 
       <div class="">
 
        <h4 class="text-white">SEGUNDOS</h4>
 
        <p class="text-4xl text-[#00FFFF] font-bold proportional-nums lining-nums">
         {segundos}
        </p>
        
       </div>
 
 
 
      </article>

     </>
    );
}