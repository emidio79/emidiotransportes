import Button from '../ui/Button'
import { faqs } from '../../data/faq'
import { useFaqAccordion } from '../../hooks/useFaqAccordion'

function FAQ({ openWhatsAppSelector }) {
  const { openFaq, toggleFaq } = useFaqAccordion()

  return (
    <section id="faq" className="bg-stone-50 py-20 md:py-28">
      <div className="mx-auto grid w-[min(1140px,calc(100%-40px))] gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-24">
        <div>
          <p className="mb-4 text-xs font-bold tracking-[.13em] text-yellow-800">
            DÚVIDAS FREQUENTES
          </p>

          <h2 className="font-display text-4xl font-bold tracking-[-.05em] sm:text-5xl">
            Quer saber mais?
          </h2>

          <p className="mt-4 max-w-sm text-zinc-600">
            Se a sua dúvida não estiver aqui, fale conosco. Será um prazer ajudar.
          </p>

          <Button
            type="button"
            onClick={() =>
              openWhatsAppSelector(
                'Olá! Tenho uma dúvida sobre o transporte escolar.'
              )
            }
            className="mt-6 inline-flex items-center justify-center rounded-lg !bg-yellow-400 px-5 py-3 text-sm font-bold !text-zinc-950 shadow-none transition hover:-translate-y-0.5 hover:!bg-yellow-300"
          >
            Tirar dúvida pelo WhatsApp
            <span className="ml-2 text-lg leading-none text-yellow-700">→</span>
          </Button>
        </div>

        <div className="border-t border-stone-300">
          {faqs.map(([question, answer], index) => (
            <article
              key={question}
              className="border-b border-stone-300"
            >
              <button
                type="button"
                onClick={() => toggleFaq(index)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left text-sm font-bold"
              >
                <span>{question}</span>

                <b className="text-xl font-medium text-yellow-700">
                  {openFaq === index ? '−' : '+'}
                </b>
              </button>

              {openFaq === index && (
                <p className="-mt-1 max-w-[90%] pb-5 text-sm leading-relaxed text-zinc-600">
                  {answer}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ