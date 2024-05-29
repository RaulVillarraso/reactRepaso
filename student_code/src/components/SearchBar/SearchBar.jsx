
function SearchBar({ searchProduct }) {

  return (
    <div>
      <input type="text" onChange={(e) => searchProduct(e.target.value)}/>
    </div>
  )
}

export default SearchBar