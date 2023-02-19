import React from 'react'
import { Link } from 'react-router-dom'

type OnePostPropsType = {
    title: string,
    body: string,
    id: number
}

export const ListItem = ({ body, title, id }: OnePostPropsType) => {
    return (
        <div>
            <Link to={`/blog/${id}`}>
            <h4> {title} </h4>
            </Link>
            <p>{body} </p>
        </div>
    )
}