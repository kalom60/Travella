const Post = () => {
  return (
    <div className="md:grid grid-cols-[0.9fr,1.1fr] gap-5 mb-8 sm:block">
      <div className="">
        <img
          src="https://techcrunch.com/wp-content/uploads/2022/12/lawnmower-Large.jpeg?w=1390&crop=1"
          alt=""
          className="max-w-[100%]"
        />
      </div>
      <div>
        <h2 className="m-0 text-3xl font-bold">
          Full-house battery backup coming later this year
        </h2>
        <p className="text-xs my-2 mx-0 font-bold flex gap-3">
          <a className="text-[#333]">Dawid Paszko</a>
          <time>2023-01-06 16:45</time>
        </p>
        <p className=" my-3 mx-0 leading-6">
          Today at its special launch event, home backup power giant EcoFlow
          launched a flurry of new products, including a “Whole-Home Backup
          Power Solution.”
        </p>
      </div>
    </div>
  );
};

export default Post;
