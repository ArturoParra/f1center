import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'


export const Header = () => {

    const [isVisible, setIsVisible] = useState(false)

    return (
        <>
            <header className="flex flex-row justify-between items-center h-20 p-4 bg-gray-800 text-white">
                <h1 className="text-3xl font-black">F1Center</h1>
                <nav className={`
                    ${isVisible ? 'right-0' : '-right-full md:right-0'}
                    fixed md:relative top-20 md:top-0 
                    flex flex-col md:flex-row 
                    space-y-4 md:space-y-0 md:space-x-4 
                    h-screen md:h-fit 
                    bg-gray-800 p-5
                    transition-all duration-300
                `}>
                    <a href="/" className="hover:text-gray-400">Home</a>
                    <a href="/drivers" className="hover:text-gray-400">Drivers</a>
                    <a href="/teams" className="hover:text-gray-400">Teams</a>
                </nav>
                <button className="py-3 px-4 text-xl hover:text-gray-500 md:hidden" onClick={() => { setIsVisible(!isVisible) }}><FontAwesomeIcon icon={faBars} /></button>

            </header>
        </>
    )
}
