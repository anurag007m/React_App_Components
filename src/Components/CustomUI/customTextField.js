export default function CustomTextField({ prefixIcon, value, placeholder }) {
  return (
    <div className="input">
      <img src={prefixIcon} alt="" />
      <input type="text" value={value} placeholder={placeholder} />
    </div>
  );
}
