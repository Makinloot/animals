import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="Footer mt-8 bg-neutral px-2 py-8">
      <div className="container">
        <div className="Footer-wrapper flex justify-around text-neutral-content">
          <div className="flex flex-col font-helveticaCaps">
            <h3 className="font-semibold">ნავიგაცია</h3>
            <ul className="mt-3 flex flex-col gap-1 text-sm">
              <li className="hover:text-info">
                <a href="#" className="block">
                  განცხადების დამატება
                </a>
              </li>
              <li className="hover:text-info">
                <a href="#" className="block">
                  იყიდე ონლაინ
                </a>
              </li>
              <li className="hover:text-info">
                <a href="#" className="block">
                  მაღაზიები
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col font-helveticaCaps">
            <h3 className="font-semibold">კატეგორიები</h3>
            <ul className="mt-3 flex flex-col gap-2 text-sm">
              <li className="hover:text-info">
                <a href="#" className="block">
                  ცხოველები
                </a>
              </li>
              <li className="hover:text-info">
                <a href="#" className="block">
                  ცხოველების ტანსაცმელი
                </a>
              </li>
              <li className="hover:text-info">
                <a href="#" className="block">
                  ცხოველების საკვები
                </a>
              </li>
              <li className="hover:text-info">
                <a href="#" className="block">
                  სხვა
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col font-helveticaCaps">
            <h3 className="font-semibold">დახმარება</h3>
            <ul className="mt-3 flex flex-col gap-1 text-sm">
              <li className="hover:text-info">
                <a href="#" className="block">
                  ხშირად დასმული კითხვები
                </a>
              </li>
              <li className="hover:text-info">
                <a href="#" className="block">
                  კონტაქტი
                </a>
              </li>
              <li className="flex flex-col">
                სოციალური ქსელები
                <div className="mt-2">
                  <a href="#" className="btn btn-circle hover:text-info">
                    <FaFacebook size={25} />
                  </a>
                  <a href="#" className="btn btn-circle mx-2 hover:text-info">
                    <FaInstagram size={25} />
                  </a>
                  <a href="#" className="btn btn-circle hover:text-info">
                    <FaLinkedin size={25} />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
