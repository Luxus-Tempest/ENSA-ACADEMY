import {Fragment, memo, useEffect} from 'react'
// import {bindActionCreators} from "redux"
import { Button } from 'react-bootstrap'

//react-bootstrap
import { Link } from "react-router-dom";

//BoxedRouter
import BoxedRouter from '../../router/boxed-router'

//header
import  HeaderStyle2 from  '../../components/partials/dashboard/HeaderStyle/header-style-2'

//footer
import Footer from '../../components/partials/dashboard/FooterStyle/footer'

// store

import SettingOffCanvas from '../../components/setting/SettingOffCanvas'



const Boxed = memo((props) => {
    useEffect(
        () => {
            document.body.classList.add('boxed')
            return () => {
                document.body.classList.remove('boxed')
            }
        }
    )
    return (
        <Fragment>
        <div className="boxed-inner">
            <span className="screen-darken"></span>
            <main className="main-content">
                <HeaderStyle2 />
                <div className="conatiner-fluid content-inner">
                    <BoxedRouter />
                </div>
                <div className="btn-download">
                    <Button className="btn btn-success px-3 py-2" variant=" " href="https://iqonic.design/product/admin-templates/hope-ui-free-open-source-react-admin-template/" target="_blank" >
                        <svg className="icon-24" width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.4" d="M17.554 7.29614C20.005 7.29614 22 9.35594 22 11.8876V16.9199C22 19.4453 20.01 21.5 17.564 21.5L6.448 21.5C3.996 21.5 2 19.4412 2 16.9096V11.8773C2 9.35181 3.991 7.29614 6.438 7.29614H7.378L17.554 7.29614Z" fill="currentColor"></path>
                  <path d="M12.5464 16.0374L15.4554 13.0695C15.7554 12.7627 15.7554 12.2691 15.4534 11.9634C15.1514 11.6587 14.6644 11.6597 14.3644 11.9654L12.7714 13.5905L12.7714 3.2821C12.7714 2.85042 12.4264 2.5 12.0004 2.5C11.5754 2.5 11.2314 2.85042 11.2314 3.2821L11.2314 13.5905L9.63742 11.9654C9.33742 11.6597 8.85043 11.6587 8.54843 11.9634C8.39743 12.1168 8.32142 12.3168 8.32142 12.518C8.32142 12.717 8.39743 12.9171 8.54643 13.0695L11.4554 16.0374C11.6004 16.1847 11.7964 16.268 12.0004 16.268C12.2054 16.268 12.4014 16.1847 12.5464 16.0374Z" fill="currentColor"></path>
              </svg>
                    </Button>
                </div>
                <Footer />
            </main>
        </div>
        <SettingOffCanvas/>
        <Link className="btn btn-fixed-end btn-secondary btn-icon btn-dashboard" to="/landing-modules/home" target="_blank" >
            Landing Pages
        </Link>
        </Fragment>
    )
})

export default Boxed