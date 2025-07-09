import { useState, useEffect  } from 'react'
import Foto from './assets/react.svg'
import Code from './assets/code.svg';
import Gmail from './assets/gmail.svg';
import Linkedin from './assets/linkedin.svg';
import Github from './assets/github_dark.svg';
import ImgProyecto1 from './assets/118shots_so.png';
import ImgProyecto2 from './assets/961shots_so.png'
import './index.css'
const WORDS = ['Programador', 'Full Stack', 'Front‑End'];
function App() {

    const [wordIndex, setWordIndex] = useState(0);   // palabra actual
    const [charIndex, setCharIndex] = useState(0);   // posición de letra
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
    // Velocidad base de escritura/borrado
    const speed = isDeleting ? 80 : 120;

    // ¿Ha terminado de escribir la palabra?
    if (!isDeleting && charIndex === WORDS[wordIndex].length) {
      // Pausa antes de borrar
      setTimeout(() => setIsDeleting(true), 1000);
      return;
    }

    // ¿Ha terminado de borrar la palabra?
    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % WORDS.length);
      return;
    }

    // Escribe o borra un carácter
    const timer = setTimeout(() => {
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex]);
  return (
    <div className='bg-[#1d242d]'>
        {/* HEADER */}
        <header className='px-8 '>
          <div className='text-3xl text-white font-bold py-4 md:px-10'>
            Alejandro.
          </div>
        </header>
        {/* MAIN */}
        <div className='section px-8 md:py-8 scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl '>
          <main className='text-white flex flex-row items-center justify-between py-5 '>
            <div className='w-auto flex flex-col justify-center items-start gap-3'>
              <h2 className='font-bold text-4xl text-white'>Holla, soy</h2>
              <h1 className='font-bold text-5xl text-white'>Alejandro de la Torre</h1>
              <h2 className='font-bold text-4xl text-white'>y soy un programador de{' '}  
                <span className='text-blue-400'>
                  {WORDS[wordIndex].slice(0, charIndex)}
                  {/* cursor parpadeante */}
                  <span className="inline-block w-[1ch] animate-pulse">|</span>
                </span>
              </h2>
              <p className='w-3/4 text-xl'>
                +1 año de experiencia en desarrollo web, <strong className='text-[#fef08a]'>especializadome en React y Node.js.</strong> Me apasiona crear aplicaciones web interactivas y eficientes. Siempre estoy aprendiendo nuevas tecnologías y mejorando mis habilidades.
              </p>
              <div className='flex flex-col gap-4 mt-4'>
                <div className='flex flex-row gap-4'>
                  <div className="rounded-full border-2 border-blue-400 w-10 h-10 shadow-[0px_0px_6px_1px_#5799d4] hover:cursor-pointer hover:bg-blue-400 transition-all duration-600 ease-in-out flex justify-center items-center">
                    <img src={Linkedin} alt="Gmail" className="w-6 h-6 object-contain" onClick={() => window.open('https://www.linkedin.com/in/alejandro-de-la-torre-ruiz-a10b3a15b/', '_blank')}/>
                  </div>
                  <div className='rounded-full border-2 border-blue-400 w-10 h-10 shadow-[0px_0px_6px_1px_#5799d4] hover:cursor-pointer hover:bg-blue-400 transition-all duration-600 ease-in-out flex justify-center items-center'>
                  <img src={Github} alt="" className='w-6 h-6 object-contain' onClick={() => window.open('https://github.com/alexzv08', '_blank')}/>
                  </div>
                  <div className='rounded-full border-2 border-blue-400 w-10 h-10 shadow-[0px_0px_6px_1px_#5799d4] hover:cursor-pointer hover:bg-blue-400 transition-all duration-600 ease-in-out flex justify-center items-center'>
                    <img src={Gmail} alt="" className='w-6' onClick={() => window.open('mailto:tuemail@gmail.com')}/>
                  </div>
                </div>
              <a  href="../public/AlejandroDeLaTorreCV.pdf" download className='w-fit bg-blue-400 text-black rounded-4xl py-2 px-4 cursor-pointer text-lg shadow-[0px_0px_9px_3px_#5799d4] hover:bg-blue-300 transition-all duration-600 ease-in-out'>
                Descarga CV
              </a>
              </div>
            </div>
            <div className='w-1/2 flex justify-center items-center '>
            {/* <img src={Foto} alt="img_mia" className='w-100  drop-shadow-[0_0_9px_#5799d4] animate-slide-down'/> */}
            </div>
          </main>
          {/* EXPERNCIA LABORAL */}
          <section className='py-10'>
            <h1 className='text-white text-4xl font-bold mb-5'>Experiencia Laboral</h1>
            
            <ol className="relative border-s border-gray-200 dark:border-gray-400">                  
                <li className="mb-10 ms-4">
                    <div className="absolute w-4 h-4 bg-[#FACC15] rounded-full mt-1.5 -start-2 "></div>
                    <h3 className="text-lg font-semibold text-[#FACC15] dark:text-[#FACC15]">Aprendiendo y aplicando: desarrollando proyectos con React, Tailwind, Node.js y más</h3>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Julio 2024 - Actuelmente</time>
                    <p className="mt-4 text-base font-normal text-gray-500 dark:text-gray-300 w-3/4">Desde julio de 2024, me he dedicado a desarrollar proyectos propios que me han permitido aprender y aplicar tecnologías modernas como React, Tailwind CSS, Node.js y más. Durante este tiempo, he profundizado en el desarrollo frontend y backend, mejorando mis habilidades para crear aplicaciones web completas y funcionales, enfocándome en buenas prácticas, rendimiento y experiencia de usuario.</p>
                </li>
                <li className="mb-10 ms-4">
                    <div className="absolute w-4 h-4 bg-[#FACC15] rounded-full mt-2 -start-2  "></div>
                    <h3 className="text-lg font-semibold text-[#FACC15] dark:text-[#FACC15]">Desarrollador Web / Full Stack Developer</h3>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Gregal Soluciones Informáticas, S.L.</h3>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Octubre 2023 - Julio 2024</time>
                    <p className="mt-4 text-base font-normal text-gray-500 dark:text-gray-300 w-3/4">En Gregal Soluciones Informáticas, S.L., me encargaba del desarrollo y mantenimiento de la plataforma interna utilizando tecnologías como HTML, CSS, PHP y MySQL. Implementaba nuevas funcionalidades para mejorar y optimizar los procesos internos, además de actualizar y mejorar diversas herramientas corporativas empleando Ionic, JavaScript y MySQL. Trabajaba en estrecha colaboración con el equipo para diseñar soluciones eficientes y escalables, asegurando una integración fluida entre el frontend y backend, con el objetivo de garantizar una experiencia de usuario óptima.</p>
                </li>
                <li className="ms-4">
                    <div className="absolute w-4 h-4 bg-[#FACC15] rounded-full mt-1.5 -start-2   "></div>
                    <h3 className="text-lg font-semibold text-[#FACC15] dark:text-[#FACC15]">Desarrollador Web Junior</h3>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Urplan S.L.</h3>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Enero 2022 - Julio 2022</time>
                    <p className="mt-4 text-base font-normal text-gray-500 dark:text-gray-300 w-3/4">En Urplan participé en el desarrollo y mantenimiento de aplicaciones web utilizando tecnologías como HTML, CSS, JavaScript y PHP. Colaboré en la creación de funcionalidades a medida para clientes, trabajando tanto en el frontend como en el backend. También me encargué de corregir errores, mejorar la usabilidad y asegurar el correcto funcionamiento de las aplicaciones en producción. Durante esta etapa, reforcé mis conocimientos en desarrollo web completo y aprendí a adaptarme a entornos de trabajo dinámicos y orientados a resultados.</p>
                </li>
            </ol>
          </section>

          {/* PROYECTOS */}
          <section className='py-10 text-white'>
            <h1 className="text-4xl font-bold mb-5 flex items-center gap-2">
              <img src={Code} alt="" className="w-10" />
              Proyectos
            </h1>
            <div className='gap-5 flex flex-col'>
              <div>
                <article className='flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0'>
                  <div className='w-full md:w-1/2 group'>
                    <div className='relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50'>
                      <img src={ImgProyecto2} alt="" className='object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105'/>
                    </div>
                  </div>
                  <div className='w-full md:w-1/2'>
                    <h1 className='text-2xl font-bold dark:text-gray-100'>Simulador de Gundam TCG</h1>
                    <div className='flex flex-wrap gap-2 mt-2 mb-2 sm:grid sm:grid-cols-3'>
                      <span className='flex gap-x-2 rounded-full text-xs bg-black text-white py-1 px-2 '>Node.js</span>
                      <span className='flex gap-x-2 rounded-full text-xs bg-black text-white py-1 px-2 '>Socket.io</span>
                      <span className='flex gap-x-2 rounded-full text-xs bg-black text-white py-1 px-2 '>MYSQL</span>
                    </div>
                    <p className='mt-2 dark:text-gray-400'>
                      Simulador online para partidas 1vs1 del juego de cartas Gundam TCG, desarrollado como aplicación web en tiempo real. El proyecto permite a dos jugadores conectarse desde cualquier navegador y disputar partidas siguiendo las reglas oficiales del juego.
                    </p>
                    <div className='flex items-end justify-start mt-4 gap-x-4'>
                      <button className='cursor-pointer inline-flex bg-gray-100 text-gray-800 border-gray-300 items-center justify-center gap-2 px-3 py-2 space-x-2 text-base transition dark:text-white dark:bg-gray-800 border dark:border-gray-600 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black'
                      onClick={() => window.open('https://github.com/alexzv08/TCG_Gundam_Game', '_blank')}>Code</button>
                      {/* <button className='cursor-pointer inline-flex bg-gray-100 text-gray-800 border-gray-300 items-center justify-center gap-2 px-3 py-2 space-x-2 text-base transition dark:text-white dark:bg-gray-800 border dark:border-gray-600 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black'>Preview</button> */}
                    </div>
                  </div>
                </article>
              </div>
              <div>
                <article className='flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0'>
                  <div className='w-full md:w-1/2 group'>
                    <div className='relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50'>
                      <img src={ImgProyecto1} alt="" className='object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105'/>
                    </div>
                  </div>
                  <div className='w-full md:w-1/2'>
                  <h1 className='text-2xl font-bold dark:text-gray-100'>Proyect-Yggdrasil</h1>
                    <div className='flex flex-wrap gap-2 mt-2 mb-2 sm:grid sm:grid-cols-3'>
                      <span className='flex gap-x-2 rounded-full text-xs bg-black text-white py-1 px-2 '>React</span>
                      <span className='flex gap-x-2 rounded-full text-xs bg-black text-white py-1 px-2 '>TailwindCSS</span>
                      <span className='flex gap-x-2 rounded-full text-xs bg-black text-white py-1 px-2 '>Node.js</span>
                      <span className='flex gap-x-2 rounded-full text-xs bg-black text-white py-1 px-2 '>Socket.io</span>
                      <span className='flex gap-x-2 rounded-full text-xs bg-black text-white py-1 px-2 '>MYSQL</span>
                    </div>
                    <p className='mt-2 dark:text-gray-400'>
                      Proyect-Yggdrasil es una plataforma web desarrollada como Trabajo de Fin de Grado en Desarrollo de Aplicaciones Web (DAW), centrada en el mundo de los juegos de cartas coleccionables (TCG). Su objetivo es ofrecer a los jugadores un entorno completo para gestionar sus colecciones, crear mazos personalizados y conectar con otros usuarios de forma activa.
                    </p>
                    <div className='flex items-end justify-start mt-4 gap-x-4'>
                      <button className='cursor-pointer inline-flex bg-gray-100 text-gray-800 border-gray-300 items-center justify-center gap-2 px-3 py-2 space-x-2 text-base transition dark:text-white dark:bg-gray-800 border dark:border-gray-600 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black'
                      onClick={() => window.open('https://github.com/alexzv08/Proyect-Yggdrasil', '_blank')}>Code</button>
                      {/* <button className='cursor-pointer inline-flex bg-gray-100 text-gray-800 border-gray-300 items-center justify-center gap-2 px-3 py-2 space-x-2 text-base transition dark:text-white dark:bg-gray-800 border dark:border-gray-600 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black'>Preview</button> */}
                    </div>
                  </div>
                </article>
              </div>
            </div>

          </section>

          {/* SOBRE MI */}
          <section className='section undefined scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl'>
            <h1 className='flex items-center mb-6 text-3xl font-semibold gap-x-3 text-gray-100  undefined'>Sobre mi</h1>
            <article className='flex flex-col items-center justify-center gap-8 text-gray-700  md:flex-row'>
              <div className='[&>p]:mb-4 [&>p>strong]:text-yellow-500 dark:[&>p>strong]:text-yellow-100 [&>p>strong]:font-normal [&>p>strong]:font-mono text-pretty order-2 md:order-1 text-gray-400'>
                <p>
                  Me llamo Alejandro, aunque muchos me llaman Alex. Mi pasión por la programación comenzó desde muy joven, cuando empecé a trastear con mis primeros ordenadores. 
                Desde entonces, he dedicado mi carrera a convertirme en un desarrollador Full Stack con experiencia en tecnologías como React, Node.js y TailwindCSS.
                </p>
                <p>
                  A lo largo de mi trayectoria, he trabajado en proyectos reales que me han permitido crecer profesionalmente, desde startups hasta empresas consolidadas, 
                donde he aplicado mis conocimientos en desarrollo web para crear aplicaciones eficientes y con una excelente experiencia de usuario.
                </p>
                <p>
                  Además, siempre estoy en constante aprendizaje y disfruto compartiendo mis conocimientos con la comunidad, participando en proyectos personales y colaborando con 
                otros desarrolladores para seguir mejorando y aportar valor.
                </p>
              </div>
            </article>
          </section>
        </div>

    </div> 
    
  )
}

export default App
