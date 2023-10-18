import classNames from '../../shared/helpers/classNames';
import styles from './Container.module.scss';

const Container = ({ children, className='' }) => (
  <div className={classNames(styles.container, className)}>
    {children}
  </div>
);

export default Container;
