/* eslint-disable react/prop-types */

export default function RadioGroup({ title, radioName }) {
  if (radioName === "item-type") {
    return (
      <div className="form-control my-8">
        <span className="">{title}</span>
        <RadioLabel radioName={radioName} value="ყველა" />
        <RadioLabel radioName={radioName} value="კერძო" />
        <RadioLabel radioName={radioName} value="მაღაზია" />
        <RadioLabel radioName={radioName} value="შევიძენ" />
        <RadioLabel radioName={radioName} value="ფასდაკლება" />
      </div>
    );
  } else if (radioName === "item-quality") {
    return (
      <div className="form-control my-8">
        <span className="">{title}</span>
        <RadioLabel radioName={radioName} value="მეორადი" checkbox />
        <RadioLabel radioName={radioName} value="ახალი" checkbox />
        <RadioLabel radioName={radioName} value="ახალივით" checkbox />
      </div>
    );
  }

  return (
    <div className="form-control my-8">
      <span className="">{title}</span>
      <RadioLabel radioName={radioName} value="ყველა" />
      <RadioLabel radioName={radioName} value="კი" />
      <RadioLabel radioName={radioName} value="არა" />
    </div>
  );
}

function RadioLabel({ radioName, value, checkbox }) {
  return (
    <label htmlFor={`${radioName}-${value}`} className="label justify-start">
      <input
        type={checkbox ? "checkbox" : "radio"}
        id={`${radioName}-${value}`}
        name={radioName}
        className={checkbox ? "checkbox" : "radio"}
      />
      <span className="label-text ml-4">{value}</span>
    </label>
  );
}
