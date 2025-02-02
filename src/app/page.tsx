import Countdown from "@/components/countdown";
import AnimatedLogo from "@/components/videologo";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      {/* Logo animada no topo */}
      <AnimatedLogo />
      
      {/* Timer logo abaixo */}
      <Countdown />
    </div>
  );
}