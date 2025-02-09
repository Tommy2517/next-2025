import Link from "next/link";

const Menu = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link href={'/'}>home</Link>
                </li>
                <li>
                    <Link href={'/cars'}>cars</Link>
                </li>
                <li>
                    <Link href={'/create'}>create car</Link>
                </li>
            </ul>
        </div>
    );
};

export default Menu;