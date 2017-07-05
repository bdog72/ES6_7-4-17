import React from 'react'

import { Link } from 'react-router-dom'

const VerticalMenu = ({ albums }) => (
  <div>
    <div>
    Albums
    </div>

    {
      albums.map((album) => (
        <Link
          to={`/albums/${album.id}`}
          key={album.id}
        >
          {album.name}
        </Link>
      ))
    }
  </div>
)
export default VerticalMenu
