import logo1 from '../Assets/Images/logo 1.png'

export default function Headers() {

    return (
        <header className="hero w-screen h-screen py-3">

            <div className="container m-auto py-2 w-full grid">
            

            <nav className='flex w-full gap-1 justify-between md:justify-around items-center justify-self-center py-2
            md:border-b md:w-9/12'>
                <div className=''>
                   <img src={logo1} className='logo' />
                </div>
                <ul className='flex  gap-5 md:gap-10 self-end text-white'>
                    <li><a href='#' className='font-extralight  md:hover:pb-2 md:hover:border-b-4'>Home</a></li>
                    <li><a href='#' className='font-extralight md:hover:pb-2 md:hover:border-b-4'>Landloard</a></li>
                    <li><a href='#' className='font-extralight md:hover:pb-2 md:hover:border-b-4'>Tenants</a></li>
                    <li><a href='#' className='font-extralight  md:hover:pb-2 md:hover:border-b-4'>Contact Us</a></li>
                </ul>
            </nav>
            </div>
        
        
        </header>
    )
}