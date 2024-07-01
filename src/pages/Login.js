import FrameComponent5 from "../components/FrameComponent5";
import PageContent from "../components/PageContent";
import FooterIcon from "../components/FooterIcon";

const Login = () => {
  return (
    <div className="w-full h-[1200px] relative bg-light-mode-white-5-ffffff overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[321px] box-border gap-[125px] leading-[normal] tracking-[normal] mq450:gap-[31px] mq750:gap-[62px]">
      <FrameComponent5 />
      <PageContent />
      <FooterIcon footer="/footer@2x.png" propMarginTop="unset" />
    </div>
  );
};

export default Login;
