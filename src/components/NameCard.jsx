const NameCard = (props) => {
  const { name, email, contact } = props;
  return (
    <ul>
      <li>name :{name}</li>
      <li>email :{email}</li>
      <li>contact :{contact}</li>
    </ul>
  );
};

export default NameCard;
