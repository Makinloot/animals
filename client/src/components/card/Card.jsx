export default function Card() {
  return (
    <a
      href="#"
      className="card w-72 overflow-hidden bg-base-100 shadow-xl transition-all hover:scale-95 hover:text-info"
    >
      <figure>
        <img
          src="https://fastly.picsum.photos/id/169/2500/1662.jpg?hmac=3DBeyQbiPxO88hBdhIuFPbvy2ff7cm9vmnq8lPIL9Ug"
          className="h-full w-full"
          alt="Shoes"
        />
      </figure>
      <div className="card-body p-2">
        <h2 className="card-title max-w-full font-helveticaCaps font-normal">
          ლეკვები
        </h2>
        <p
          className="line-clamp-1 overflow-hidden text-ellipsis"
          title="იყიდება კოკისპანიელი, ჰასკი და კავკასიური ნაგაზი"
        >
          იყიდება კოკისპანიელი, ჰასკი და კავკასიური ნაგაზი
        </p>
        <div className="card-actions items-center justify-end">
          <p className="font-helveticaCaps">150 ₾</p>
          {/* <button className="btn btn-primary">Buy Now</button> */}
        </div>
      </div>
    </a>
  );
}
