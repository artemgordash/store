import NavbarItem from '@/components/common/page/Header/Navbar/Item';
import { navbarItems } from '@/components/common/page/Header/Navbar/items';
import './index.less';

const Navbar = () => {

  return (
    <nav className={'navbar'}>
      {navbarItems.map((item, index) => <NavbarItem
        key={index}
        href={item.href}
        title={item.title} 
      />)}
    </nav>
  );
};

export default Navbar;