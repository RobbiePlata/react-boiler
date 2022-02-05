import { useLocation } from "react-router-dom";
import { useNavigate } from "hooks";
import { useStateValue } from "state";
import { useRef, useEffect } from "react";
import MobileNavigation from "./MobileNavigation";
import styles from './Navigation.module.scss';
import clsx from 'clsx';

const Navigation = () => {
    const navRef = useRef(null);
    const {
        state: { deviceSize, isNavOpened },
        action: { setNavOpened }
    } = useStateValue();
    const pathname = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (['xxl', 'xxxl'].includes(deviceSize)) setNavOpened(true);
        else setNavOpened(false);
        // eslint-disable-next-line
      }, [deviceSize])

    if (['xs', 'sm', 'md'].includes(deviceSize)) return <MobileNavigation />;

    return (
        <div ref={navRef} className={clsx(styles.nav, isNavOpened && styles['nav--opened'])}>
            <div className={styles.nav__top}>
                <div className={styles.nav__logo}>
                    
                </div>
            </div>
        </div>
    )
};

export default Navigation;