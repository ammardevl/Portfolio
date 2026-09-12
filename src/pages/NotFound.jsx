import { Button } from "../components/ui";
import Reveal from "../components/Reveal";
import Seo from "../components/Seo";

const NotFound = () => (
  <div className="min-h-[80vh] flex items-center justify-center py-32">
    <Seo title="Page Not Found" path="/404" noindex />
    <Reveal className="text-center max-w-lg px-6">
      <p className="font-mono text-sm text-brass mb-6">Error 404</p>
      <h1 className="text-5xl lg:text-6xl font-display font-medium text-ink tracking-tight mb-6">
        This page doesn't exist
      </h1>
      <p className="text-lg text-stone leading-relaxed mb-10">
        The page you're looking for may have moved or never existed. Let's get you back on track.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
