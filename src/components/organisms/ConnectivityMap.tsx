import React from 'react'
import br_states from '@/data/br_states.json'

const ConnectivityMap: React.FC = () => {
  return (
    <div>
      <svg
        version="1.1"
        id="svg-map"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        // width="450px"
        // height="460px"
        // width="100%"
        // height="100%"
        viewBox="0 0 450 460"
        enableBackground="new 0 0 450 460"
        xmlSpace="preserve"
        className="sm:w-full sm:h-full md:w-full md:h-full lg:w-6/12 lg:h-3/6 xl:w-6/12 xl:h-3/6"
      >
        <g>
          {br_states.map(({ href, path, transform, text, circle }) => (
            <a href={href} className="estado" key={`${href}`}>
              <path stroke="#FFFFFF" strokeWidth="1.0404" strokeLinecap="round" strokeLinejoin="round" d={path} />
              {typeof circle === 'string' ? <path className="circle" d={circle} /> : null}

              <text transform={transform} fill="#FFFFFF">
                {text}
              </text>
            </a>
          ))}
        </g>
      </svg>
    </div>
  )
}

export default ConnectivityMap
