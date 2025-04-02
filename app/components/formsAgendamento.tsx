import Form from 'next/form'
function generateStaticParams() { }

export default function Page() {
    return (
        <section>
            <h2> Formulário para agendamento </h2>
            <Form action="/search">
                <input name="query" />
                <button type="submit">Submit</button>
            </Form>
        </section>
    )
}