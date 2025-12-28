'use client';

export default function PaperTexture() {
  return (
    <svg 
      className="fixed inset-0 w-full h-full pointer-events-none z-0" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity: 0.4 }}
    >
      <defs>
        <filter id="paperTexture">
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.9" 
            numOctaves="4" 
            stitchTiles="stitch"
          />
          <feColorMatrix 
            type="saturate" 
            values="0"
          />
          <feComponentTransfer>
            <feFuncA type="discrete" tableValues="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0" />
          </feComponentTransfer>
        </filter>
        
        <filter id="paperStains">
          <feTurbulence 
            type="turbulence" 
            baseFrequency="0.02" 
            numOctaves="5" 
            seed="2"
          />
          <feColorMatrix 
            type="saturate" 
            values="0"
          />
          <feComponentTransfer>
            <feFuncA type="discrete" tableValues="0 0 0 1 0 0 0 0 0" />
          </feComponentTransfer>
          <feGaussianBlur stdDeviation="10" />
        </filter>
      </defs>
      
      {/* Paper grain */}
      <rect 
        width="100%" 
        height="100%" 
        filter="url(#paperTexture)" 
        opacity="0.15"
      />
      
      {/* Stains and discoloration */}
      <rect 
        width="100%" 
        height="100%" 
        filter="url(#paperStains)" 
        opacity="0.03"
        fill="rgba(139, 105, 70, 0.2)"
      />
    </svg>
  );
}

