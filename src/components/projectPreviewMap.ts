import { BakeryPreview, PortfolioPreview } from './ProjectPreviews'

/** Maps a project id to the mock of the screen it links to. */
export const projectPreviews: Record<
  string,
  (props: { base?: number }) => React.JSX.Element
> = {
  bakery: BakeryPreview,
  portfolio: PortfolioPreview,
}
