import logo from '../assets/logo.svg'
import coctelS from '../assets/coctel-sen.png'
import coctelImg from '../assets/coctel.png'
const Menu = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className="bg-[#121b22] min-h-screen" >
            <div className="text-center grid grid-cols-1 md:grid-cols-3 gap-2 mx-auto pt-5">
                <div className="px-4">

                    <div className="flex flex-col items-center">

                        <div class="line-with-text mb-2 max-w-md px-4">
                            <h1 class="font-secondary text-[#ff6600] text-5xl px-2">Menú</h1>
                        </div>
                        <h1 className='text-5xl text-white font-primary'>¡ORDENA AL!</h1>
                        <hr className="bg-white w-7/12 md:w-1/2 border-none h-1 mt-2" />
                        <p className='text-2xl w-full mt-5 text-white font-semibold'>
                            <a className='flex items-center justify-center bg-[#05a684] text-white py-2 px-5 rounded-full shadow-lg hover:bg-tertiary transition duration-300' href="https://wa.me/573014801382?text=Quiero pedir un cóctel de camarón.">
                                <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp mr-3">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                                    <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                                </svg>3014801382</a>
                        </p>

                    </div>
                    <div className="bg-[#1f2c34] mt-[50px] md:mt-5 rounded-lg">
                        <div className="flex flex-col items-center p-6 rounded-lg shadow-lg">
                            <div className="relative">
                                <img src={coctelS} alt="Descripción de la imagen" className="rounded-full border-[11px] border-tertiary  w-80 h-80 mb-2" />
                                <div className="absolute  bottom-0 left-0 right-0 bg-tertiary text-white text-center clip-bg py-1">
                                    <h2 className="text-3xl font-secondary">Sencillo</h2>
                                </div>
                            </div>
                            <div className='bg-[#121b22] w-full mt-5  rounded-lg  p-5' >
                                <p className='text-sm text-text text-left'>
                                    Cóctel sencillo viene cargado con camarones frescos y una mezcla vibrante de cebolla, pepino, maíz tierno, limón y cilantro, todo aderezado con salsa picante, salsa de tomate y mayonesa. ¡Y no te olvides de las galletas saltín para acompañar!
                                </p>
                                <a className='flex items-center justify-center  font-semibold bg-[#05a684] text-white py-2 mt-5 px-5 rounded-full shadow-lg hover:bg-tertiary transition duration-300' href="https://wa.me/57301480138?text=Quiero un cóctel de camarón sencillo, que presentaciones tienes y precio.">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp mr-3">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                                        <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                                    </svg>ORDENA YA!</a>

                            </div>

                        </div>
                    </div>
                </div>
                <div className="px-4  md:mt-[192px] ">
                    <div className="bg-[#1f2c34] rounded-lg">
                        <div className="flex flex-col items-center p-6 rounded-lg shadow-lg">
                            <div className="relative">
                                <img src={coctelImg} alt="Descripción de la imagen" className="rounded-full border-[11px] border-tertiary w-80 h-80 mb-2" />
                                <div className="absolute  bottom-0 left-0 right-0 bg-tertiary text-white text-center clip-bg py-1">
                                    <h2 className="text-3xl font-secondary">Especial</h2>
                                </div>
                            </div>
                            <div className='bg-[#121b22] w-full mt-5  rounded-lg  p-5' >
                                <p className='text-sm text-text text-left'>
                                    Cóctel especial viene cargado con chipichipi, camarones frescos y una mezcla vibrante de cebolla, pepino, maíz tierno, limón, palmito y cilantro, todo aderezado con salsa picante, salsa de tomate y mayonesa. ¡Y no te olvides de las galletas saltín para acompañar!
                                </p>
                                <a className='flex items-center justify-center  font-semibold bg-[#05a684] text-white py-2 mt-5 px-5 rounded-full shadow-lg hover:bg-tertiary transition duration-300' href="https://wa.me/57301480138?text=Quiero un cóctel de camarón especial, que presentaciones tienes y precio.">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp mr-3">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                                        <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                                    </svg>ORDENA YA!</a>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="relative px-4 md:mt-[192px] ">
                    <div className="bg-[#1f2c34] rounded-lg">
                        <div className="flex flex-col items-center p-6 rounded-lg shadow-lg">
                            <div className="relative">
                                <img src={logo} alt="" className='w-80' />
                            </div>
                            <div className='bg-[#121b22] w-full mt-8  rounded-lg  p-5' >
                                <p className='text-xl text-text text-left'>
                                    Encuéntranos en: <br /> <br />
                                    Calle 69, Carrera 18 Sur, <br />
                                    Esquina Barrio Villa Valery - BQ
                                </p>


                            </div>

                        </div>
                    </div>


                </div>
            </div>


            <div className="bg-[#1f2c34] h-[100px] mt-5 flex items-center text-text">
                <div className="w-full px-8 my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <p className="text-center md:text-start text-sm">&copy; Copyright {currentYear} Coctelería Are. All rights reserved.</p>
                    <p className="text-sm text-center md:text-end">Desarrollado por <a href="https://www.linkedin.com/in/jm-castrillon/" target='blank' rel="noopener noreferrer" className='hover:underline' title="JCastrillon"  >Jose Castrillon 💜</a></p>
                </div>
            </div>
        </div>
    )
}

export default Menu