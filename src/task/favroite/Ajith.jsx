import React from 'react'
import Card from "../component/card";
import ajith from "../photos/ajith.jpg";
export default function Ajith() {
    return (
        <div>
            <Card
                name={"Ajith Kumar"}
                image={ajith}
                field={'Actor'}
                achievements={'Pathma Vibushan'}
                born={'1st May 1971'}
                content1={`Ajith Kumar is an Indian film actor who has worked mainly in Tamil cinema. He is one of the leading actors in Tamil Cinema. He began his career as a supporting actor in a Telugu film before gaining critical recognition in the Tamil thriller Aasai (1995). A succession of high-grossing films followed where Ajith was usually depicted as a romantic hero, with Kadhal Kottai (1996) and Kadhal Mannan (1998) being the most notable. He later forayed into method acting, as seen in Vaali (1999), Mugavaree (2000), Kandukondain Kandukondain (2000) and Citizen (2001) before establishing himself as an action hero with popular films including Amarkalam (1999), Dheena (2001), Villain (2002), Varalaru (2006) and Billa (2007). He has won three Filmfare Best Actor Awards in Tamil, all for films which showcased him in multiple roles. Ajith performs predominantly in leading roles in major studio films, genres ranging from romantic comedies and drama to action thrillers. `}
                content2={`After his surgery for a broken vertebra he lost feeling in his legs, but he took on a vow to recover and walked all the way from his home in Madras to the Balaji shrine in Tirupathi, in Andhra Pradesh.
                In "Armarkalam", he was paired with fellow actress Shalini for the first time. The film was a super-hit, and Ajith instantly fell for his leading lady, who was to later become his wife. He even remembers the date and time he first met her: March 17, 1999 at 10.30am.
                Active in spreading awareness of the Green Revolution, an effort to clean up the Chennai environment and encouraging people to plant saplings.
                The actor, who works mainly in the Tamil film industry, is the middle son of three born to a Sindhi speaking mother from Kolkatta and Palakkad Iyer(Kerala Tamil speaking Hindu Brahmin from Pallakkad) father.`}
            />
        </div>
    )
}
