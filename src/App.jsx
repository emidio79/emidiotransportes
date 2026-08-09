// useState permite criar estados locais no componente.
// Aqui ele será usado no menu do celular e nas respostas expansíveis do FAQ.
import { useState } from 'react'

// ============================================================
// CONFIGURAÇÕES CENTRAIS
// Altere estes valores para personalizar os dados principais.
// ============================================================

const SERVICE_NAME = 'Emidio Transportes'
const CITY = 'Aracaju - SE'

// Formato: DDI + DDD + telefone, sem +, espaços, traços ou parênteses.
const WHATSAPP_NUMBER = '5579991760228'

// Função reutilizável para montar links de WhatsApp com mensagem pronta.
// encodeURIComponent evita que espaços e caracteres especiais quebrem a URL.
const whatsappLink = (message = 'Olá! Gostaria de saber mais sobre o transporte escolar.') =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

// ============================================================
// DADOS DA PÁGINA
// Arrays tornam o conteúdo fácil de editar e evitam repetir JSX.
// ============================================================

// Cada item possui: texto exibido e id da seção para onde o link aponta.
const navItems = [
  ['Sobre', 'sobre'],
  ['Segurança', 'seguranca'],
  ['Como funciona', 'como-funciona'],
  ['Rotas', 'rotas'],
  ['Depoimentos', 'depoimentos'],
  ['Dúvidas', 'faq'],
]

const safetyItems = [
  { icon: '✓', title: 'Regularizado', text: 'Serviço regularizado junto à SMTT.' },
  { icon: '🚌', title: 'Veículo revisado', text: 'Manutenções e revisões realizadas periodicamente.' },
  { icon: '⌁', title: 'Embarque seguro', text: 'Atenção em cada embarque e desembarque.' },
  { icon: '♥', title: 'Cuidado diário', text: 'Responsabilidade e acolhimento com cada aluno.' },
]

const steps = [
  ['01', 'Fale conosco', 'Envie uma mensagem pelo WhatsApp e informe escola, bairro e turno.'],
  ['02', 'Confira a rota', 'Verificamos a disponibilidade e a melhor rota para a sua família.'],
  ['03', 'Reserve a vaga', 'Alinhamos os detalhes e confirmamos a vaga do aluno.'],
  ['04', 'Acompanhe com tranquilidade', 'Cuidamos do trajeto com pontualidade, atenção e segurança.'],
]

const benefits = [
  ['◷', 'Pontualidade', 'Rotas organizadas para que seu filho chegue no horário.'],
  ['◉', 'Contato com a família', 'Comunicação simples e próxima sempre que precisar.'],
  ['♙', 'Serviço familiar', 'Um atendimento humano, feito com responsabilidade.'],
  ['✓', 'Experiência', 'Conhecimento das rotas e atenção em cada detalhe.'],
  ['▣', 'Regularização', 'Atuação conforme as normas e exigências aplicáveis.'],
  ['✦', 'Atenção individual', 'Cuidado respeitoso com cada aluno durante o trajeto.'],
]

// Enquanto não houver depoimentos reais, estes cards funcionam como placeholders.
const testimonials = [
  { name: 'Depoimento em breve', location: 'Famílias atendidas', text: 'Esta área está preparada para receber a experiência de quem já confia no nosso transporte.' },
  { name: 'Depoimento em breve', location: 'Famílias atendidas', text: 'Quando tiver depoimentos reais, substitua este texto por uma fala curta de uma mãe, pai ou responsável.' },
  { name: 'Depoimento em breve', location: 'Famílias atendidas', text: 'Priorize relatos autorizados e use apenas o primeiro nome ou iniciais, se preferir.' },
]

const faqs = [
  ['Quais bairros vocês atendem?', 'Atendemos bairros da região de [INFORME A REGIÃO]. Fale conosco pelo WhatsApp para confirmar se a sua rota está disponível.'],
  ['O transporte é regularizado?', 'Sim. Inclua aqui as informações atualizadas sobre a regularização junto à SMTT e as autorizações do veículo.'],
  ['Como peço um orçamento?', 'Clique em “Consultar vaga” ou envie uma mensagem pelo WhatsApp. Informe o bairro, a escola, o turno e os dias necessários.'],
  ['Há vagas disponíveis?', 'A disponibilidade depende da rota e do turno. Entre em contato para verificarmos a melhor opção para sua família.'],
  ['Como funciona o pagamento?', 'Defina e inclua aqui suas condições de pagamento, data de vencimento e formas aceitas.'],
  ['Qual é o horário de atendimento?', 'Nosso atendimento é de [DIAS E HORÁRIOS]. Mensagens pelo WhatsApp são respondidas assim que possível.'],
]

// ============================================================
// COMPONENTE REUTILIZÁVEL DE BOTÃO
// Recebe link, conteúdo interno, variação escura e classes extras.
// ============================================================
function Button({ href, children, dark = false, className = '' }) {
  // Verifica se o destino é externo; links wa.me devem abrir em outra aba.
  const isExternal = href.startsWith('https')

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
      className={`
        inline-flex items-center justify-center gap-3 rounded-md px-5 py-3.5
        text-sm font-bold transition duration-200 hover:-translate-y-0.5
        ${dark ? 'bg-zinc-950 text-white hover:bg-zinc-800' : 'bg-yellow-400 text-zinc-950 hover:bg-yellow-300'}
        ${className}
      `}
    >
      {children}
    </a>
  )
}

// ============================================================
// COMPONENTE PRINCIPAL DA PÁGINA
// ============================================================
function App() {
  // true abre o menu mobile; false o mantém fechado.
  const [menuOpen, setMenuOpen] = useState(false)

  // Armazena o índice da pergunta aberta no FAQ.
  // null significa que nenhuma pergunta está aberta.
  const [openFaq, setOpenFaq] = useState(null)

  // Fecha o menu após o usuário clicar em um item de navegação no celular.
  const closeMenu = () => setMenuOpen(false)

  return (
    // overflow-x-hidden evita rolagem horizontal causada por elementos decorativos.
    <div className="overflow-x-hidden bg-white font-body text-zinc-950">
      {/* ======================================================
          HEADER: marca, navegação, botão de WhatsApp e selo.
          sticky mantém o header visível durante a rolagem.
         ====================================================== */}
      <header className="sticky top-0 z-30 border-b border-stone-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex min-h-[76px] w-[min(1140px,calc(100%-40px))] items-center gap-6">
          <a href="#inicio" onClick={closeMenu} className="flex shrink-0 items-center gap-2.5 font-display text-[15px] font-bold leading-none">
            <span className="grid h-10 w-10 place-items-center rounded-md bg-yellow-400 text-xs">TE</span>
            <span>
              {SERVICE_NAME}
              <small className="mt-1 block font-body text-[9px] font-semibold uppercase tracking-[.12em] text-zinc-500">Transporte escolar</small>
            </span>
          </a>

          {/* Botão exibido apenas em telas menores que md (768px). */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
            className="ml-auto flex w-9 flex-col gap-1.5 py-2 md:hidden"
          >
            <span className="h-0.5 w-6 bg-zinc-950" />
            <span className="h-0.5 w-6 bg-zinc-950" />
            <span className="h-0.5 w-6 bg-zinc-950" />
          </button>

          {/*
            Em mobile, o menu usa position absolute e abre conforme menuOpen.
            Em desktop (md:), ele volta a ser uma navegação horizontal normal.
          */}
          <nav className={`${menuOpen ? 'flex' : 'hidden'} absolute left-0 right-0 top-[76px] flex-col gap-0 border-b border-stone-200 bg-white px-5 pb-5 pt-2 md:static md:ml-auto md:flex md:flex-row md:items-center md:gap-5 md:border-0 md:bg-transparent md:p-0`}>
            {navItems.map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={closeMenu} className="py-3 text-xs font-semibold hover:text-yellow-700 md:py-0">
                {label}
              </a>
            ))}
            <Button href={whatsappLink()} className="mt-2 !px-4 !py-2.5 !text-xs md:mt-0">
              Falar no WhatsApp
            </Button>
          </nav>

          {/* hidden lg:flex: fica oculto antes de 1024px para não apertar o header. */}
          <div className="hidden shrink-0 items-center gap-1 rounded border border-stone-200 px-2 py-1.5 text-[10px] font-semibold text-zinc-500 lg:flex">
            <span className="font-bold text-lime-700">✓</span> Regularizado pela SMTT
          </div>
        </div>
      </header>

      <main>
        {/* ================= HERO ================= */}
        <section id="inicio" className="bg-gradient-to-br from-amber-50 via-white to-white py-16 md:py-20">
          <div className="mx-auto grid w-[min(1140px,calc(100%-40px))] items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
            <div>
              <p className="mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.13em] text-yellow-800"><span className="text-base text-yellow-400">●</span> Segurança, cuidado e pontualidade</p>
              <h1 className="max-w-3xl font-display text-5xl font-bold leading-[.95] tracking-[-.06em] sm:text-6xl lg:text-7xl">Transporte escolar seguro para quem é mais importante.</h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-600">Cuidamos do trajeto dos alunos com responsabilidade, atenção e uma comunicação próxima com cada família.</p>
              <div className="mt-7 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
                <Button href={whatsappLink('Olá! Gostaria de consultar uma vaga no transporte escolar.')}>Consultar vaga <span className="text-lg">→</span></Button>
                <a href="#como-funciona" className="text-sm font-bold">Como funciona <span className="ml-2 text-lg text-yellow-700">↓</span></a>
              </div>
              <div className="mt-10 flex flex-wrap gap-4 sm:gap-6">
                {[['✓', 'Serviço', 'regularizado'], ['◷', 'Rotas com', 'pontualidade'], ['♥', 'Atenção em', 'cada trajeto']].map(([icon, line1, line2]) => (
                  <div key={icon} className="flex items-center gap-2">
                    <strong className="grid h-7 w-7 place-items-center rounded-full bg-yellow-100 text-sm text-yellow-800">{icon}</strong>
                    <span className="text-[11px] font-semibold leading-tight text-zinc-600">{line1}<br />{line2}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Placeholder visual: troque futuramente por uma tag <img>. */}
            <div className="relative mx-auto min-h-[330px] w-[min(100%,520px)] sm:min-h-[410px]">
              <div className="absolute -left-2 -top-3 z-10 rounded bg-white px-3 py-2 text-[11px] font-bold shadow-lg">Seu filho em boas mãos <span className="text-red-500">♥</span></div>
              <div className="absolute left-3 top-2 flex h-[calc(100%-16px)] w-[calc(100%-16px)] flex-col items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-yellow-300 to-yellow-600 text-center shadow-[16px_18px_0_#181818]">
                <span className="z-10 bg-zinc-950 px-2 py-1 text-[10px] font-bold tracking-[.13em] text-white">FOTO DO VEÍCULO</span>
                <div className="z-10 mt-6 flex h-24 w-56 items-end gap-2 rounded-[25px_25px_7px_7px] border-[7px] border-zinc-950 bg-amber-50 px-4 pb-2">
                  <i className="h-7 w-7 rounded-full bg-zinc-950" /><i className="mb-7 h-10 w-10 rounded border-4 border-zinc-950 bg-sky-200" /><i className="mb-7 h-10 w-10 rounded border-4 border-zinc-950 bg-sky-200" /><i className="h-7 w-7 rounded-full bg-zinc-950" />
                </div>
                <p className="z-10 mt-4 max-w-[220px] text-xs leading-relaxed text-yellow-950">Substitua este bloco por uma foto real e bem iluminada do veículo.</p>
              </div>
              <div className="absolute -bottom-1 -right-2 z-10 rounded bg-white px-3 py-2 shadow-lg"><strong className="block font-display text-base text-yellow-800">SMTT</strong><span className="block text-[9px] text-zinc-500">Serviço regularizado</span></div>
            </div>
          </div>
        </section>

        {/* ================= SOBRE ================= */}
        <section id="sobre" className="bg-stone-50 py-20 md:py-28">
          <div className="mx-auto grid w-[min(1140px,calc(100%-40px))] gap-8 md:grid-cols-[.9fr_1.1fr] md:gap-24">
            <div><p className="mb-4 text-xs font-bold tracking-[.13em] text-yellow-800">SOBRE NÓS</p><h2 className="font-display text-4xl font-bold leading-[1.05] tracking-[-.05em] sm:text-5xl">Um transporte feito por uma família, para cuidar da sua.</h2></div>
            <div className="max-w-xl text-zinc-600"><p>Somos uma família que acredita que levar uma criança à escola é muito mais do que cumprir uma rota. É assumir uma responsabilidade diária com segurança, atenção e respeito.</p><p className="mt-4">O nosso serviço nasceu em <strong className="text-zinc-950">[ANO DE INÍCIO]</strong>, com o propósito de oferecer mais tranquilidade para pais e responsáveis em <strong className="text-zinc-950">[CIDADE/REGIÃO]</strong>.</p><a href="#contato" className="mt-6 inline-block text-sm font-bold">Conheça nossa rota <span className="ml-2 text-lg text-yellow-700">→</span></a></div>
          </div>
          <div className="mx-auto mt-14 grid w-[min(1140px,calc(100%-40px))] gap-5 border-t border-stone-300 pt-7 sm:grid-cols-3">
            {[['[X]+', 'anos de experiência'], ['[X]+', 'famílias atendidas'], ['[X]', 'rotas organizadas']].map(([number, label]) => <div key={label} className="flex items-center gap-3"><strong className="font-display text-4xl tracking-[-.05em]">{number}</strong><span className="max-w-24 text-xs leading-tight text-zinc-500">{label}</span></div>)}
          </div>
        </section>

        {/* ================= SEGURANÇA ================= */}
        <section id="seguranca" className="py-20 md:py-28">
          <div className="mx-auto w-[min(1140px,calc(100%-40px))]">
            <div className="mx-auto mb-12 max-w-2xl text-center"><p className="mb-4 text-xs font-bold tracking-[.13em] text-yellow-800">SEGURANÇA EM PRIMEIRO LUGAR</p><h2 className="font-display text-4xl font-bold tracking-[-.05em] sm:text-5xl">Tranquilidade para você. Cuidado para eles.</h2><p className="mt-4 text-zinc-600">Nosso compromisso é tornar cada trajeto seguro, organizado e acolhedor.</p></div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {safetyItems.map((item) => <article key={item.title} className="rounded-lg border border-stone-200 p-6"><span className="grid h-10 w-10 place-items-center rounded-full bg-yellow-100 font-bold text-yellow-800">{item.icon}</span><h3 className="mt-7 font-display text-xl font-bold tracking-[-.04em]">{item.title}</h3><p className="mt-2 text-sm leading-relaxed text-zinc-600">{item.text}</p></article>)}
            </div>
          </div>
        </section>

        {/* ================= COMO FUNCIONA ================= */}
        <section id="como-funciona" className="bg-zinc-950 py-20 md:py-28">
          <div className="mx-auto w-[min(1140px,calc(100%-40px))]">
            <div className="mb-12"><p className="mb-4 text-xs font-bold tracking-[.13em] text-yellow-400">SIMPLES E TRANSPARENTE</p><h2 className="font-display text-4xl font-bold tracking-[-.05em] text-white sm:text-5xl">Como funciona</h2><p className="mt-4 max-w-xl text-zinc-400">Do primeiro contato ao dia a dia da rota, tudo é alinhado com clareza.</p></div>
            <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-4">{steps.map(([number, title, text]) => <article key={number}><span className="grid h-8 w-8 place-items-center rounded-full bg-yellow-400 text-[10px] font-extrabold">{number}</span><h3 className="mt-6 font-display text-xl font-bold tracking-[-.04em] text-white">{title}</h3><p className="mt-2 text-sm leading-relaxed text-zinc-400">{text}</p></article>)}</div>
          </div>
        </section>

        {/* ================= ROTAS ================= */}
        <section id="rotas" className="bg-yellow-400 py-20 md:py-28">
          <div className="mx-auto grid w-[min(1140px,calc(100%-40px))] items-center gap-12 lg:grid-cols-[.83fr_1.17fr] lg:gap-20">
            <div><p className="mb-4 text-xs font-bold tracking-[.13em] text-yellow-900">ROTAS ATENDIDAS</p><h2 className="font-display text-4xl font-bold tracking-[-.05em] sm:text-5xl">Onde a nossa rota chega.</h2><p className="mt-4 max-w-md text-sm leading-relaxed text-yellow-950">Estamos ampliando as informações de rotas. Consulte-nos para confirmar disponibilidade no seu bairro, escola e turno.</p><Button dark href={whatsappLink('Olá! Gostaria de confirmar se vocês atendem meu bairro e escola.')} className="mt-6">Consultar minha rota <span className="text-lg">→</span></Button></div>
            <div className="grid overflow-hidden rounded-lg bg-white shadow-[10px_10px_0_rgba(0,0,0,.16)] sm:grid-cols-2"><div className="border-b border-stone-200 p-7 sm:border-b-0 sm:border-r"><h3 className="font-display text-lg font-bold">Bairros atendidos</h3><ul className="mt-5 space-y-3 text-sm text-zinc-500"><li>✓ [BAIRRO 01]</li><li>✓ [BAIRRO 02]</li><li>✓ [BAIRRO 03]</li><li>✓ Novas rotas sob consulta</li></ul></div><div className="p-7"><h3 className="font-display text-lg font-bold">Escolas atendidas</h3><ul className="mt-5 space-y-3 text-sm text-zinc-500"><li>✓ [ESCOLA 01]</li><li>✓ [ESCOLA 02]</li><li>✓ [ESCOLA 03]</li><li>✓ Lista em atualização</li></ul></div><div className="col-span-full grid h-24 place-content-center border-t border-stone-200 bg-stone-50 text-center text-xs text-stone-400"><span className="mb-1 text-xl text-yellow-700">⌖</span>Mapa de rotas em breve</div></div>
          </div>
        </section>

        {/* ================= DIFERENCIAIS ================= */}
        <section id="diferenciais" className="bg-stone-50 py-20 md:py-28"><div className="mx-auto w-[min(1140px,calc(100%-40px))]"><div className="mb-12 text-center"><p className="mb-4 text-xs font-bold tracking-[.13em] text-yellow-800">POR QUE ESCOLHER A GENTE</p><h2 className="font-display text-4xl font-bold tracking-[-.05em] sm:text-5xl">Mais do que levar e buscar.</h2></div><div className="grid border-l border-t border-stone-300 sm:grid-cols-2 lg:grid-cols-3">{benefits.map(([icon, title, text]) => <article key={title} className="border-b border-r border-stone-300 p-7"><span className="text-xl text-yellow-700">{icon}</span><h3 className="mt-6 font-display text-lg font-bold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-zinc-600">{text}</p></article>)}</div></div></section>

        {/* ================= DEPOIMENTOS ================= */}
        <section id="depoimentos" className="py-20 md:py-28"><div className="mx-auto w-[min(1140px,calc(100%-40px))]"><div className="mb-12 text-center"><p className="mb-4 text-xs font-bold tracking-[.13em] text-yellow-800">QUEM CONFIA, RECOMENDA</p><h2 className="mx-auto max-w-3xl font-display text-4xl font-bold tracking-[-.05em] sm:text-5xl">Palavras de quem vive essa tranquilidade.</h2></div><div className="grid gap-4 lg:grid-cols-3">{testimonials.map((item, index) => <article key={index} className="flex min-h-[245px] flex-col justify-between rounded-lg border border-stone-200 bg-stone-50 p-7"><div><div className="text-xs tracking-[.18em] text-yellow-600">★★★★★</div><blockquote className="mt-4 text-sm italic leading-relaxed text-zinc-700">“{item.text}”</blockquote></div><footer className="flex items-center gap-3"><span className="grid h-8 w-8 place-items-center rounded-full bg-yellow-100 text-xs font-bold text-yellow-800">{item.name[0]}</span><div><strong className="block text-xs">{item.name}</strong><small className="text-[10px] text-zinc-500">{item.location}</small></div></footer></article>)}</div><p className="mt-5 text-center text-[11px] text-stone-400">Substitua estes cards pelos depoimentos autorizados das famílias atendidas.</p></div></section>

        {/* ================= FAQ =================
            Ao clicar, openFaq recebe o índice da pergunta.
            Se a mesma pergunta for clicada de novo, volta para null.
           ========================================= */}
        <section id="faq" className="bg-stone-50 py-20 md:py-28"><div className="mx-auto grid w-[min(1140px,calc(100%-40px))] gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-24"><div><p className="mb-4 text-xs font-bold tracking-[.13em] text-yellow-800">DÚVIDAS FREQUENTES</p><h2 className="font-display text-4xl font-bold tracking-[-.05em] sm:text-5xl">Quer saber mais?</h2><p className="mt-4 max-w-sm text-zinc-600">Se a sua dúvida não estiver aqui, fale conosco. Será um prazer ajudar.</p><a href={whatsappLink()} target="_blank" rel="noreferrer" className="mt-6 inline-block text-sm font-bold">Tirar dúvida pelo WhatsApp <span className="ml-2 text-lg text-yellow-700">→</span></a></div><div className="border-t border-stone-300">{faqs.map(([question, answer], index) => <article key={question} className="border-b border-stone-300"><button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="flex w-full items-center justify-between gap-4 py-5 text-left text-sm font-bold"><span>{question}</span><b className="text-xl font-medium text-yellow-700">{openFaq === index ? '−' : '+'}</b></button>{openFaq === index && <p className="-mt-1 max-w-[90%] pb-5 text-sm leading-relaxed text-zinc-600">{answer}</p>}</article>)}</div></div></section>

        {/* ================= CONTATO ================= */}
        <section id="contato" className="bg-yellow-400 py-20 text-center md:py-24"><div className="mx-auto flex w-[min(1140px,calc(100%-40px))] flex-col items-center"><p className="mb-4 text-xs font-bold tracking-[.13em] text-yellow-900">VAMOS CONVERSAR?</p><h2 className="max-w-3xl font-display text-4xl font-bold tracking-[-.05em] sm:text-5xl">Seu filho merece um trajeto seguro e tranquilo.</h2><p className="mt-4 max-w-lg text-sm leading-relaxed text-yellow-950">Consulte disponibilidade, tire dúvidas ou peça seu orçamento pelo WhatsApp.</p><Button dark href={whatsappLink('Olá! Gostaria de pedir um orçamento para transporte escolar.')} className="mt-7">Chamar no WhatsApp <span className="text-lg">→</span></Button><div className="mt-8 flex flex-col gap-2 text-xs font-bold text-yellow-950 sm:flex-row sm:gap-6"><span>◉ {CITY}</span><span>◷ [HORÁRIO DE ATENDIMENTO]</span><span>☎ [TELEFONE]</span></div></div></section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="bg-zinc-950 pt-11 text-white"><div className="mx-auto grid w-[min(1140px,calc(100%-40px))] gap-6 pb-10 sm:grid-cols-[1fr_auto] sm:items-center"><a href="#inicio" className="flex items-center gap-2.5 font-display text-[15px] font-bold leading-none"><span className="grid h-10 w-10 place-items-center rounded-md bg-yellow-400 text-xs text-zinc-950">TE</span><span>{SERVICE_NAME}<small className="mt-1 block font-body text-[9px] font-semibold uppercase tracking-[.12em] text-zinc-500">Transporte escolar</small></span></a><a href={whatsappLink()} target="_blank" rel="noreferrer" className="text-sm font-bold text-yellow-400">WhatsApp ↗</a></div><div className="mx-auto flex w-[min(1140px,calc(100%-40px))] flex-col gap-2 border-t border-zinc-700 py-5 text-[10px] text-zinc-500 sm:flex-row sm:justify-between"><span>© {new Date().getFullYear()} {SERVICE_NAME}. Todos os direitos reservados.</span><span>Serviço regularizado pela SMTT</span></div></footer>

      {/* Botão flutuante de WhatsApp fixado no canto inferior direito. */}
      <a href={whatsappLink()} target="_blank" rel="noreferrer" aria-label="Falar pelo WhatsApp" className="fixed bottom-5 right-5 z-20 grid h-14 w-14 place-items-center rounded-full bg-green-500 text-2xl text-white shadow-xl">◔</a>
    </div>
  )
}

// Permite que main.jsx importe e renderize este componente.
export default App