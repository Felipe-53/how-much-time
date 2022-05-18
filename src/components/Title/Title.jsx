
const Title = () => {
  return (
    <h1 className="
      font-sans text-3xl font-medium
    ">
      Hoje é dia {(new Date()).toLocaleDateString('pt-br')} e faltam
    </h1>
  )
}

export default Title