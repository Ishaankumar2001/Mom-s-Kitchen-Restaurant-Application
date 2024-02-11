import React,{lazy,Suspense} from 'react';
import ReactDOM from 'react-dom/client';

import Header from './src/components/Header';
import Body from './src/components/Body';
import About from './src/components/About';
import { createBrowserRouter , Outlet, RouterProvider} from 'react-router-dom';
import Contact from './src/components/Contact';
import Error from './src/components/Error';
import ResMenu from './src/components/ResMenu';
import { Provider } from 'react-redux';
import appStore from './src/utils/appStore';
import Cart from './src/components/Cart';




//Chunking
// Code Splitting
// Dynamic Bundling
// Lazy Loading
// On Demand loading

const Grocery=lazy(()=>import("./src/components/Grocery"));




const Applayout=()=>{
    return(

        <Provider store={appStore}>
                <div className='app'>
                    <Header/>
                    <Outlet/>
             </div>
         </Provider>
        
    );
};

const appRounter=createBrowserRouter([
    {
        path:"/",
        element:<Applayout/>,
        children:[
            {
                path: "/",
                element:<Body/>
        
            },
            {
            path: "/about",
            element:<About/>
    
        },
        {
            path: "/contact",
            element:<Contact/>
    
        }
        ,
        {
            path: "/restaurants/:resId",
            element:<ResMenu/>
    
        }
        ,
        {
            path: "/grocery",
            element: <Suspense fallback={<h1>Loading........</h1>}><Grocery/></Suspense>
    
        },
        {
            path: "/cart",
            element:<Cart/>
    
        }

        ],
        errorElement:<Error/>

    },
    
])

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRounter}/>);