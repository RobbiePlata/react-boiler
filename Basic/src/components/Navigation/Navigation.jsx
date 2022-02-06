import { useLocation, Link } from "react-router-dom";
import { useNavigate } from "hooks";
import { useStateValue } from "state";
import { useRef, useEffect } from "react";
import MobileNavigation from "./MobileNavigation";
import styles from './Navigation.module.scss';
import clsx from 'clsx';
import { HomeIcon } from "components/icons";
import { PATHNAME } from "utils/constants";
import { Tooltip } from 'components';

const Navigation = () => {
    const navRef = useRef(null);
    const {
        state: { deviceSize, isNavOpened },
        action: { setNavOpened }
    } = useStateValue();
    const { pathname } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (['xxl', 'xxxl'].includes(deviceSize)) setNavOpened(false);
        else setNavOpened(false);
        // eslint-disable-next-line
      }, [deviceSize])

    if (['xs', 'sm', 'md'].includes(deviceSize)) return <MobileNavigation />;

    return (
        <div onMouseOver={() => setNavOpened(true)} onMouseLeave={() => setNavOpened(false)}
        ref={navRef} className={clsx(styles.nav, isNavOpened && styles['nav--opened'])}>
            <div className={styles.nav__top}>
            <div className={styles.nav__logo}>
                
            </div>
            <div className={styles.nav__main}>
            {[
          { id: 'home', tooltip: 'Home', text: 'Home', _pathname: PATHNAME.HOME, Icon: HomeIcon }
        ].map(({ id, text, tooltip, _pathname, Icon }, mIndex) => {
          return isNavOpened ? (
            <Link
              key={mIndex}
              className={clsx(
                styles.nav__item,
                (pathname === _pathname) && styles['nav__item--active']
              )}
              to={{ pathname: _pathname }}
            >
              <div className={clsx(
                styles.nav__item__icon,
                styles[`nav__item__icon--${id}`]
              )}><Icon /></div>
              {isNavOpened ? <span dangerouslySetInnerHTML={{ __html: text }} /> : null}
            </Link>
          ) : (
            <Tooltip
              key={mIndex}
              title={tooltip}
              placement='right'
            >
              <Link
                className={clsx(
                  styles.nav__item,
                  (pathname === _pathname) && styles['nav__item--active']
                )}
                to={{ pathname: _pathname }}
              >
                <div className={clsx(
                  styles.nav__item__icon,
                  styles['nav__item__icon--visible'],
                  styles[`nav__item__icon--${id}`]
                )}><Icon /></div>
              </Link>
            </Tooltip>
          )
        }
        )}
          </div>
        </div>
      </div>
    )
};

export default Navigation;