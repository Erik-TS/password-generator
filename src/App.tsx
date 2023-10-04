import { useState } from "react";
import "./App.scss"

function App() {

  function generatePassword(size: number): string {

    let password: string

    function getRandomInt(min: number, max: number): number {
      min = Math.ceil(min);
      max = Math.floor(max);

      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getCharList(size: number): Array<string> {
      let charList: Array<string> = []

      for (let i = 0; i < size; i++) {
        charList.push(String.fromCharCode(getRandomInt(33, 126)))
      }

      return charList
    }

    password = getCharList(size).join("")
    return password
  }

  const [password, setPassword] = useState("")

  return (
    <>
      <h1>Password Generator</h1>
      <div className={"center-form"}>
        <div className={"row"}>
          <label>Nº of characters</label>
          <input className={"password-size"} type="text" size={2} />
        </div>
        <div className={"row"}>
          <input className={"button-layout generate-button"} type="button" value="Generate" onClick={() => {
            let userInput: string = (document.querySelector(".password-size") as HTMLInputElement).value
            let newPassword: string
            const regex = /[^0-9]/

            if (regex.test(userInput)) {
              alert("Invalid characters. Use only numbers.")
            }
            else {
              newPassword = generatePassword(parseInt(userInput))
              setPassword(newPassword)
            }
          }} />
        </div>
        <div className={"row"}>
          <p className={"password-text"}>{password}</p>
        </div>
        <div className={"row"}>
          <input className={"button-layout clipboard-button"} type="button" value="Copy to clipboard" onClick={() => {
            navigator.clipboard.writeText(password)
              .then(() => {
                alert("Password copied to clipboard!")
              })
              .catch(err => {
                console.error(err)
                alert("Password not copied!")
              })
          }} />
        </div>
      </div>
    </>
  )
}

export default App
