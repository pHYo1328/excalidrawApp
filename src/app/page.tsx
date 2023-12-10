import { default as ExcaliDrawComponent } from "./_components/excalidraw"
export default async function Home() {

  return (
    <div style={{ position: 'fixed', inset: 0 }}>
      <ExcaliDrawComponent/>
    </div>
  )
}