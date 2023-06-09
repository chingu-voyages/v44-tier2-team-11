import PropTypes from 'prop-types';

const BotDynamic = ({ className, baseColor, strokeColor }) => {
  return (
    <svg
      className={`h-full w-full ${className}`}
      width="533"
      height="498"
      viewBox="0 0 533 498"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left Ear */}
      <g filter="url(#filter0_i_65_23)">
        <rect
          x="0.476562"
          y="285.855"
          width="52.9381"
          height="126.463"
          rx="26.4691"
          fill={`${baseColor}`}
          fillOpacity="0.962"
        />
      </g>

      {/* Left Ear Stroke */}
      <rect
        x="10.4766"
        y="295.855"
        width="32.9381"
        height="106.463"
        rx="16.4691"
        stroke={strokeColor}
        strokeWidth="20"
      />

      {/* Right Ear */}
      <rect
        x="489.859"
        y="295.855"
        width="32.9381"
        height="106.463"
        rx="16.4691"
        fill={baseColor}
        fillOpacity="0.962"
        stroke={strokeColor}
        strokeWidth="20"
      />

      {/* Antenna Line */}
      <line
        x1="272.227"
        y1="85.866"
        x2="272.227"
        y2="188.801"
        stroke={baseColor}
        strokeWidth="20"
      />

      {/* Antenna Line Holder */}
      <g filter="url(#filter1_i_65_23)">
        <rect
          x="203.406"
          y="138.804"
          width="129.404"
          height="76.4662"
          rx="38.2331"
          fill={baseColor}
          fillOpacity="0.962"
        />
      </g>

      {/* Antenna Line Holder Stroke */}
      <rect
        x="213.406"
        y="148.804"
        width="109.404"
        height="56.4662"
        rx="28.2331"
        stroke={strokeColor}
        strokeWidth="20"
      />

      {/* Antenna */}
      <g filter="url(#filter2_i_65_23)">
        <circle
          cx="268.109"
          cy="47.6333"
          r="47.0561"
          fill={baseColor}
          fillOpacity="0.962"
        />
      </g>

      {/* Antenna Stroke */}
      <circle
        cx="268.109"
        cy="47.6333"
        r="37.0561"
        stroke={strokeColor}
        strokeWidth="20"
      />

      {/* Face */}
      <g filter="url(#filter3_i_65_23)">
        <path
          d="M26.9448 393.023C26.9448 275.362 122.328 179.979 239.989 179.979H293.286C410.946 179.979 506.329 275.362 506.329 393.023V393.023C506.329 450.783 459.505 497.608 401.744 497.608H131.53C73.7691 497.608 26.9448 450.783 26.9448 393.023V393.023Z"
          fill={baseColor}
          fillOpacity="0.962"
        />
      </g>

      {/* Face Stroke */}
      <path
        d="M239.989 189.979H293.286C405.424 189.979 496.329 280.885 496.329 393.023C496.329 445.26 453.982 487.608 401.744 487.608H131.53C79.292 487.608 36.9448 445.26 36.9448 393.023C36.9448 280.885 127.851 189.979 239.989 189.979Z"
        stroke={strokeColor}
        strokeWidth="20"
      />

      {/* Left Eyes stroke color */}
      <circle
        cx="165.173"
        cy="291.737"
        r="54.7022"
        fill="white"
        stroke={strokeColor}
        strokeWidth="20"
      />

      {/* Left Eyes */}
      <circle cx="165.173" cy="291.738" r="32.3511" fill="#0C0C0C" />

      {/* Left Pupils */}
      <circle cx="153.409" cy="285.856" r="11.764" fill="white" />

      {/* Right Eye Stroke */}
      <circle
        cx="365.16"
        cy="291.737"
        r="54.7022"
        fill="white"
        stroke={strokeColor}
        strokeWidth="20"
      />

      {/* Right Eye */}
      <circle cx="365.161" cy="291.738" r="32.3511" fill="#0C0C0C" />

      {/* Right Pupil */}
      <circle cx="353.397" cy="285.856" r="11.764" fill="white" />

      {/* Mouth */}
      <path
        d="M209.289 394.673C232.817 440.258 298.989 440.258 323.988 394.673"
        stroke={strokeColor}
        strokeWidth="20"
        strokeLinecap="round"
      />
      <defs>
        <filter
          id="filter0_i_65_23"
          x="0.476562"
          y="285.855"
          width="52.9382"
          height="126.463"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="34.426" dy="12.9098" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_65_23"
          />
        </filter>
        <filter
          id="filter1_i_65_23"
          x="203.406"
          y="138.804"
          width="129.404"
          height="76.4663"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="34.426" dy="12.9098" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_65_23"
          />
        </filter>
        <filter
          id="filter2_i_65_23"
          x="221.052"
          y="0.577148"
          width="94.1123"
          height="94.1123"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="34.426" dy="12.9098" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_65_23"
          />
        </filter>
        <filter
          id="filter3_i_65_23"
          x="26.9448"
          y="179.979"
          width="479.384"
          height="317.629"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="34.426" dy="12.9098" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_65_23"
          />
        </filter>
      </defs>
    </svg>
  );
};

BotDynamic.propTypes = {
  baseColor: PropTypes.string,
  strokeColor: PropTypes.string,
  className: PropTypes.string,
};

export default BotDynamic;
