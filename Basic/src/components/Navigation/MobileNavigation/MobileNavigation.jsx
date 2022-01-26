import { useScrollLock, useClickOutside } from "hooks";
import { Link, useLocation } from "react-router-dom";
import { PATHNAME } from "utils/constants";
import { useEffect, useState, useRef } from "react";
import styles from './MobileNavigation.module.scss';

const MobileNavigation = () => {
    
    const [isMenuOpened, setMenuOpened] = useState(false);

    const menuRef = useRef(null);
    const { pathname } = useLocation();

    useEffect(() => {
        setMenuOpened(false);
    }, [pathname]);
    
    useScrollLock(isMenuOpened);
    useClickOutside(menuRef, () => setMenuOpened(false));

    return (
        <div className={styles.nav__wrapper}>
        </div>
    )
};

export default MobileNavigation;