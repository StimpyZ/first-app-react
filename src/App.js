import "./App.css";
import ContactListComponent from "./components/container/contact_list";
// import Greeting from "./components/pure/greeting";
// import GreetingF from "./components/pure/greetingF";
import TaskListComponent from "./components/container/task_list";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                {/* Componente propio Greeting */}
                {/* <Greeting name={"Jole"}></Greeting> */}
                {/* <GreetingF name={'Jole'}></GreetingF> */}

                <TaskListComponent></TaskListComponent>
                <ContactListComponent></ContactListComponent>
            </header>
        </div>
    );
}

export default App;
