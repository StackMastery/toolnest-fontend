import { auth } from "@/firebase.config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const SocialSignIn = () => {
  const [isLoding, setisLoding] = useState(false);

  const googleProv = new GoogleAuthProvider();

  const handelGoogleSignIn = async () => {
    setisLoding(true);
    signInWithPopup(auth, googleProv)
      .then(() => {
        toast.success("Authentication Success");
      })
      .finally(() => {
        setisLoding(false);
      });
  };

  return (
    <>
      <button
        disabled={isLoding}
        type="button"
        onClick={handelGoogleSignIn}
        className={`w-full cursor-pointer rounded-[4px] font-bold text-current/80 px-5 py-2 border hover:bg-black hover:text-white transition-all border-black/50 flex items-center justify-center gap-5 ${
          isLoding && "!cursor-not-allowed"
        }`}
      >
        {isLoding ? (
          <Loader2 className="animate-spin" />
        ) : (
          <FcGoogle size={25} />
        )}
        Continue with google
      </button>
    </>
  );
};

export default SocialSignIn;
