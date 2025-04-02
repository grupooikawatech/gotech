import Image from 'next/image'
function generateStaticParams() { }

export default function Page() {
    return (
        <section>
            <h2> Portifólio </h2>
            <div>
                <h3>Venda Certa</h3>
                <Image
                    src="/venda-certa.png"
                    width={100}
                    height={100}
                    alt=''
                />
            </div>
            <div>
                <h3>Clínica Oikawa</h3>
                <Image
                    src="/clinica_oikawa.webp"
                    width={100}
                    height={100}
                    alt=''
                />
            </div>
            <div>
                <h3>Patch News</h3>
                <Image
                    src="/logo-patch-news.png"
                    width={100}
                    height={100}
                    alt=''
                />
            </div>
        </section>
    )
}