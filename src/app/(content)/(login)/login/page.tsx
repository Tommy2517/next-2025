import Form from "next/form";

const LoginPage = () => {
    return (
        <>
            {/*<form action="/submit">*/}
            {/*    <input type="text" name={'name'}/>*/}
            {/*    <button>send</button>*/}
            {/*</form>*/}
            <Form action={'/submit'}>
                <input type="text" name={'name'}/>
                <button>send</button>

            </Form>
        </>
    );
};
export default LoginPage