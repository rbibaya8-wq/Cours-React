function Pagination({Page,setPage,totalPages}){
    return(
        <div className="pagination">
            <button  type="button" onClick={()=>
                Page>1 && setPage(Page-1)}
                disabled={Page===1}
            > 
                <span class="circle1"></span>
                <span class="circle2"></span>
                <span class="circle3"></span>
                <span class="circle4"></span>
                <span class="circle5"></span>
                <span class="text">Previous</span>
            
            
            </button>
            <span className="page-count">Page{Page} / {totalPages}</span>
            <button type="button" onClick={()=>Page<totalPages && setPage(Page+1)}
             disabled={totalPages===Page}>
                <span class="circle1"></span>
                <span class="circle2"></span>
                <span class="circle3"></span>
                <span class="circle4"></span>
                <span class="circle5"></span>
                <span class="text">Next</span>

            </button>
        </div>
    )
}
export default Pagination;