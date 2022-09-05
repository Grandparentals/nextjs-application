function Hero() {

  
    return (
        <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
                    <div className="absolute inset-0">
                        <img
                            className="h-full w-full object-cover"
                            src="https://www.rev.com/blog/wp-content/uploads/2021/01/Medical-Transcription.jpg"
                            alt="People working on laptops"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-teal-800 to-teal-700 mix-blend-multiply" />
                    </div>
                    <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                        <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                            <span className="block text-white">Saúde com qualidade,</span>
                            <span className="block text-teal-200">Um direito de todos</span>
                        </h1>
                        <p className="mx-auto mt-6 max-w-lg text-center text-xl text-teal-200 sm:max-w-3xl">
                            A mais completa plataforma para médicos e pacientes poderem itneragir e acompanhar seu histórico médico.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;