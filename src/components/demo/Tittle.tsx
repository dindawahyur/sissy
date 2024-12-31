export function Tittle() {
  return (
    <section id="title" className="py-12 font-primary">
      <h2 className="text-4xl font-bold text-center mb-2">Our Story</h2>
      <div className="flex justify-center mb-8">
        {/* You can add your decorative element here if needed */}
      </div>
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="p-4">
          <div className="flex justify-center">
            <img
              src="assets/img/bunga.png"
              alt="Bunga dekorasi"
              className="my-3"
            />
          </div>
          <h2 className="text-2xl font-unik py-3 mb-0">Menuju Hari Bahagia</h2>
          <div id="countdown" data-aos="fade-up">
            <ul className="flex justify-between text-center px-0">
              <li className="flex-1 mr-1">
                <span id="days"></span>Hari
              </li>
              <li className="flex-1 mr-1">
                <span id="hours"></span>Jam
              </li>
              <li className="flex-1 mr-1">
                <span id="minutes"></span>Menit
              </li>
              <li className="flex-1">
                <span id="seconds"></span>Detik
              </li>
            </ul>
          </div>
          <p className="text-center" data-aos="fade-up">
            “Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan
            untukmu pasangan-pasangan dari jenismu sendiri, supaya kamu
            cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya
            diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian
            itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir.”
            <br />
            <br />
            (QR Ar-Rum : 21)
          </p>
        </div>
      </div>
    </section>
  );
}
