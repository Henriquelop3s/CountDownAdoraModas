// app/components/AnimatedLogo.tsx

"use client";

import React from "react";

const AnimatedLogo: React.FC = () => {
  return (
    <div className="bg-white flex justify-center">
    <img
      className="mt-56 w-auto h-72 max-w-full object-contain border-none bg-transparent"
      src="/Composição1.gif"
      alt="Logo animada"
    />
  </div>
  
  );
};

export default AnimatedLogo;
