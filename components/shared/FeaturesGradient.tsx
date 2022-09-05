import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faMarkdown } from "@fortawesome/free-brands-svg-icons";
import { faFileMedical, faHistory, faInbox, faUser } from "@fortawesome/free-solid-svg-icons";
import { faChartCandlestick, faClockDesk, faMailbox, faSave, faTimer, faTrash, faUserGroup } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HeartIcon, InboxIcon, SparklesIcon, TrashIcon, UsersIcon } from "@heroicons/react/outline";

interface Feature {
    name: string
    description: string
    icon: IconProp
}

const features: Array<Feature> = [
    {
        name: 'Caixas categorizadas',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: faInbox,
    },
    {
        name: 'Detalhes do Paciente',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: faUser,
    },
    {
        name: 'Exames Passados',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: faHistory,
    },
    {
        name: 'Configuração de Lembrete',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: faClockDesk,
    },
    {
        name: 'Reports de Exames',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: faChartCandlestick,
    },
    {
        name: 'Resultados Salvos',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: faSave,
    },
    {
        name: 'Prescrição',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: faFileMedical,
    },
    {
        name: 'Acompanhamento de Clínicas',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: faUserGroup,
    },
]

function FeaturesGradient() {

  
    return (
        <div className="bg-gradient-to-r from-teal-800 to-teal-700">
            <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:px-8 lg:pt-24">
                <h2 className="text-3xl font-bold tracking-tight text-white">Acompanhamento de pacientes criado para eficiência</h2>
                <p className="mt-4 max-w-3xl text-lg text-teal-200">
                    Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis. Blandit
                    aliquam sit nisl euismod mattis in.
                </p>
                <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
                    {features.map((feature) => (
                        <div key={feature.name}>
                            <div>
                                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-white bg-opacity-10">
                                    <FontAwesomeIcon icon={feature.icon} className="h-6 w-6 text-white" aria-hidden="true" />
                                </span>
                            </div>
                            <div className="mt-6">
                                <h3 className="text-lg font-medium text-white">{feature.name}</h3>
                                <p className="mt-2 text-base text-teal-200">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default FeaturesGradient;