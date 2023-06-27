function Test(props) {
  const { name, children } = props;
  console.log(props);
  return (
    <>
      <h1>hello {name}</h1>
      {children}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit,
        ut.
      </p>
    </>
  );
}

export default Test;
