import { prerender } from "react-dom/static"
import { MemoryRouter } from "react-router-dom"
import App from "./App"

export async function render(url: string) {
  const { prelude } = await prerender(
    <MemoryRouter initialEntries={[url]}>
      <App />
    </MemoryRouter>,
  )

  return new Response(prelude).text()
}
