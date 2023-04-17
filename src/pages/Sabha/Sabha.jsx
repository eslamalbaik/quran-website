import React from 'react'
import CardSabha from './CardSabha/CardSabha'
import sabha from "../../assets/images/soha.png"
import sabha2 from "../../assets/images/soha2.png"

import "./Styles.css"
const Sabha = () => {

  const sabhadata=[
    {
      id:1,
      image:sabha,
      title:" لا إله إلا الله وحده لا شريك له ، له الملك وله الحمد وهو على كل شيء قدير .",
      descr:"قال رسول الله صلى الله عليه وسلم : خير الدعاء دعاء يوم عرفه ، وخير ما قلت أنا والنبيون من قبلي :   لا إله إلا الله وحده لا شريك له ، له الملك وله الحمد وهو على كل شيء قدير ."
    },
    {
      id:2,
      image:sabha2,
      title:"اللهمَّ إنك عفوٌّ تُحبُّ العفوَ فاعفُ عنِّي",
      descr:"قلتُ : يا رسولَ اللهِ أرأيتَ إن علمتُ أيَّ ليلةِ القدرِ ما أقولُ فيها ؟ قال : قولي : اللهمَّ إنك عفوٌّ تُحبُّ العفوَ فاعفُ عنِّي"
    },
    {
      id:3,
      image:sabha,
      title:" سبحان الله وبحمده عدد خلقه ورضا نفسه وزنة عرشه ومداد كلماته",
      descr:"قال ﷺ:   ” لقد قلت بعدك أربع كلمات ثلاث مرات لو وزنت بما قلت منذ اليوم لوزنته سبحان الله وبحمده عدد خلقه ورضا نفسه وزنة عرشه ومداد كلماته"
    },
    {
      id:4,
      image:sabha2,
      title:"اللهم صل وسلم على نبينا محمد      ",
      descr:"قال ﷺ:“من صلى عليَّ صلاة صلى الله عليه بها عشراً ” مسلم 384"
    },
    {
      id:4,
      image:sabha,
      title:"أستغفر الله الذى لا إله إلا هو الحى القيوم وأتوب إليه",
      descr:""
    },
    {
      id:5,
      image:sabha2,
      title:"اللَّهُمَّ إنِّي ظَلَمْتُ نَفْسِي ظُلْمًا كَثِيرًا، ولَا يَغْفِرُ الذُّنُوبَ إلَّا أنْتَ، فَاغْفِرْ لي مَغْفِرَةً مِن عِندِكَ، وارْحَمْنِي، إنَّكَ أنْتَ الغَفُورُ الرَّحِيمُ    ",
      descr:""
    },
    {
      id:5,
      image:sabha2,
      title:"سبحان الله العظيم وبحمده   ",
      descr:"نخلة في الجنة قال ﷺ:“من قال سبحان الله العظيم وبحمده غرست له نخلة في الجنة” –"
     
    },
  ]
  return (
<>
<div className='top' style={{}}>
    <div className='main'>
    <h3>الأذكار</h3>
    <h1>أذكار المسلم</h1>
    </div>
    <div className='between'>
      {sabhadata.map((item,i)=>(
    <CardSabha key={i} sabha={item.image} title={item.title} descr={item.descr}/>
      ))}
    </div>
</div>
</>
  )
}

export default Sabha