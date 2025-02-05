import Link from "next/link";

const Menu = () => {
    return (
        <div>
            <Link href={"/users"}>users</Link>
            <Link href={"/posts"}>posts</Link>
            <Link href={"/comments"}>comments</Link>
            <Link href={"/users"}>users/id</Link>
            <Link href={"/posts"}>posts/id</Link>
            <Link href={"/comments"}>comments/id</Link>
        </div>
    );
};

export default Menu;