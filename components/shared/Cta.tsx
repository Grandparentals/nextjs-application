const metrics = [
    { id: 1, stat: '8K+', emphasis: 'Companies', rest: 'use laoreet amet lacus nibh integer quis.' },
    { id: 2, stat: '25K+', emphasis: 'Countries around the globe', rest: 'lacus nibh integer quis.' },
    { id: 3, stat: '98%', emphasis: 'Customer satisfaction', rest: 'laoreet amet lacus nibh integer quis.' },
    { id: 4, stat: '12M+', emphasis: 'Issues resolved', rest: 'lacus nibh integer quis.' },
]
function Cta() {

  
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-4xl py-16 px-4 sm:px-6 sm:py-24 lg:flex lg:max-w-7xl lg:items-center lg:justify-between lg:px-8">
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    <span className="block">Pronto para participar?</span>
                    <span className="-mb-1 block bg-gradient-to-r from-pelorous-600 to-pelorous-600 bg-clip-text pb-1 text-transparent">
                        Entre em contato ou crie uma conta.
                    </span>
                </h2>
                <div className="mt-6 space-y-4 sm:flex sm:space-y-0 sm:space-x-5">
                    <a
                        href="#"
                        className="flex items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-pelorous-600 to-pelorous-600 bg-origin-border px-4 py-3 text-base font-medium text-white shadow-sm hover:from-pelorous-700 hover:to-pelorous-700"
                    >
                        Saiba mais
                    </a>
                    <a
                        href="#"
                        className="flex items-center justify-center rounded-md border border-transparent bg-pelorous-50 px-4 py-3 text-base font-medium text-pelorous-800 shadow-sm hover:bg-pelorous-100"
                    >
                        Acessar plataforma
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Cta;