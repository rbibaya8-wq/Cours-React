function Sorting({sort,setSort}){
    return(
        <div className="sort-box">
            <select name="" id="" value={sort} onChange={(e)=>setSort(e.target.value)}>
                <option value="Price-asc">Price :Low to high</option>
                <option value="Price-desc">Price :High to Low</option>
                <option value="name-asc">Name A to Z</option>
                <option value="name-desc">Name Z to A</option>
            </select>
        </div>
    )
}
export default Sorting;