import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { toggle, updatePosts } from '../actions/actions';
import Search from '../containers/Search.jsx';
import Feed from '../containers/Feed.jsx';
import Composer from './Composer.jsx';

const FeedPageStyles = styled.div`
  background-color: lightskyblue;
  height: 100vh;
  width: 100vw;
  
`;

const mapStateToProps = store => ({
  posts: store.posts,
});

const mapDispatchToProps = dispatch => ({
  togglePost: index => dispatch(toggle(index)),
  updatePosts: posts => dispatch(updatePosts(posts)),
});

class FeedPage extends React.Component {
  constructor(props){
    super(props)
this.state = {}
this.handleSearch = this.handleSearch.bind(this)
this.handleReview = this.handleReview.bind(this)
  } 


handleSearch(searchTerm){
    console.log('handleSearch')
    this.getPosts(searchTerm)
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

handleReview(reviewCompany,reviewText){
  console.log('handleReview')
  this.sendReview(reviewCompany, reviewText)
}

//Need to include user_id in body in fetch request below -> body: JSON.stringify()

sendReview(reviewCompany, reviewText, getPosts){
  console.log(reviewCompany, reviewText)
const path = reviewCompany && reviewText ? `/posts` : `/posts/`
fetch(path, {method: 'POST', body: JSON.stringify({company:reviewCompany, content:reviewText})})
.then(getPosts)
.catch(err => console.log(err))
}

  handleSearch(searchTerm) {
    console.log('handleSearch');
    this.getPosts(searchTerm);
  }

  componentDidMount(){
   this.getPosts()
  }

  render() {
    return (
        <FeedPageStyles>
          Stream
        <Search handleSearch = {this.handleSearch}/>
        <Composer handleReview ={this.handleReview}/>
        <Feed posts = {this.props.posts}/>
        
        </FeedPageStyles>

    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedPage);
