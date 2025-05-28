import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'


export const Header = () => {

    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth > 768) {
          setIsVisible(false)
        }
      }

      window.addEventListener('resize', handleResize)
      return () => {    
        window.removeEventListener('resize', handleResize)
      }

    }, [])
    

    return (
        <>
            <header className="flex flex-row justify-between items-center h-20 p-4 bg-primary text-white">
                <h1 className="text-xl md:text-3xl font-black font-f1wide italic">F1Center</h1>
                <nav className={`
                    ${isVisible ? 'right-0 w-50' : '-right-full xl:right-0'}
                    fixed xl:relative top-20 xl:top-0 
                    flex flex-col justify-between items-center xl:flex-row 
                    space-y-4 xl:space-y-0 xl:space-x-10 
                    h-screen xl:h-fit 
                    bg-primary p-5
                    transition-all duration-300
                `}>
                    <a href="/" className="font-f1regular text-xl relative group">
                        Inicio
                        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
                    </a>
                    <a href="/" className="font-f1regular text-xl relative group">
                        Pilotos
                        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
                    </a>
                    <a href="/" className="font-f1regular text-xl relative group">
                        Equipos
                        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
                    </a>
                    <a href="/" className="font-f1regular text-xl relative group">
                        Calendario
                        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
                    </a>
                    <a href="/" className="font-f1regular text-xl relative group">
                        Noticias
                        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
                    </a>
                    <a href="/" className="font-f1regular text-xl relative group">
                        Juego
                        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
                    </a>
                    <a href="/" className="font-f1regular bg-secondary rounded-lg p-2 hover:bg-tertiary hover:text-white transition-all duration-300 relative group">
                        Iniciar Sesión
                    </a>
                    <a href="/" className="font-f1regular bg-secondary rounded-lg p-2 hover:bg-tertiary hover:text-white transition-all duration-300 relative group">
                        Resgistrarse
                    </a>
                </nav>
                <button className="py-3 px-4 text-xl hover:text-gray-500 xl:hidden" onClick={() => { setIsVisible(!isVisible) }}><FontAwesomeIcon icon={faBars} /></button>

            </header>
        </>
    )
}
