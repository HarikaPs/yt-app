import React,{useState} from 'react';

const SearchBar = ({onFormSubmit}) =>{
    const [term,setTerm] = useState('');

   const onInputChange=(event)=>{
        setTerm(event.target.value);
    }

   const onSubmit=(event)=>{
        event.preventDefault();
        //TODO: Make sure to call callback from the parent component(from App component)
        onFormSubmit(term);
    }
    return(
        <div className="search-bar ui segment">
            <form onSubmit={onSubmit} className="ui form" >
               <div  className="feild">
               <label>
                   Search For a Video
                </label>
                <input type="text" value={term}
                // onChange={(e)=>{
                //     this.setState({term :e.target.value });
                // }}
                onChange={onInputChange}
                />
               </div>
            </form>
        </div>
    )
};



export default SearchBar;