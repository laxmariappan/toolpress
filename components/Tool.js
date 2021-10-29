import Link from "next/link";
const Tool = function (props) {
  return (
    <>
      <div className="w-full p-4 mx-auto lg:w-1/4 ">
        <div className="p-6 bg-white border rounded-lg shadow-xl transform transition duration-500 hover:scale-105">
          {props.image !== null ? (
            <>
              <img
                className="object-cover object-center w-full mb-8 lg:h-36 md:h-24"
                src={props.image.node.sourceUrl}
                alt="blog"
              />
            </>
          ) : null}
          <h3 className="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font">
            {props.category}
          </h3>
          <h2 className="mx-auto mb-4 text-2xl font-semibold leading-none tracking-tighter text-black lg:text-xl title-font">
            {props.name}
          </h2>
          <div
            className="mx-auto text-base font-medium leading-relaxed text-blueGray-700 "
            dangerouslySetInnerHTML={{ __html: props.excerpt }}
          ></div>
          <a
            href="#"
            className="inline-flex items-center mt-auto font-semibold text-blue-600 lg:mb-0 hover:text-black "
            title="read more"
          >
            {" "}
            Read More »{" "}
          </a>
          <Link href={`p/${props.id}`}>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Tool;
