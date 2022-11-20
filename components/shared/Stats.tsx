const metrics = [
    { id: 1, stat: '8K+', emphasis: 'Pacientes', rest: 'laoreet amet lacus nibh integer quis.' },
    { id: 2, stat: '25K+', emphasis: 'Cidades no Brasil', rest: 'lacus nibh integer quis.' },
    { id: 3, stat: '98%', emphasis: 'Pacientes satisfeitos', rest: 'laoreet amet lacus nibh integer quis.' },
    { id: 4, stat: '12M+', emphasis: 'Exames realizados', rest: 'lacus nibh integer quis.' },
]
function Stats() {

  
    return (
        <div className="relative bg-gray-900">
            <div className="absolute inset-x-0 bottom-0 h-80 xl:top-0 xl:h-full">
                <div className="h-full w-full xl:grid xl:grid-cols-2">
                    <div className="h-full xl:relative xl:col-start-2">
                        <img
                            className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
                            src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                            alt="People working on laptops"
                        />
                        <div
                            aria-hidden="true"
                            className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
                        />
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default Stats;