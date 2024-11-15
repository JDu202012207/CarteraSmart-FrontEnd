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
          <h2 className="text-center text-lg font-semibold mb-6 text-gray-800">Bienvenido Alfonso</h2>

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

        {/* Área principal */}
        <div className="flex-1 p-8">
          <div className="flex flex-col items-center justify-center bg-gray-300 p-6 rounded-lg">
            <h1 className="text-2xl font-semibold ">Entidades Financieras</h1>
          </div>

          {/* Contenedor de imágenes de logos de bancos */}
          <div className="grid grid-cols-3 gap-4 ml-32 mt-16 mb-16">
            <img src="https://1000marcas.net/wp-content/uploads/2019/12/BBVA-logo.png" alt="BBVA" className="h-32 object-contain"/>
            <img src="https://logovtor.com/wp-content/uploads/2020/03/banco-de-credito-del-peru-bcp-logo-vector.png" alt="BCP" className="h-32 object-contain"/>
            <img src="https://www.bn.com.pe/img/logobn-compartir.png" alt="Banco de la Nación" className="h-32 object-contain"/>
            <img src="https://logos-world.net/wp-content/uploads/2021/03/Scotiabank-Logo-1998-2019-700x394.png" alt="Scotiabank" className="h-32 object-contain"/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA43gL7kC104vLhCr-IqwFUZifyejXNlwHoQ&s" alt="Banco Falabella" className="h-32 object-contain"/>
            <img src="https://emtecgroup.net/wp-content/uploads/2024/01/Banco-Ripley.png" alt="Banco Ripley" className="h-32 object-contain"/>
            <img src="https://brandemia.org/sites/default/files/inline/images/logo_banco_pichincha_portada.jpg" alt="Banco Pichincha" className="h-32 object-contain"/>
            <img src="https://logowik.com/content/uploads/images/interbank4094.logowik.com.webp" alt="Interbank" className="h-32 object-contain"/>
            <img src="https://mir-s3-cdn-cf.behance.net/projects/404/2aa9ad208811221.Y3JvcCwxMDIyLDc5OSwwLDA.jpg" alt="BanBif" className="h-32 object-contain"/>
            <img src="https://seeklogo.com/images/M/mibanco-logo-699A2E1B3E-seeklogo.com.png" alt="Mibanco" className="h-32 object-contain"/>
          </div>
          
          <div className="flex flex-col items-center justify-center bg-gray-300 p-6 rounded-lg">
            <h1 className="text-center text-sm text-gray-600">© 2024 CarteraSmart. All Rights Reserved.</h1>
          </div>
        </div>
      </div>
  );
};
