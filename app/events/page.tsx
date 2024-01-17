import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Paginator from "../components/Paginator";
import Section from "../components/Section";
import EventGallery from "../components/events/EventGallery";
import { fetchEventCount } from "../lib/data";
import { pageToRange } from "../lib/utils.server";

export default async function SponsersPage({ searchParams }: { searchParams: { page: number } }) {
  const page = Number(searchParams.page || 1)
  const limit = 4
  const count = await fetchEventCount()
  const range = pageToRange(page, limit) as [number, number]

  return (
    <>
      <Navbar />

      <main>
        <Section>
          <div>
            <h3 className="text-4xl text-center mx-auto mb-5 leading-tight">What&apos;s happening</h3>
            <p className="text-xl text-text-secondary text-center mx-auto !leading-relaxed">Browse our latest events, workshop sessions, and updates</p>
          </div>
        </Section>

        <Section>
          <EventGallery range={range} />
        </Section>

        <Section>
          <Paginator page={page} limit={limit} count={count!} />
        </Section>
      </main>

      <Footer />
    </>
  )
}