import CardPreview from "@components/preview/CardPreview"
import NavbarPreview from "@components/preview/NavbarPreview"

const PreviewPage = () => {
  return (
    <section className="relative !sm:bg-white">
      <div className="absolute h-[357px] bg-purple w-full top-0 rounded-b-[32px] -z-10 sm:hidden"> </div>
        <NavbarPreview />
        <CardPreview />
    </section>
  )
}

export default PreviewPage
