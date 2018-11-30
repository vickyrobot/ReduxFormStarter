import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchPosts} from '../actions';

 class PostIndex extends Component{

    rederPostList()
    {
        return( _.map(this.props.posts, post => { return(<li className="list-item" key={post.id}>{post.title}</li>);}) );
    }

    componentDidMount(){
        this.props.fetchPosts();
    }
    render(){
        console.log(this.props.posts);
        return( 
            <div className="container">
                <div className="text-xs-right">
                <Link className="btn btn-primary" to="/posts/new">
                Add a Post
                </Link>
                </div>
                 <h3>Posts</h3>
                <ul className="list-groups">
                {this.rederPostList()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {posts: state.posts}; 
}

export default connect(mapStateToProps,{fetchPosts})(PostIndex);