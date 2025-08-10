import { Marquee } from "@/components/3d-testimonails";
import AuthForm from "@/components/widgets/AuthForm";
import Chatgpt from "@/assets/brands/chatgpt.webp";
import Chorki from "@/assets/brands/chorki.webp";
import Hix from "@/assets/brands/hix.webp";
import Cours from "@/assets/brands/coursera.webp";
import Netf from "@/assets/brands/netflix.webp";

/**
 * Put `authbg.png` in /public and reference it with a plain URL.
 * If you import the image instead, use style={{ backgroundImage: `url(${authBg})` }}
 */
const AuthLayout = () => {
  const brandsImage = [Chatgpt, Chorki, Hix, Cours, Netf];

  return (
    <section
      className="
        relative
        min-h-[100dvh]  /* dynamic viewport on mobile */
        bg-[url('/authbg.png')] bg-cover bg-center bg-no-repeat
        overflow-x-hidden
      "
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* content */}
      <div className="relative z-10 flex flex-col items-center justify-center py-20">
        <div className="w-full max-w-[1440px] flex-col md:flex-row gap-y-10 items-center flex justify-between p-5">
          <div className="w-full md:w-6/12">
            <h2 className="pb-20 text-5xl text-center lg:text-start lg:text-6xl font-bold text-white">
              Join Tool Nest to explore{" "}
              <span className="text-[#1e1f20]">50+</span> apps
            </h2>
          </div>
          <div className="w-full md:w-6/12 flex justify-center">
            <AuthForm />
          </div>
        </div>

        <div className="w-full max-w-[1540px] pt-40">
          <div
            className="
              relative flex
              [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
              [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
            "
          >
            <Marquee>
              {brandsImage.map((brandImg, index) => (
                <img
                  key={index}
                  src={brandImg}
                  className="rounded-md w-[150px] h-[80px] lg:w-[200px] lg:h-[100px] border border-mainColor object-cover"
                />
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthLayout;
