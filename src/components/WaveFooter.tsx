const WaveFooter = () => {
  return (
    <div className="relative">
      {/* Wave Layers */}
      <div className="relative h-32 overflow-hidden">
        {/* Wave 1 - Coral */}
        <svg
          className="absolute bottom-0 w-full h-20 text-nature-coral/30"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64L80,58.7C160,53,320,43,480,58.7C640,75,800,117,960,128C1120,139,1280,117,1360,106.7L1440,96L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            fill="currentColor"
          />
        </svg>

        {/* Wave 2 - Cream */}
        <svg
          className="absolute bottom-0 w-full h-24 text-nature-cream/50"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,32L60,37.3C120,43,240,53,360,64C480,75,600,85,720,80C840,75,960,53,1080,58.7C1200,64,1320,96,1380,112L1440,128L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
            fill="currentColor"
          />
        </svg>

        {/* Wave 3 - Sage */}
        <svg
          className="absolute bottom-0 w-full h-16 text-nature-sage/40"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,96L48,90.7C96,85,192,75,288,69.3C384,64,480,64,576,74.7C672,85,768,107,864,112C960,117,1056,107,1152,101.3C1248,96,1344,96,1392,96L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            fill="currentColor"
          />
        </svg>

        {/* Wave 4 - Charcoal */}
        <svg
          className="absolute bottom-0 w-full h-12 text-nature-charcoal"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64L120,69.3C240,75,480,85,720,85.3C960,85,1200,75,1320,69.3L1440,64L1440,120L1320,120C1200,120,960,120,720,120C480,120,240,120,120,120L0,120Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
};

export default WaveFooter;