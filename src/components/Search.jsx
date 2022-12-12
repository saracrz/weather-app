export const Search = ({value, onKeyPress, onChange}) => {
  
    return (
        <input className='search'
         value={value} 
         onChange={onChange} 
         onKeyPress={onKeyPress} 
         type='text' 
         placeholder='Type a city' />
    )
}