

export default function Home() {
    return (
        <div className="min-h-screen bg-linear-0-to-br from-blue-500 to-purple-600">
            <nav className="bg-white shadow-lg">
                <div className="max-w-6xl mx-auto px-4 py-4">
                    <h1 className="text-2xl font-bold text-gray-800">Mi Sitio</h1>
                </div>
            </nav>

            <main className="max-w-6xl mx-auto px-4 py-16">
                <section className="text-center text-white">
                    <h2 className="text-5xl font-bold mb-4">Bienvenido</h2>
                    <p className="text-xl mb-8">Esta es una página de inicio simple y modernaaaaaaa</p>
                    <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                        Comenzar
                    </button>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="bg-white p-8 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Sección {item}</h3>
                            <p className="text-gray-600">Contenido descriptivo de la sección {item}</p>
                        </div>
                    ))}
                </section>
            </main>

            <footer className="bg-gray-800 text-white text-center py-6 mt-16">
                <p>&copy; 2024 Mi Sitio. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
}