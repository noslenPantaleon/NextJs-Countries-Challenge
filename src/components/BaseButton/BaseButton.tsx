import { FC, ReactChild, MouseEventHandler } from 'react';
import c from 'classnames';
import styles from './BaseButton.module.scss';

interface Props {
  text: string;
  type?: string;
  mainButton?: boolean;
  baseButtonMobile?: boolean;
  icon?: ReactChild;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const BaseButton: FC<Props> = ({
  text,
  type,
  mainButton = false,
  baseButtonMobile = false,
  icon = null,

  onClick = () => {},
}) => {
  return (
    <button
      onClick={onClick}
      className={c(
        styles.container,
        mainButton && styles.mainButton,
        baseButtonMobile && styles.baseButtonMobile
      )}
      type='button'
    >
      {icon && (
        <div className={styles.icon}>
          {icon}
          <h1>{text}</h1>
        </div>
      )}
    </button>
  );
};

export default BaseButton;
