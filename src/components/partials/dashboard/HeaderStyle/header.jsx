import React, {useEffect,Fragment,memo} from 'react'
import { Navbar,Container,Nav,Dropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CustomToggle from '../../../dropdowns'

//img
import flag1 from '../../../../assets/images/Flag/flag001.png'
import flag2 from '../../../../assets/images/Flag/flag-02.png'
import flag3 from '../../../../assets/images/Flag/flag-03.png'
import flag4 from '../../../../assets/images/Flag/flag-04.png'
import flag5 from '../../../../assets/images/Flag/flag-05.png'
import flag6 from '../../../../assets/images/Flag/flag-06.png'
import shapes1 from '../../../../assets/images/shapes/01.png'
import shapes2 from '../../../../assets/images/shapes/02.png'
import shapes3 from '../../../../assets/images/shapes/03.png'
import shapes4 from '../../../../assets/images/shapes/04.png'
import shapes5 from '../../../../assets/images/shapes/05.png'
import avatars1 from '../../../../assets/images/avatars/01.png'
import avatars2 from '../../../../assets/images/avatars/avtar_1.png'
import avatars3 from '../../../../assets/images/avatars/avtar_2.png'
import avatars4 from '../../../../assets/images/avatars/avtar_3.png'
import avatars5 from '../../../../assets/images/avatars/avtar_4.png'
import avatars6 from '../../../../assets/images/avatars/avtar_5.png'
// logo
import Logo from '../../components/logo'

// Redux Selector / Action
import { useSelector } from 'react-redux';

// Import selectors & action from setting store
import * as SettingSelector from '../../../../store/setting/selectors'

const Header = memo((props) => {
    const navbarHide = useSelector(SettingSelector.navbar_show); // array
    const headerNavbar = useSelector(SettingSelector.header_navbar)
    useEffect(() => {
        // navbarstylemode
        if (headerNavbar === 'navs-sticky' || headerNavbar === 'nav-glass') {
            window.onscroll = () => {
                if (document.documentElement.scrollTop > 50) {
                    document.getElementsByTagName('nav')[0].classList.add('menu-sticky')
                } else {
                    document.getElementsByTagName('nav')[0].classList.remove('menu-sticky')
                }
            }
        }

 })
   const minisidebar =() =>{
       document.getElementsByTagName('ASIDE')[0].classList.toggle('sidebar-mini')
   }
    return (
        <Fragment>
            <Navbar expand="lg" variant="light" className={`nav iq-navbar ${headerNavbar} ${navbarHide.join(" ")}`}>
                <Container fluid className="navbar-inner">
                    <Link to="/dashboard" className="navbar-brand">
                        <Logo color={true} />
                        <h4 className="logo-title">Hope UI</h4>
                    </Link>
                    <div className="sidebar-toggle" data-toggle="sidebar" data-active="true" onClick={minisidebar}>
                        <i className="icon">
                            <svg width="20px" height="20px" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
                            </svg>
                        </i>
                    </div>
                    <div className="input-group search-input">
                        <span className="input-group-text" id="search-input">
                            <svg width="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="11.7669" cy="11.7666" r="8.98856" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></circle>
                                <path d="M18.0186 18.4851L21.5426 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </span>
                        <input type="search" className="form-control" placeholder="Search..."/>
                    </div>
                    <Navbar.Toggle aria-controls="navbarSupportedContent">
                        <span className="navbar-toggler-icon">
                            <span className="mt-2 navbar-toggler-bar bar1"></span>
                            <span className="navbar-toggler-bar bar2"></span>
                            <span className="navbar-toggler-bar bar3"></span>
                        </span>
                    </Navbar.Toggle>
                    <Navbar.Collapse  id="navbarSupportedContent">
                        <Nav as="ul" className="mb-2 ms-auto navbar-list mb-lg-0 align-items-center">
                        <Nav.Link className="btn btn-primary btn-sm d-flex gap-2 align-items-center me-2"  href="https://hopeui.iqonic.design/pro/" target="_blank">

                                    <svg className="icon-22 me-2" width="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21.4274 2.5783C20.9274 2.0673 20.1874 1.8783 19.4974 2.0783L3.40742 6.7273C2.67942 6.9293 2.16342 7.5063 2.02442 8.2383C1.88242 8.9843 2.37842 9.9323 3.02642 10.3283L8.05742 13.4003C8.57342 13.7163 9.23942 13.6373 9.66642 13.2093L15.4274 7.4483C15.7174 7.1473 16.1974 7.1473 16.4874 7.4483C16.7774 7.7373 16.7774 8.2083 16.4874 8.5083L10.7164 14.2693C10.2884 14.6973 10.2084 15.3613 10.5234 15.8783L13.5974 20.9283C13.9574 21.5273 14.5774 21.8683 15.2574 21.8683C15.3374 21.8683 15.4274 21.8683 15.5074 21.8573C16.2874 21.7583 16.9074 21.2273 17.1374 20.4773L21.9074 4.5083C22.1174 3.8283 21.9274 3.0883 21.4274 2.5783Z" fill="currentColor"></path>
                                        <path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M3.01049 16.8079C2.81849 16.8079 2.62649 16.7349 2.48049 16.5879C2.18749 16.2949 2.18749 15.8209 2.48049 15.5279L3.84549 14.1619C4.13849 13.8699 4.61349 13.8699 4.90649 14.1619C5.19849 14.4549 5.19849 14.9299 4.90649 15.2229L3.54049 16.5879C3.39449 16.7349 3.20249 16.8079 3.01049 16.8079ZM6.77169 18.0003C6.57969 18.0003 6.38769 17.9273 6.24169 17.7803C5.94869 17.4873 5.94869 17.0133 6.24169 16.7203L7.60669 15.3543C7.89969 15.0623 8.37469 15.0623 8.66769 15.3543C8.95969 15.6473 8.95969 16.1223 8.66769 16.4153L7.30169 17.7803C7.15569 17.9273 6.96369 18.0003 6.77169 18.0003ZM7.02539 21.5683C7.17139 21.7153 7.36339 21.7883 7.55539 21.7883C7.74739 21.7883 7.93939 21.7153 8.08539 21.5683L9.45139 20.2033C9.74339 19.9103 9.74339 19.4353 9.45139 19.1423C9.15839 18.8503 8.68339 18.8503 8.39039 19.1423L7.02539 20.5083C6.73239 20.8013 6.73239 21.2753 7.02539 21.5683Z" fill="currentColor"></path>
                                    </svg>
                                    Go Pro
                                   </Nav.Link>
                            <Dropdown as="li" className="nav-item">
                                <Dropdown.Toggle as={CustomToggle}   variant="search-toggle nav-link">
                                    <img src={flag1} className="img-fluid rounded-circle" alt="user" style={{height: "30px", minWidth: "30px", width: "30px",}}/>
                                    <span className="bg-primary"></span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="p-0 sub-drop dropdown-menu-end">
                                    <div className="m-0 border-0 shadow-none card">
                                        <div className="p-0 ">
                                            <ul className="list-group list-group-flush">
                                                <li className="iq-sub-card list-group-item"><Link className="p-0" to="#"><img src={flag3} alt="img-flaf" className="img-fluid me-2" style={{width: "15px", height: "15px", minWidth: "15px",}}/>Italian</Link></li>
                                                <li className="iq-sub-card list-group-item"><Link className="p-0" to="#"><img src={flag4} alt="img-flaf" className="img-fluid me-2" style={{width: "15px", height: "15px", minWidth: "15px",}}/>French</Link></li>
                                                <li className="iq-sub-card list-group-item"><Link className="p-0" to="#"><img src={flag2} alt="img-flaf" className="img-fluid me-2" style={{width: "15px", height: "15px", minWidth: "15px",}}/>German</Link></li>
                                                <li className="iq-sub-card list-group-item"><Link className="p-0" to="#"><img src={flag5} alt="img-flaf" className="img-fluid me-2" style={{width: "15px", height: "15px", minWidth: "15px",}}/>Spanish</Link></li>
                                                <li className="iq-sub-card list-group-item"><Link className="p-0" to="#"><img src={flag6} alt="img-flaf" className="img-fluid me-2" style={{width: "15px", height: "15px", minWidth: "15px",}}/>Japanese</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown as="li" className="nav-item">
                                <Dropdown.Toggle as={CustomToggle}  href="#"   variant=" nav-link" id="notification-drop" data-bs-toggle="dropdown" >
                                    <svg width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.7695 11.6453C19.039 10.7923 18.7071 10.0531 18.7071 8.79716V8.37013C18.7071 6.73354 18.3304 5.67907 17.5115 4.62459C16.2493 2.98699 14.1244 2 12.0442 2H11.9558C9.91935 2 7.86106 2.94167 6.577 4.5128C5.71333 5.58842 5.29293 6.68822 5.29293 8.37013V8.79716C5.29293 10.0531 4.98284 10.7923 4.23049 11.6453C3.67691 12.2738 3.5 13.0815 3.5 13.9557C3.5 14.8309 3.78723 15.6598 4.36367 16.3336C5.11602 17.1413 6.17846 17.6569 7.26375 17.7466C8.83505 17.9258 10.4063 17.9933 12.0005 17.9933C13.5937 17.9933 15.165 17.8805 16.7372 17.7466C17.8215 17.6569 18.884 17.1413 19.6363 16.3336C20.2118 15.6598 20.5 14.8309 20.5 13.9557C20.5 13.0815 20.3231 12.2738 19.7695 11.6453Z" fill="currentColor"></path>
                                        <path opacity="0.4" d="M14.0088 19.2283C13.5088 19.1215 10.4627 19.1215 9.96275 19.2283C9.53539 19.327 9.07324 19.5566 9.07324 20.0602C9.09809 20.5406 9.37935 20.9646 9.76895 21.2335L9.76795 21.2345C10.2718 21.6273 10.8632 21.877 11.4824 21.9667C11.8123 22.012 12.1482 22.01 12.4901 21.9667C13.1083 21.877 13.6997 21.6273 14.2036 21.2345L14.2026 21.2335C14.5922 20.9646 14.8734 20.5406 14.8983 20.0602C14.8983 19.5566 14.4361 19.327 14.0088 19.2283Z" fill="currentColor"></path>
                                    </svg>
                                    <span className="bg-danger dots"></span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="p-0 sub-drop dropdown-menu-end" aria-labelledby="notification-drop">
                                    <div className="m-0 shadow-none card">
                                        <div className="py-3 card-header d-flex justify-content-between bg-primary">
                                            <div className="header-title">
                                            <h5 className="mb-0 text-white">All Notifications</h5>
                                            </div>
                                        </div>
                                        <div className="p-0 card-body">
                                            <Link to="#" className="iq-sub-card">
                                                <div className="d-flex align-items-center">
                                                    <img className="p-1 avatar-40 rounded-pill bg-soft-primary" src={shapes1} alt=""/>
                                                    <div className="ms-3 w-100">
                                                        <h6 className="mb-0 ">Emma Watson Bni</h6>
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <p className="mb-0">95 MB</p>
                                                            <small className="float-right font-size-12">Just Now</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link to="#" className="iq-sub-card">
                                                <div className="d-flex align-items-center">
                                                    <div className="">
                                                        <img className="p-1 avatar-40 rounded-pill bg-soft-primary" src={shapes2} alt=""/>
                                                    </div>
                                                    <div className="ms-3 w-100">
                                                        <h6 className="mb-0 ">New customer is join</h6>
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <p className="mb-0">Cyst Bni</p>
                                                            <small className="float-right font-size-12">5 days ago</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link to="#" className="iq-sub-card">
                                                <div className="d-flex align-items-center">
                                                    <img className="p-1 avatar-40 rounded-pill bg-soft-primary" src={shapes3} alt=""/>
                                                    <div className="ms-3 w-100">
                                                        <h6 className="mb-0 ">Two customer is left</h6>
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <p className="mb-0">Cyst Bni</p>
                                                            <small className="float-right font-size-12">2 days ago</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link to="#" className="iq-sub-card">
                                                <div className="d-flex align-items-center">
                                                    <img className="p-1 avatar-40 rounded-pill bg-soft-primary" src={shapes4} alt=""/>
                                                    <div className="w-100 ms-3">
                                                        <h6 className="mb-0 ">New Mail from Fenny</h6>
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <p className="mb-0">Cyst Bni</p>
                                                            <small className="float-right font-size-12">3 days ago</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown as="li" className="nav-item">
                                <Dropdown.Toggle  as={CustomToggle}  href="#" variant="nav-link" id="mail-drop" data-bs-toggle="dropdown"  aria-haspopup="true" aria-expanded="false">
                                    <svg width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.4" d="M22 15.94C22 18.73 19.76 20.99 16.97 21H16.96H7.05C4.27 21 2 18.75 2 15.96V15.95C2 15.95 2.006 11.524 2.014 9.298C2.015 8.88 2.495 8.646 2.822 8.906C5.198 10.791 9.447 14.228 9.5 14.273C10.21 14.842 11.11 15.163 12.03 15.163C12.95 15.163 13.85 14.842 14.56 14.262C14.613 14.227 18.767 10.893 21.179 8.977C21.507 8.716 21.989 8.95 21.99 9.367C22 11.576 22 15.94 22 15.94Z" fill="currentColor"></path>
                                        <path d="M21.4759 5.67351C20.6099 4.04151 18.9059 2.99951 17.0299 2.99951H7.04988C5.17388 2.99951 3.46988 4.04151 2.60388 5.67351C2.40988 6.03851 2.50188 6.49351 2.82488 6.75151L10.2499 12.6905C10.7699 13.1105 11.3999 13.3195 12.0299 13.3195C12.0339 13.3195 12.0369 13.3195 12.0399 13.3195C12.0429 13.3195 12.0469 13.3195 12.0499 13.3195C12.6799 13.3195 13.3099 13.1105 13.8299 12.6905L21.2549 6.75151C21.5779 6.49351 21.6699 6.03851 21.4759 5.67351Z" fill="currentColor"></path>
                                    </svg>
                                    <span className="bg-primary count-mail"></span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="p-0 sub-drop dropdown-menu-end" aria-labelledby="mail-drop">
                                    <div className="m-0 shadow-none card">
                                        <div className="py-3 card-header d-flex justify-content-between bg-primary">
                                            <div className="header-title">
                                            <h5 className="mb-0 text-white">All Message</h5>
                                            </div>
                                        </div>
                                        <div className="p-0 card-body ">
                                            <Link to="#" className="iq-sub-card">
                                                <div className="d-flex align-items-center">
                                                    <div>
                                                        <img className="p-1 avatar-40 rounded-pill bg-soft-primary" src={shapes1} alt=""/>
                                                    </div>
                                                    <div className=" w-100 ms-3">
                                                        <h6 className="mb-0 ">Bni Emma Watson</h6>
                                                        <small className="float-left font-size-12">13 Jun</small>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link to="#" className="iq-sub-card">
                                                <div className="d-flex align-items-center">
                                                    <div>
                                                        <img className="p-1 avatar-40 rounded-pill bg-soft-primary" src={shapes2} alt=""/>
                                                    </div>
                                                    <div className="ms-3">
                                                        <h6 className="mb-0 ">Lorem Ipsum Watson</h6>
                                                        <small className="float-left font-size-12">20 Apr</small>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link to="#" className="iq-sub-card">
                                                <div className="d-flex align-items-center">
                                                    <div>
                                                        <img className="p-1 avatar-40 rounded-pill bg-soft-primary" src={shapes3} alt=""/>
                                                    </div>
                                                    <div className="ms-3">
                                                        <h6 className="mb-0 ">Why do we use it?</h6>
                                                        <small className="float-left font-size-12">30 Jun</small>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link to="#" className="iq-sub-card">
                                                <div className="d-flex align-items-center">
                                                    <div>
                                                        <img className="p-1 avatar-40 rounded-pill bg-soft-primary" src={shapes4} alt=""/>
                                                    </div>
                                                    <div className="ms-3">
                                                        <h6 className="mb-0 ">Variations Passages</h6>
                                                        <small className="float-left font-size-12">12 Sep</small>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link to="#" className="iq-sub-card">
                                                <div className="d-flex align-items-center">
                                                    <div>
                                                        <img className="p-1 avatar-40 rounded-pill bg-soft-primary" src={shapes5} alt=""/>
                                                    </div>
                                                    <div className="ms-3">
                                                        <h6 className="mb-0 ">Lorem Ipsum generators</h6>
                                                        <small className="float-left font-size-12">5 Dec</small>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown as="li" className="nav-item">
                                <Dropdown.Toggle as={CustomToggle} variant=" nav-link py-0 d-flex align-items-center" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src={avatars1} alt="User-Profile" className="theme-color-default-img img-fluid avatar avatar-50 avatar-rounded"/>
                                    <img src={avatars2} alt="User-Profile" className="theme-color-purple-img img-fluid avatar avatar-50 avatar-rounded"/>
                                    <img src={avatars3} alt="User-Profile" className="theme-color-blue-img img-fluid avatar avatar-50 avatar-rounded"/>
                                    <img src={avatars5} alt="User-Profile" className="theme-color-green-img img-fluid avatar avatar-50 avatar-rounded"/>
                                    <img src={avatars6}alt="User-Profile" className="theme-color-yellow-img img-fluid avatar avatar-50 avatar-rounded"/>
                                    <img src={avatars4} alt="User-Profile" className="theme-color-pink-img img-fluid avatar avatar-50 avatar-rounded"/>
                                    <div className="caption ms-3 d-none d-md-block ">
                                        <h6 className="mb-0 caption-title">Austin Robertson</h6>
                                        <p className="mb-0 caption-sub-title">Marketing Administrator</p>
                                    </div>
                                </Dropdown.Toggle>
                                <Dropdown.Menu  className="dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    <Dropdown.Item href="https://templates.iqonic.design/hope-ui/react/build/dashboard/app/user-profile">Profile</Dropdown.Item>
                                    <Dropdown.Item href="https://templates.iqonic.design/hope-ui/react/build/dashboard/app/user-privacy-setting">Privacy Setting</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="https://templates.iqonic.design/hope-ui/react/build/auth/sign-in">Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Fragment>
    )
})

export default Header
  