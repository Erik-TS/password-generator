function App() {

  function generatePassword(size: number): string {
    function getRandomInt(min: number, max: number): number {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getCharList(size: number): Array<string> {
      let charList: Array<string> = []

      for (let i = 0; i < size; i++) charList.push(String.fromCharCode(getRandomInt(33, 126)))
      return charList
    }

    let password = getCharList(size).toLocaleString()
    return password
  }

  return (
    <>
      <h1>Hello World!</h1>
    </>
  )
}

export default App
