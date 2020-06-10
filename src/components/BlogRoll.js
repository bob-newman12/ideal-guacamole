import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

export default class BlogRoll extends React.Component {
  render() {
    console.log(this.props)

    const { data } = this.props.data
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }) => (
                    <div className="is-parent column is-6" key={post.id}>
                      <article
                          className={`blog-list-item tile is-child box notification ${
                              post.frontmatter.featuredpost ? 'is-featured' : ''
                          }`}
                      >
                        <header>
                          {post.frontmatter.featuredimage ? (
                              <div className="featured-thumbnail">
                                <PreviewCompatibleImage
                                    imageInfo={{
                                      image: post.frontmatter.featuredimage,
                                      alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                                    }}
                                />
                              </div>
                          ) : null}
                          <p className="post-meta">
                            <Link
                                className="title has-text-primary is-size-4"
                                to={post.fields.slug}
                            >
                              {post.frontmatter.title}
                            </Link>
                            <span> &bull; </span>
                          </p>
                        </header>
                        <p>
                          {post.excerpt}
                          <br/>
                          <br/>
                          <Link className="button" to={post.fields.slug}>
                            Keep Reading →
                          </Link>
                        </p>
                      </article>
                    </div>
              )

          )}
      </div>
    )
  }
}