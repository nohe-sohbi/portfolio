export default function Header() {
  return (
    <>
      <header>
        <title>Portfolio</title>
        <nav>
          <div className="nav-element">
            <a
              href="mailto:nohe@sohbi.dev"
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mx-2"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
                <path d="M22 6l-10 7L2 6" />
              </svg>
              &nbsp;nohe@sohbi.dev
            </a>
          </div>
          <div className="nav-element">
            <a
              href="https://www.linkedin.com/in/nohe-sohbi/"
              target="_blank"
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mx-2"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" rx="1" ry="1" />
              </svg>
              &nbsp;Sohbi Nohe
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}
