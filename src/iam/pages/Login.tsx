export const Login = () => {
  return (
      <div className="flex items-center justify-center min-h-screen bg-gray-200">

        <div className="absolute top-0 w-full h-32 bg-gray-300 rounded-b-full flex items-center justify-center">
          <h1 className="text-lg font-semibold text-gray-700">Bienvenido a CarteraSmart</h1>
        </div>

        <div className="flex items-center w-full max-w-5xl px-4 z-10">

          <div className="hidden md:block flex-1 flex justify-center mr-8">
            <img src="/src/assets/iam/carterita.png" alt="Imagen izquierda" className="h-64 w-64 object-contain"/>
          </div>

          <div className="p-8 rounded-lg shadow-lg w-full max-w-xl" style={{ backgroundColor: '#97A4D3' }}>
            <h2 className="text-center text-2xl font-semibold mb-6 text-white">Inicio de Sesión</h2>

            <form>
              <div className="mb-5">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Correo
                  Electrónico:</label>
                <input
                    type="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Ingresa tu correo electrónico"
                    required
                />
              </div>

              <div className="mb-5">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">Contraseña:</label>
                <input
                    type="password"
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Ingresa tu contraseña"
                    required
                />
              </div>

              <div className="flex justify-center space-x-4 mt-5">
                <button type="submit" className="text-black bg-blue-100 hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2.5 text-center">
                  Iniciar Sesión
                </button>
                <button
                    type="button"
                    className="text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-6 py-2.5 text-center"
                >
                  Registrar
                </button>
              </div>
            </form>

            <p className="text-center text-sm mt-6 text-gray-600">© 2024 CarteraSmart. All Rights Reserved.</p>
          </div>

          <div className="hidden md:block flex-1 flex justify-center ml-8">
            <img src="/src/assets/iam/carter.png" alt="Imagen derecha" className="h-96 w-96 object-contain"/>
          </div>
        </div>

        <div className="absolute bottom-0 w-full h-32 bg-gray-300 rounded-t-full"></div>
      </div>
  );
};
