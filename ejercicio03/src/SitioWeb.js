import React from "react";

const SitioWeb = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-500 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-xl font-bold">Pedro Damian</h1>
          <nav className="hidden md:flex gap-4">
            <a href="#inicio" className="hover:underline">
              Inicio
            </a>
            <a href="#acerca" className="hover:underline">
              Acerca de
            </a>
            <a href="#contacto" className="hover:underline">
              Contacto
            </a>
          </nav>
          <button
            className="md:hidden text-white"
            onClick={() =>
              document.getElementById("mobileMenu").classList.toggle("hidden")
            }
          >
            ☰
          </button>
        </div>
        <div id="mobileMenu" className="hidden bg-blue-400 md:hidden">
          <a href="#inicio" className="block py-2 px-4 hover:bg-blue-500">
            Inicio
          </a>
          <a href="#acerca" className="block py-2 px-4 hover:bg-blue-500">
            Acerca de
          </a>
          <a href="#contacto" className="block py-2 px-4 hover:bg-blue-500">
            Contacto
          </a>
        </div>
      </header>

      <main className="flex-grow bg-gray-100 py-8 px-6">
        <section id="inicio">
          <h2 className="text-3xl font-bold mb-4">
            Los mejores frameworks para frontend
          </h2>
          <p className="mb-8">
            Aquí te presentamos tres de los frameworks más populares para el
            desarrollo frontend: React, Vue y Angular.
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              className="w-full h-48 object-cover"
              src="https://somospnt.com/images/blog/cover/componentes-react.png"
              alt="React"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">React</h3>
              <p className="text-gray-700">
                React es una biblioteca de JavaScript para construir interfaces
                de usuario. Desarrollada por Facebook, permite la creación de
                componentes reutilizables y una experiencia de usuario eficiente
                y dinámica.
              </p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              className="w-full h-48 object-cover"
              src="https://www.mundojs.com.br/wp-content/uploads/2019/12/vue.jpeg"
              alt="Vue"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Vue</h3>
              <p className="text-gray-700">
                Vue.js es un framework progresivo para construir interfaces de
                usuario. Su diseño es flexible, permitiendo desde proyectos
                simples hasta aplicaciones complejas, y es altamente valorado
                por su curva de aprendizaje baja.
              </p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              className="w-full h-48 object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8P3xU9-pr9XvuPNHy_SJ6_vD5frlaFwpTXA&s"
              alt="Angular"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Angular</h3>
              <p className="text-gray-700">
                Angular es un framework de desarrollo de aplicaciones web de
                lado del cliente, creado por Google. Ofrece una solución
                integral con herramientas para el enrutamiento, manejo de
                formularios, validación y más.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>Desarrollado por Pedro Damian © 2024</p>
        </div>
      </footer>
    </div>
  );
};

export default SitioWeb;
