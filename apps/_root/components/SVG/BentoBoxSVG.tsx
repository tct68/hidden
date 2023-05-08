import React from 'react'

export const BentoBoxSVG = (props: React.ComponentProps<'svg'>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...props} fill="none" viewBox="0 0 40 40">
      <g clipPath="url(#clip0_1438_1415)">
        <path
          fill="url(#paint0_linear_1438_1415)"
          d="M20.02 3.805a3.294 3.294 0 00-.733.077c-.233.052-.444.13-.622.227L.554 14.047c-.176.096-.315.21-.41.336A.657.657 0 000 14.78c0 .137.049.272.144.397.095.126.234.24.41.337l18.11 9.939c.176.096.384.173.614.225.229.052.475.079.723.079s.494-.027.724-.08c.229-.051.437-.128.613-.224l18.11-9.939c.175-.096.315-.21.41-.336a.657.657 0 00.144-.397.657.657 0 00-.144-.397 1.279 1.279 0 00-.41-.337L21.338 4.11c-.35-.192-.823-.301-1.317-.304zM1.893 18.534l-1.338.733c-.175.096-.315.21-.41.337A.657.657 0 000 20c0 .136.05.27.144.397.095.126.235.24.41.336l18.11 9.939c.176.096.384.173.614.225.229.052.475.079.723.079s.494-.027.724-.08c.229-.051.437-.128.613-.224l18.11-9.939c.175-.096.315-.21.41-.336A.656.656 0 0040 20a.656.656 0 00-.144-.397 1.28 1.28 0 00-.41-.337l-1.337-.733L35.437 20h.002L20 28.474 4.563 20 4.564 20l-2.672-1.466zm0 5.22l-1.338.733c-.175.097-.315.211-.41.337a.657.657 0 00-.144.397c0 .136.05.271.144.397.095.126.235.24.41.337l18.11 9.938c.176.096.384.173.614.225.229.052.475.079.723.079s.494-.027.724-.08c.229-.051.437-.128.613-.224l18.11-9.938c.175-.097.315-.211.41-.337a.656.656 0 00.143-.397.656.656 0 00-.144-.397 1.28 1.28 0 00-.41-.337l-1.337-.733-2.673 1.466.002.001L20 33.693 4.563 25.22l.001-.001-2.672-1.466z"
        ></path>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_1438_1415"
          x1="20.001"
          x2="20.001"
          y1="3.805"
          y2="36.197"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FCFF77"></stop>
          <stop offset="1" stopColor="#FADAFF" stopOpacity="0.28"></stop>
        </linearGradient>
        <clipPath id="clip0_1438_1415">
          <path fill="#fff" d="M0 0H40V40H0z"></path>
        </clipPath>
      </defs>
    </svg>
  )
}
