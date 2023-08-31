function Category({data, filterItem}){
return(
    <div className="btn-container">
        {
            data.map((category, index) =>{
                return(
                    <button 
                    key={index}
                     className="btn"
                     type="button"
                     onClick={()=>filterItem(category)}
                     >
                        {category}
                    </button>
                )
            })
        }
    </div>
)
}
export default Category