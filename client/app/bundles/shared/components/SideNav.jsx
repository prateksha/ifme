//@flow
import * from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import css from './SideNav.scss';

type Props{
    navColor: CSSConditionRule,
    navTwoColor: CSSConditionRule,
    routes: Route;
    children: data:{exact: boolean }) => React.ReactNode,
    path: string
};

type State = {
    showMenu: boolean,
};


export default class SideNavBar extends React.Component<Props,State>{
    navColor = `${css.bg}`;
    navTwoColor = `${css.secondarybg}`;
    routes = [
        {
            path: "/dashboard",
            exact: true,
        },
        {
            path: "/moments",
            exact: true,
            routes: [
                {
                path: '/categories'
                },
                {
                    path: '/moods'
                }
            ]
        },
        {
            path: "/strategies",
            exact: true,
        },
        {
            path: "/medication",
            exact: true,
        },
        {
            path: "/groups",
            exact: true,
        },
        {
            path: "/allies",
            exact: true,
        }
    ];
    state = {
        showMenu: false;
    };
        handleClick = (): void => {
            this.setState({showMenu: true});
        }

        handleCloseClick = (): void => {
            this.setState({showMenu: false});
        }


    render(){
        return(
    <Router>
        {routes.map((route, index) =>(
            <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.SideNavBar}
            />
        ))}
        <div className = {navColor}>
        <li activeclassName="active" onClick={this.handleCloseClick}><NavLink activeStyle={{backgroundColor: 'white', color: '#6d0839b3'}} to ="/dashboard">Dashboard</NavLink></li>
                    <li activeclassName="active" onClick={this.handleClick}><NavLink activeStyle={{backgroundColor: 'white', color: '#6d0839b3'}} to ="/moments">Moments</NavLink></li>
                    <div className ={navTwoColor} style = {{display: this.state.showMenu ? 'block' : 'none'}}>
                        <li activeclassName="selected"><NavLink activeStyle={{backgroundColor: '#ffffff91', color: 'white'}} to ="/moment/categories">Categories</NavLink></li>
                            <li activeclassName="selected"><NavLink activeStyle={{backgroundColor: '#ffffff91', color: 'white'}} to ="/moments/moods">Moods</NavLink></li>
                            </div>
                    <li activeclassName="active" onClick={this.handleCloseClick}><NavLink activeStyle={{backgroundColor: 'white', color: '#6d0839b3'}} to="/strategies">Strategies</NavLink></li>
                    <li activeclassName="active" onClick={this.handleCloseClick}><NavLink activeStyle={{backgroundColor: 'white', color: '#6d0839b3'}} to="/medications">Medications</NavLink></li>
                    <li activeclassName="active" onClick={this.handleCloseClick}><NavLink activeStyle={{backgroundColor: 'white', color: '#6d0839b3'}} to="/groups">Groups</NavLink></li>
                    <li activeclassName="active" onClick={this.handleCloseClick}><NavLink activeStyle={{backgroundColor: 'white', color: '#6d0839b3'}} to="/allies">Allies</NavLink></li>
                    </div>
                    </Router>
        );
    }
                }
