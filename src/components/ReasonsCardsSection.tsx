import SectionHeading from "./SectionHeading";
import { Reveal } from "./Reveal";

export default function ReasonsCardsSection({
  items,
}: {
  items: { title: string; description?: string }[];
}) {
  return (
    <section id='reasons' className='mx-auto max-w-6xl px-5 py-16 sm:py-20'>
      <SectionHeading
        eyebrow='Reasons I Love You'
        title='A few things I adore about you'
        subtitle='Simple, honest, and true.'
      />

      <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {items.map((r, idx) => (
          <Reveal key={r.title} delay={idx * 0.03}>
            <div className='h-full rounded-3xl border border-gray-700 bg-black/70 p-6 shadow-soft backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-gray-900'>
              <div className='text-lg font-bold text-white'>{r.title}</div>
              {r.description ? (
                <p className='mt-2 text-sm leading-relaxed text-gray-400'>
                  {r.description}
                </p>
              ) : null}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
