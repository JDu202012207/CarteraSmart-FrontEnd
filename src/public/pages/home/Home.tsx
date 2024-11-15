export const Home = () => {
  return (
      <div className="flex min-h-screen bg-gray-200">
        {/* Barra lateral izquierda */}
        <div className="w-1/4 bg-blue-200 p-6 flex flex-col items-center">
          <img
              src="/path/to/your/profile-image.jpg"
              alt="Perfil"
              className="w-24 h-24 rounded-full mb-4"
          />
          <h2 className="text-center text-lg font-semibold mb-6 text-gray-800">Bienvenido Alfonso</h2>

          <nav className="flex flex-col space-y-4">
            <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
              <i className="fas fa-user text-xl"></i>
              <span>Gestión de operaciones</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
              <i className="fas fa-file-alt text-xl"></i>
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
            <h1 className="text-2xl font-semibold mb-6">Entidades Financieras</h1>


            <p className="text-center text-sm mt-6 text-gray-600">© 2024 CarteraSmart. All Rights Reserved.</p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <img src="https://1000marcas.net/wp-content/uploads/2019/12/BBVA-logo.png" alt="BBVA"
                 className="h-16 object-contain"/>
            <img src="https://logovtor.com/wp-content/uploads/2020/03/banco-de-credito-del-peru-bcp-logo-vector.png"
                 alt="BCP" className="h-16 object-contain"/>
            <img src="https://www.bn.com.pe/img/logobn-compartir.png" alt="Banco de la Nación"
                 className="h-16 object-contain"/>
            <img src="https://logos-world.net/wp-content/uploads/2021/03/Scotiabank-Logo-1998-2019-700x394.png"
                 alt="Scotiabank" className="h-16 object-contain"/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA43gL7kC104vLhCr-IqwFUZifyejXNlwHoQ&s"
                 alt="Banco Falabella" className="h-16 object-contain"/>
            <img src="https://emtecgroup.net/wp-content/uploads/2024/01/Banco-Ripley.png" alt="Banco Ripley"
                 className="h-16 object-contain"/>
            <img src="https://brandemia.org/sites/default/files/inline/images/logo_banco_pichincha_portada.jpg"
                 alt="Banco Pichincha" className="h-16 object-contain"/>
            <img src="https://logowik.com/content/uploads/images/interbank4094.logowik.com.webp" alt="Interbank"
                 className="h-16 object-contain"/>
            <img src="https://mir-s3-cdn-cf.behance.net/projects/404/2aa9ad208811221.Y3JvcCwxMDIyLDc5OSwwLDA.jpg"
                 alt="BanBif" className="h-16 object-contain"/>
            <img src="https://seeklogo.com/images/M/mibanco-logo-699A2E1B3E-seeklogo.com.png" alt="Mibanco"
                 className="h-16 object-contain"/>
          </div>
        </div>
      </div>
  );
};
