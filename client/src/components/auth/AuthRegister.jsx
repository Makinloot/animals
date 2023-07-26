import InputField from "../inputField/InputField";
import AuthButtons from "./AuthButtons";

export default function AuthRegister() {
  return (
    <form className="w-[600px] max-w-full">
      <div className="form-wrapper rounded-md bg-neutral p-2">
        <h2 className="font-helveticaCaps text-2xl">გაიარეთ რეგისტრაცია</h2>
        <InputField labelValue="სახელი" />
        <InputField labelValue="ელ-ფოსტა" type="email" />
        <InputField labelValue="ტელეფონის ნომერი" type="number" />
        <InputField labelValue="პაროლი" type="password" />
        <InputField labelValue="გაიმეორეთ პაროლი" type="password" />
        <div className="my-6 flex text-center">
          <input type="checkbox" className="checkbox" />
          <p className="ml-2">ვეთანხმები</p>
          <a href="#" className="ml-2 text-info underline">
            წესებსა და პირობებს
          </a>
        </div>

        <AuthButtons
          submit
          value="შესვლა"
          color="bg-neutral-focus hover:bg-base-100 font-helveticaCaps"
        />
        <div className="my-8 flex flex-wrap gap-2">
          <AuthButtons
            value="google"
            icon="google"
            color="bg-red-500 hover:bg-red-600 flex-1"
          />
          <AuthButtons
            value="facebook"
            icon="facebook"
            color="bg-blue-500 hover:bg-blue-600 flex-1"
          />
        </div>
        <div className="my-8 text-center">
          <p>ხართ რეგისტრირებული ?</p>
          <a href="#" className="text-info underline">
            ავტორიზაცია
          </a>
        </div>
      </div>
    </form>
  );
}
