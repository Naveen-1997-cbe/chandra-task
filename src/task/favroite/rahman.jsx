import React from 'react'
import Card from "../component/card";
import rahman from "../photos/rahman.jpg";
export default function Rahman() {
    return (
        <div>
            <Card
                name={"AR Rahman"}
                image={rahman}
                field={'Music Director'}
                achievements={'Bharath Ratna'}
                born={'6th January 1967'}
                content1={`A two-time winner and five-times nominee of the Academy Award (Oscar), A. R. Rahman is popularly known as the man who has redefined contemporary Indian music. Rahman, according to a BBC estimate, has sold more than 150 million copies of his work comprising of music from more than 100 film soundtracks and albums across over half a dozen languages, including landmark scores such as 'Roja', 'Bombay', Dil Se', 'Taal', 'Lagaan', 'Vandemataram', 'Jodhaa Akbar', 'Slumdog Millionaire', '127 Hours' and countless more. `}
                content2={`In 1997, to commemorate 50 years of Indian Independence, Sony Music signed up Rahman as its first artiste in South Asia. The result was Vande Mataram, an album that instantly made Indians relate to it and succeeded in rekindling the spirit of patriotism. In 2001, Andrew Lloyd Webber, the well known composer of musicals like Phantom of the Opera &Jesus Christ Superstar invited Rahman to compose for his musical, Bombay Dreams, the first time he would produce a musical he did not compose for. Bombay Dreams opened to packed houses at London's West End and had an unprecedented run for 2 years and later premiered at New York. In 2005, Rahman composed the score for the stage production of 'The Lord of the Rings', one of the most expensive productions mounted on stage.

                Rahman's music led him to be noticed internationally with several of his tracks featuring in movies such as 'The Lord of War', 'Inside Man' and 'The Accidental Husband'. His composition, Bombay Theme holds the distinction of being featured in over 50 international compilations. He also scored the music for the Hollywood productions, 'Elizabeth - The Golden Age', 'Slumdog Millionaire', 'Couples Retreat', '127 Hours', People Like Us, the Chinese movie, 'Warriors of Heaven & Earth' and more recently 'The 100 Foot Journey', 'Million Dollar Arm' & 'Pele'.`}
            />
        </div>
    )
}
