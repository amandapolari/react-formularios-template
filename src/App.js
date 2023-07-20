import Router from './Routes/Router';

function App() {
    const appStyle = {
        backgroundColor: '#888888',
        height: '100vh',
    };
    return (
        <div style={appStyle}>
            <Router />
        </div>
    );
}

export default App;
