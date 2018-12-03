import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h2 style={{ margin: 0 }}>
        <a
          href="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {'Home'}
        </a>

      </h2>
      <a href="https://github.com/saigowthamr/gatsbyblog-starter"
        style={{ color: "white", float: "right" }} title="github" >Github</a>
      <Link
        to="/tags"
        style={{
          color: 'gold',
          marginRight: '27px',
          backgroundColor: "black",
          padding: "4px",
          float: "right",
          textDecoration: 'none',
          fontStyle: "bold"
        }}
      >
        All tags
      </Link>

    </div>
  </div>
)

export default Header
