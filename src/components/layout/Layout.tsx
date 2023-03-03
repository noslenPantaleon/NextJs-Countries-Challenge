import { FC, ReactElement } from 'react';
import style from './layout.module.scss';

interface Props {
  children?: ReactElement;
}

const Layout: FC<Props> = ({ children }) => {
  return <div className={style.layout}>{children}</div>;
};

export default Layout;
