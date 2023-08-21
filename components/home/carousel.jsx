import { View, Text } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";
const Carousel = () => {
  const slides = [
    "https://media.istockphoto.com/id/1357529222/photo/3d-rendering-of-a-dining-area-in-modern-kitchen.jpg?s=612x612&w=0&k=20&c=TkxsGMij1SYk3EJjFnPEmsn7zlRZuAjc-EhrnfmkB9I=",
    "https://media.istockphoto.com/id/1363661385/photo/boho-style-living-room-with-wicker-chair-sofa-table-and-pampas-in-the-pot-on-white-wall.webp?b=1&s=170667a&w=0&k=20&c=_h2flP8DNssyJ69w-9Lg-OiB0dHONWVMBMuTDD36dQE=",
    "https://media.istockphoto.com/id/1350859272/photo/luxury-furniture-goods.webp?b=1&s=170667a&w=0&k=20&c=608apow7e_EtKc-N899ru7BiYxrOt_8ar1_Ydh01sn4=",
  ];
  return (
    <View>
      <View>
        <SliderBox
          images={slides}
          dotColor='#2A4D50'
          inactiveDotColor='#ddf0ff'
          autoplay
          circleLoopr
          ImageComponentStyle={{
            borderRadius: 15,
            width: "95%",
            marginTop: 15,
          }}
        />
      </View>
    </View>
  );
};

export default Carousel;
