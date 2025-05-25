import Logo from "../util/Logo.jsx";

function MainHeader() {
  return (
    <header id="main-header">
      <Logo />
      <nav id="main-nav">
        <ul>
          <li>
            <a href="/public">Home</a>
          </li>
          <li>
            <a href="/pricing">Pricing</a>
          </li>
          <li>
            <a href="/expenses">Expenses</a>
          </li>
        </ul>
      </nav>
      <nav id="cta-nav">
        <ul>
          <li>
            <a href="/auth" className="cta">
              Login
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
