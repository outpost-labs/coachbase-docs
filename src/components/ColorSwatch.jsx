export function ColorSwatch({ color }) {
  return (
    <span
      className="inline-block h-6 w-6 rounded-md ring-1 ring-black/10"
      style={{ backgroundColor: color }}
    />
  )
}
