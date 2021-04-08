import { useHistory } from 'react-router-dom';

function Dashboard() {
    let history = useHistory();

    return (
        <>
            <h1>Dashboard</h1>
            <button type="button" onClick={() => history.goForward()}>Avançar</button>
        </>
    );
}

export default Dashboard;