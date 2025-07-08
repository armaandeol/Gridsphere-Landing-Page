import menuIcon from '../assets/menu.svg';

const Menu = ({ className = '' }) => {
    return (
        <div className={className}>
            <img src={menuIcon} alt="Menu" />
        </div>
    );
}

export default Menu;