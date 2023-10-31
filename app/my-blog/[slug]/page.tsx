import './singleBlog.scss';

const SingleBlog: React.FC = ({ params }: any) => {
  return (
    <section className="singleBlog">
      <div className="wrapContainer">
        <h1>Single Blog {params.slug}</h1>
        <iframe
          className="my_frame"
          width="100%"
          height="100%"
          src="https://www.notion.so/embed/wandaazhar/Return-values-from-functions-JavaScript-41e7b5db637b4ac9b8e697786a91dc7b" />
      </div>
    </section>
  );
}

export default SingleBlog;