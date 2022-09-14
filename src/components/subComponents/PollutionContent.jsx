import React from 'react'
import Pollution1 from '../../assets/pollution1.jpg'
import Pollution2 from '../../assets/pollution2.jpg'
import Pollution3 from '../../assets/pollution3.jpg'

function PollutionContent() {
  return (
    <div className='layout pt-24 mb-64'>

    {/* ========== CONTAINER FOR DAMPAK PERUBAHAN IKLIM ========== */}
    <div className='w-full h-full mt-36'>

      {/* ========== DAMPAK ========== */}
      <div className='layout p-8 rounded-[1rem] flex flex-col gap-y-6 text-center justify-center items-center lg:grid lg:grid-cols-2 lg:gap-8'>
        <div className='flex flex-col lg:hidden'>
          <div className='text-h3 font-normal'>Konsekuensi Utama</div>
          <div className='text-h1 font-bold'>Dampak polusi plastik bagi laut</div>
        </div>
        <div>
          <img className='w-full h-auto' src={Pollution1} />
        </div>
        <div className='text-justify text-normal flex flex-col gap-y-4'>
          <div className='text-h1 font-bold hidden lg:block text-left'>Menyebabkan kematian ikan</div>
          <div className='text-small'>
            Kita telah mendengar dan membaca artikel mengenai kasus kematian ikan paus sperma. Menurut para aktivis lingkungan dugaan kematiaan ikan karena telah menelan sampah plastik dalam jumlah banyak. Sampah plastik yang menumpuk dan tidak dapat tercerna mengganggu sistem kerja organ pencernaan. Paus pun tidak dapat mengolah makanannya menjadi sumber energi dan akhirnya ikan menjadi lemah dan mati. Dugaan itu bisa saja benar jika paus mati karena banyak menelan sampah plastik di laut. Plastik adalah bahan yang termasuk sangat sulit hancur atau terurai. Penyebab sulit terurainya plastik karena plastik terbuat dari bahan polimer. Bahan polimernya terdiri dari unsur hidrogen dan karbon yang membentuk ikatan rantai yang panjang.
          </div>
        </div>
      </div>
      {/* ========== END OF DAMPAK ========== */}

      {/* ========== DAMPAK ========== */}
      <div className='layout p-8 rounded-[1rem] flex flex-col gap-y-6 text-center justify-center items-center lg:grid lg:grid-cols-2 lg:gap-8'>
        <div className='flex flex-col lg:hidden'>
          <div className='text-h3 font-normal'>Konsekuensi Utama</div>
          <div className='text-h1 font-bold'>Dampak polusi plastik bagi laut </div>
        </div>
        <div className='text-justify text-normal flex flex-col gap-y-4'>
          <div className='text-h1 font-bold hidden lg:block text-left'>Terancamnya kesehatan karang dan biota laut sekitarnya</div>
          <div className='text-small'>
            Plastik dapat berubah bentuk menjadi ukuran yang lebih kecil, karena faktor fisika, kimia dan biologi. Plastik dengan ukuran kecil umumnya banyak dikenal sebagai mikroplastik yang memiliki ukuran kurang dari 5 mm. Mengecilnya ukuran plastik akan meningkatkan ancaman terhadap kehidupan biota laut dan manusia. Biota laut tidak dapat membedakan antara makanannya dengan plastik. Apalagi biota laut seperti terumbu karang dan filum Echinodermata di sekitarnya memiliki sifat makan dengan cara menyaring air dan substrat sekitarnya. Secara tidak sengaja biota laut akan menelan dan mengendapkan mikroplastik kedalam sistem pencernaannya. Mikroplastik yang menumpuk berpotensi mengganggu sistem pencernaan yang mengancam kesehatan. Karena tidak optimalnya dalam mengolah bahan organik untuk kelangsungan hidupnya.
          </div>
        </div>
        <div><img className='w-full h-auto' src={Pollution2} /></div>

      </div>
      {/* ========== END OF DAMPAK ========== */}

      {/* ========== DAMPAK ========== */}
      <div className='layout p-8 rounded-[1rem] flex flex-col gap-y-6 text-center justify-center items-center lg:grid lg:grid-cols-2 lg:gap-8'>
        <div className='flex flex-col lg:hidden'>
          <div className='text-h3 font-normal'>Konsekuensi Utama</div>
          <div className='text-h1 font-bold'>Dampak polusi plastik bagi laut </div>
        </div>
        <div><img className='w-full h-auto max-h-[400px]' src={Pollution3} /></div>
        <div className='text-justify text-normal flex flex-col gap-y-4'>
          <div className='text-h1 font-bold hidden lg:block text-left'>Berdampak negatif terhadap sektor pariwisata</div>
          <div className='text-small'>
            Awal tahun 2021 kita telah mendengar kasus pencemaran sampah plastik yang menumpuk di pantai Kuta Bali. Pantai Kuta Bali terlihat kehilangan keindahannya karena banyaknya sampah. Akibatnya kita menjadi tidak tertarik untuk mengunjunginya. Padahal Kuta Bali termasuk salah satu destinasi wisata favorit yang ada pada pulau Dewata. Selain itu wisata penyelaman pun ikut terancam. Semakin banyaknya sampah plastik tentunya akan menghilangkan keindahan terumbu karang laut. Serta penyelam pun akan terganggu dengan sampah – sampah yang melayang – layang pada perairan. Demikianlah beberapa dampak negatif sampah plastik yang sudah mulai mengancam kehidupan biota laut dan kita. Untuk mengurangi dampak negatifnya mari kita tingkatkan kesadaran dari diri sendiri. Sebab kita pun tidak menginginkan laut menjadi kotor tidak ada ikan dan tempat wisata yang indah.
          </div>
          </div>
        </div>
        {/* ========== END OF DAMPAK ========== */}

      </div>
      {/* ========== END OF CONTAINER FOR DAMPAK IKLIM ========== */}

    </div>
  // END OF CONTAINER MAIN CONTENT
  )
}

export default PollutionContent