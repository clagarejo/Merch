import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../containers/Home';
import Layaut from '../components/Layaut';
import Success from '../containers/Success';
import Payment from '../containers/Payment';
import Checkout from '../containers/Checkout';
import NotFound from '../containers/NotFound';
import AppContext from '../context/AppContext';
import Information from '../containers/Information';
import useInitialState from '../hooks/useInitialState';

const App = () => {
    const initialState = useInitialState();
    // const isEmpty = Object.keys(initialState.state).length;
    return (
        <>
            {/* {isEmpty > 0 ? ( */}
                <AppContext.Provider value={initialState}>
                    <BrowserRouter>
                        <Layaut>
                            <Switch>
                                <Route exact path='/' component={Home} />
                                <Route exact path='/checkout' component={Checkout} />
                                <Route exact path='/checkout/information' component={Information} />
                                <Route exact path='/checkout/payment' component={Payment} />
                                <Route exact path='/checkout/success' component={Success} />
                                <Route component={NotFound} />
                            </Switch>
                        </Layaut>
                    </BrowserRouter>
                </AppContext.Provider>
            {/* ) : <h2>Cargando...</h2>} */}

        </>
    )
};

export default App;
