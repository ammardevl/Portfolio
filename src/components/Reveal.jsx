import { useReveal } from "../lib/animate";

/**
 * Wraps a section/block and reveals it with the shared anime.js entrance
 * when it scrolls into view. Use `stagger` when the direct children
 * (cards, list items) should animate in sequence rather than as one block.
 */
// eslint-disable-next-line no-unused-vars -- Tag is used as the JSX element below
const Reveal = ({ as: Tag = "div", stagger = false, delay = 0, direction = "up", className = "", children, ...rest }) => {
  const ref = useReveal({ stagger, delay, direction });
  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  );
};

export default Reveal;
