import { FaUser, FaFileAlt } from "react-icons/fa";

export const Home = () => {
  return (
      <div className="flex min-h-screen bg-gray-200">
        {/* Barra lateral izquierda */}
        <div className="w-1/4 p-6 flex flex-col items-center" style={{ backgroundColor: '#97A4D3' }}>
          <img
              src="https://static.vecteezy.com/system/resources/previews/024/212/245/non_2x/ai-generated-sticker-anime-girl-purple-hair-png.png"
              alt="Perfil"
              className="w-36 h-36 rounded-full mb-4 mt-16"
          />
          <h2 className="text-center text-lg font-semibold mb-6 text-gray-800">Bienvenido USER</h2>

          <nav className="flex flex-col space-y-4">
            <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
              <FaUser className="text-xl" />
              <span>Gestión de operaciones</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
              <FaFileAlt className="text-xl" />
              <span>Historial de reportes</span>
            </button>
          </nav>

          <button className="mt-auto px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
            Cerrar sesión
          </button>
        </div>

        {/* Contenido principal */}
        <div className="flex-1 p-8">
          <div className="flex flex-col items-center justify-center bg-gray-300 p-6 rounded-lg">
            <h1 className="text-2xl font-semibold ">Entidades Financieras</h1>
          </div>

          {/* Contenedor de imagenes de logos de bancos */}
          <div className="grid grid-cols-3 gap-4 ml-32 mt-16 mb-16">
            <img src="/src/assets/home/bbva-logo.jpg" alt="BBVA" className="h-32 object-contain"/>
            <img src="/src/assets/home/bcp.jpg" alt="BCP" className="h-32 object-contain"/>
            <img src="/src/assets/home/banco-nacion.jpg" alt="Banco de la Nación" className="h-32 object-contain"/>
            <img src="/src/assets/home/scotiabank.jpg" alt="Scotiabank" className="h-32 object-contain"/>
            <img src="/src/assets/home/banco-fallabela.jpg" alt="Banco Falabella" className="h-32 object-contain"/>
            <img src="/src/assets/home/banco-ripley.jpg" alt="Banco Ripley" className="h-32 object-contain"/>
            <img src="/src/assets/home/banco-pichincha.jpg" alt="Banco Pichincha" className="h-32 object-contain"/>
            <img src="/src/assets/home/interbank.jpg" alt="Interbank" className="h-32 object-contain"/>
            <img src="/src/assets/home/banbif.jpg" alt="BanBif" className="h-32 object-contain"/>
            <img src="/src/assets/home/mibanco.jpg" alt="Mibanco" className="h-32 object-contain"/>
          </div>
          
          <div className="flex flex-col items-center justify-center bg-gray-300 p-6 rounded-lg">
            <h1 className="text-center text-sm text-gray-600">© 2024 CarteraSmart. All Rights Reserved.</h1>
          </div>
        </div>
      </div>
  );
};
