import { FC } from 'react';
import c from 'classnames';
import styles from './titleMain.module.scss';

interface Props {
  text: string;
  bold?: Boolean;
}

const TitleMain: FC<Props> = ({ text, bold = false }) => {
  return <h1 className={c(styles.titleMainStyle, bold)}>{text}</h1>;
};

export default TitleMain;
