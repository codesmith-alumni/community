import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Review from "../containers/Review.jsx"

const FeedStyles = styled.div`
  width: 100vw;
  max-width: 600px;
  margin: 10px 0px;
`;


class Feed extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const contents = []
    const { posts } = this.props
    posts.forEach((item, index) => {
      contents.push(<Review {...item} key={index} />)
    })
    return (
      <FeedStyles>
        {contents}
      </FeedStyles>
    );
  }
}

export default Feed;




  // const Feed = ({className, posts}) => {
  //   const [posts, setPosts] = useState('')
  //   const contents = []
  //   // const {posts} = this.props
  //   posts.forEach((item, index) => {
  //     contents.push(<Review {...item} key = {index}/>)
  //     setPosts(contents)
  //   })

  //   return(
  //     <FeedStyles>
  //      {contents}
  //     </FeedStyles>


  //   )

  // }