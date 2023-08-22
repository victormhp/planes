import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background w-full px-4 py-1">
      <nav className="flex justify-end">
        <ThemeToggle />
      </nav>
    </header>
  )
}