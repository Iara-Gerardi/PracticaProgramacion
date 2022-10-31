const end = () => console.log("fin")

const mostrarLetras = (string) => {
  let i = 0;
  const timer = setInterval(() => {

    if (i >= string.length) {
      end();
      clearInterval(timer);
      return;
    }

    console.log(string.charAt(i));
    i++;
  }, 1000)

}

mostrarLetras("1234")