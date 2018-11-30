import {FETCH_POSTS} from '../actions/index';
import _ from 'lodash';

export default function(state={}, action){
    console.log('reducer posts index',action.type,FETCH_POSTS);
 switch(action.type){

    case FETCH_POSTS:
    console.log(FETCH_POSTS,action.payload.data);
    return _.mapKeys(action.payload.data,'id'); 

    default:
    return state;
 }
}