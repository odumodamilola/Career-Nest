const Features = () => {
    return (
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8">Our Features</h2>
        <div className="flex justify-center gap-8">
          <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Personalized Mentorship</h3>
            <p>Receive guidance from experts in your field of interest.</p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Career Resources</h3>
            <p>Access materials to help you succeed in your career journey.</p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Track Progress</h3>
            <p>Monitor your growth and achievements along the way.</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Features;
  