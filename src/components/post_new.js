import React,{Component} from 'react';
import {Field,reduxForm} from 'redux-form';

class PostsNew extends Component{

    renderInput(field)
    {
        return(
           <div className="form-group">
           <label>{field.label}</label>
                <input className="form-control" {...field}/>
                {field.meta.error}
           </div> 
        );
    }
    
    onSubmit(values)
    {
        console.log(values);
    }

        render(){
            const {handleSubmit}= this.props;
            return(
              <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                  <Field name="title" type="text"
                         label="Title"
                         component={this.renderInput}/>
                 <Field name="category"  type="text"
                        label="category"
                        component={this.renderInput}/>
                 <Field name="content"  type="text"
                        label="Content"
                        component={this.renderInput}/>
                        <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            );
        }

}


function validate(values){
    console.log(values);
var error = {};
if(!values.title)
{
    error.title = "Enter the title";
}

if(!values.category)
{
    error.category="Enter the category";
}

if(!values.content)
{
    error.content="Enter the Content";
}

return error;
}

export default reduxForm({
    validate,        
    form: 'PostNewForm'
    
})(PostsNew); 