import imagem from '../assets/images.jpg'

const Home = () => {
  return (
    <section className="bg-gray-800 text-white min-h-screen flex flex-col md:flex-row items-center justify-center p-8">
      <div className="flex-1 flex-col items-center md:items-start text-center md:text-left mb-8 md:mb-0 mr-16">
        <p className="text-1g">Loja de Carros</p>
        <h4 className="text-4x1 sm:text-5xl md:text-6xl font-bold mt-2">O melhor Carro<br/>de Corrida</h4>
      </div>
      <button className="mt-8 px-6 py-3 text-white font-extrabold bg-blue-900">Participar</button>
      <div className='flex-1 items-center justify-center'><img src={imagem} alt='carrro' className='w-full max-w-sm md:max-w-md'></img></div>
    </section>
  )
}

export default Home