import { SupervisedUserCircle } from '@suid/icons-material';

import cls from './classes';

const Header = () => {
  return (
    <div class={cls.headerContainer}>
      <div class={cls.headerTitle}>L O G O H E R E</div>
      <div class={cls.headerIcon}>
        <SupervisedUserCircle />
      </div>
    </div>
  );
};

export default Header;
