import Header1 from "./Header1";
import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch h-[148px] flex flex-row items-start justify-start pt-0 px-0 pb-[43px] box-border top-[0] z-[99] sticky max-w-full ${className}`}
    >
      <Header1 />
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
