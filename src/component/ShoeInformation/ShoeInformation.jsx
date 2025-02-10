const ShoeInformation = () => {
  return (
    <div>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            See how your shoes are made
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-12">
            Urna, felis enim orci accumsan urna blandit egestas mattis egestas
            feugiat viverra ornare donec adipiscing semper aliquet integer risus
            leo volutpat nulla enim ultrices.
          </p>

          <div className="relative flex items-center justify-center">
            <img
              src="/path-to-shoe-image.jpg"
              alt="Shoe Design"
              className="w-2/3 mx-auto"
            />
            <div className="absolute top-10 left-12 flex items-center space-x-2">
              <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                1
              </span>
            </div>
            <div className="absolute bottom-16 left-10 flex items-center space-x-2">
              <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                2
              </span>
            </div>
            <div className="absolute top-10 right-12 flex items-center space-x-2">
              <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                3
              </span>
            </div>
            <div className="absolute bottom-10 right-10 flex items-center space-x-2">
              <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                4
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="text-left">
              <h3 className="text-orange-500 font-bold mb-1">01.</h3>
              <h4 className="text-lg font-bold text-gray-800">Pet canvas</h4>
              <p className="text-gray-500">
                Morbi eget bibendum sit adipiscing morbi ac nisl vitae maecenas
                nulla cursus.
              </p>
            </div>
            <div className="text-left">
              <h3 className="text-orange-500 font-bold mb-1">02.</h3>
              <h4 className="text-lg font-bold text-gray-800">
                Algae foam + vegan glue
              </h4>
              <p className="text-gray-500">
                Enim tincidunt donec vulputate magna pharetra mattis in.
              </p>
            </div>
            <div className="text-left">
              <h3 className="text-orange-500 font-bold mb-1">03.</h3>
              <h4 className="text-lg font-bold text-gray-800">
                Organic cotton
              </h4>
              <p className="text-gray-500">
                A vel ipsum, sed dignissim elementum ultrices amet.
              </p>
            </div>
            <div className="text-left">
              <h3 className="text-orange-500 font-bold mb-1">04.</h3>
              <h4 className="text-lg font-bold text-gray-800">
                Upcycled plastic bottles
              </h4>
              <p className="text-gray-500">
                Pellentesque viverra amet netus facilisis amet felis odio tortor
                orci cursus est.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShoeInformation;
