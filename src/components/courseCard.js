import React from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'gatsby'
// import { Tags } from '@tryghost/helpers-gatsby'
// import { readingTime as readingTimeHelper } from '@tryghost/helpers'

const CourseCard = ({ course }) => {
    const url = `/${course.id}/`
    // const readingTime = readingTimeHelper(post)
    console.log(course)

    return (
        <Link to={course.linkURL} target="_blank" className="post-card" data-sal="slide-up"
        data-sal-delay="0"
        data-sal-easing="ease">
            <header className="post-card-header">
                {course.logoURL ? 
                    <div className="post-card-image" style={{
                        backgroundImage: `url(${course.logoURL})` , 
                    }}></div> : 
                    <div className="post-card-image" style={{
                        backgroundImage: `` , 
                    }}></div>
                }
                {course.categories.category ? <div className="post-card-tags"><h1>{course.categories.category}</h1></div> : <h3 style={{"color": "#849095"}}>Category</h3>}
                {/* {post.featured && <span>Featured</span>} */}
                <h2 className="post-card-title">{course.title}</h2>
            </header>
            <section className="post-card-excerpt">{course.description}</section>
            <footer className="post-card-footer">
                <div className="post-card-footer-left">
                    <div className="post-card-avatar">
                        {/* {post.primary_author.profile_image ? */}
                            {/* <img className="author-profile-image" src={post.primary_author.profile_image} alt={post.primary_author.name}/> : */}
                            <img className="default-avatar" src="https://yt3.ggpht.com/a/AATXAJyJPFeubx3SFVgLowUy98YiI-PNrUyabxdLJso7=s900-c-k-c0xffffffff-no-rj-mo" alt="MIT Opencourseware"/>
                        {/* } */}
                    </div>
                    <span>{ "MIT Open CourseWare" }</span>
                </div>
                <div className="post-card-footer-right">
                    {/* <div>{"Example"}</div> */}
                    {/* <Link src={course.linkURL}>View</Link> */}
                    <a href={course.linkURL} target="_blank">View</a>
                </div>
            </footer>
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

export default CourseCard
