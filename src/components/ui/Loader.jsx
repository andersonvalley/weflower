import React from 'react'
import ContentLoader from 'react-content-loader'

export const Loader = props =>
  Array.apply(null, Array(8)).map(() => {
    return (
      <div className='loaders'>
        <ContentLoader
          speed={2}
          width={280}
          height={465}
          viewBox='0 0 280 465'
          backgroundColor='#f3f3f3'
          foregroundColor='#ecebeb'
        >
          <rect x='4' y='285' rx='3' ry='3' width='263' height='26' />
          <circle cx='136' cy='154' r='117' />
          <rect x='6' y='325' rx='3' ry='3' width='259' height='41' />
          <rect x='10' y='385' rx='6' ry='6' width='128' height='25' />
          <rect x='168' y='386' rx='9' ry='9' width='95' height='25' />
        </ContentLoader>
      </div>
    )
  })
