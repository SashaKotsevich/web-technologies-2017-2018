import React from 'react';
import { Link } from 'react-router-dom';
import '../../index.css';

class TabsMenu extends React.Component{
    activetab=(event)=>{
        document.getElementsByClassName('active_tab_button')[0].className='default_tab_button';
        event.target.className='active_tab_button';

    }

    render(){
        return(
            <div>
            <Link to="/" className="active_tab_button" onClick={this.activetab}>Основное</Link>
            <Link to="/education" className='default_tab_button' onClick={this.activetab} >Образование</Link>
            <Link to="/contacts" className="default_tab_button"  onClick={this.activetab} >Контакты</Link>
            <Link to="/followers" className="default_tab_button" onClick={this.activetab} >Фоловеры</Link>
            <Link to="/repos" className="default_tab_button" onClick={this.activetab} >Репозитории</Link>
            <Link to="/orgs" className="default_tab_button" onClick={this.activetab} >Организации</Link>
            <Link to="/topstarrepos" className="default_tab_button" onClick={this.activetab} >По популярн.</Link>
            <Link to="/topgrowing" className="default_tab_button" onClick={this.activetab} >Быстророст.</Link>

            </div>
        )

    }
}

export default TabsMenu;