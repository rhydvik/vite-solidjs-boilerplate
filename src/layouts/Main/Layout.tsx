import { JSX, children } from 'solid-js';

import { Header, Sidebar } from '../../components';
import cls from './classes';

type Props = {
  children: JSX.Element;
};

const Layout = (props: Props) => {
  const renderChildren = children(() => props.children);
  return (
    <div class={cls.container}>
      <div class={cls.header} style={cls.headerHeight}>
        <Header />
      </div>
      <div class={cls.main} style={cls.mainHeight}>
        <div class={cls.content}>
          <div class={cls.sidebar}>
            <Sidebar />
          </div>
          <div class={cls.childrenContainer}>{renderChildren()}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
