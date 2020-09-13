import React from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'gatsby'
// import { Tags } from '@tryghost/helpers-gatsby'
// import { readingTime as readingTimeHelper } from '@tryghost/helpers'

const CategoryCard = ({ category }) => {
    // const url = `/${category.category}/`

    return (
        <Link to={"/page-2"} target="_blank" className="post-card" data-sal="slide-up"
        data-sal-delay="0"
        data-sal-easing="ease">
            <header className="post-card-header">
                <div className="category-card-container"><h2 className="post-card-title">{category.category}</h2></div>
            </header>
        </Link>
    )
}

// PostCard.propTypes = {
//     course: PropTypes.shape({
//         slug: PropTypes.string.isRequired,
//         title: PropTypes.string.isRequired,
//         feature_image: PropTypes.string,
//         featured: PropTypes.bool,
//         tags: PropTypes.arrayOf(
//             PropTypes.shape({
//                 name: PropTypes.string,
//             })
//         ),
//         excerpt: PropTypes.string.isRequired,
//         primary_author: PropTypes.shape({
//             name: PropTypes.string.isRequired,
//             profile_image: PropTypes.string,
//         }).isRequired,
//     }).isRequired,
// }

export default CategoryCard
