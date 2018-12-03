import React from 'react';


const PrevNext = (props) => {

    const { prev, next } = props

    return (
        <ul>
            {prev && <li><a href={prev.fields.slug}>
                Previous {" "}
                {prev.frontmatter.title}</a></li>}
            {next && <li><a href={next.fields.slug}>
                Next  {" "} {next.frontmatter.title}

            </a></li>}
        </ul>
    )
}

export default PrevNext;