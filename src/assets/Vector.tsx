export default function Vector(props: VectorProps) {
    return (
      <div
        className="absolute flex left-[3.35%] right-[95.95%] top-[47.78%] bottom-[51.67%]"
      >
        <svg
          width="100%"
          height="100%"
          preserveAspectRatio="none"
          viewBox="0 0 10 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 8.694 1 H 8.703 M 8.694 4 H 8.703 M 4.994 1 H 5.004 M 4.994 4 H 5.004 M 1.293 1 H 1.303 M 1.293 4 H 1.303"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
           />
        </svg>
      </div>
    );
  }
  
  Vector.defaultProps = {};
  
  interface VectorProps {}
  
  /**
   * This component was generated from Figma with FireJet.
   * Learn more at https://www.firejet.io
   *
   * README:
   * The output code may look slightly different when copied to your codebase. To fix this:
   * 1. Include the necessary fonts. The required fonts are imported from public/index.html
   * 2. Include the global styles. They can be found in App.css
   *
   * Note: Step 2 is not required for tailwind.css output
   */
  