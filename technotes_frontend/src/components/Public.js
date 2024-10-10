import { Link } from 'react-router-dom';

export const Public = () => {
  const content = (
    <section className="public">
      <header>
        <h1>
          Welcome to <span className="nowrap">Ayana's Repairs!</span>
        </h1>
      </header>
      <main className="public__main">
        <p>
          Located in Beautiful Downtown Addis Ababa City, Ayana's Repairs provides a
          trained staff ready to meet your tech repair needs.
        </p>
        <address className="public__addr">
          Ayana's Repairs
          <br />
          Ethiopia
          <br />
          Addis Ababa City
          <br />
          <a href="tel:+251973395537">(251) 973395537</a>
        </address>
        <br />
        <p>Owner: Ayana Damtew</p>
      </main>
      <footer>
        <Link to="/login">Employee Login</Link>
      </footer>
    </section>
  );
  return content;
};
