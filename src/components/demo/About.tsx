import { dua } from "@/assets";

export function About() {
  return (
    <section id="about" className="py-12 font-primary">
      <h2 className="text-4xl font-bold text-center mb-2">Kisah Kami</h2>
      <div className="flex justify-center mb-8">
        {/* You can add your decorative element here if needed */}
      </div>
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="flex flex-col items-center">
          <div className="relative w-64 h-64">
            <div className="w-full h-full rounded-full overflow-hidden">
              <img
                src={dua}
                alt="Lintang dan Rifqi"
                className="w-full h-full object-cover"
              />
            </div>
            <svg
              className="absolute top-0 left-0 w-full h-full"
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="49"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>
          </div>
        </div>
        <div className="text-center font-tertiary">
          <p className="mb-4">
            Kisah kami dimulai sejak masa SMP pada tahun 2016, saat sering
            bertemu di kantin sekolah dan menjalin persahabatan yang erat pada
            Agustus 2016. Meski sempat berpisah pada tahun 2020, takdir
            mempertemukan kami kembali hingga bertunangan pada Mei 2022, dan
            akhirnya melangkah ke jenjang pernikahan.
          </p>
        </div>
      </div>
    </section>
  );
}
