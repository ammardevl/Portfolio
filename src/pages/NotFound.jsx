import { Button } from "../components/ui";
import Reveal from "../components/Reveal";
import Seo from "../components/Seo";

const NotFound = () => (
  <div className="ammar-dev-notfound">
    <Seo title="Page Not Found" path="/404" noindex />
    <Reveal className="ammar-dev-notfound__inner">
      <p className="ammar-dev-eyebrow">Error 404</p>
      <h1 className="ammar-dev-notfound__title">This page doesn't exist</h1>
      <p className="ammar-dev-notfound__desc">
        The page you're looking for may have moved or never existed. Let's get you back on track.
      </p>
      <div className="ammar-dev-notfound__actions">
        <Button to="/" icon="ri-home-4-line">
          Back to Home
        </Button>
        <Button to="/projects" variant="ghost" icon="ri-arrow-right-line">
          View Projects
        </Button>
      </div>
    </Reveal>
  </div>
);

export default NotFound;
