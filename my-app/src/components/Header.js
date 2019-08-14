import React from "react"
import MainMenu from "./MainMenu";

class Header extends React.Component{
    render() {


        return (
            <header className="header">
                <MainMenu/>
            </header>
        )
    }
}

export default Header