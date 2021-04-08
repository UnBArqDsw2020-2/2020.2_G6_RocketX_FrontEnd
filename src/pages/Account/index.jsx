import { useHistory } from 'react-router-dom';

function Account() {
    let history = useHistory();

    return (
        <>
            <h1>Account</h1>
            <button type="button" onClick={() => history.goBack()}>Voltar</button>
        </>
    );
}

export default Account;