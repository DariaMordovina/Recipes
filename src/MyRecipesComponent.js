function MyRecipesComponent({label,image,calories,ingredients}){
    return(<div>
        <div className='container'>
        <h2>{label}</h2>
        </div>
        <div className='container'>
        <img src={image} alt="picture" />
        </div>
        <ul className='container list'>
            {ingredients.map(item=>(
                <li><img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-check-multimedia-kiranshastry-gradient-kiranshastry.png" alt="icon" width="30px" />{item}</li>
            ))

            }

        </ul>
        <div className='container'>
        <h2>{calories.toFixed()} calories </h2>
        </div>
       
    </div>)
}
export default MyRecipesComponent;