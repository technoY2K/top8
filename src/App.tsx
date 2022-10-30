import { Helmet } from "react-helmet";

function App() {
    return (
        <div className="App">
            <Helmet>
                <title>Top 8</title>
                <meta name="description" content="Your top 8 forever!" />
            </Helmet>
            <main className="h-screen"></main>
        </div>
    );
}

export default App;
