import Link from "next/link";
export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <h1>
              <span>Just add</span>
              <span>Mermite</span>
            </h1>
            <h2>Spread The Joy</h2>
          </a>
        </Link>
      </header>

      <div className="page-content">{children}</div>
      <footer>
        <p>Copy right received @ 2021</p>
      </footer>
    </div>
  );
}
