const generateTime = () => {
  let time = new Date();
  let tes = time.getFullYear();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  return tes + ' ' + hours + ':' + minutes + ':' + seconds
}

export default generateTime