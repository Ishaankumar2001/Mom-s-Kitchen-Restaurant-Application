import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {}

  render() {
    return (
      <div>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-4">Welcome to Mom's Kitchen</h1>
          <img
            src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141348.jpg?w=1480&t=st=1708185577~exp=1708186177~hmac=dc912fe7a93c2cd108623a09aac836dc0984d5b701275c4a1f55b45fe56d4d0a"
            alt="Mom's Kitchen"
            className="w-[1200px] h-[600px] m-auto"
          />

          <p className="text-lg mt-8">
            At Mom's Kitchen, we believe that food is not just about sustenance;
            it's about comfort, connection, and memories. Our story began with a
            simple idea: to create a dining experience that feels like coming
            home. With every dish we serve, we aim to evoke the warmth and love
            of a homemade meal prepared by mom.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold mb-4">Our Philosophy</h2>
          <p className="text-lg mb-8">
            Our philosophy is rooted in the tradition of homemade cooking. We
            believe in the power of fresh, wholesome ingredients, prepared with
            care and attention to detail. From our kitchen to your table, every
            bite is crafted with love and passion.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold mb-4">Our Cuisine</h2>
          <p className="text-lg mb-8">
            At Mom's Kitchen, we specialize in comfort foods with a modern
            twist. From hearty soups and sandwiches to indulgent desserts, our
            menu features a diverse selection of dishes inspired by classic
            family recipes. Whether you're craving a comforting bowl of chicken
            soup or a decadent slice of homemade pie, we have something to
            satisfy every palate.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold mb-4">Our Commitment</h2>
          <p className="text-lg mb-8">
            We are committed to providing our guests with an exceptional dining
            experience from start to finish. From the moment you walk through
            our doors, you'll be greeted with a warm smile and friendly service.
            Our goal is to make you feel like part of the family, whether you're
            joining us for a casual meal or a special celebration.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold mb-4">Join Us</h2>
          <p className="text-lg mb-8">
            We invite you to join us at Mom's Kitchen and experience the
            difference that homemade cooking and heartfelt hospitality can make.
            Whether you're dining in with family and friends or ordering takeout
            for a cozy night at home, we can't wait to serve you.
          </p>

          <p className="text-lg italic text-right">
            Thank you for choosing Mom's Kitchen. We look forward to welcoming
            you soon!
          </p>
        </div>
      </div>
    );
  }
}

export default About;
