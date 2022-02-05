import { useScrollLock, useClickOutside } from "hooks";
import { Link, useLocation } from "react-router-dom";
import { PATHNAME } from "utils/constants";
import { useEffect, useState, useRef } from "react";
import clsx from "clsx";
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
            <div ref={menuRef} className={clsx(styles.menu, isMenuOpened && styles[`menu--opened`])}>
            <div className={styles.menu__top}>
              <button type='button' className={styles.button__close} onClick={() => setMenuOpened(false)}>
                {/* <CloseCircleIcon /> */}
              </button>
            </div>

            <div className={styles.menu__main}>
              {[
                // { key: 'home', text: 'Home', _pathname: PATHNAME.HOME, icon: <HomeWhiteIcon /> },
              ].map(({ text, _pathname, icon, key }, mIndex) => (
                <Link
                  key={mIndex}
                  className={clsx(
                    styles.menu__item,
                    (pathname === _pathname) && styles['menu__item--active']
                  )}
                  onClick={() => window?.Appcues?.track("Clicked " + text)}
                  to={{ pathname: _pathname }}
                >
                  <div className={clsx(
                    styles.menu__item__icon,
                    styles[`menu__item__icon--${key}`]
                    )}>
                    {icon}
                  </div>
                  <span dangerouslySetInnerHTML={{ __html: text }} />
                </Link>
              ))}
            </div>
          </div>
        </div>
    )
};

export default MobileNavigation;