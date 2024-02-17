const Contact = () => {
  return (
    <div>
      <div className="container mx-auto py-8">
        <h1 class="text-3xl font-bold mb-4">Get in Touch with Mom's Kitchen</h1>
        <p class="mb-8">
          Thank you for your interest in Mom's Kitchen! Whether you have a
          question, feedback, or simply want to say hello, we'd love to hear
          from you. Feel free to reach out to us through any of the channels
          below:
        </p>

        <div className="mb-8">
          <h2 class="text-xl font-semibold mb-2">Address:</h2>
          <p>
            Mom's Kitchen Pvt. Ltd.<br></br>
            Royal Building<br></br>
            Sector-8 'A'<br></br>
            New Delhi <br></br>
            Pincode: 123456
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Phone:</h2>
          <p>Phone no: +91 1234567890</p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Email:</h2>
          <p>
            General Inquiries:{" "}
            <a href="mailto:info@momskitchen.com">info@momskitchen.com</a>
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Social Media:</h2>
          <p>
            Connect with us on social media for updates, promotions, and
            mouthwatering foodie content:
          </p>
          <ul className="list-disc list-inside">
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Feedback:</h2>
          <p>
            Your feedback helps us serve you better! Whether it's a suggestion,
            compliment, or concern, please share it with us. We value your input
            and are committed to providing an exceptional dining experience.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Catering & Events:</h2>
          <p>
            Planning a special event? Mom's Kitchen offers catering services to
            make your occasion memorable. Reach out to us for inquiries, menu
            options, and customizations tailored to your event's needs.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            Employment Opportunities:
          </h2>
          <p>
            Join our team and be a part of the Mom's Kitchen family! We're
            always looking for passionate individuals who share our love for
            food and hospitality. Visit our{" "}
            <a href="/careers" class="text-blue-500">
              Careers
            </a>{" "}
            page for current job openings and application details.
          </p>
        </div>

        <p className="text-lg mt-20">
          At Mom's Kitchen, we're dedicated to creating delicious meals and
          unforgettable moments for our guests. Contact us today, and let's make
          memories together!
        </p>
      </div>
    </div>
  );
};

export default Contact;
