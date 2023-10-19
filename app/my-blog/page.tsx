import './myBlog.scss';

const MyBlogPage: React.FC = () => {
  return (
    <section className="blog">
      <div className="wrapContainer">
        <div className="wrapBlog">
          <div className="box box1">Box1</div>
          <div className="box box2">Box2</div>
          <div className="box box3">Box3</div>
          <div className="box box4">Box4</div>
          <div className="box box5">Box5</div>
          <div className="box box6">Box6</div>
        </div>
      </div>
    </section>
  );
}

export default MyBlogPage;