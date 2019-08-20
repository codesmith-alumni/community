import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { toggle, updatePosts } from "../actions/actions";
import   Search   from "../containers/Search.jsx"
import Feed from "../containers/Feed.jsx"
import Composer from "../containers/Composer.jsx"

const FeedPageStyles = styled.div`
  background-color: lightskyblue;
  height: 100vh;
  width: 100vw;
  margin: 0;
    padding: 0;


`;

const mapStateToProps = store => ({
  posts: store.posts
});

const mapDispatchToProps = dispatch => ({
  togglePost: index => dispatch(toggle(index)),
  updatePosts: posts => dispatch(updatePosts(posts))
});

class FeedPage extends React.Component {
  constructor(props){
    super(props)
this.state = {}
this.handleSearch = this.handleSearch.bind(this)

  } 

getPosts(searchTerm){
  const path = searchTerm ? `/posts/${searchTerm}` : `/posts/`
  
  fetch(path)
  .then(response => response.json())
  .then(response => {
    const posts = []
  response.forEach(item => {
    posts.push({
      isOpen: false,
      company: item.company,
      details:item.content,
      username:item.user_id

    })
  })
   return this.props.updatePosts(posts)})
  .catch(err => console.log(err))
}


 handleSearch(searchTerm){
  console.log('handleSearch')
  this.getPosts(searchTerm)

  }



  componentDidMount(){

   this.getPosts()

  }
 

  render() {

    return (
        <FeedPageStyles>
          Feed I am the feed page.
        <Search handleSearch = {this.handleSearch}/>
        <Composer/>
        <Feed posts = {this.props.posts}/>
        
        </FeedPageStyles>

    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedPage);
