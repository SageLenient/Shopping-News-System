import React from 'react';
import ReactDOM from 'react-dom';
import style from './main.css';
import store from './store';
import { Provider } from 'react-redux';
import Home from './components/home';
import News from './components/news';
import Product from './components/product';
import Cart from './components/cart';
import Detail from './components/detail';
import NewsDetail from './components/newsdetail';
import { HashRouter as Router,Route,Switch,NavLink } from 'react-router-dom';

class Index extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <Router>
                    <div>
                        <nav className="navbar navbar-inverse">
                            <div className="container-fluid">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                </button>
                                <a className="navbar-brand active" href="#/">首页</a>
                            </div>
                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <ul className="nav navbar-nav">
                                <li><a href="#/news">新闻</a></li>
                                <li><a href="#/product">产品</a></li>
                                </ul>
                                <ul className="nav navbar-nav navbar-right">
                                <li><a href="#/cart">购物车</a></li>
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                                    <ul className="dropdown-menu">
                                    <li><a href="#">Action</a></li>
                                    <li><a href="#">Another action</a></li>
                                    <li><a href="#">Something else here</a></li>
                                    <li role="separator" className="divider"></li>
                                    <li><a href="#">Separated link</a></li>
                                    </ul>
                                </li>
                                </ul>
                            </div>
                            </div>
                        </nav>
                        <div>
                            <Switch>
                                <Route path="/" component={Home} exact/>
                                <Route path="/news" component={News} exact/>
                                <Route path="/news/:id" component={NewsDetail}/>
                                <Route path="/product" component={Product} exact/>
                                <Route path="/product/:id" component={Detail}/>
                                <Route path="/cart" component={Cart}/>
                            </Switch>
                        </div>
                    </div>
                </Router>
            </Provider>
        )
    }
}
ReactDOM.render(<Index/>,document.getElementById('app'));