import styled from "styled-components"
import Header from "../Header/Header"
import Textbox from "../Textbox/Textbox"
import Tasks from "../Tasks/Tasks"
import "./css/App.css"

const AppStyle = styled.div`
              background-color:${({ theme }) => theme.body.bgColor};
              background-image:url(${({ theme }) => theme.body.bgImage});
              @media (max-width:768px){
                background-image:url(${({ theme }) => theme.body.bgImageMobile});
              }
              `

function App() {
  return (
    <AppStyle className="App">
      <div className="todo">
        <Header />
        <main>
          <Textbox />
          <Tasks />
        </main>
      </div>
    </AppStyle>
  );
}

export default App;
