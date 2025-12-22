import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const HeroSlider = () => {
  return (
    <div className="w-full h-[350px] md:h-[500px] rounded-xl overflow-hidden mt-6">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500 }}
        loop={true}
        className="w-full h-full">
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="w-full h-full relative">
            <img
              src="https://images.pexels.com/photos/28945723/pexels-photo-28945723.jpeg?_gl=1*xxeewk*_ga*MjEzMTk0NjM4LjE3NjYyOTI4NTU.*_ga_8JE65Q40S6*czE3NjY0NDYxNTckbzQkZzEkdDE3NjY0NDYxNjgkajQ5JGwwJGgw"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h1 className="text-white text-3xl md:text-5xl font-bold">
                Keep Your Pets Warm This Winter ❄️🐶
              </h1>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="w-full h-full relative">
            <img
              src="https://images.pexels.com/photos/1116942/pexels-photo-1116942.jpeg?_gl=1*1w0kq1z*_ga*MjEzMTk0NjM4LjE3NjYyOTI4NTU.*_ga_8JE65Q40S6*czE3NjY0NDYxNTckbzQkZzEkdDE3NjY0NDYzNzUkajYwJGwwJGgw"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h1 className="text-white text-3xl md:text-5xl font-bold">
                Cozy Outfits for Every Pet 🐾🧣
              </h1>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="w-full h-full relative">
            <img
              src="https://images.pexels.com/photos/34746680/pexels-photo-34746680.jpeg"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h1 className="text-white text-3xl md:text-5xl font-bold">
                Safe, Warm & Healthy Pets ❤️❄️
              </h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
