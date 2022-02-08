import React from 'react';

class SearchBar extends React.Component{

   
     handleFormSubmit = (event) =>{
         event.preventDefault();
     }
    render(){
        
        return(
            <div>
            <form onSubmit={this.handleFormSubmit}>
                <div className='form-row mb-5'>
                    <div className='col-12'>
                        <input 
                        onChange={this.props.searchMovieProp} 
                        type="text" className='form-control' 
                        placeholder='Search a Movie'
                        
                        />
                    </div>
                </div>
            </form>
            </div>
        )
    }
}




export default SearchBar;