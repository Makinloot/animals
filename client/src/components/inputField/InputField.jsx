import "./InputField.css";
// eslint-disable-next-line react/prop-types
export default function InputField({ labelValue, type }) {
  return (
    <div className="input-field-wrapper my-4 flex flex-col">
      <label htmlFor="name" className="my-2 font-helveticaCaps">
        {labelValue}
      </label>
      <input
        type={type && type}
        id="name"
        className="h-12 rounded-md bg-neutral-focus p-2 outline-none"
      />
    </div>
  );
}
