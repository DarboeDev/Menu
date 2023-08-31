function Menu({items}){
return(
    <div className="menu-item">
     {items.map(item =>{
        const{id, title, category, desc, img, price} = item
        return(
            <article key={id}>
                <img className="image" src={img} alt={title} />
                <div className="title-price">
                    <h2 className="title">
                        {title}
                    </h2>
                    <p className="price">${price}</p>
                </div>
                <p className="text">
                    {desc}
                </p>
            </article>
        )
    })}
    </div>
)
}
export default Menu