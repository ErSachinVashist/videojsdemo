import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withStyles } from '@material-ui/core/styles';
import {FaGithub,FaBook,FaBars,FaUserTie} from 'react-icons/fa'
import {headerCss} from '../helpers/componentStyle'
class Header extends React.Component {

    state = {
        mobileMoreAnchorEl: null,
    };

    handleMenuClose = () => {
        this.setState({ anchorEl: null });
        this.handleMobileMenuClose();
    };

    handleMobileMenuOpen = event => {
        this.setState({ mobileMoreAnchorEl: event.currentTarget });
    };

    handleMobileMenuClose = (url)=> {
        if(url){
            window.open(url,'_blank')
        }
        this.setState({ mobileMoreAnchorEl: null });
    };

    render() {
        const { mobileMoreAnchorEl } = this.state;
        const { classes } = this.props;
        const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

        const renderMobileMenu = (
            <Menu
                anchorEl={mobileMoreAnchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMobileMenuOpen}
                onClose={this.handleMenuClose}
            >
                <MenuItem onClick={e=>this.handleMobileMenuClose('https://reactjs.org/docs/getting-started.html')}>
                    <IconButton color="inherit">
                        <FaBook />
                    </IconButton>
                    <p>React Docs</p>
                </MenuItem>
                <MenuItem onClick={e=>this.handleMobileMenuClose('https://github.com/ErSachinVashist/React-boiler')}>
                    <IconButton color="inherit">
                        <FaGithub />
                    </IconButton>
                    <p>Git Repo</p>
                </MenuItem>
                <Link className={classes.linkStyle} to='/profile'>
                    <MenuItem onClick={()=>this.handleMobileMenuClose()}>
                        <IconButton color="inherit">
                            <FaUserTie />
                        </IconButton>
                        <p>Profile</p>
                    </MenuItem>
                </Link>

            </Menu>
        );

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Tooltip title="Visit Us" placement="bottom">
                            <a rel="noopener noreferrer" target='_blank'>
                                <img width='100px' src='https://y5y9y3x6.stackpathcdn.com/wp-content/uploads/2018/05/server-guy-logo.svg'/>
                            </a>
                        </Tooltip>
                        {/*<div className={classes.grow} />*/}
                        {/*<div className={classes.sectionDesktop}>*/}
                        {/*    <Tooltip title="React Docs" placement="bottom">*/}
                        {/*        <IconButton color="inherit"*/}
                        {/*                    onClick={()=>window.open('https://reactjs.org/docs/getting-started.html','_blank')}*/}
                        {/*        >*/}
                        {/*            <FaBook />*/}
                        {/*        </IconButton>*/}
                        {/*    </Tooltip>*/}
                        {/*    <Tooltip title="Git Repo" placement="bottom">*/}
                        {/*        <IconButton color="inherit"*/}
                        {/*                    onClick={()=>window.open('https://github.com/ErSachinVashist/React-boiler','_blank')}*/}
                        {/*        >*/}
                        {/*            <FaGithub />*/}
                        {/*        </IconButton>*/}
                        {/*    </Tooltip>*/}
                        {/*    <Tooltip title="Profile" placement="bottom">*/}
                        {/*        <Link className={classes.linkStyle} to='/profile'>*/}
                        {/*            <IconButton color="inherit">*/}
                        {/*                <FaUserTie />*/}
                        {/*            </IconButton>*/}
                        {/*        </Link>*/}

                        {/*    </Tooltip>*/}
                        {/*</div>*/}
                        {/*<div className={classes.sectionMobile}>*/}
                        {/*    <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">*/}
                        {/*        <FaBars />*/}
                        {/*    </IconButton>*/}
                        {/*</div>*/}
                    </Toolbar>
                </AppBar>
                {/*{renderMobileMenu}*/}
            </div>
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(headerCss)(Header);
