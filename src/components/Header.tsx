import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'


export const Header = () => {

    const [isVisible, setIsVisible] = useState(false)

    return (
        <>
            <header className="flex flex-row justify-between items-center h-20 p-4 bg-primary text-white">
                <h1 className="text-xl md:text-3xl font-black font-f1wide italic">F1Center</h1>
                <nav className={`
                    ${isVisible ? 'right-0 w-50' : '-right-full md:right-0'}
                    fixed md:relative top-20 md:top-0 
                    flex flex-col md:flex-row 
                    space-y-4 md:space-y-0 md:space-x-15 
                    h-screen md:h-fit 
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
                </nav>
                <button className="py-3 px-4 text-xl hover:text-gray-500 md:hidden" onClick={() => { setIsVisible(!isVisible) }}><FontAwesomeIcon icon={faBars} /></button>

            </header>
        </>
    )
}
