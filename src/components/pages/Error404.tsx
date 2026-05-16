import { Link } from 'react-router';

const Error404 = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-7 my-7'>
            <img src={"https://cdn-icons-png.flaticon.com/512/755/755014.png"} alt="Error 404" className='w-40 md:w-60 lg:w-90' />
            <p className='text-3xl font-bold md:text-4xl'>Oops!!</p>
            <p className="text-4xl">pagina no encontrada 404</p>
            <Link to={'/'} className=' text-2xl text-stone-100 bg-neutral-600 p-3 rounded-tr-4xl rounded-bl-4xl hover:underline'>Volver a inicio</Link>
        </div>
    );
};

export default Error404;