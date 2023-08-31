import { useState } from 'react'
import './App.css'
import Menu from './Menu.jsx'
import Category from './Category.jsx'
import menu from './data.js'

const allCategory = ['all', ...new Set(menu.map((item) => item.category))]
function App() {
const [menuItems, setMenuItems] = useState(menu)
const [category, setCategory] = useState(allCategory)


  function filterItems(category){
    if (category === 'all') {
      setMenuItems(menu);
      return;
    } else{
    const newItems = menu.filter((item) => item.category === category);
    setMenuItems(newItems);}
  }

  return (
    <div className="container">
      <header>
        <h1 className="header">Our Menu</h1>
        <div className="underline"></div>
      </header>
      <Category data={category} filterItem={filterItems}/>
        <Menu items={menuItems} filterItem={filterItems}/>
    </div>
  )
}

export default App
