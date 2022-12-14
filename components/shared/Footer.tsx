import { useTranslation } from 'react-i18next'

const footerNavigation = {
    solutions: [
        { name: 'Agendamento', href: '#' },
        { name: 'Consulta', href: '#' },
        { name: 'Exames', href: '#' },
        { name: 'Medicamentos', href: '#' },
    ],
    support: [
        { name: 'Preço', href: '#' },
        { name: 'Acompanhamento', href: '#' },
        { name: 'Internações', href: '#' },
        { name: 'Receitas', href: '#' },
    ],
    company: [
        { name: 'Sobre', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Trabalhe Conosco', href: '#' },
        { name: 'Imprensa', href: '#' },
        { name: 'Parceiros', href: '#' },
    ],
    legal: [
        { name: 'Privacidade', href: '#' },
        { name: 'Termos', href: '#' },
    ],
    social: [
       
    ],
}

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

function Footer() {

    const { t } = useTranslation();
  
    return (
        <footer className="bg-gray-50" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 lg:px-8 lg:pt-24">
                <div className="mt-12 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between lg:mt-16">
                    <p className="mt-8 text-base text-gray-400 md:order-1 md:mt-0">
                        &copy; {t('common.rights')}
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;