import { faSearch } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

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
                            <span className="block text-white">Apenas um lugar</span>
                            <span className="block text-teal-200">Todos os médicos</span>
                        </h1>
                        <p className="mx-auto my-6 max-w-lg text-center text-xl text-teal-200 sm:max-w-3xl">
                            Encontre o médico que você procura por especialidade
                        </p>
                        <div className="mx-auto flex max-w-lg align-middle items-center space-x-3 pl-0 pr-16">
                            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                                Especialidades
                            </label>
                            <select
                                id="location"
                                name="location"
                                className=" block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm"
                                defaultValue="Canada"
                            >
                                <option>Selecione</option>
                                <option>Acupuntura</option>
                                <option>Alergia e Imunologia</option>
                                <option>Anestesiologia</option>
                                <option>Angiologia</option>
                                <option>Cancerologia</option>
                                <option>Cardiologia</option>
                                <option>Cirurgia Cardiovascular</option>
                                <option>Cirurgia da Mão</option>
                                <option>Cirurgia de Cabeça e Pescoço</option>
                                <option>Cirurgia do Aparelho Digestivo</option>
                                <option>Cirurgia Geral</option>
                                <option>Cirurgia Pediátrica</option>
                                <option>Cirurgia Plástica</option>
                                <option>Cirurgia Torácica</option>
                                <option>Cirurgia Vascular</option>
                                <option>Clínica Médica</option>
                                <option>Coloproctologia</option>
                                <option>Dermatologia</option>
                                <option>Endocrinologia e Metabologia</option>
                                <option>Endoscopia</option>
                                <option>Gastroenterologia</option>
                                <option>Genética Médica</option>
                                <option>Geriatria</option>
                                <option>Ginecologia e Obstetrícia</option>
                                <option>Hematologia e Hemoterapia</option>
                                <option>Homeopatia</option>
                                <option>Infectologia</option>
                                <option>Mastologia</option>
                                <option>Medicina de Família e Comunidade</option>
                                <option>Medicina do Trabalho</option>
                                <option>Medicina de Tráfego</option>
                                <option>Medicina Esportiva</option>
                                <option>Medicina Física e Reabilitação</option>
                                <option>Medicina Intensiva</option>
                                <option>Medicina Legal e Perícia Médica</option>
                                <option>Medicina Nuclear</option>
                                <option>Medicina Preventiva e Social</option>
                                <option>Nefrologia</option>
                                <option>Neurocirurgia</option>
                                <option>Neurologia</option>
                                <option>Nutrologia</option>
                                <option>Oftalmologia</option>
                                <option>Ortopedia e Traumatologia</option>
                                <option>Otorrinolaringologia</option>
                                <option>Patologia</option>
                                <option>Patologia Clínica/Medicina Laboratorial</option>
                                <option>Pediatria</option>
                                <option>Pneumologia</option>
                                <option>Psiquiatria</option>
                                <option>Radiologia e Diagnóstico por Imagem</option>
                                <option>Radioterapia</option>
                                <option>Reumatologia</option>
                                <option>Urologia</option>
                            </select>
                            <Link href="/professional/list">
                                <button
                                    type="button"
                                    className="inline-flex items-center rounded-md border border-transparent bg-teal-600 px-2 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                                >
                                    Buscar
                                    <FontAwesomeIcon icon={faSearch} className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;