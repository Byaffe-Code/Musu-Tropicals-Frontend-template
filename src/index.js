import React, { Component } from 'react';
import ReactDOM from 'react-dom';


import './style/scss/main.scss';


// Common Layout


import Homeone from './pages/Homeone';
import Hometwo from './pages/Hometwo';
import Homethree from './pages/Homethree';
import Homefour from './pages/Homefour';
import Homefive from './pages/Homefive';
import Homesix from './pages/Homesix';

import Shopone from './pages/Shopone';
import Shoptwo from './pages/Shoptwo';
import Shopthree from './pages/Shopthree';
import Shopfour from './pages/Shopfour';
import Shopfive from './pages/Shopfive';
import Notfound from './pages/Notfound';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import Blogsingle from './pages/Blogsingle';


import Loginone from './pages/Loginone';
import Logintwo from './pages/Logintwo';
import Registerone from './pages/Registerone';
import Registertwo from './pages/Registertwo';
import Forgotone from './pages/Forgotone';
import Forgottwo from './pages/Forgottwo';
import Verifyone from './pages/Verifyone';
import Verifytwo from './pages/Verifytwo';

import Dashboard from './pages/Dashboard';
import Order from './pages/Order';
import Payment from './pages/Payment';
import Coupon from './pages/Coupon';
import Address from './pages/Address';
import Notification from './pages/Notification';

import Saved from './pages/Saved';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

import Singleone from './pages/Singleone';
import Singletwo from './pages/Singletwo';
import Singlethree from './pages/Singlethree';
import Singlefour from './pages/Singlefour';
import Singlefive from './pages/Singlefive';



import { Switch, Route, BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
// import { Router } from 'react-router';
import store from './redux/store';
import ProtectedRoute from './routes/protected';
class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter basename={'/'}>
                    <Switch>
                        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Hometwo} />

                        <Route exact path={`${process.env.PUBLIC_URL}/homeone`} component={Homeone} />
                        <Route exact path={`${process.env.PUBLIC_URL}/hometwo`} component={Hometwo} />
                        <Route exact path={`${process.env.PUBLIC_URL}/homethree`} component={Homethree} />
                        <Route exact path={`${process.env.PUBLIC_URL}/homefour`} component={Homefour} />
                        <Route exact path={`${process.env.PUBLIC_URL}/homefive`} component={Homefive} />
                        <Route exact path={`${process.env.PUBLIC_URL}/homesix`} component={Homesix} />

                        <Route exact path={`${process.env.PUBLIC_URL}/saved`} component={Saved} />
                        <Route exact path={`${process.env.PUBLIC_URL}/cart`} component={Cart} />
                        <Route exact path={`${process.env.PUBLIC_URL}/checkout`} component={Checkout} />

                        <Route exact path={`${process.env.PUBLIC_URL}/shop-1`} component={Shopone} />
                        <Route exact path={`${process.env.PUBLIC_URL}/shop-2`} component={Shoptwo} />
                        <Route exact path={`${process.env.PUBLIC_URL}/shop-3`} component={Shopthree} />
                        <Route exact path={`${process.env.PUBLIC_URL}/shop-4`} component={Shopfour} />
                        <Route exact path={`${process.env.PUBLIC_URL}/shop-5`} component={Shopfive} />

                        <Route exact path={`${process.env.PUBLIC_URL}/single-product-1`} component={Singleone} />
                        <Route exact path={`${process.env.PUBLIC_URL}/single-product-2`} component={Singletwo} />
                        <Route exact path={`${process.env.PUBLIC_URL}/single-product-3`} component={Singlethree} />
                        <Route exact path={`${process.env.PUBLIC_URL}/single-product-4`} component={Singlefour} />
                        <Route exact path={`${process.env.PUBLIC_URL}/single-product-5`} component={Singlefive} />

                        <Route exact path={`${process.env.PUBLIC_URL}/about`} component={About} />
                        <Route exact path={`${process.env.PUBLIC_URL}/blog`} component={Blog} />
                        <Route exact path={`${process.env.PUBLIC_URL}/contact`} component={Contact} />
                        <Route exact path={`${process.env.PUBLIC_URL}/faq`} component={Faq} />
                        <Route exact path={`${process.env.PUBLIC_URL}/blog-single`} component={Blogsingle} />
                        <Route exact path={`${process.env.PUBLIC_URL}/notfound`} component={Notfound} />

                        <Route exact path={`${process.env.PUBLIC_URL}/loginone`} component={Loginone} />
                        <Route exact path={`${process.env.PUBLIC_URL}/logintwo`} component={Logintwo} />
                        <Route exact path={`${process.env.PUBLIC_URL}/registerone`} component={Registerone} />
                        <Route exact path={`${process.env.PUBLIC_URL}/registertwo`} component={Registertwo} />
                        <Route exact path={`${process.env.PUBLIC_URL}/forgotone`} component={Forgotone} />
                        <Route exact path={`${process.env.PUBLIC_URL}/forgottwo`} component={Forgottwo} />
                        <Route exact path={`${process.env.PUBLIC_URL}/verifyone`} component={Verifyone} />
                        <Route exact path={`${process.env.PUBLIC_URL}/verifytwo`} component={Verifytwo} />

                        <ProtectedRoute exact path={`${process.env.PUBLIC_URL}/dashboard`} component={Dashboard} />
                        <ProtectedRoute exact path={`${process.env.PUBLIC_URL}/orders`} component={Order} />
                        <ProtectedRoute exact path={`${process.env.PUBLIC_URL}/payment`} component={Payment} />
                        <ProtectedRoute exact path={`${process.env.PUBLIC_URL}/coupon`} component={Coupon} />
                        <ProtectedRoute exact path={`${process.env.PUBLIC_URL}/address`} component={Address} />
                        <ProtectedRoute exact path={`${process.env.PUBLIC_URL}/notification`} component={Notification} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        )
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));
serviceWorker.register();